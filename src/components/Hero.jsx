import React from 'react'
import logo from "../assets/Logo.jpg"
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";

function Hero() {
  return (
    <div>
      <div className="w-full sm:w-[95%] sm:mx-auto pr-10 pl-10 md:pr-16 md:pl-16 text-center sm:text-left h-full pt-10 py-24 flex flex-col sm:flex-row justify-center gap-8 items-center">
        <div className="sm:w-[75%] flex flex-col justify-center items-center">
          <div className="">
              <h1 className='font-heroName text-5xl md:text-4xl lg:text-6xl'>Saichandran S</h1>
              <h2 className='font-heroName text-xl md:text-md lg:text-2xl mt-2'>A passionate Frontend Developer building responsive and modern web applications.</h2>
              <div className="flex gap-5 items-center mt-4 justify-center sm:justify-normal">
                {/* <h1 className='font-heroFont text-lg'>Connect with:</h1> */}
                <FaLinkedinIn className='text-4xl hover:bg-blue-500 hover:text-white rounded p-1 transition delay-100 cursor-pointer'/>
                <SlSocialTwitter className='text-4xl hover:text-blue-500 rounded p-1 ease-in-out delay-50 cursor-pointer'/>
                <BsInstagram className='text-4xl hover:bg-orange-400 hover:text-white rounded-lg p-1 transition delay-100 cursor-pointer'/>
              </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-top pt-10 sm:pt-16">
            <img src={logo} className='shadow-2xl shadow-blue-500 h-[300px] w-[300px] sm:h-[180px] sm:w-[180p] md:h-[230px] md:w-[23  0px] lg:h-[500px] lg:w-[500px] object-cover object-top rounded-full border-4-[#bababa]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
0