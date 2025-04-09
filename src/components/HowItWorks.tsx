import { Activity, BookOpen, FileText, Home, PenTool, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      number: 1,
      title: "Raise a Request",
      description: "Submit your construction requirements through our platform"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: 2,
      title: "Meet our Expert",
      description: "Discuss your project details with our construction experts"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      number: 3,
      title: "Book with Us",
      description: "Finalize the project details and confirm your booking"
    },
    {
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
      number: 4,
      title: "Receive Designs",
      description: "Get detailed architectural designs and plans"
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      number: 5,
      title: "Track & Transact",
      description: "Monitor construction progress and handle payments"
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      number: 6,
      title: "Settle In",
      description: "Move into your newly constructed space"
    }
  ];

  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How it Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Our house construction steps are simple and easy to understand: Plan – Build – Track – Settle in
          </p>
        </div>

        <div className="relative">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-4">
                  {step.icon}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full border-t-2 border-dashed border-gray-300" />
                )}
                
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
            ))}
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                alt="House construction illustration"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;