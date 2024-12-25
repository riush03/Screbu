"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Database, BarChart2, PlaneLanding, Building2, BookOpen, Sun, LogOut } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const navItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: BarChart2 },
    { path: "/admin/trips", label: "Trips", icon: PlaneLanding },
    { path: "/admin/hotels", label: "Hotels", icon: Building2 },
    { path: "/admin/bookings", label: "Bookings", icon: BookOpen },
    { path: "/admin/scrape-data", label: "Start Scraping", icon: BookOpen }
  ];

  return (
    <aside className="w-64 bg-[#0E1428] text-gray-400 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-rose-500 rounded-full" />
          <span className="text-white text-xl font-semibold">Screbu</span>
        </div>

        <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded-lg flex items-center gap-2 mb-8 hover:opacity-90">
          <Database size={20} />
          <span>Start Scraping</span>
        </button>

        <nav className="space-y-2">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              href={path}
              className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 ${
                pathname === path ? "text-white bg-white/10" : ""
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-4">
        <div className="flex items-center gap-3 p-3">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
            J
          </div>
          <div>
            <p className="text-white">John Doe</p>
            <p className="text-sm">john@example.com</p>
          </div>
        </div>

        <button className="flex items-center gap-3 p-3 w-full rounded-lg hover:bg-white/10">
          <Sun size={20} />
          <span>Light Mode</span>
        </button>

        <button className="flex items-center gap-3 p-3 w-full rounded-lg hover:bg-white/10 text-red-500">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;