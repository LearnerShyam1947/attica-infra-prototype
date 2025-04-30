import React from 'react';
import { Card, CardBody, CardFooter } from '../../ui/Card';
import { Builder } from '../../../types';
import { Edit, Trash2, MapPin, Phone, Award } from 'lucide-react';
import Button from '../../ui/Button';

interface BuilderCardProps {
  builder: Builder;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const BuilderCard: React.FC<BuilderCardProps> = ({ builder, onEdit, onDelete }) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={builder.image || 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          alt={builder.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardBody className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{builder.name}</h3>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{builder.area}, {builder.city}</span>
        </div>

        <div className="flex items-center text-amber-600 mb-3">
          <Award size={16} className="mr-1" />
          <span className="text-sm">{builder.experience} years experience</span>
        </div>

        <div className="mb-3">
          <p className="text-sm text-gray-600 line-clamp-2">{builder.description}</p>
        </div>

        <div className="flex items-center text-gray-600">
          <Phone size={16} className="mr-1" />
          <span className="text-sm">{builder.phone}</span>
        </div>
      </CardBody>

      <CardFooter className="flex justify-between items-center">
        <Button
          variant="outline"
          icon={Edit}
          size="sm"
          onClick={() => onEdit(builder.id)}
        >
          Edit
        </Button>

        <Button
          variant="danger"
          icon={Trash2}
          size="sm"
          onClick={() => onDelete(builder.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BuilderCard;