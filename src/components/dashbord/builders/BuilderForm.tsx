import { Form, Formik } from 'formik';
import { Save, X } from 'lucide-react';
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
    image: builder?.image || '',
    description: builder?.description || '',
    experience: builder?.experience || '',
    phone: builder?.phone || '',
    city: builder?.city || '',
    area: builder?.area || '',
    pincode: builder?.pincode || '',
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setUploadProgress(0);

    try {
      const xhr = new XMLHttpRequest();
      // xhr.open('POST', 'http://localhost:3000/api/v1/upload/');
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
          setFieldValue('image', response.imageUrl);
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
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
              Upload Builder Image
            </label>

            <label
              htmlFor="image"
              className="flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
            >
              <span className="text-gray-600 text-sm">
                Click to upload or drag & drop an image here
              </span>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileChange(e, setFieldValue)}
              />
            </label>

            {values.image && (
              <div className="mt-3">
                <p className="text-sm text-gray-600">
                  Uploaded image:{" "}
                  <a
                    href={values.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Image
                  </a>
                </p>
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
