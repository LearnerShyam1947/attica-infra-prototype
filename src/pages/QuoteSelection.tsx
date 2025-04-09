import { UserPlus, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuoteSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Choose Your Quote Type</h1>
          <p className="text-xl text-gray-600">Select how you want to proceed with your construction project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Single Quote Option */}
          <div 
            onClick={() => navigate('/single-quote')}
            className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <UserPlus className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Single Quote</h2>
              <p className="text-gray-600 mb-6">
                Get a detailed quote from one of our trusted builders. Perfect for focused, straightforward projects.
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Direct communication
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Faster process
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Personalized attention
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                Get Single Quote
              </button>
            </div>
          </div>

          {/* Multiple Quotes Option */}
          <div 
            onClick={() => navigate('/builders')}
            className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Multiple Quotes</h2>
              <p className="text-gray-600 mb-6">
                Compare quotes from multiple builders to find the best match for your construction needs.
              </p>
              <ul className="text-left text-gray-600 space-y-2 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Compare prices
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Multiple options
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Best value selection
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                Get Multiple Quotes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSelection;