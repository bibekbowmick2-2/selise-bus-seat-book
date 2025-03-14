import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";




export const ContextProvider = createContext();

const AuthProvider = ({ children }) => {

  const [selectedBus, setSelectedBus] = useState([]);
  // const navigate = useNavigate();
 
  const buses = [
    {
      busNumber: "S098",
      seats: [
        { id: 1, seat_no: "A1" }, { id: 2, seat_no: "A2" }, { id: 3, seat_no: "A3" },
        { id: 4, seat_no: "B1" }, { id: 5, seat_no: "B2" }, { id: 6, seat_no: "B3" },
        { id: 7, seat_no: "C1" }, { id: 8, seat_no: "C2" }, { id: 9, seat_no: "C3" },
        { id: 10, seat_no: "D1" }, { id: 11, seat_no: "D2" }, { id: 12, seat_no: "D3" },
        { id: 13, seat_no: "E1" }, { id: 14, seat_no: "E2" }, { id: 15, seat_no: "E3" }
      ]
    },
    {
      busNumber: "S099",
      seats: [
        { id: 1, seat_no: "A1" }, { id: 2, seat_no: "A2" }, { id: 3, seat_no: "A3" },
        { id: 4, seat_no: "B1" }, { id: 5, seat_no: "B2" }, { id: 6, seat_no: "B3" },
        { id: 7, seat_no: "C1" }, { id: 8, seat_no: "C2" }, { id: 9, seat_no: "C3" },
        { id: 10, seat_no: "D1" }, { id: 11, seat_no: "D2" }, { id: 12, seat_no: "D3" },
        { id: 13, seat_no: "E1" }, { id: 14, seat_no: "E2" }, { id: 15, seat_no: "E3" }
      ]
    },
    {
      busNumber: "S100",
      seats: [
        { id: 1, seat_no: "A1" }, { id: 2, seat_no: "A2" }, { id: 3, seat_no: "A3" },
        { id: 4, seat_no: "B1" }, { id: 5, seat_no: "B2" }, { id: 6, seat_no: "B3" },
        { id: 7, seat_no: "C1" }, { id: 8, seat_no: "C2" }, { id: 9, seat_no: "C3" },
        { id: 10, seat_no: "D1" }, { id: 11, seat_no: "D2" }, { id: 12, seat_no: "D3" },
        { id: 13, seat_no: "E1" }, { id: 14, seat_no: "E2" }, { id: 15, seat_no: "E3" }
      ]
    }
  ];



  const handleBusSelection = (busNumber,navigate) => {
    const filteredBus = buses.find((bus) => bus.busNumber == busNumber);
    console.log(filteredBus);
    setSelectedBus(filteredBus);
    navigate("/");
  };
  


  return (
    <ContextProvider.Provider
      value={{
        buses,
        handleBusSelection,
        selectedBus
       
        
      
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default AuthProvider;
