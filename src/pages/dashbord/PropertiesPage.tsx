import React, { useEffect, useState } from 'react';
import { Property } from '../../types/Proerty';
import PropertyList from '../../components/dashbord/properties/PropertyList';
import { Search, Filter } from 'lucide-react';
import { fetchProperties } from '../../services/PropertyService';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

interface PropertiesPageProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterType: string;
  setFilterType: (type: string) => void;
  propertySearch: {
    city: string;
    area: string;
    pincode: string;
  };
  setPropertySearch: (search: { city: string; area: string; pincode: string }) => void;
}

const PropertiesPage: React.FC<PropertiesPageProps> = ({
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
  propertySearch,
  setPropertySearch
}) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterType ? property.type === filterType : true;

    const matchesCity = propertySearch.city
      ? property.location.city.toLowerCase().includes(propertySearch.city.toLowerCase())
      : true;

    const matchesArea = propertySearch.area
      ? property.location.area.toLowerCase().includes(propertySearch.area.toLowerCase())
      : true;

    const matchesPincode = propertySearch.pincode
      ? property.location.pincode.includes(propertySearch.pincode)
      : true;

    return matchesSearch && matchesFilter && matchesCity && matchesArea && matchesPincode;
  });

  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      const response = await fetchProperties();
      if (response.success) {
        setProperties(response.properties);
      }
      setLoading(false);
    };

    loadProperties();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner text='Fetching Properties details....' />
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Properties</h1>

            <div className="flex flex-col w-full md:w-auto gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search properties..."
                    className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>

                <input
                  type="text"
                  placeholder="Search by city..."
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={propertySearch.city}
                  onChange={(e) =>
                    setPropertySearch({ ...propertySearch, city: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Search by area..."
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={propertySearch.area}
                  onChange={(e) =>
                    setPropertySearch({ ...propertySearch, area: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Search by pincode..."
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={propertySearch.pincode}
                  onChange={(e) =>
                    setPropertySearch({ ...propertySearch, pincode: e.target.value })
                  }
                />
              </div>

              <div className="relative flex items-center">
                <select
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="">All Types</option>
                  <option value="house">House</option>
                  <option value="plot">Plot</option>
                  <option value="flat">Flat</option>
                </select>
                <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <PropertyList properties={filteredProperties} />
        </>
      )}
    </div>
  );
};

export default PropertiesPage;
