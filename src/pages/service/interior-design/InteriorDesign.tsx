import { Activity, BookOpen, CheckCircle, FileText, Handshake, Home, PencilRuler, PenTool, Sofa, Users, UtensilsCrossed } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HowItWorksUI from '../../../components/ui/HowItWorks';
import ImageSlider from '../../../components/ui/ImageSlider';
import LetsConnect from '../../../components/ui/LetsConnect';

const InteriorDesign: React.FC = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (values: any) => {
    console.log(values);

  }
  const sampleData = [
      { id: '1', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
      { id: '2', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
      { id: '3', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
      { id: '4', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
      { id: '5', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSG2sk6peNhSUfnsu7W7bHAsNlThy3zd1unYiGpKp_93C2kHQGjSbmYZmL84BTpDWanc&usqp=CAU' },
  ];

  const steps = [
    {
      icon: <FileText className="w-5 h-5" />,
      number: 1,
      title: 'Consultation & Requirement Gathering',
      description: 'We begin by understanding your lifestyle, taste, functional needs, and budget through an in-depth discussion.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    },
    {
      icon: <Users className="w-5 h-5" />,
      number: 2,
      title: 'Site Visit & Measurements',
      description: 'Our team visits your site to take accurate measurements and evaluate space usage, lighting, and existing layout.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      number: 3,
      title: 'Concept Design & Mood Boards',
      description: 'We share initial layout plans, 2D/3D visuals, and material samples to align on style, color palettes, and design direction.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      number: 4,
      title: 'Detailed Design & Estimation',
      description: 'Once concepts are approved, we create detailed drawings, working plans, and give you a transparent quotation.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    },
    {
      icon: <Activity className="w-5 h-5" />,
      number: 5,
      title: 'Material Selection',
      description: 'We assist in selecting premium-quality materials, finishes, fittings, and furnishings within your budget.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    },
    {
      icon: <Home className="w-5 h-5" />,
      number: 6,
      title: 'Execution & Supervision',
      description: 'Our in-house team executes the project under strict supervision, ensuring quality, timelines, and minimal disruptions.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    },
    {
      icon: <Handshake className="w-5 h-5" />,
      number: 7,
      title: 'Handover & Final Touches',
      description: 'After a thorough quality check, we hand over the completed interiors—clean, polished, and ready to move in.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    },
  ];

  const cards = [
    {
      icon: <Sofa className="w-8 h-8 text-blue-500" />,
      title: 'Full Home Interiors',
      description: 'Get the estimate price for your full home interiors.',
      buttonText: 'Get Free Estimate',
      button: (
        <button onClick={() => setIsModalOpen(true)} className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Get Free Estimate
        </button>
      )
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-blue-500" />,
      title: 'Kitchen',
      description: 'Get costing for your kitchen interiors.',
      buttonText: 'Get Free Estimate',
      button: (
        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          <Link to={"/test"}>Get Free Estimate</Link>
        </button>
      )
    },
    {
      icon: <PencilRuler className="w-8 h-8 text-blue-500" />,
      title: 'Design Consultation',
      description: 'Share your ideas and home plan to receive personalised 3D designs and an instant quote.',
      buttonText: 'Book Free Design Session',
      button: (
        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          <Link to={"/test"}>Book Free Design Session</Link>
        </button>
      )
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Integrated Interior Design Services
          </h2>
          <p className="text-gray-700 mb-4 text-left">
            At Attica Infra Services, we provide complete in-house interior design solutions alongside our
            construction services. By planning both structure and interiors together, we help you:
          </p>
          <ul className="space-y-3 mb-4 text-left">
            <li className="flex items-start text-gray-800">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-2" />
              Save costs through optimized material and space planning
            </li>
            <li className="flex items-start text-gray-800">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-2" />
              Avoid delays with streamlined execution
            </li>
            <li className="flex items-start text-gray-800">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-2" />
              Prevent rework by aligning design with structural elements from day one
            </li>
          </ul>
          <p className="text-gray-700 text-left">
            Our end-to-end approach ensures a seamless journey—from blueprint to beautifully finished spaces.
          </p>
        </div>
      </div>

      <ImageSlider title="End-to-end offerings" data={sampleData} />
      <ImageSlider title="Mordern Kitchen Design" data={sampleData} />
      
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">End-to-end interior solutions</h1>
            <p className="mt-4 text-xl text-gray-600">Get an estimate for your <span className="text-blue-600">home</span>. <br />
              Calculate the cost of doing up your home interiors now.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((property, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-blue-50 p-6 rounded-full">
                    {property.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
                  <p className="text-gray-600">{property.description}</p>
                  {/* <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    {property.buttonText}
                  </button> */}
                  {property.button}
                </div>
              </div>
            ))}
          </div>
        </div>
        <LetsConnect
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          initialContext={{ 'hello': 'world' }}
        />
        <HowItWorksUI
          steps={steps}
          title='Interior Design Process'
          subtitle='At Attica Infra Services, we follow a streamlined and transparent process to turn your vision into reality:'
        />
      </div>
    </>

  );
};

export default InteriorDesign;
