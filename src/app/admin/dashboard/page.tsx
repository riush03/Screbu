"use client";
import { useEffect, useState } from "react";
import { Metrics } from "./components/metrics";
import { ScrapingChart } from "./components/scraping-chart";
import ScrapingQueue from "@/components/admin/scraping-queue/scraping-queue";
import { apiClient } from "@/lib";
import { ADMIN_API_ROUTES } from "@/utils/api-routes";
import Sidebar from "@/components/admin/sidebar/sidebar";


const DashboardPage = () => {
  const [metrics, setMetrics] = useState({
    users: 0,
    trips: 0,
    flights: 0,
    hotels: 0,
    bookings: 0,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await apiClient.get(ADMIN_API_ROUTES.DASHBOARD_METRICS);
        setMetrics(response.data);
      } catch (error) {
        console.error("Failed to fetch metrics:", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">Dashboard Content</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="bg-[#2A2F3E] p-4 rounded-xl">
            <h3 className="text-gray-400 text-sm mb-2 capitalize">{key}</h3>
            <p className="text-white text-2xl font-semibold">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="lg:col-span-4 bg-[#2A2F3E] p-4 rounded-xl">
          <h2 className="text-white mb-4">Scraping Activity</h2>
          <ScrapingChart />
        </div>
        <div className="lg:col-span-2 bg-[#2A2F3E] p-4 rounded-xl">
          <h2 className="text-white mb-4">Scraping Queue</h2>
          <ScrapingQueue />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;