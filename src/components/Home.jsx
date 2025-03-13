import React from 'react'

export default function Home() {

    const busS098 = [
        {
            id: 1,
            seat_no: "A1",
        },

        {
            id: 2,
            seat_no: "A2",
        },

        {
            id: 3,
            seat_no: "A3",
        },

        {
            id: 4,
            seat_no: "B1",
        },

        {
            id: 5,
            seat_no: "B2",
        },

        {
            id: 6,
            seat_no: "B3",
        },

        {
            id: 7,
            seat_no: "C1",
        },

        {
            id: 8,
            seat_no: "C2",
        },

        {
            id: 9,
            seat_no: "C3",
        },

        {
            id: 10,
            seat_no: "D1",
        },

        {
            id: 11,
            seat_no: "D2",
        },

        {
            id: 12,
            seat_no: "D3",
        },

        {
            id: 13,
            seat_no: "E1",
        },

        {
            id: 14,
            seat_no: "E2",
        },

        {
            id: 15,
            seat_no: "E3",
        },

    ]
  return (
    <div className='min-h-screen flex flex-col justify-center items-center p-4'>
    

<div className="hero bg-base-200 min-h-[60vh] max-w-[90vh] p-10 rounded-lg">


  <div className='grid grid-cols-3 gap-4 p-4 '>
   
  {
      busS098.map((bus) => (

        
          <div key={bus.id} className="card w-40 bg-gray-200 shadow-xl border-2 border-gray-400">

             <button>
             <div className="card-body">
                  <h2 className="card-title">{bus.seat_no}</h2>
              </div>
             </button>
          </div>
      ))


  }

  <div className='col-span-3 mx-auto'><p className='text-2xl font-bold border-2 border-outline border-gray-400 p-4'>
  Bus Number S098</p></div>

  </div>
  


  

</div>

     
      
    </div>
  )
}
