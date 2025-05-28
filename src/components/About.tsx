import { CheckCircle } from 'lucide-react';
import React from 'react';

const AboutUs: React.FC = () => {
  const guarantees = [
    "Clear legal title checks",
    "Fair pricing with multiple quotations",
    "Skilled and verified contractors",
    "Custom architectural and interior designs",
    "100% money safety and timely delivery"
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans leading-relaxed">
      {/* Main About Section */}
      <section className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row justify-between items-center gap-12">

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 sm:text-4xl">About Attica Infra</h2>
            <p className="text-lg text-gray-600 mb-6 text-justify">
              <strong>Attica Infra Services</strong>, founded by <strong>Engineer Sekhar Reddy Muthakana</strong>, is one of India’s leading construction and real estate solution providers.
              With over a decade of industry expertise, we are committed to building high-quality homes and delivering ethical, transparent, and customer-focused services.
            </p>
            <p className="text-lg text-gray-600 mb-6 text-justify">
              Our founder’s vision is simple yet powerful: to make top-class construction <strong>affordable, organized, and accessible</strong> to everyone.
              From <strong>plot verification</strong> and <strong>architectural design</strong> to <strong>construction</strong>, <strong>interiors</strong>, and <strong>material supply</strong>—we manage every aspect under one trusted roof.
            </p>

            {/* Guarantees as checkmarked list */}
            <span className='font-bold text-xl'>At Attica Infra We Guarantee: </span>
            <ul className="">
              {guarantees.map((item, index) => (
                <li key={index} className="flex items-start text-gray-800">
                  <CheckCircle className="min-w-[20px] min-h-[20px] w-5 h-5 text-green-600 mt-1 mr-2" />
                  <span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* Right: Image aligned to far right */}
          <div className="flex-shrink-0">
            <div style={{ width: "300px" }} className="flex flex-col items-center">
              <div className="overflow-hidden shadow-lg border-4 border-white rounded-lg w-full">
                <img
                  src="./CEO.jpeg"
                  alt="Engineer Sekhar Reddy Muthakana"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-medium text-blue-700 text-center">Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <blockquote className="text-2xl italic text-center text-gray-700">
            “At Attica Infra Services, we don't just build homes—<span className="font-semibold text-blue-600">we build trust, value, and lasting relationships.</span>”
          </blockquote>
        </div>
      </section>

      {/* Get in Touch Section */}
      {/* <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Get in Touch for Your Construction Needs</h2>
            <p className="text-lg mb-6">
              Whether you're starting a new project or seeking professional consultation, we’re here to help turn your vision into reality.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>

          <div
            style={{ height: "400px", width: "400px" }}
            className="rounded-full overflow-hidden shadow-lg border-4 border-white"
          >
            <img
              src="/assets/CEO.jpeg"
              alt="Engineer Sekhar Reddy Muthakana"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;
