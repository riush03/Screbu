import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
              <span className="text-xl font-bold text-white">Screbu</span>
            </div>
            <p className="text-sm">Smart travel planning powered by AI. Find the best deals across the globe.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400">Popular Tours</a></li>
              <li><a href="#" className="hover:text-pink-400">Adventure Travel</a></li>
              <li><a href="#" className="hover:text-pink-400">City Breaks</a></li>
              <li><a href="#" className="hover:text-pink-400">Beach Holidays</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400">About Us</a></li>
              <li><a href="#" className="hover:text-pink-400">Careers</a></li>
              <li><a href="#" className="hover:text-pink-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-400">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <Facebook className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
            </div>
            <p className="text-sm">support@screbu.com</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} Screbu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;