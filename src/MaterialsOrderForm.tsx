import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type Material = {
  name: string;
  brands: string[];
};

const materials: Material[] = [
  { name: 'Steel (TMT Bars)', brands: ['JSW', 'Tata', 'SAIL'] },
  { name: 'Aggregates 20mm', brands: ['Crushed Stone', 'Natural'] },
  { name: 'Aggregates 40mm', brands: ['Crushed Stone', 'Natural'] },
  { name: 'Solid Concrete Blocks (6-inch)', brands: [] },
  { name: 'Solid Concrete Blocks (4-inch)', brands: [] },
  { name: 'Cement', brands: ['ACC', 'Birla', 'UltraTech (43/53 Grade)'] },
  { name: 'Interior Painting', brands: ['JK Putty + Tractor Shyne Emulsion'] },
  { name: 'Exterior Painting', brands: ['Asian Primer + Apex Exterior Emulsion'] },
];

const initialValues = {
  materials: materials.map(mat => ({
    name: mat.name,
    selectedBrands: [] as string[],
    customBrand: '',
    brandDetails: [] as { brand: string; quantity: string; needPrice: boolean }[],
  })),
  contact: {
    name: '',
    email: '',
    phone: '',
    address: '',
  },
};

const validationSchema = Yup.object({
  materials: Yup.array().of(
    Yup.object().shape({
      brandDetails: Yup.array().of(
        Yup.object().shape({
          quantity: Yup.string().required('Required'),
        })
      ),
    })
  ),
  contact: Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
    address: Yup.string().required('Address is required'),
  }),
});

const MaterialsOrderForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Form values:', values);
    setIsModalOpen(false);
    alert('Order submitted!');
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Order Construction Materials</h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, touched, errors, submitCount }) => {
            const showError = (fieldTouched: any, fieldError: any) =>
              fieldTouched || submitCount > 0 ? !!fieldError : false;

            return (
              <Form>
                <FieldArray name="materials">
                  {() =>
                    values.materials.map((mat, matIndex) => {
                      const originalBrands = materials[matIndex].brands;

                      const handleBrandToggle = (brand: string, isChecked: boolean) => {
                        const updated = [...mat.selectedBrands];
                        const details = [...mat.brandDetails];

                        if (isChecked) {
                          updated.push(brand);
                          details.push({ brand, quantity: '', needPrice: false });
                        } else {
                          const idx = updated.indexOf(brand);
                          if (idx !== -1) {
                            updated.splice(idx, 1);
                            details.splice(idx, 1);
                          }
                        }

                        setFieldValue(`materials[${matIndex}].selectedBrands`, updated);
                        setFieldValue(`materials[${matIndex}].brandDetails`, details);
                      };

                      const handleCustomBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
                        const custom = e.target.value;
                        const prev = mat.customBrand;
                        setFieldValue(`materials[${matIndex}].customBrand`, custom);

                        const filtered = mat.brandDetails.filter(d => d.brand !== prev);
                        if (custom) {
                          filtered.push({ brand: custom, quantity: '', needPrice: false });
                        }
                        setFieldValue(`materials[${matIndex}].brandDetails`, filtered);
                      };

                      return (
                        <div key={matIndex} className="mb-10 border-b pb-6">
                          <h4 className="text-lg font-semibold mb-3 text-gray-800">{mat.name}</h4>
                          <div className="mb-4 flex flex-wrap gap-4">
                            {originalBrands.map((brand, bIdx) => (
                              <label key={bIdx} className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  checked={mat.selectedBrands.includes(brand)}
                                  onChange={(e) => handleBrandToggle(brand, e.target.checked)}
                                  className="form-checkbox text-blue-600"
                                />
                                {brand}
                              </label>
                            ))}
                            <input
                              type="text"
                              placeholder="Other brand..."
                              value={mat.customBrand}
                              onChange={handleCustomBrand}
                              className="border px-2 py-1 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                            />
                          </div>

                          {mat.brandDetails.length > 0 && (
                            <div className="overflow-x-auto">
                              <table className="min-w-full text-sm border border-gray-300 rounded-lg overflow-hidden">
                                <thead className="bg-gray-100 text-gray-700">
                                  <tr>
                                    <th className="border px-4 py-2 text-left">Brand</th>
                                    <th className="border px-4 py-2 text-left">Quantity</th>
                                    <th className="border px-4 py-2 text-left">Need Price</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                  {mat.brandDetails.map((brandDetail, bIndex) => (
                                    <tr key={bIndex}>
                                      <td className="border px-4 py-2">{brandDetail.brand}</td>
                                      <td className="border px-4 py-2">
                                        <Field name={`materials[${matIndex}].brandDetails[${bIndex}].quantity`}>
                                          {({ field, meta }: any) => (
                                            <>
                                              <input
                                                {...field}
                                                className={`w-full border px-2 py-1 rounded focus:outline-none ${
                                                  meta.touched && meta.error
                                                    ? 'border-red-500'
                                                    : 'border-gray-300'
                                                }`}
                                              />
                                              {meta.touched && meta.error && (
                                                <div className="text-red-500 text-xs mt-1">{meta.error}</div>
                                              )}
                                            </>
                                          )}
                                        </Field>
                                      </td>
                                      <td className="border px-4 py-2">
                                        <Field
                                          as="select"
                                          name={`materials[${matIndex}].brandDetails[${bIndex}].needPrice`}
                                          className="w-full border border-gray-300 px-2 py-1 rounded"
                                        >
                                          <option value={false}>No</option>
                                          <option value={true}>Yes</option>
                                        </Field>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      );
                    })
                  }
                </FieldArray>

                <div className="text-center mt-8">
                  <button
                    type="button"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-800 transition"
                    onClick={handleModalOpen}
                  >
                    Let’s Connect & Submit
                  </button>
                </div>

                {/* Modal for Contact Details */}
                {isModalOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative animate-fade-in-up">
                      <button
                        type="button"
                        onClick={handleModalClose}
                        className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
                      >
                        &times;
                      </button>
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Enter Your Contact Details</h3>

                      <div className="space-y-4">
                        {['name', 'email', 'phone', 'address'].map((field) => (
                          <div key={field}>
                            <label className="block mb-1 font-medium capitalize">{field}</label>
                            <Field name={`contact.${field}`}>
                              {({ field: f, meta }: any) => (
                                <>
                                  {field === 'address' ? (
                                    <textarea
                                      {...f}
                                      rows={3}
                                      className={`w-full border px-3 py-2 rounded ${
                                        meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
                                      } focus:outline-none`}
                                    />
                                  ) : (
                                    <input
                                      {...f}
                                      type={field === 'email' ? 'email' : 'text'}
                                      className={`w-full border px-3 py-2 rounded ${
                                        meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
                                      } focus:outline-none`}
                                    />
                                  )}
                                  {meta.touched && meta.error && (
                                    <div className="text-red-500 text-sm mt-1">{meta.error}</div>
                                  )}
                                </>
                              )}
                            </Field>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-end space-x-3 mt-6">
                        <button
                          type="button"
                          onClick={handleModalClose}
                          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Submit Final Order
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default MaterialsOrderForm;
