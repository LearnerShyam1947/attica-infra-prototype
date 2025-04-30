import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="bg-blue-600 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="tel:+91-9876543210" className="flex items-center text-sm hover:text-blue-200">
              <Phone className="w-4 h-4 mr-1" />
              +91 98765 43210
            </a>
            <a href="mailto:info@atticainfra.com" className="flex items-center text-sm hover:text-blue-200">
              <Mail className="w-4 h-4 mr-1" />
              info@atticainfra.com
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;