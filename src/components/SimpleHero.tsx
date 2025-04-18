import ContactButton from "./ContactButton";

const SimpleHero = () => {
  return (

    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Building Your Dreams Into Reality
            </h1>
            <p className="text-lg text-gray-600">
              With over 20 years of experience, we bring excellence and innovation to every construction project.
              Your vision, our expertise.
            </p>
            <div className="space-x-4">
              <ContactButton
                buttonText="Get Started"
                modalTitle="Let's Connect"
                additionalInfo={{
                  propertyType: "Villa",
                  location: "New York",
                  price: "$500,000"
                }}
                onSubmit={(formData) => {
                  console.log('Form submitted:', formData);
                  // Handle form submission
                }}
              />
              <button className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition duration-300">
                Our Projects
              </button>
            </div>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
              alt="Construction Site"
              className="rounded-lg object-cover w-full h-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default SimpleHero