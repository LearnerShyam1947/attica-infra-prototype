import React, { useState } from 'react';
import LetsConnect from '../../../components/ui/LetsConnect';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';
import { showAlert } from '../../../utils/Alerts';

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

    const data = {
      contactDetails: values,
      mainData: formData,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/submit-architecture-design`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();
      console.log(response);

      if (response.error) {
        showAlert("Error", response.error, "error")
        return;
      }
      
      showAlert("success", 'design request submitted!', "success");
    } catch (e) {
      console.error(e);
    }
    finally {
      setLoading(false);
      setFormData(
        services.map(service => ({
          name: service.name,
          description: service.description || '',
          option: 'No',
        }))
      );
      
    }
  };

  return (
    <>
      { loading && <LoadingSpinner text='process your request' />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Our Architectural Design Services: Creativity Meets Practicality
          </h2>
          <p className="text-gray-700 mb-4 text-left">
            At Attica Infra Services, we bring your dream home to life with a team of skilled{' '}
            <span className="font-bold">
              Architects, Civil Engineers, Structural Engineers, 3D Visualizers, and Project Managers
            </span>.
          </p>
          <p className="text-gray-700 text-left">
            We ensure every design is both creative and practical for construction, giving you a beautiful yet functional home.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
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
          <div className="text-right">
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

      <LetsConnect
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ArchitectureDesign;
