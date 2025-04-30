import React from 'react';
import { useFormik } from 'formik';
import { Property, PropertyTypeOptions } from '../../../types';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import TextArea from '../../ui/TextArea';
import TagInput from '../../ui/TagInput';
import Button from '../../ui/Button';
import { Save, X } from 'lucide-react';
import { propertySchema } from '../../../schema/PropertySchema';

interface PropertyFormProps {
  property?: Property;
}


const PropertyForm: React.FC<PropertyFormProps> = ({ property }) => {
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
      image: property?.image || '',
      description: property?.description || '',
    },
    validationSchema: propertySchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const normalizeError = (field: string) => {
    const error = formik.errors[field as keyof typeof formik.errors];
    const touched = formik.touched[field as keyof typeof formik.touched];
    return touched && typeof error === 'string' ? error : undefined;
  };
  const [uploadProgress, setUploadProgress] = React.useState<number | null>(null);


  // const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file) return;

  //   try {
  //     const formData = new FormData();
  //     formData.append('file', file);

  //     const response = await fetch('/api/upload', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     const data = await response.json();

  //     if (data.url) {
  //       formik.setFieldValue('image', data.url);
  //     } else {
  //       console.error('Upload failed: no URL returned.');
  //     }
  //   } catch (error) {
  //     console.error('File upload failed:', error);
  //   }
  // };

  // const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file) return;

  //   setUploadProgress(0);

  //   try {
  //     // Simulate progress over 1.5 seconds
  //     for (let i = 1; i <= 100; i++) {
  //       await new Promise((resolve) => setTimeout(resolve, 15)); // ~1500ms total
  //       setUploadProgress(i);
  //     }

  //     const mockUrl = `https://mock-storage.com/uploads/${encodeURIComponent(file.name)}`;
  //     formik.setFieldValue('image', mockUrl);
  //   } catch (error) {
  //     console.error('Mock file upload failed:', error);
  //   } finally {
  //     setTimeout(() => setUploadProgress(null), 500); // Reset progress
  //   }
  // };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append('file', file);
  
    setUploadProgress(0);
  
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://httpbin.org/post');
  
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percent = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(percent);
        }
      };
  
      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          console.log(response);
          
          // Simulate getting an uploaded URL back
          const mockUrl = `https://httpbin.org/image/${encodeURIComponent(file.name)}`;
          formik.setFieldValue('image', mockUrl);
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
    } catch (error) {
      console.error('Upload failed', error);
      setUploadProgress(null);
    }
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
            options={PropertyTypeOptions.map(option => ({
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

        <div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="City"
              id="location.city"
              value={formik.values.location.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter city"
              error={formik.touched.location?.city && formik.errors.location?.city}
            />

            <Input
              label="Area"
              id="location.area"
              value={formik.values.location.area}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter area"
              error={formik.touched.location?.area && formik.errors.location?.area}
            />
          </div>

          <Input
            label="Pincode"
            id="location.pincode"
            value={formik.values.location.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter pincode"
            error={formik.touched.location?.pincode && formik.errors.location?.pincode}
          />

          {/* Replaced image URL with file input */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              Property Image
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              style={{ height: "40px" }}
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
            {formik.values.image && (
              <div className="mt-2 text-sm text-gray-600">
                Uploaded image:{" "}
                <a
                  href={formik.values.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Image
                </a>
              </div>
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
        </div>
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Features
        </label>
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
        <Button
          type="button"
          variant="outline"
          icon={X}
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
