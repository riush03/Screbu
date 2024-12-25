import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Sailboat, Mountain, Building2, Car, Trees } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/30 via-purple-900/30 to-gray-900/80" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-20">
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h2 className="text-lg text-pink-400 mb-4">Your dream vacation awaits!</h2>
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Discover Amazing Adventures
          </h1>
        </div>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-20">
          <Input
            type="text"
            placeholder="Search Location"
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
          <Input
            type="date"
            className="bg-white/10 border-white/20 text-white"
          />
          <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8">
            Search
          </Button>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {[
            { icon: <Sailboat size={24} />, label: "Sea & Sailing" },
            { icon: <Mountain size={24} />, label: "Trekking Tours" },
            { icon: <Building2 size={24} />, label: "City Tours" },
            { icon: <Car size={24} />, label: "Motor Sports" },
            { icon: <Trees size={24} />, label: "Jungle Safari" }
          ].map((category, index) => (
            <div key={index} className="flex flex-col items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
              <div className="p-4 rounded-full bg-pink-500/20">
                {category.icon}
              </div>
              <span className="text-sm font-medium">{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;