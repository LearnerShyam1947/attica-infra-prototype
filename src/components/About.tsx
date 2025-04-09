import React from 'react';
import { Building, Users, Trophy, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About AtticaInfra</h2>
          <p className="mt-4 text-xl text-gray-600">Building Excellence Since 2000</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
              alt="Construction site"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Your Trusted Construction Partner</h3>
            <p className="text-gray-600">
              With over two decades of experience in the construction industry, AtticaInfra has established itself as a leader in delivering exceptional construction services. Our commitment to quality, innovation, and customer satisfaction has earned us the trust of countless clients across the nation.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center space-x-3">
                <Building className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="font-semibold">500+</h4>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="font-semibold">200+</h4>
                  <p className="text-sm text-gray-600">Expert Team</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Trophy className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="font-semibold">50+</h4>
                  <p className="text-sm text-gray-600">Awards Won</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="font-semibold">25+</h4>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;