// import ImageSlider from "./components/ui/ImageSlider";

// const sampleData = [
//     { id: '1', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
//     { id: '2', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
//     { id: '3', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
//     { id: '4', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
//     { id: '5', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
// ];

// const Test = () => (
//     <div className="max-w-7xl mx-auto py-10">
//         <ImageSlider title="End-to-end offerings" data={sampleData} />
//         <ImageSlider title="Modular Kitchen Designs" data={sampleData} />
//     </div>
// );

// export default Test;

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

const ServiceForm: React.FC = () => {
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
    // You can route to next page or call an API here
    alert('Request submitted!');
  };

  return (
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
                    <div className="flex items-center justify-center gap-4">
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name={service.name}
                          value="Yes"
                          checked={formData[service.name] === 'Yes'}
                          onChange={() => handleChange(service.name, 'Yes')}
                          className="accent-blue-600"
                        />
                        <span className="text-sm text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name={service.name}
                          value="No"
                          checked={formData[service.name] === 'No'}
                          onChange={() => handleChange(service.name, 'No')}
                          className="accent-red-500"
                        />
                        <span className="text-sm text-gray-700">No</span>
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
  );
};

export default ServiceForm;
