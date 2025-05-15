import React, { useState } from 'react';

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

const ArchitectureDesign: React.FC = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>(
    services.reduce((acc, service) => {
      acc[service.name] = 'No'; // Default selection
      return acc;
    }, {} as { [key: string]: string })
  );

  const handleChange = (serviceName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [serviceName]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Selected Services:', formData);
    alert('Request submitted!');
  };

  return (
    <>
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
        <form onSubmit={handleSubmit}>
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
                {services.map(service => (
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
                            checked={formData[service.name] === 'Yes'}
                            onChange={(e) =>
                              handleChange(service.name, e.target.checked ? 'Yes' : 'No')
                            }
                          />
                          {/* <span className="ml-2 text-sm text-gray-700">Select</span> */}
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
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
            >
              Proceed to Request
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ArchitectureDesign;
