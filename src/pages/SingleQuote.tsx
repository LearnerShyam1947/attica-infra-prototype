import { Disclosure } from '@headlessui/react';
import { Field, Form, Formik } from 'formik';
import { ChevronDown, X, Loader2 } from 'lucide-react';
import { useState } from 'react';
import * as Yup from 'yup';

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface QuoteValues {
  [key: string]: string;
}

interface Message {
  type: 'error' | 'success';
  value: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  address: Yup.string().required('Address is required'),
});

const SingleQuote = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quoteValues, setQuoteValues] = useState<QuoteValues>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null); // Set to null initially

  const sections = [
    {
      title: 'Design & Drawing',
      fields: [
        {
          "label": "Architectural Layout | 2D",
          "name": "architectural_layout_2d",
          "defaultValue": "Architectural Layout"
        },
        {
          "label": "Basic Elevation",
          "name": "basic_elevation",
          "defaultValue": "Basic Elevation"
        },
        {
          "label": "Structural Design",
          "name": "structural_design",
          "defaultValue": "Structural Design"
        },
        {
          "label": "3D Elevation",
          "name": "3d_elevation",
          "defaultValue": "3D Elevation"
        },
        {
          "label": "Electrical Drawings",
          "name": "electrical_drawings",
          "defaultValue": "Electrical Drawings"
        },
        {
          "label": "Plumbing Drawings",
          "name": "plumbing_drawings",
          "defaultValue": "Plumbing Drawings"
        },
        {
          "label": "Furniture Plan",
          "name": "furniture_plan",
          "defaultValue": "Furniture Plan"
        }
      ]
    },
    {
      title: 'Structure',
      fields: [
        {
          "label": "Steel",
          "name": "steel",
          "defaultValue": "Vizag or equivalent"
        },
        {
          "label": "Cement",
          "name": "cement",
          "defaultValue": "Ultratech or equivalent of 43 or 53 grade"
        },
        {
          "label": "Aggregates",
          "name": "aggregates",
          "defaultValue": "20mm & 40mm"
        },
        {
          "label": "Blocks",
          "name": "blocks",
          "defaultValue": "Standard Red Bricks. 9 inch & 4 inch"
        },
        {
          "label": "RCC Design Mix",
          "name": "rcc_design_mix",
          "defaultValue": "ACC or Ultratech M20 / M25 or As per the structural designer recommendation"
        },
        {
          "label": "Ceiling Height",
          "name": "ceiling_height",
          "defaultValue": "10 feet (Finished Floor level to Finished Floor level)"
        }
      ]
    },
    {
      title: 'Kitchen',
      fields: [
        {
          "label": "Ceramic Wall Dado",
          "name": "ceramic_wall_dado",
          "defaultValue": "Upto Rs.40 per Sqft"
        },
        {
          "label": "Main Sink Faucet",
          "name": "main_sink_faucet",
          "defaultValue": "Upto Rs.1300"
        },
        {
          "label": "Any other Faucet or Accessories",
          "name": "faucet_accessories",
          "defaultValue": "ISI Marked"
        },
        {
          "label": "Kitchen Sink",
          "name": "kitchen_sink",
          "defaultValue": "Stainless Steel of Single Sink make worth Rs. 3,000"
        }
      ]

    },
    {
      title: 'Bathroom',
      fields: [
        {
          "label": "Ceramic Wall Dado Height",
          "name": "ceramic_wall_dado_height",
          "defaultValue": "Ceramic Wall Dado upto 7' height - Upto Rs.40 per Sqft"
        },
        {
          "label": "Sanitarywares & CP Fittings Budget",
          "name": "sanitary_cp_fittings_budget",
          "defaultValue": "Sanitarywares & CP fittings upto Rs. 30,000 per 1000 Sqft of Hindware make"
        },
        {
          "label": "CPVC Pipe",
          "name": "cpvc_pipe",
          "defaultValue": "Astral or Equivalent"
        },
        {
          "label": "Bathroom Doors",
          "name": "bathroom_doors",
          "defaultValue": "Waterproof flush doors or WPC"
        },
        {
          "label": "Bathroom Accessories",
          "name": "bathroom_accessories",
          "defaultValue": "Mirror, Soap Dish, Towel Rail - Worth Rs. 9,000 till 1000 ft of Construction"
        },
        {
          "label": "Solar Water Heater Provision",
          "name": "solar_water_heater_provision",
          "defaultValue": "Solar water heater provision"
        }
      ]

    },
    {
      title: 'Doors & Windows',
      fields: [
        {
          "label": "Windows",
          "name": "windows",
          "defaultValue": "Aluminium Windows with glass shutters and mesh shutters (3 track with 1 mesh) of Jindal Profiles"
        },
        {
          "label": "Main Door",
          "name": "main_door",
          "defaultValue": "Flush Door with Veneer. Sal wood frame of 5 inch by 3 inch, worth Rs.20,000 including fixtures."
        },
        {
          "label": "Internal Doors",
          "name": "internal_doors",
          "defaultValue": "Membrane doors / Flush Door with Laminates upto Rs.9,000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch."
        },
        {
          "label": "Pooja Room Door",
          "name": "pooja_room_door",
          "defaultValue": "Burma Teak along with Teak frame of 5inch by 2.5 inch, worth Rs. 35,000 for every 2,000 sft package area"
        }
      ]

    },
    {
      title: 'Painting',
      fields: [
        {
          "label": "Interior Painting",
          "name": "interior_painting",
          "defaultValue": "JK Putty + Tractor Emulsion or equivalent"
        },
        {
          "label": "Exterior Painting",
          "name": "exterior_painting",
          "defaultValue": "Asian Primer + Ace Exterior emulsion Paint or equivalent"
        }
      ]

    },
    {
      title: 'Flooring',
      fields: [
        {
          "label": "Living & Dining Flooring",
          "name": "living_dining_flooring",
          "defaultValue": "Tiles of value upto Rs.50 per sqft"
        },
        {
          "label": "Rooms & Kitchen Flooring",
          "name": "rooms_kitchen_flooring",
          "defaultValue": "Tiles of value upto Rs.50 per sqft"
        },
        {
          "label": "Balcony and Open Areas Flooring",
          "name": "balcony_open_areas_flooring",
          "defaultValue": "Anti-skid tiles of value upto Rs.40 per sqft"
        },
        {
          "label": "Staircase Flooring",
          "name": "staircase_flooring",
          "defaultValue": "Sadarahalli Granite of value upto ₹ 70 per sqft"
        },
        {
          "label": "Parking Tiles",
          "name": "parking_tiles",
          "defaultValue": "Anti-skid tiles of value upto ₹ 40 per sqft"
        }
      ]

    },
    {
      title: 'Electrical',
      fields: [
        {
          "label": "Wiring",
          "name": "wiring",
          "defaultValue": "All wiring shall be done with fire proof wires of Finolex silver FR or equivalent."
        },
        {
          "label": "Switches & Sockets",
          "name": "switches_sockets",
          "defaultValue": "Polycab modular or equivalent"
        },
        {
          "label": "UPS Wiring Provision",
          "name": "ups_wiring_provision",
          "defaultValue": "UPS Wiring Provision"
        },
        {
          "label": "EV Charging Point",
          "name": "ev_charging_point",
          "defaultValue": "1 EV Charging Point at Ground floor"
        }
      ]
    },
    {
      title: 'Miscellaneous',
      fields: [
        {
          "label": "Overhead Tank",
          "name": "overhead_tank",
          "defaultValue": "A Sintex / Apollo Double layered overhead tank of 2000L shall be provided. Any Additional capacity shall be chargeable at INR 9 per L. Platform for the OHT shall be charged additional based on the design and specifications"
        },
        {
          "label": "Underground Sump",
          "name": "underground_sump",
          "defaultValue": "8000 Ltrs"
        },
        {
          "label": "Staircase Railing",
          "name": "staircase_railing",
          "defaultValue": "SS (Stainless) Glass Railing of SS 304 grade profiles"
        },
        {
          "label": "Window Grills",
          "name": "window_grills",
          "defaultValue": "Basic MS Grill with enamel Paint at Rs. 180 per Sqft"
        },
        {
          "label": "Copper Gas Connection",
          "name": "copper_gas_connection",
          "defaultValue": "1 Copper gas connection for every dwelling unit of 1,500 sft package area"
        }
      ]
    },
  ];

  const handleFieldChange = (name: string, value: string) => {
    setQuoteValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (values: ContactFormValues) => {
    setLoading(true); // Set loading to true when form is submitting

    const finalSections = sections.map((section) => {
      const sectionData = section.fields.map((field) => {
        const finalValue = quoteValues[field.name] || field.defaultValue;

        return {
          label: field.label,
          name: field.name,
          value: finalValue,
        };
      });

      return {
        sectionTitle: section.title,
        sectionData,
      };
    });

    const data = {
      contactDetails: values,
      quoteDetails: finalSections,
    };

    console.log(data);

    fetch('https://ais-backend-prototype.onrender.com/submit-quote', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          setMessage({
            type: 'error',
            value: data.error + "  " + data.errorMsg,
          });
        } else {
          setMessage({
            type: 'success',
            value: data.message,
          });
        }
        setLoading(false); // Set loading to false after the submission
        setIsModalOpen(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false); // Ensure loading is stopped on error
        setIsModalOpen(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Customize Your Quote</h1>
          <p className="mt-4 text-xl text-gray-600">Specify your requirements and get an instant quote</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          {sections.map((section) => (
            <Disclosure key={section.title}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-lg font-semibold text-gray-900">{section.title}</span>
                    <ChevronDown className={`w-5 h-5 transform transition-transform ${open ? 'rotate-180' : ''}`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 py-4 bg-gray-50 rounded-lg">
                    {section.fields.map((field) => (
                      <div key={field.name} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <label className="block text-sm font-bold text-gray-700 mb-1">
                            {field.label}
                          </label>
                          <p className="text-gray-600">{field.defaultValue}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <label className="block text-sm font-bold text-gray-700 mb-1">
                            Your Preference
                          </label>
                          <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            rows={2}
                            value={quoteValues[field.name] || ''}
                            placeholder={`Enter your preferred ${field.label.toLowerCase()} specifications...`}
                            onChange={(e) => handleFieldChange(field.name, e.target.value)}
                          />
                        </div>
                      </div>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </button>
          </div>

          {/* Dynamic Message */}
          {message && (
            <div
              className={`mt-4 text-center font-bold p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
            >
              {message.value}
            </div>
          )}
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Contact Details</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <Formik
              initialValues={{
                name: '',
                email: '',
                phone: '',
                address: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name*
                    </label>
                    <Field
                      name="name"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.name && touched.name && (
                      <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <Field
                      name="phone"
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.phone && touched.phone && (
                      <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address*
                    </label>
                    <Field
                      name="address"
                      as="textarea"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.address && touched.address && (
                      <div className="text-red-500 text-sm mt-1">{errors.address}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {loading ? (
                      <div className="flex justify-center">
                        <Loader2 className="animate-spin w-5 h-5 text-white" />
                      </div>
                    ) : (
                      'Get single Quote'
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleQuote;
