import { Form, Formik } from 'formik';
import { Plus, Save, Trash2, X } from 'lucide-react';
import React, { useState } from 'react';
import { BuilderSchema } from '../../../schema/BuilderSchema';
import { Builder } from '../../../types/Builder';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';
import { addbuilder } from '../../../services/BuildersService';

interface BuilderFormProps {
  builder?: Builder;
}

const BuilderForm: React.FC<BuilderFormProps> = ({ builder }) => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const initialValues = {
    name: builder?.name || '',
    images: builder?.images || [''], // changed from single image to array
    description: builder?.description || '',
    experience: builder?.experience || '',
    phone: builder?.phone || '',
    city: builder?.city || '',
    area: builder?.area || '',
    pincode: builder?.pincode || '',
  };


  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    setFieldValue: (field: string, value: any) => void,
    values: any
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
        const percent = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(percent);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        
        // Simulated URL
        const updatedImages = [...values.images];
        updatedImages[index] = 'https://via.placeholder.com/300'; // replace with actual image URL
        setFieldValue('images', updatedImages);
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

  const addImageField = (images: string[], setFieldValue: any) => {
    setFieldValue('images', [...images, '']);
  };

  const removeImageField = (index: number, images: string[], setFieldValue: any) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setFieldValue('images', newImages.length ? newImages : ['']);
  };


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BuilderSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        await addbuilder(values);
        setSubmitting(false);
      }}
    >
      {({
        errors,
        touched,
        handleChange,
        handleBlur,
        values,
        isSubmitting,
        setFieldValue,
      }) => (
        <Form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                label="Builder Name"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name ? errors.name : undefined}
                placeholder="Enter builder name"
              />

              <Input
                label="Experience (in years)"
                id="experience"
                name="experience"
                value={values.experience}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.experience ? errors.experience : undefined}
                placeholder="Enter years of experience"
              />

              <Input
                label="Phone Number"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone ? errors.phone : undefined}
                placeholder="Enter 10-digit phone number"
              />
            </div>

            <div>
              <Input
                label="City"
                id="city"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.city ? errors.city : undefined}
                placeholder="Enter city"
              />

              <Input
                label="Area"
                id="area"
                name="area"
                value={values.area}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.area ? errors.area : undefined}
                placeholder="Enter area"
              />

              <Input
                label="Pincode"
                id="pincode"
                name="pincode"
                value={values.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.pincode ? errors.pincode : undefined}
                placeholder="Enter 6-digit pincode"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Builder Images
            </label>

            {values.images.map((img: string, index: number) => (
              <div key={index} className="mb-4 border p-3 rounded-md relative">
                <label
                  htmlFor={`image-${index}`}
                  className="flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
                >
                  <span className="text-gray-600 text-sm">
                    {values.images[index] ? 'Change Image' : 'Click to upload or drag & drop'}
                  </span>
                  <input
                    id={`image-${index}`}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, index, setFieldValue, values)}
                  />
                </label>

                {values.images[index] && (
                  <div className="mt-2 text-sm text-gray-600">
                    <a
                      href={values.images[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      View Image
                    </a>
                  </div>
                )}

                {values.images.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeImageField(index, values.images, setFieldValue)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => addImageField(values.images, setFieldValue)}
              className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
            >
              <Plus className="mr-1" size={16} /> Add another image
            </button>

            {uploadProgress !== null && (
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-75"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}
          </div>


          <TextArea
            label="Description"
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description ? errors.description : undefined}
            placeholder="Enter builder description"
            rows={4}
          />

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              icon={X}
              disabled={isSubmitting}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="primary"
              icon={Save}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? builder
                  ? 'Updating...'
                  : 'Submitting...'
                : builder
                  ? 'Update Builder'
                  : 'Add Builder'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BuilderForm;