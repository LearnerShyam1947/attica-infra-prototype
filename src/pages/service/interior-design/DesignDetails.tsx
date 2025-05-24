import React, { useState } from 'react';
import LetsConnect from '../../../components/ui/LetsConnect';
import { showAlert } from '../../../utils/Alerts';

const DesignDetails: React.FC = () => {
  const maxBedrooms = 2;
  const [kitchen, setKitchen] = useState(true);
  const [wardrobes, setWardrobes] = useState(2);
  const [entertainment, setEntertainment] = useState(1);
  const [study, setStudy] = useState(1);
  const [crockery, setCrockery] = useState(1);
  const [floors, setFloors] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSubmit = (contactDetials: any) => {

    const requiredData = {
      kitchen,
      wardrobes,
      entertainment,
      study,
      crockery,
      floors
    };
    const data = {contactDetials, requiredData};
    console.log(data);
    
    // console.log('Submitted vals:', vals);
    // TODO: alert based on response 
    showAlert("success", "your design request placed successfully", "success");
  };

  return (
    <div style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="w-1/2 mx-auto my-auto space-y-6 font-sans p-6 border rounded shadow">
        {/* Kitchen aligned to right */}
        {/* <div className="flex items-center justify-between">
          <div className="text-lg w-full">Kitchen</div>
          <div className="flex justify-end w-full">
            <input
              type="checkbox"
              checked={kitchen}
              onChange={() => setKitchen(!kitchen)}
              className="accent-blue-500 w-5 h-5"
            />
          </div>
        </div> */}
        
        {/* Number of Floors */}
        <div className="flex items-center justify-between">
          <div className="text-lg w-full">No of Floors</div>
          <div className="flex justify-end w-full">
            <input
              type="number"
              min={1}
              value={floors}
              onChange={(e) => setFloors(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 border border-blue-300 hover:border-blue-500 rounded px-2 py-1"
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
            className="w-full bg-blue-500 text-lg text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>

        <LetsConnect onSubmit={handleSubmit} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
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
  <>
    <div className="flex items-center justify-between">
      <div className="text-lg w-full">{label}</div>
      <div className="flex items-center space-x-2 justify-end w-full">
        <button
          onClick={onDecrement}
          className="w-6 h-6 border border-blue-500 text-blue-500 rounded hover:bg-blue-100"
        >
          -
        </button>
        <span className="text-lg">{value}</span>
        <button
          onClick={onIncrement}
          className="w-6 h-6 border border-blue-500 text-blue-500 rounded hover:bg-blue-100"
        >
          +
        </button>
      </div>
    </div>
    {note && <span className="text-xs text-gray-500">{note}</span>}
  </>
);

export default DesignDetails;

