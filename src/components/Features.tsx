import React from 'react';
import { DollarSign, Clock, Shield, HeartHandshake } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      title: "Multiple Options for Best Quotations",
      description: "Compare and choose from various competitive quotes all in one place, ensuring you get the best value for your investment."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Quality and Time Delivery",
      description: "We pride ourselves on delivering high-quality construction work within the agreed timeframe, every time."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Safe Money Transaction",
      description: "Secure and transparent payment processes to ensure your financial peace of mind throughout the project."
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-blue-600" />,
      title: "End to End Support",
      description: "Comprehensive support from project inception to completion, ensuring a smooth construction journey."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">Building trust through excellence and reliability</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;