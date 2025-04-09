import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Home, Info, Phone, Wrench, UserCircle } from 'lucide-react';
import Logo from './Logo';

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cityDropdown, setCityDropdown] = useState(false);
  const [authDropdown, setAuthDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <span className="text-2xl font-bold text-blue-600">AtticaInfra</span> */}
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="flex items-center text-gray-700 hover:text-blue-600">
                <Home className="w-4 h-4 mr-1" />
                Home
              </a>
              <a href="#about" className="flex items-center text-gray-700 hover:text-blue-600">
                <Info className="w-4 h-4 mr-1" />
                About Us
              </a>
              <a href="#services" className="flex items-center text-gray-700 hover:text-blue-600">
                <Wrench className="w-4 h-4 mr-1" />
                Services
              </a>
              <div className="relative">
                <button
                  onClick={() => setCityDropdown(!cityDropdown)}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  Locations
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {cityDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    {cities.map((city) => (
                      <a
                        key={city}
                        href={`#${city.toLowerCase()}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                      >
                        {city}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#contact" className="flex items-center text-gray-700 hover:text-blue-600">
                <Phone className="w-4 h-4 mr-1" />
                Contact
              </a>
              
              {/* Auth Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setAuthDropdown(!authDropdown)}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <UserCircle className="w-5 h-5 mr-1" />
                  Account
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {authDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <a
                      href="#login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      Login
                    </a>
                    <a
                      href="#register"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                    >
                      Register
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About Us</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
            <div className="relative">
              <button
                onClick={() => setCityDropdown(!cityDropdown)}
                className="flex items-center w-full px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Locations
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {cityDropdown && (
                <div className="pl-6">
                  {cities.map((city) => (
                    <a
                      key={city}
                      href={`#${city.toLowerCase()}`}
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600"
                    >
                      {city}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            <a href="#login" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Login</a>
            <a href="#register" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Register</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;