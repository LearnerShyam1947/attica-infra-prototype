import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';
import Button from '../../ui/Button';
import { Save, X } from 'lucide-react';
import { Builder } from '../../../types';

interface BuilderFormProps {
  builder?: Builder;
  onSubmit: (values: Omit<Builder, 'id'>) => void;
  onCancel: () => void;
}

const BuilderSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  image: Yup.string().url('Must be a valid URL'),
  description: Yup.string().required('Description is required'),
  experience: Yup.string().required('Experience is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  city: Yup.string().required('City is required'),
  area: Yup.string().required('Area is required'),
  pincode: Yup.string()
    .matches(/^\d{6}$/, 'Pincode must be 6 digits')
    .required('Pincode is required'),
});

const BuilderForm: React.FC<BuilderFormProps> = ({
  builder,
  onSubmit,
  onCancel,
}) => {
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BuilderSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, handleChange, handleBlur, values }) => (
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
                error={touched.name && errors.name}
                placeholder="Enter builder name"
              />

              <Input
                label="Experience (in years)"
                id="experience"
                name="experience"
                value={values.experience}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.experience && errors.experience}
                placeholder="Enter years of experience"
              />

              <Input
                label="Phone Number"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && errors.phone}
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
                error={touched.city && errors.city}
                placeholder="Enter city"
              />

              <Input
                label="Area"
                id="area"
                name="area"
                value={values.area}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.area && errors.area}
                placeholder="Enter area"
              />

              <Input
                label="Pincode"
                id="pincode"
                name="pincode"
                value={values.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.pincode && errors.pincode}
                placeholder="Enter 6-digit pincode"
              />
            </div>
          </div>

          <Input
            label="Image URL"
            id="image"
            name="image"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.image && errors.image}
            placeholder="Enter builder image URL"
          />

          <TextArea
            label="Description"
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && errors.description}
            placeholder="Enter builder description"
            rows={4}
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
              {builder ? 'Update Builder' : 'Add Builder'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BuilderForm;