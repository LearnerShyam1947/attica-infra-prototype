import { Building2, Home, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SellBuy = () => {
  const navigate = useNavigate();

  const propertyTypes = [
    {
      type: 'house',
      title: 'House',
      icon: <Home className="w-16 h-16 text-blue-600" />,
      description: 'Find your dream house or sell your property'
    },
    {
      type: 'plot',
      title: 'Plots/Sites',
      icon: <MapPin className="w-16 h-16 text-blue-600" />,
      description: 'Explore available plots or list your land'
    },
    {
      type: 'apartment',
      title: 'Apartment Flats',
      icon: <Building2 className="w-16 h-16 text-blue-600" />,
      description: 'Discover apartments or sell your flat'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Property Marketplace</h1>
          <p className="mt-4 text-xl text-gray-600">Buy or Sell Your Property</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {propertyTypes.map((property) => (
            <div
              key={property.type}
              onClick={() => navigate(`/property/${property.type}`)}
              className="bg-white rounded-xl shadow-lg p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-blue-50 p-6 rounded-full">
                  {property.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
                <p className="text-gray-600">{property.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Explore {property.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellBuy;