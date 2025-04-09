import { Building2, Factory, Home, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Buy/Sell Plots",
      description: `Attica Infra Services works with trusted developers to offer the best plots, flats, and homes for sale. We ensure every property is carefully verified with the following services:
        <ul>
          <li><b> • Legal Title Check:</b> We ensure the property’s ownership is clear and safe for your investment.</li>
          <li><b> • Market Research:</b> Our team compares the prices of similar plots, flats, and homes to make sure you get the best deal.</li>
          <li><b> • Trusted Developers:</b> We only work with reliable developers who focus on quality and honesty.</li>
        </ul>
      `,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
      buttonText: "Learn More"
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Architecture Design",
      description: `Attica Infra Services specializes in the best architecture and innovative designs, providing:
          <ul>
            <li>• Site Plans</li>
            <li>• Architectural Floor Plans</li>
            <li>• 3D Half Layouts</li>
            <li>• Structural Drawings</li>
            <li>• Elevation 3D Designs</li>
            <li>• Approval Drawings</li>
            <li>• 3D Interior Designs</li>
          </ul>
      We also offer customized solutions based on customer requirements.`,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      buttonText: "Explore Services"
    },
    {
      icon: <Factory className="w-12 h-12 text-blue-600" />,
      title: "Construction Experts",
      description: `Attica Infra Services partners with trusted, expert contractors to build your dream home with care and precision.
      <ul>
        <li>• Whether it's an independent house, duplex/triplex, or modular home, we offer the best construction at the best prices.</li>
        <li>• You don’t need to waste time or money—Attica Infra Services gives you the best estimates from reliable professionals, ensuring you get top value, quality, and convenience all in one place!</li>
      </ul>
      `,
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80",
      buttonText: "View Projects"
    },
    {
      icon: <Warehouse className="w-12 h-12 text-blue-600" />,
      title: "Home Interior Experts",
      description: `
      <ul>   
        <li>• Providing end-to-end home interior solutions – from modular kitchens and wardrobes to false ceilings, TV units, study tables, and more.</li>
        <li>• We focus on the latest trends, top-quality designs with warranties, and affordable prices, offering the best value for your home!</li>
      </ul>
      `,
      image: "https://images.unsplash.com/photo-1632832240976-6a2bc97d18d8?auto=format&fit=crop&q=80",
      buttonText: "Get Started"
    },
    // {
    //   icon: <School className="w-12 h-12 text-blue-600" />,
    //   title: "Institutional Buildings",
    //   description: "Create inspiring spaces for education, healthcare, and public services. Our institutional construction expertise ensures the perfect balance of functionality, safety, and aesthetic appeal. We understand the unique requirements of institutional projects and deliver facilities that serve communities effectively.",
    //   image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
    //   buttonText: "Learn More"
    // }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive Construction Solutions for Every Need</p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p 
                  className="text-gray-600 text-lg leading-relaxed" 
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2">
                  <Link to={"/quote"}>{service.buttonText}</Link>
                </button>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;