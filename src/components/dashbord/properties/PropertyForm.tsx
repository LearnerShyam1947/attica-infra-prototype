import React from 'react';
import { useFormik } from 'formik';
import { Property, PropertyTypeOptions } from '../../../types/Proerty'; // fixed typo
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import TextArea from '../../ui/TextArea';
import TagInput from '../../ui/TagInput';
import Button from '../../ui/Button';
import { Plus, Save, Trash2, X } from 'lucide-react';
import { propertySchema } from '../../../schema/PropertySchema';
import { addProperty } from '../../../services/PropertyService';
interface PropertyFormProps {
  property?: Property;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ property }) => {
  const [uploadProgress, setUploadProgress] = React.useState<number | null>(null);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setUploadProgress(0);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://httpbin.org/post');

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setUploadProgress(percent);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);

        // Simulated image URL from response
        const updatedImages = [...formik.values.images];
        updatedImages[index] = 'https://via.placeholder.com/300';

        formik.setFieldValue('images', updatedImages);
      } else {
        console.error('Upload failed', xhr.responseText);
      }
      setTimeout(() => setUploadProgress(null), 500);
    };

    xhr.onerror = () => {
      console.error('Upload error');
      setUploadProgress(null);
    };

    xhr.send(formData);
  };

  const removeImage = (index: number) => {
    const newImages = [...formik.values.images];
    newImages.splice(index, 1);
    formik.setFieldValue('images', newImages.length ? newImages : ['']);
  };

  const formik = useFormik({
    initialValues: {
      title: property?.title || '',
      type: property?.type || '',
      price: property?.price || '',
      phone: property?.phone || '',
      location: {
        city: property?.location?.city || '',
        area: property?.location?.area || '',
        pincode: property?.location?.pincode || '',
      },
      features: property?.features || [],
      images: property?.images || [],
      description: property?.description || '',
    },
    validationSchema: propertySchema,
    onSubmit: async (values, { resetForm }) => {
      const result = await addProperty(values);
      console.log(result);
      resetForm();
    },
  });

  const normalizeError = (field: string) => {
    const keys = field.split('.');
    let error: any = formik.errors;
    let touched: any = formik.touched;

    for (const key of keys) {
      error = error?.[key];
      touched = touched?.[key];
    }

    return touched && typeof error === 'string' ? error : undefined;
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            label="Property Title"
            id="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter property title"
            error={normalizeError('title')}
          />

          <Select
            label="Property Type"
            id="type"
            value={formik.values.type}
            onChange={(e) => formik.setFieldValue('type', e.target.value)}
            onBlur={formik.handleBlur}
            options={PropertyTypeOptions.map((option) => ({
              value: option,
              label: option.charAt(0).toUpperCase() + option.slice(1),
            }))}
            error={normalizeError('type')}
          />

          <Input
            label="Price"
            id="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter price"
            error={normalizeError('price')}
          />


        </div>

        <div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="City"
              id="location.city"
              value={formik.values.location.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter city"
              error={normalizeError('location.city')}
            />

            <Input
              label="Area"
              id="location.area"
              value={formik.values.location.area}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter area"
              error={normalizeError('location.area')}
            />
          </div>

          <Input
            label="Pincode"
            id="location.pincode"
            value={formik.values.location.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter pincode"
            error={normalizeError('location.pincode')}
          />

                    <Input
            label="Phone Number"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter 10-digit phone number"
            error={normalizeError('phone')}
          />

        </div>

      </div>

        <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Property Images
            </label>

            {formik.values.images.map((img, index) => (
              <div key={index} className="mb-4 border p-3 rounded-md relative">
                <label
                  htmlFor={`image-${index}`}
                  className="flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
                >
                  <span className="text-gray-600 text-sm">
                    {formik.values.images[index]
                      ? 'Change Image'
                      : 'Click to upload or drag & drop'}
                  </span>
                  <input
                    id={`image-${index}`}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, index)}
                  />
                </label>

                {formik.values.images[index] && (
                  <div className="mt-2 text-sm text-gray-600">
                    <a
                      href={formik.values.images[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View Image
                    </a>
                  </div>
                )}

                {formik.values.images.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}

            {/* Add Image Button */}
            <button
              type="button"
              onClick={() => formik.setFieldValue('images', [...formik.values.images, ''])}
              className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
            >
              <Plus className="mr-1" size={16} /> Add another image
            </button>

            {normalizeError('images') && (
              <p className="text-red-500 text-sm mt-1">{normalizeError('images')}</p>
            )}

            {uploadProgress !== null && (
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-75"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}
          </div>
          
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Features</label>
        <TagInput
          tags={formik.values.features}
          onChange={(tags) => formik.setFieldValue('features', tags)}
          placeholder="Type feature and press Enter"
          error={normalizeError('features')}
        />
        <p className="text-xs text-gray-500 mt-1">Press Enter to add a new feature</p>
      </div>

      <TextArea
        label="Description"
        id="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter property description"
        rows={4}
        error={normalizeError('description')}
      />

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" icon={X}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" icon={Save} disabled={formik.isSubmitting}>
          {formik.isSubmitting
            ? property
              ? 'Updating...'
              : 'Submitting...'
            : property
              ? 'Update Property'
              : 'Add Property'}
        </Button>
      </div>
    </form>
  );
};

export default PropertyForm;