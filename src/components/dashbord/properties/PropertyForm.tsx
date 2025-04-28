import React, { useState } from 'react';
import { Property, PropertyTypeOptions } from '../../../types';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import TextArea from '../../ui/TextArea';
import TagInput from '../../ui/TagInput';
import Button from '../../ui/Button';
import { Save, X } from 'lucide-react';

interface PropertyFormProps {
  property?: Property;
  onSubmit: (property: Omit<Property, 'id'>) => void;
  onCancel: () => void;
}

const PropertyForm: React.FC<PropertyFormProps> = ({
  property,
  onSubmit,
  onCancel,
}) => {
  const [title, setTitle] = useState(property?.title || '');
  const [type, setType] = useState(property?.type || '');
  const [price, setPrice] = useState(property?.price || '');
  const [city, setCity] = useState(property?.location?.city || '');
  const [area, setArea] = useState(property?.location?.area || '');
  const [pincode, setPincode] = useState(property?.location?.pincode || '');
  const [features, setFeatures] = useState(property?.features || []);
  const [image, setImage] = useState(property?.image || '');
  const [description, setDescription] = useState(property?.description || '');
  const [phone, setPhone] = useState(property?.phone || '');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) newErrors.title = 'Title is required';
    if (!type.trim()) newErrors.type = 'Property type is required';
    if (!price.trim()) newErrors.price = 'Price is required';
    if (!city.trim()) newErrors.city = 'City is required';
    if (!area.trim()) newErrors.area = 'Area is required';
    if (!pincode.trim()) newErrors.pincode = 'Pincode is required';
    if (features.length === 0) newErrors.features = 'At least one feature is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(phone.trim())) newErrors.phone = 'Phone number must be 10 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit({
        title,
        type,
        price,
        location: {
          city,
          area,
          pincode,
        },
        features,
        image,
        description,
        phone,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            label="Property Title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter property title"
            error={errors.title}
          />
          
          <Select
            label="Property Type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            options={PropertyTypeOptions.map(option => ({ value: option, label: option.charAt(0).toUpperCase() + option.slice(1) }))}
            error={errors.type}
          />
          
          <Input
            label="Price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            error={errors.price}
          />
          
          <Input
            label="Phone Number"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter 10-digit phone number"
            error={errors.phone}
          />
        </div>
        
        <div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="City"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city"
              error={errors.city}
            />
            
            <Input
              label="Area"
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Enter area"
              error={errors.area}
            />
          </div>
          
          <Input
            label="Pincode"
            id="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter pincode"
            error={errors.pincode}
          />
          
          <Input
            label="Image URL"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL (optional)"
          />
        </div>
      </div>
      
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Features
        </label>
        <TagInput
          tags={features}
          onChange={setFeatures}
          placeholder="Type feature and press Enter"
          error={errors.features}
        />
        <p className="text-xs text-gray-500 mt-1">Press Enter to add a new feature</p>
      </div>
      
      <TextArea
        label="Description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter property description"
        rows={4}
        error={errors.description}
      />
      
      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          icon={X}
          onClick={onCancel}
        >
          Cancel
        </Button>
        
        <Button
          type="submit"
          variant="primary"
          icon={Save}
        >
          {property ? 'Update Property' : 'Add Property'}
        </Button>
      </div>
    </form>
  );
};

export default PropertyForm;