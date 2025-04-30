import { Form, Formik } from 'formik';
import { Save, X } from 'lucide-react';
import React from 'react';
import { BuilderSchema } from '../../../schema/BuilderSchema';
import { Builder } from '../../../types';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';

interface BuilderFormProps {
  builder?: Builder;
}

const BuilderForm: React.FC<BuilderFormProps> = ({
  builder,
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
      onSubmit = {(values) => {
        console.log(values);
      }}
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