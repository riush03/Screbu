import React from "react";
import Navbar from "@/components/admin/navbar/navbar";
import Sidebar from "@/components/admin/sidebar/sidebar";



export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#0E1428]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8 bg-[#ffff]">
        {children}
      </main>
    </div>
  );
}