import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { BookOpen, FileText, Home, Loader, Users } from 'lucide-react';
import LoadingSpinner from './components/ui/LoadingSpinner';
import HowItWorksUI from './components/ui/HowItWorks';

type Material = {
  name: string;
  brands: string[];
  inputType: 'input' | 'file';
};

const steps = [
  {
    icon: <FileText className="w-5 h-5" />,
    number: 1,
    title: 'Request a Quote',
    description: "Fill out the quote request form with details of your project and material requirements. We'll quickly provide you with an estimate tailored to your specific needs.",
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
  },
  {
    icon: <Users className="w-5 h-5" />,
    number: 2,
    title: 'Order Materials',
    description: "Once you're satisfied with the quote, place your order through our secure online platform, or get in touch with our sales team to assist you further.",
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    number: 3,
    title: 'Delivery & Logistics',
    description: 'We handle all the logistics and ensure your materials are delivered directly to your site. We offer fast, reliable delivery services, minimizing project delays.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
  },
  {
    icon: <Home className="w-5 h-5" />,
    number: 4,
    title: 'Post-Sale Support',
    description: 'Our customer service doesn’t end at delivery. We offer ongoing support for any queries or issues that may arise during the use of the materials.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
  },
];

const materials: Material[] = [
  { name: 'Steel (TMT Bars)', brands: ['JSW', 'Tata', 'SAIL'], inputType: 'input' },
  { name: 'Aggregates 20mm', brands: ['Crushed Stone', 'Natural'], inputType: 'input' },
  { name: 'Aggregates 40mm', brands: ['Crushed Stone', 'Natural'], inputType: 'input' },
  { name: 'Solid Concrete Blocks (6-inch)', brands: [], inputType: 'input' },
  { name: 'Solid Concrete Blocks (4-inch)', brands: [], inputType: 'input' },
  { name: 'Cement', brands: ['ACC', 'Birla', 'UltraTech (43/53 Grade)'], inputType: 'input' },
  { name: 'Interior Painting', brands: ['JK Putty + Tractor Shyne Emulsion'], inputType: 'file' },
  { name: 'Exterior Painting', brands: ['Asian Primer + Apex Exterior Emulsion'], inputType: 'file' },
];


const initialValues = {
  materials: materials.map(mat => ({
    name: mat.name,
    selectedBrands: [] as string[],
    customBrand: '',
    brandDetails: [] as { brand: string; quantity: string; needPrice: boolean }[],
    inputType: mat.inputType

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
  const [uploading, setUploading] = useState(false);

  if (uploading) {
    <LoadingSpinner text='uploading files to cloud....' />
  }

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log('Form values:', values);
    try {
      const res = await fetch('http://localhost:3000/submit-material-order', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(values),
      });

      const data = await res.json();
      console.log(data);

      // Reset form

      // Close modal and alert
      setIsModalOpen(false);
      alert('Order submitted!');
    } catch (e) {
      console.error(e);
    }
    finally {
      resetForm();
    }
    // await new Promise(resolve => setTimeout(resolve, 2000));
  };


  return (
    <>
      {uploading && <LoadingSpinner text="Uploading files to cloud..." />}

      <HowItWorksUI steps={steps} title='Order Construction Materials' subtitle='At Attica Infra Services, we believe in making the process of purchasing construction materials as
smooth as possible. Here’s how it works:' />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue, isSubmitting }) => (
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
                        const filtered = mat.brandDetails.filter((d) => d.brand !== prev);
                        if (custom) {
                          filtered.push({ brand: custom, quantity: '', needPrice: false });
                        }
                        setFieldValue(`materials[${matIndex}].brandDetails`, filtered);
                      };
                      return (
                        <div key={matIndex} className="bg-white rounded-xl shadow p-6 mb-6 border border-gray-200">
                          <h2 className="text-xl font-semibold text-gray-700 mb-4">{mat.name}</h2>
                          <div className="flex flex-wrap gap-4 mb-4">
                            {originalBrands.map((brand, bIdx) => (
                              <label key={bIdx} className="flex items-center space-x-2 text-gray-600">
                                <input
                                  type="checkbox"
                                  checked={mat.selectedBrands.includes(brand)}
                                  onChange={(e) => handleBrandToggle(brand, e.target.checked)}
                                  className="accent-blue-600"
                                />
                                <span>{brand}</span>
                              </label>
                            ))}
                            <input
                              type="text"
                              placeholder="Other brand..."
                              value={mat.customBrand}
                              onChange={handleCustomBrand}
                              className="border border-gray-300 px-3 py-1 rounded-md w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                          </div>
                          {mat.brandDetails.length > 0 && (
                            <div className="overflow-x-auto">
                              <table className="min-w-full table-auto border text-sm">
                                <thead className="bg-gray-100 text-gray-600">
                                  <tr>
                                    <th className="px-4 py-2 text-left border">Brand</th>
                                    <th className="px-4 py-2 text-left border">
                                      {mat.inputType === "file" ? "Upload Specifications" : "Quntity"}
                                    </th>
                                    <th className="px-4 py-2 text-left border">Need Price</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {mat.brandDetails.map((detail, bIndex) => (
                                    <tr key={bIndex} className="bg-white hover:bg-gray-50">
                                      <td className="px-4 py-2 border">{detail.brand}</td>
                                      <td className="px-4 py-2 border">
                                        {/* <Field name={`materials[${matIndex}].brandDetails[${bIndex}].quantity`}>
                                          {({ field, meta }: any) => (
                                            <>
                                              <input
                                                type={mat.inputType === "file" ? "file" : "text"}
                                                {...field}
                                                className={`w-full px-2 py-1 border rounded focus:outline-none ${meta.touched && meta.error
                                                  ? 'border-red-500'
                                                  : 'border-gray-300'
                                                  }`}
                                              />
                                              {meta.touched && meta.error && (
                                                <div className="text-red-500 text-xs mt-1">{meta.error}</div>
                                              )}
                                            </>
                                          )}
                                        </Field> */}
                                        <Field name={`materials[${matIndex}].brandDetails[${bIndex}].quantity`}>
                                          {({ field, meta, form }: any) => (
                                            <>
                                              <input
                                                type={mat.inputType === 'file' ? 'file' : 'text'}
                                                {...(mat.inputType === 'file'
                                                  ? {
                                                    onChange: async (event: React.ChangeEvent<HTMLInputElement>) => {
                                                      const file = event.currentTarget.files?.[0];
                                                      if (file) {
                                                        setUploading(true);
                                                        try {
                                                          const formData = new FormData();
                                                          formData.append('file', file);

                                                          const response = await fetch('https://httpbin.org/post', {
                                                            method: 'POST',
                                                            body: formData,
                                                          });

                                                          const data = await response.json();
                                                          console.log(data);
                                                          
                                                          if (response.ok) {
                                                            form.setFieldValue(
                                                              `materials[${matIndex}].brandDetails[${bIndex}].quantity`,
                                                              `demo-url/${file.name}`
                                                            );
                                                          } else {
                                                            console.error('Upload failed:', data);
                                                            alert('File upload failed.');
                                                          }
                                                        } catch (err) {
                                                          console.error('Error uploading file:', err);
                                                          alert('Something went wrong during file upload.');
                                                        }
                                                        finally {
                                                          setUploading(false);
                                                        }
                                                        
                                                      }
                                                    },
                                                  }
                                                  : field)}
                                                className={`w-full px-2 py-1 border rounded focus:outline-none ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
                                                  }`}
                                              />
                                              {meta.touched && meta.error && (
                                                <div className="text-red-500 text-xs mt-1">{meta.error}</div>
                                              )}
                                            </>
                                          )}
                                        </Field>

                                      </td>
                                      <td className="px-4 py-2 border">
                                        <Field
                                          as="select"
                                          name={`materials[${matIndex}].brandDetails[${bIndex}].needPrice`}
                                          className="w-full px-2 py-1 border border-gray-300 rounded"
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
                <div className="text-center mt-10">
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Let’s Connect & Submit
                  </button>
                </div>
                {isModalOpen && (
                  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl p-8 relative">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
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
                                      className={`w-full border px-3 py-2 rounded ${meta.touched && meta.error
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                        } focus:outline-none`}
                                    />
                                  ) : (
                                    <input
                                      {...f}
                                      type={field === 'email' ? 'email' : 'text'}
                                      className={`w-full border px-3 py-2 rounded ${meta.touched && meta.error
                                        ? 'border-red-500'
                                        : 'border-gray-300'
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
                      <div className="flex justify-end gap-3 mt-6">
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(false)}
                          disabled={isSubmitting}
                          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting && (
                            <Loader />
                          )}
                          {isSubmitting ? 'Submitting...' : 'Submit Final Order'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isSubmitting && (
                  <LoadingSpinner text='Submitting your order...' />
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default MaterialsOrderForm;
