import React, { useContext } from 'react';
import Banner from './Banner';
import GoogleMap from './GoogleMap';
import { ContextProvider } from './AuthProviders/AuthProvider';
import { Link } from 'react-router-dom';


export default function Home() {
  
 


  const {selectedBus} = useContext(ContextProvider);
  console.log(selectedBus);

  return (

    <>

    <Banner/>
    
    <div className='min-h-screen flex flex-col items-center p-4 space-y-8 '>

    <div className='w-full text-center '>
    <h1 className='text-3xl md:text-4xl lg:text-7xl text-gray-800'>Our System <br /> <span className='text-black font-bold'>Always Value</span><br /> <span className='text-blue-600 font-bold'>Our Respected Customers</span></h1><br />
        
    </div>
    {selectedBus && selectedBus.seats ? (
          <div className='grid grid-cols-3 gap-4 p-10 bg-white shadow-xl border-2 border-gray-400 rounded-xl bg-gray-300'>
            {selectedBus.seats.map((seat) => (
              <div 
                key={seat.id} 
                className={`card w-40  shadow-xl border-2 border-gray-400 
                  ${["A2", "B2", "C2", "D2", "E2"].includes(seat.seat_no) ? 'ml-8' : ''}
                  ${
                    seat.status == true ? "bg-gray-500 " : "bg-white"
                  }`}
              >

              <Link to={`/bookseat/${seat.seat_no}/${selectedBus.busNumber}`}>
              <button disabled={seat.status}>
                  <div className="card-body">
                    <h2 className="card-title">{seat.seat_no}</h2>
                  </div>
                </button>
              </Link>
                
              </div>
            ))}

            {/* Display Bus Number */}
            <div className='col-span-3 mx-auto'>
              <p className='text-2xl font-bold border-2 border-gray-400 p-4'>
                Bus Number {selectedBus.busNumber}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-lg text-gray-600 text-center">No Bus Selected</p>
        )}
    </div>

    <GoogleMap/>
    </>
  );
}
