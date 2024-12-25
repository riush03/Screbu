"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, Hotel, Plane, LogOut, Database, BarChart, Sun, Moon, Settings } from 'lucide-react';

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const router = useRouter();
  
  const user = {
    name: 'John Doe',
    email: 'john@example.com'
  };

  return (
    <div className={`flex min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed lg:relative lg:translate-x-0 z-50 w-72 h-screen transition-transform duration-300 ease-in-out ${isDark ? 'bg-gray-800' : 'bg-white'} border-r ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-500"/>
              <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Screbu</span>
            </div>
          </div>

          {/* Menu Section */}
          <nav className="flex-1 px-4 py-6">
            <div className="mb-8">
              <button onClick={() => router.push('/scrape')} 
                className="w-full flex items-center gap-3 px-4 py-3 text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg">
                <Database size={20} />
                <span>Start Scraping</span>
              </button>
            </div>

            <ul className="space-y-2">
              {[
                { icon: <BarChart size={20} />, label: 'Dashboard' },
                { icon: <Plane size={20} />, label: 'Tours' },
                { icon: <Hotel size={20} />, label: 'Hotels' }
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Profile & Settings Section */}
          <div className={`p-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{user.name}</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{user.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button onClick={() => setIsDark(!isDark)} 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg w-full ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>

              <button className={`flex items-center gap-2 px-3 py-2 rounded-lg text-red-500 hover:bg-red-50/10`}>
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className={`h-16 ${isDark ? 'bg-gray-800' : 'bg-white'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="h-full px-4 flex items-center justify-between">
            <button onClick={() => setIsOpen(true)} className="lg:hidden text-gray-400">
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-4">
              <button className={`p-2 rounded-lg ${isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}>
                <Settings size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-6">
            {/* Your scrollable content here */}
            <div className={`rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} p-6`}>
              <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Dashboard Content
              </h1>
              {/* Add your dashboard content here */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;