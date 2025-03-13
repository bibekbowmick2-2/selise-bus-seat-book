
import img1 from "../assets/homebg.png"
import img2 from "../assets/home-background.png"
import im2 from '../assets/hero_image_4.png'
import { Slide } from "react-awesome-reveal";
import './Banner.css'
export default function Banner() {
  return (
    <div className='w-full h-[900px] md:h-[800px] lg:h-[750px] relative'>
      <img className='hidden md:block lg:block md:w-full md:h-full lg:w-full lg:h-full' src={img1} alt="" />
      <img className='block md:hidden lg:hidden w-full h-full' src={img2} alt="" />
      <div className="absolute top-[10%] md:top-[15%] lg:top-[10%] left-0 w-full lg:h-[600px] flex flex-col md:flex-row lg:flex-row justify-evenly items-center p-5">
       <Slide direction="left">
        <div className='w-full md:w-[400px] lg:w-[600px] '>
          <h1 className='text-3xl md:text-4xl lg:text-7xl text-gray-800'>Our System <br /> <span className='text-black font-bold'>Will Grow</span><br /> <span className='text-blue-600 font-bold'>Your User Experience</span></h1><br />
        
          <p className='hidden md:block lg:block text-xl text-gray-800 animate-pulse'>
          It provides real-time seat availability, secure payment options, and instant booking confirmations, enhancing the travel experience.
          </p><br />
          <div className='flex flex-row gap-2 items-center'>
            <input
              type="text"
              placeholder="Type here"
              className="p-3 rounded-xl w-full border-none" />
            <button className='btn bg-orange-400 text-white border-none animate-bounce'>Send Invitation</button>
          </div>
        </div>
        </Slide>
        <Slide direction="right">
        <div id='imdiv' className='w-full md:w-[220px] lg:w-[420px] h-full '>
          <img className='w-9/12 lg:ml-3 md:w-full lg:w-[60%] h-3/4 mt-[15%]' src={im2} />
        </div>
        </Slide>
      </div>


    </div>
  )
}
