import React from 'react';
import { Builder } from '../../types';
import BuilderList from './../../components/dashbord/builders/BuilderList';
import Button from '../../components/ui/Button';
import { Plus } from 'lucide-react';

interface BuildersPageProps {
  builders: Builder[];
  builderSearch: {
    city: string;
    area: string;
    pincode: string;
  };
  setBuilderSearch: (search: { city: string; area: string; pincode: string }) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onAddNew: () => void;
}

const BuildersPage: React.FC<BuildersPageProps> = ({
  builders,
  builderSearch,
  setBuilderSearch,
  onEdit,
  onDelete,
  onAddNew,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-6 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Builders</h1>
          <Button
            variant="primary"
            icon={Plus}
            onClick={onAddNew}
          >
            Add Builder
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search by city..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={builderSearch.city}
            onChange={(e) => setBuilderSearch({ ...builderSearch, city: e.target.value })}
          />
          
          <input
            type="text"
            placeholder="Search by area..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={builderSearch.area}
            onChange={(e) => setBuilderSearch({ ...builderSearch, area: e.target.value })}
          />
          
          <input
            type="text"
            placeholder="Search by pincode..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={builderSearch.pincode}
            onChange={(e) => setBuilderSearch({ ...builderSearch, pincode: e.target.value })}
          />
        </div>
      </div>
      
      <BuilderList
        builders={builders}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default BuildersPage;