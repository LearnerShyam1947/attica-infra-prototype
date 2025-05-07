import React from 'react';
import { Card, CardBody, CardFooter } from '../../ui/Card';
import { Property } from '../../../types/Proerty';
import { Edit, Trash2, MapPin, Phone } from 'lucide-react';
import Button from '../../ui/Button';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.image || 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 right-0 m-2 bg-blue-800 text-white px-2 py-1 rounded text-xs uppercase font-bold">
          {property.type}
        </div>
      </div>
      
      <CardBody className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location.area}, {property.location.city}</span>
        </div>
        
        <p className="font-bold text-xl text-blue-800 mb-3">₹{property.price}</p>
        
        <div className="mb-3">
          <p className="text-sm text-gray-600 line-clamp-2">{property.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {property.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
              +{property.features.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center text-gray-600">
          <Phone size={16} className="mr-1" />
          <span className="text-sm">{property.phone}</span>
        </div>
      </CardBody>
      
      <CardFooter className="flex justify-between items-center">
        <Button 
          variant="outline"
          icon={Edit}
          size="sm"
          onClick={() => console.log(property.id)}
        >
          Edit
        </Button>
        
        <Button 
          variant="danger"
          icon={Trash2}
          size="sm"
          onClick={() => console.log(property.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;