import React from 'react';
import Navbar from '@/components/common/Navbar';
import Hero from '@/components/common/Hero';
import Features from '@/components/common/Features';
import Footer from '@/components/common/Footer';
interface FloralCornerProps {
  className: string;
}

const FloralCorner: React.FC<FloralCornerProps> = ({ className }) => (
  <div className={className}>
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <path 
        d="M0,0 C50,20 20,50 100,100 C180,150 150,180 200,200" 
        className="stroke-purple-500 animate-pulse"
        fill="none" 
        strokeWidth="2"
      />
      {[...Array(5)].map((_, i) => (
        <g key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
          <circle cx={40 + i * 30} cy={40 + i * 30} r="6" className="fill-pink-400" />
          <path
            d={`M${35 + i * 30},${40 + i * 30} Q${40 + i * 30},${30 + i * 30} ${45 + i * 30},${40 + i * 30}`}
            className="stroke-green-400"
            fill="none"
          />
        </g>
      ))}
    </svg>
  </div>
);

const Home: React.FC = () => {
  const floatingElements: Array<React.ReactNode> = [...Array(20)].map((_, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-float"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 5}s`
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Floral Corners */}
      <FloralCorner className="fixed top-0 left-0 w-48 h-48 transform rotate-0" />
      <FloralCorner className="fixed top-0 right-0 w-48 h-48 transform rotate-90" />
      <FloralCorner className="fixed bottom-0 left-0 w-48 h-48 transform -rotate-90" />
      <FloralCorner className="fixed bottom-0 right-0 w-48 h-48 transform rotate-180" />
      {/* Decorative Border */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 border-8 border-purple-500/20 m-8 rounded-3xl" />
      </div>
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Fixed Navbar */}
        <div className="sticky top-0 z-50 backdrop-blur-sm">
          <Navbar />
        </div>
        {/* Main Content */}
        <main className="flex-grow px-12 md:px-24 py-8">
          <div className="max-w-7xl mx-auto space-y-24">
            <div className="pt-16">
              <Hero />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-3xl" />
              <Features />
            </div>
          </div>
        </main>
        {/* Footer */}
        <div className="mt-auto backdrop-blur-sm">
          <Footer />
        </div>
      </div>
      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements}
      </div>
    </div>
  );
};

export default Home;