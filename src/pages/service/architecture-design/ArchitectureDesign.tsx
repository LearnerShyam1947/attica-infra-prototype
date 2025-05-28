import React, { useState } from 'react';
import LetsConnect from '../../../components/ui/LetsConnect';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';
import { showAlert } from '../../../utils/Alerts';
import { CheckCircle } from 'lucide-react';

type ServiceOption = {
  name: string;
  description?: string;
};

const services: ServiceOption[] = [
  { name: 'STRUCTURAL DRAWINGS' },
  { name: 'SOIL TESTING REPORT' },
  { name: 'SITE ASSESSMENT & SITE PLAN' },
  { name: 'SCHEME DRAWING', description: 'All Floors (2D)' },
  { name: 'FURNITURE LAYOUT', description: 'All Floors (2D)' },
  { name: 'ELEVATION DESIGN', description: '3D' },
  { name: 'ELECTRICAL DRAWINGS', description: 'All Floors (2D)' },
  { name: 'PLUMBING DRAWING', description: 'All Floors (2D)' },
  { name: 'WORKING DRAWING', description: 'All Floors (2D)' },
  { name: 'ELEVATION DETAIL DRAWING', description: '2D' },
  { name: 'HALF LAYOUT', description: 'All Floors (3D)' },
  { name: 'INTERIOR VIEWS', description: 'All Rooms (3D)' },
  { name: 'INTERIOR DETAILING', description: 'All Rooms (2D)' },
  { name: 'MATERIAL & BRAND SELECTION' },
  { name: 'LANDSCAPING ARCHITECTURE DESIGNS' },
  { name: 'TOPOGRAPHICAL SURVEY' },
  { name: 'APPROVAL DRAWING' },
  { name: 'CONSTRUCTION QUOTATION' },
  { name: 'INTERIOR QUOTATION' },
];

type FormDataEntry = {
  name: string;
  description?: string;
  option: string;
};

const ArchitectureDesign: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormDataEntry[]>(
    services.map(service => ({
      name: service.name,
      description: service.description || '',
      option: 'No',
    }))
  );

  const handleChange = (serviceName: string, value: string) => {
    setFormData(prev =>
      prev.map(service =>
        service.name === serviceName
          ? { ...service, option: value }
          : service
      )
    );
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);

    console.log('Contact Info:', values);
    console.log('Selected Services:', formData);

    // const data = {
    //   contactDetails: values,
    //   mainData: formData,
    // };

    // try {
    //   const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/submit-architecture-design`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   const response = await res.json();
    //   console.log(response);

    //   if (response.error) {
    //     showAlert("Error", response.error, "error")
    //     return;
    //   }

    //   showAlert("success", 'design request submitted!', "success");
    // } catch (e) {
    //   console.error(e);
    // }
    // finally {
    //   setLoading(false);
    //   setFormData(
    //     services.map(service => ({
    //       name: service.name,
    //       description: service.description || '',
    //       option: 'No',
    //     }))
    //   );

    // }

    await new Promise(resolve => setTimeout(resolve, 2000));
    showAlert("success", 'design request submitted!', "success");
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingSpinner text='process your request.....' />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16">

          {/* LEFT COLUMN */}
          <div className="">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
              Our Architectural Design Services: Creativity Meets Practicality
            </h2>
            
            <ul>
              <li className="flex items-start pb-5">
                <CheckCircle className="min-w-[17px] min-h-[17px] w-5 h-5 text-green-600 mt-1 mr-2" />
                <span className='text-justify'>
                  At Attica Infra Services, we bring your dream home to life with a team of skilled{' '}
                  <span className="font-bold">
                    Architects, Civil Engineers, Structural Engineers, 3D Visualizers, and Project Managers
                  </span>.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="min-w-[17px] min-h-[17px] w-5 h-5 text-green-600 mt-1 mr-2" />
                <span className='text-justify'>
                  We ensure every design is a perfect blend of aesthetic creativity and construction practicality, resulting in a home that's both beautiful and functional.
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative  w-full">
            <img
              // style={{width: '350px', height:"500px"}}
              src="./services/architure-design.jpg"
              alt="Construction Site"
              className="rounded-lg object-cover w-full h-full shadow-2xl"
            />
          </div>
        </div>
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col pb-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Service Selection Form</h2>
          <form>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm mb-6">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-3 border border-gray-300">Service/Category</th>
                    <th className="p-3 border border-gray-300">Description</th>
                    <th className="p-3 border border-gray-300 text-center">Option</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.map(service => (
                    <tr key={service.name} className="hover:bg-gray-50">
                      <td className="p-3 border border-gray-300 font-medium text-gray-700">
                        {service.name}
                      </td>
                      <td className="p-3 border border-gray-300 text-gray-600">
                        {service.description || '-'}
                      </td>
                      <td className="p-3 border border-gray-300 text-center">
                        <div className="flex items-center justify-center">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-blue-600 accent-blue-600"
                              checked={service.option === 'Yes'}
                              onChange={(e) =>
                                handleChange(service.name, e.target.checked ? 'Yes' : 'No')
                              }
                            />
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
              >
                Proceed to Request
              </button>
            </div>
          </form>
        </div>

        <div className="font-bold text-center text-3xl pb-3">How We Work</div>
        <li className="flex items-start">
              <CheckCircle className="min-w-[17px] min-h-[17px] w-5 h-5 text-green-600 mt-1 mr-2" />
              <p className="text-xl text-justify pb-10">We'll receive your email and get back to you with a detailed quotation and samples.</p>
            </li>
       

      </div>



      <LetsConnect
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ArchitectureDesign;
