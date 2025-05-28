// import React, { useState } from 'react';
// import LetsConnect from '../../../components/ui/LetsConnect';
// import { showAlert } from '../../../utils/Alerts';
// import LoadingSpinner from '../../../components/ui/LoadingSpinner';

// const DesignDetails: React.FC = () => {
//   const maxBedrooms = 2;
//   const [kitchen, setKitchen] = useState(true);
//   const [wardrobes, setWardrobes] = useState(2);
//   const [entertainment, setEntertainment] = useState(1);
//   const [study, setStudy] = useState(1);
//   const [crockery, setCrockery] = useState(1);
//   const [floors, setFloors] = useState(1);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleIncrement = (
//     setter: React.Dispatch<React.SetStateAction<number>>,
//     value: number,
//     max?: number
//   ) => {
//     if (max === undefined || value < max) setter(value + 1);
//   };

//   const handleDecrement = (
//     setter: React.Dispatch<React.SetStateAction<number>>,
//     value: number,
//     min = 0
//   ) => {
//     if (value > min) setter(value - 1);
//   };

//   const handleSubmit = async (contactDetials: any) => {
//     setLoading(true);

//     const requiredData = {
//       kitchen,
//       wardrobes,
//       entertainment,
//       study,
//       crockery,
//       floors
//     };
//     const data = {contactDetials, requiredData};
//     console.log(data);
    
//     // console.log('Submitted vals:', vals);
//     // TODO: alert based on response 
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     setLoading(false);
//     showAlert("success", "your design request placed successfully", "success");
//   };

//   return (
//     <>
//       {loading && <LoadingSpinner text='Submitting your request, please wait.......' />}
//       <div style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <div className="w-1/2 mx-auto my-auto space-y-6 font-sans p-6 border rounded shadow">
//           {/* Kitchen aligned to right */}
//           {/* <div className="flex items-center justify-between">
//             <div className="text-lg w-full">Kitchen</div>
//             <div className="flex justify-end w-full">
//               <input
//                 type="checkbox"
//                 checked={kitchen}
//                 onChange={() => setKitchen(!kitchen)}
//                 className="accent-blue-500 w-5 h-5"
//               />
//             </div>
//           </div> */}
      
//           {/* Number of Floors */}
//           <div className="flex items-center justify-between">
//             <div className="text-lg w-full">No of Floors</div>
//             <div className="flex justify-end w-full">
//               <input
//                 type="number"
//                 min={1}
//                 value={floors}
//                 onChange={(e) => setFloors(Math.max(1, parseInt(e.target.value) || 1))}
//                 className="w-20 border border-blue-300 hover:border-blue-500 rounded px-2 py-1"
//               />
//             </div>
//           </div>
//           {/* Unit counters */}
//           <CounterRow
//             label="Wardrobe"
//             value={wardrobes}
//             onIncrement={() => handleIncrement(setWardrobes, wardrobes, maxBedrooms)}
//             onDecrement={() => handleDecrement(setWardrobes, wardrobes)}
//             note="(Number of wardrobes can't exceed the number of bedrooms)"
//           />
//           <CounterRow
//             label="Entertainment unit"
//             value={entertainment}
//             onIncrement={() => handleIncrement(setEntertainment, entertainment)}
//             onDecrement={() => handleDecrement(setEntertainment, entertainment)}
//           />
//           <CounterRow
//             label="Study unit"
//             value={study}
//             onIncrement={() => handleIncrement(setStudy, study)}
//             onDecrement={() => handleDecrement(setStudy, study)}
//           />
//           <CounterRow
//             label="Crockery unit"
//             value={crockery}
//             onIncrement={() => handleIncrement(setCrockery, crockery)}
//             onDecrement={() => handleDecrement(setCrockery, crockery)}
//           />
//           {/* Send button */}
//           <div className="pt-4">
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="w-full bg-blue-500 text-lg text-white py-2 px-4 rounded hover:bg-blue-600 transition"
//             >
//               Send
//             </button>
//           </div>
//           <LetsConnect onSubmit={handleSubmit} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//         </div>
//       </div>
//     </>
//   );
// };

// type CounterRowProps = {
//   label: string;
//   value: number;
//   onIncrement: () => void;
//   onDecrement: () => void;
//   note?: string;
// };

// const CounterRow: React.FC<CounterRowProps> = ({
//   label,
//   value,
//   onIncrement,
//   onDecrement,
//   note
// }) => (
//   <>
//     <div className="flex items-center justify-between">
//       <div className="text-lg w-full">{label}</div>
//       <div className="flex items-center space-x-2 justify-end w-full">
//         <button
//           onClick={onDecrement}
//           className="w-6 h-6 border border-blue-500 text-blue-500 rounded hover:bg-blue-100"
//         >
//           -
//         </button>
//         <span className="text-lg">{value}</span>
//         <button
//           onClick={onIncrement}
//           className="w-6 h-6 border border-blue-500 text-blue-500 rounded hover:bg-blue-100"
//         >
//           +
//         </button>
//       </div>
//     </div>
//     {note && <span className="text-xs text-gray-500">{note}</span>}
//   </>
// );

// export default DesignDetails;

import React, { useState } from 'react';
import LetsConnect from '../../../components/ui/LetsConnect';
import { showAlert } from '../../../utils/Alerts';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';

const DesignDetails: React.FC = () => {
  const maxBedrooms = 2;
  const [kitchen, setKitchen] = useState(true);
  const [wardrobes, setWardrobes] = useState(2);
  const [entertainment, setEntertainment] = useState(1);
  const [study, setStudy] = useState(1);
  const [crockery, setCrockery] = useState(1);
  const [floors, setFloors] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleIncrement = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    max?: number
  ) => {
    if (max === undefined || value < max) setter(value + 1);
  };

  const handleDecrement = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    min = 0
  ) => {
    if (value > min) setter(value - 1);
  };

  const handleSubmit = async (contactDetails: any) => {
    setLoading(true);

    const requiredData = {
      kitchen,
      wardrobes,
      entertainment,
      study,
      crockery,
      floors
    };
    const data = { contactDetails, requiredData };
    console.log(data);

    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    showAlert("success", "Your design request placed successfully", "success");
  };

  return (
    <>
      {loading && <LoadingSpinner text="Submitting your request, please wait..." />}
      <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto space-y-6 font-sans p-4 sm:p-6 md:p-8 border rounded-lg shadow-lg bg-white">
          {/* Number of Floors */}
          <div className="flex items-center justify-between">
            <div className="text-base sm:text-lg font-medium w-full">No of Floors</div>
            <div className="flex justify-end w-full">
              <input
                type="number"
                min={1}
                value={floors}
                onChange={(e) => setFloors(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 sm:w-24 border border-blue-300 hover:border-blue-500 rounded px-2 py-1 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Unit counters */}
          <CounterRow
            label="Wardrobe"
            value={wardrobes}
            onIncrement={() => handleIncrement(setWardrobes, wardrobes, maxBedrooms)}
            onDecrement={() => handleDecrement(setWardrobes, wardrobes)}
            note="(Number of wardrobes can't exceed the number of bedrooms)"
          />
          <CounterRow
            label="Entertainment unit"
            value={entertainment}
            onIncrement={() => handleIncrement(setEntertainment, entertainment)}
            onDecrement={() => handleDecrement(setEntertainment, entertainment)}
          />
          <CounterRow
            label="Study unit"
            value={study}
            onIncrement={() => handleIncrement(setStudy, study)}
            onDecrement={() => handleDecrement(setStudy, study)}
          />
          <CounterRow
            label="Crockery unit"
            value={crockery}
            onIncrement={() => handleIncrement(setCrockery, crockery)}
            onDecrement={() => handleDecrement(setCrockery, crockery)}
          />
          {/* Send button */}
          <div className="pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-blue-500 text-white text-base sm:text-lg py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
          <LetsConnect onSubmit={handleSubmit} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>
    </>
  );
};

type CounterRowProps = {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  note?: string;
};

const CounterRow: React.FC<CounterRowProps> = ({
  label,
  value,
  onIncrement,
  onDecrement,
  note
}) => (
  <div>
    <div className="flex items-center justify-between">
      <div className="text-base sm:text-lg font-medium w-full">{label}</div>
      <div className="flex items-center space-x-2 sm:space-x-3 justify-end w-full">
        <button
          onClick={onDecrement}
          className="w-8 h-8 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          -
        </button>
        <span className="text-base sm:text-lg font-medium">{value}</span>
        <button
          onClick={onIncrement}
          className="w-8 h-8 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          +
        </button>
      </div>
    </div>
    {note && <span className="text-xs sm:text-sm text-gray-500">{note}</span>}
  </div>
);

export default DesignDetails;
