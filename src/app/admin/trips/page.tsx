"use client";
import { useEffect, useState, ReactNode } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Chip,
  Pagination,
} from "@nextui-org/react";
import { Search } from "lucide-react";
import { apiClient } from "@/lib";
import { USER_API_ROUTES } from "@/utils";
import { TripType } from "@/types/trip";

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "CITIES", uid: "destinationItinerary" },
  { name: "PRICE", uid: "price", sortable: true },
  { name: "SCRAPPED ON", uid: "scrapedOn", sortable: true },
];

export default function Trips() {
  const [trips, setTrips] = useState<TripType[]>([]);
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiClient.get(USER_API_ROUTES.GET_ALL_TRIPS);
      if (response.data.trips) setTrips(response.data.trips);
    };
    fetchData();
  }, []);

  const filteredItems = trips.filter((trip) =>
    trip.id.toLowerCase().includes(filterValue.toLowerCase())
  );

  const pages = Math.ceil(filteredItems.length / rowsPerPage);
  const items = filteredItems.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  const renderCell = (trip: TripType, columnKey: React.Key) => {
    const cellValue = trip[columnKey as keyof TripType];

    switch (columnKey) {
      case "destinationItinerary":
        if (Array.isArray(cellValue)) {
          const colors = ["primary", "secondary", "success", "warning", "danger"];
          return (
            <div className="flex gap-2">
              {(cellValue as { place: string }[]).slice(0, 4).map((value, idx) => (
                <Chip key={value.place} color={colors[idx % colors.length] as any}>
                  {value.place}
                </Chip>
              ))}
            </div>
          );
        }
        return null;
      case "scrapedOn":
        return new Date(cellValue as string).toLocaleString();
      case "price":
        return `₹${cellValue}`;
      default:
        return cellValue;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">Trips</h1>
        <div className="flex items-center gap-4">
          <Input
            className="w-64"
            placeholder="Search trips..."
            startContent={<Search className="text-gray-400" size={20} />}
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
          <select
            className="bg-[#2A2F3E] text-white px-3 py-2 rounded-lg"
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
          >
            <option value="10">10 rows</option>
            <option value="20">20 rows</option>
            <option value="30">30 rows</option>
          </select>
        </div>
      </div>

      <div className="bg-[#2A2F3E] rounded-xl p-4">
        <Table
          aria-label="Trips table"
          bottomContent={
            <div className="flex justify-between items-center px-2 py-2">
              <span className="text-gray-400">
                Showing {items.length} of {trips.length} trips
              </span>
              <Pagination
                isCompact
                showControls
                color="primary"
                page={page}
                total={pages}
                onChange={setPage}
              />
            </div>
          }
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                allowsSorting={column.sortable}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};