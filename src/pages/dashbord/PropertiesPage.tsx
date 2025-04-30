import React from 'react';
import { Property } from '../../types';
import PropertyList from '../../components/dashbord/properties/PropertyList';
import { Search, Filter } from 'lucide-react';

interface PropertiesPageProps {
  properties: Property[];
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
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const PropertiesPage: React.FC<PropertiesPageProps> = ({
  properties,
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
  propertySearch,
  setPropertySearch,
  onEdit,
  onDelete,
}) => {
  return (
    <div>
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
              onChange={(e) => setPropertySearch({ ...propertySearch, city: e.target.value })}
            />
            
            <input
              type="text"
              placeholder="Search by area..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={propertySearch.area}
              onChange={(e) => setPropertySearch({ ...propertySearch, area: e.target.value })}
            />
            
            <input
              type="text"
              placeholder="Search by pincode..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={propertySearch.pincode}
              onChange={(e) => setPropertySearch({ ...propertySearch, pincode: e.target.value })}
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
      
      <PropertyList
        properties={properties}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default PropertiesPage;