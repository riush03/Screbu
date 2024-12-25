import React from 'react';
import { BadgeCheck, Sparkles, LineChart, Clock, Globe2, Shield } from 'lucide-react';

const Features = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Powered by Advanced Technology</h2>
          <p className="text-gray-400">Real-time analysis and AI-driven recommendations for your perfect trip</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Sparkles className="text-pink-500" size={24} />,
              title: "AI-Powered Recommendations",
              description: "Smart algorithms analyze your preferences to suggest personalized travel experiences"
            },
            {
              icon: <LineChart className="text-pink-500" size={24} />,
              title: "Real-Time Price Analysis",
              description: "Continuous monitoring of prices across multiple booking platforms for the best deals"
            },
            {
              icon: <Clock className="text-pink-500" size={24} />,
              title: "Dynamic Pricing",
              description: "Get instant alerts when prices drop for your watched destinations"
            },
            {
              icon: <Globe2 className="text-pink-500" size={24} />,
              title: "Global Data Integration",
              description: "Aggregated data from hundreds of travel sites for comprehensive comparisons"
            },
            {
              icon: <BadgeCheck className="text-pink-500" size={24} />,
              title: "Verified Reviews",
              description: "AI-verified authentic reviews from real travelers"
            },
            {
              icon: <Shield className="text-pink-500" size={24} />,
              title: "Secure Booking",
              description: "End-to-end encrypted transactions with price match guarantee"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all"
            >
              <div className="p-3 bg-pink-500/10 rounded-lg w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;