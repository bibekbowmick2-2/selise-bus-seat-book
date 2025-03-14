import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




export const ContextProvider = createContext();

const AuthProvider = ({ children }) => {

  const [selectedBus, setSelectedBus] = useState([]);
  // const navigate = useNavigate();
  let updatedSelectedBus;
 
  const [buses,setbuses] = useState([
    {
      busNumber: "S098",
      seats: [
        { id: 1, seat_no: "A1",status: false }, { id: 2, seat_no: "A2",status: false }, { id: 3, seat_no: "A3",status: false },
        { id: 4, seat_no: "B1",status: false }, { id: 5, seat_no: "B2",status: false }, { id: 6, seat_no: "B3",status: false },
        { id: 7, seat_no: "C1",status: false }, { id: 8, seat_no: "C2",status: false }, { id: 9, seat_no: "C3",status: false },
        { id: 10, seat_no: "D1",status: false }, { id: 11, seat_no: "D2",status: false }, { id: 12, seat_no: "D3",status: false },
        { id: 13, seat_no: "E1",status: false }, { id: 14, seat_no: "E2",status: false }, { id: 15, seat_no: "E3",status: false }
      ]
    },
    {
      busNumber: "S099",
      seats: [
        { id: 1, seat_no: "A1",status: false }, { id: 2, seat_no: "A2",status: false }, { id: 3, seat_no: "A3",status: false },
        { id: 4, seat_no: "B1",status: false }, { id: 5, seat_no: "B2",status: false }, { id: 6, seat_no: "B3",status: false },
        { id: 7, seat_no: "C1",status: false }, { id: 8, seat_no: "C2",status: false }, { id: 9, seat_no: "C3",status: false },
        { id: 10, seat_no: "D1",status: false }, { id: 11, seat_no: "D2",status: false }, { id: 12, seat_no: "D3",status: false },
        { id: 13, seat_no: "E1",status: false }, { id: 14, seat_no: "E2",status: false }, { id: 15, seat_no: "E3",status: false }
      ]
    },
    {
      busNumber: "S100",
      seats: [
        { id: 1, seat_no: "A1",status: false }, { id: 2, seat_no: "A2",status: false }, { id: 3, seat_no: "A3",status: false },
        { id: 4, seat_no: "B1",status: false }, { id: 5, seat_no: "B2",status: false }, { id: 6, seat_no: "B3",status: false},
        { id: 7, seat_no: "C1",status: false }, { id: 8, seat_no: "C2",status: false }, { id: 9, seat_no: "C3",status: false },
        { id: 10, seat_no: "D1",status: false }, { id: 11, seat_no: "D2",status: false }, { id: 12, seat_no: "D3",status: false },
        { id: 13, seat_no: "E1",status: false }, { id: 14, seat_no: "E2",status: false }, { id: 15, seat_no: "E3",status: false }
      ]
    }
  ]
  )


  useEffect(() => {
    if (selectedBus) {
      console.log("selectedBus is now updated:", selectedBus);
    }
  }, [selectedBus]);


  const handleBusSelection = (busNumber,navigate) => {
    const filteredBus = buses.find((bus) => bus.busNumber == busNumber);
    console.log(filteredBus);
    setSelectedBus(filteredBus);
    navigate("/");
  };


  
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const busNo = e.target.busNo.value;
      const seatNo = e.target.seatNo.value;
    
      // Update buses state immutably
      const updatedBuses = buses.map((bus) => {
        if (bus.busNumber === busNo) {
          // Update the seat's status
          const updatedSeats = bus.seats.map((seat) => {
            if (seat.seat_no === seatNo) {
              alert("Seat Booked Successfully");
              return { ...seat, status: true };
            }
            return seat;
          });
    
          return { ...bus,  seats: updatedSeats  };
        }
        
       
       
        return bus;
      });
    
      setbuses(updatedBuses);
      console.log(updatedBuses);
      console.log(buses);
    
      
       updatedSelectedBus = updatedBuses.find((bus) => bus.busNumber === busNo);
    
      console.log(updatedSelectedBus);
   
    
      setSelectedBus(updatedSelectedBus);
    
      console.log(selectedBus);
      
    };
    
    
    
  


   
  
  


  return (
    <ContextProvider.Provider
      value={{
        buses,
        handleBusSelection,
        selectedBus,
        handleSubmit,
        
       
        
      
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default AuthProvider;
