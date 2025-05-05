import { MapPin, Phone, Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Builder {
  id: string;
  name: string;
  image: string;
  description: string;
  experience: string;
  phone: string;
  city: string;
  area: string;
  pincode: string;
}

const builders: Builder[] = [
  {
    id: '1',
    name: 'Raj Construction Co.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80',
    description: 'Specializing in luxury residential projects with over 15 years of experience',
    experience: '15+ years',
    phone: '+91 98765 43210',
    city: 'Gurugram',
    area: 'Sector 15',
    pincode: '122001'
  },
  {
    id: '2',
    name: 'Kumar Builders',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80',
    description: 'Expert in commercial and residential construction with focus on sustainable building practices',
    experience: '20+ years',
    phone: '+91 98765 43211',
    city: 'Gurugram',
    area: 'Sector 45',
    pincode: '122003'
  },
  {
    id: '3',
    name: 'Singh Infrastructure',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    description: 'Specialized in modern architectural designs and premium finishing',
    experience: '12+ years',
    phone: '+91 98765 43212',
    city: 'Noida',
    area: 'Sector 62',
    pincode: '201301'
  },
  {
    id: '4',
    name: 'Patel Developers',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    description: 'Leading residential property developer with focus on quality construction',
    experience: '18+ years',
    phone: '+91 98765 43213',
    city: 'Delhi',
    area: 'Dwarka',
    pincode: '110075'
  }
];

const BuilderList = () => {
  const navigate = useNavigate();
  const [selectedBuilders, setSelectedBuilders] = useState<string[]>([]);
  const [searchCity, setSearchCity] = useState('');
  const [searchArea, setSearchArea] = useState('');
  const [searchPincode, setSearchPincode] = useState('');

  const handleBuilderSelect = (builderId: string) => {
    setSelectedBuilders(prev =>
      prev.includes(builderId)
        ? prev.filter(id => id !== builderId)
        : [...prev, builderId]
    );
  };

  const handleContinue = () => {
    navigate('/construction-form', { state: { selectedBuilders } });
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleGetQuote = (builderId: string) => {
    setSelectedBuilders([builderId]);
    navigate('/construction-form', { state: { selectedBuilders: [builderId] } });
  };

  const filteredBuilders = builders.filter(builder => {
    const cityMatch = builder.city.toLowerCase().includes(searchCity.toLowerCase());
    const areaMatch = !searchArea || builder.area.toLowerCase().includes(searchArea.toLowerCase());
    const pincodeMatch = !searchPincode || builder.pincode.includes(searchPincode);
    return cityMatch && areaMatch && pincodeMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Select Builders</h2>

        {/* Search Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City*
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter city"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                required
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Area
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter area"
              value={searchArea}
              onChange={(e) => setSearchArea(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pincode*
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter pincode"
              value={searchPincode}
              onChange={(e) => setSearchPincode(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      {/* Builders List */}
      <div className="space-y-6">
        {filteredBuilders.map(builder => (
          <div
            key={builder.id}
            className={`bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 cursor-pointer transition-all duration-200 ${selectedBuilders.includes(builder.id) ? 'ring-2 ring-blue-500' : ''
              }`}
            onClick={() => handleBuilderSelect(builder.id)}
          >
            {/* Builder Image */}
            <div className="w-full sm:w-48 h-48 flex-shrink-0">
              <img
                src={builder.image}
                alt={builder.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Builder Details */}
            <div className="flex-grow flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{builder.name}</h3>
                  <p className="text-gray-600 mt-1">{builder.description}</p>
                  <p className="text-blue-600 font-medium mt-2">Experience: {builder.experience}</p>
                </div>
                <div className="flex items-center text-gray-600 mt-2 sm:mt-0">
                  <MapPin className="w-5 h-5 mr-1" />
                  <span>{builder.city}, {builder.area}</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <p>
                  <span className="font-medium">Contact: </span>
                  {builder.phone}
                </p>
                <p>
                  <span className="font-medium">Pincode: </span>
                  {builder.pincode}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap justify-end items-center gap-3 mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCall(builder.phone);
                  }}
                  className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Builder
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGetQuote(builder.id);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Get Quote
                </button>
              </div>
            </div>

            {/* Checkmark Indicator */}
            <div className="flex items-start sm:items-center mt-4 sm:mt-0">
              <div className={`w-6 h-6 border-2 rounded ${selectedBuilders.includes(builder.id)
                  ? 'border-blue-500 bg-blue-500'
                  : 'border-gray-300'
                }`}>
                {selectedBuilders.includes(builder.id) && (
                  <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>


      {selectedBuilders.length > 0 && (
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleContinue}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Continue with Selected Builders ({selectedBuilders.length})
          </button>
        </div>
      )}
    </div>
  );
};

export default BuilderList;