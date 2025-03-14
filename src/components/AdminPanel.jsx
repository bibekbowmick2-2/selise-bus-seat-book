import React, { useContext, useState } from 'react'
import { ContextProvider } from './AuthProviders/AuthProvider';
import { useNavigate } from 'react-router-dom';

export default function AdminPanel() {

  const {buses,handleBusSelection} = useContext(ContextProvider);
  const navigate = useNavigate();
  const [selectedBus, setSelectedBus] = useState("");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4  p-6">
      <div className="bg-cyan-300 shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Admin Panel</h2>

        <form className="space-y-4">
          

          {/* Select Dropdown */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Select Buses</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400 outline-none"
            value={selectedBus}
              onChange={(e) => setSelectedBus(e.target.value)}>
  
              <option value="">Choose a Bus</option>
              {
                buses.map(bus => <option value={bus.busNumber}>{bus.busNumber}</option>)
              }
              
            </select>
          </div>

          {/* Submit Button */}
          {/* <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button> */}
        </form>
      </div>



      <button onClick={()=>handleBusSelection(selectedBus,navigate)}>
      <div tabIndex={0} className="collapse collapse-close bg-cyan-300 border-base-300 border w-[450px]">
      <div className="collapse-title font-semibold">
        {selectedBus ? `Selected Bus: ${selectedBus}` : "No Bus Selected"}
        
        </div>
        
  
</div>
</button>



    </div>
  )
}
