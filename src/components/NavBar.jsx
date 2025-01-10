import React, { useState } from 'react'
import { SlMenu } from "react-icons/sl";


function NavBar() {
  let [barStatus, setBarStatus] = useState(false)
  function menuHandler(){
    setBarStatus(!barStatus)
  }
  return (
    <div>
        <div id='Navbar' className="relative font-heroName md:text-xl primary w-full flex justify-between items-center px-5 border md:pr-4 lg:pr-44 md:border-none md:justify-end py-2 md:py-5 md:pt-7 pb-4">
            <div className="hidden md:block">
                <ul className='flex gap-8'>
                    <li><a href="#Hero" className='border-b-2 border-primary text-white pb-3 px-2 hover:border-b-2 hover:border-b-yellow-300'>Home</a></li>
                    <li><a href="#About" className='border-b-2 border-primary text-white pb-3 px-2 hover:border-b-2 hover:border-b-yellow-300'>About</a></li>
                    <li><a href="#Education" className='border-b-2 border-primary text-white pb-3 px-2 hover:border-b-2 hover:border-b-yellow-300'>Education</a></li>
                    <li><a href="#Skills" className='border-b-2 border-primary text-white pb-3 px-2 hover:border-b-2 hover:border-b-yellow-300'>Skills</a></li>
                    <li><a href="#Projects" className='border-b-2 border-primary text-white pb-3 px-2 hover:border-b-2 hover:border-b-yellow-300'>Projects</a></li>
                    <li><a href="#Contact" className='border-b-2 border-primary text-white pb-3 px-2 hover:border-b-2 hover:border-b-yellow-300'>Contact</a></li>
                </ul>
            </div>
            <div className="block md:hidden text-white">
              <h1 className='font-logoFont text-2xl font-semibold text-yellow-400'>Saichandran</h1>
            </div>
            <div className="block md:hidden p-2 rounded-full hover:bg-white ">
              <SlMenu onClick={menuHandler} className='text-xl text-white hover:text-black'/>
            </div>
            { 
             barStatus 
             ?  
              <div className="absolute top-12 left-0 right-0 text-center text-white w-full bg-yellow-400 block md:hidden">
                  <ul className='flex flex-col border text-center'>
                      <li className='border-b py-2'><a href="#Home">Home</a></li>  
                      <li className='border-b py-2'><a href="#About">About</a></li>
                      <li className='border-b py-2'><a href="#Education">Education</a></li>
                      <li className='border-b py-2'><a href="#Projects">Projects</a></li>
                      <li className='border-b py-2'><a href="#Skills">Skills</a></li>
                      <li className='border-b py-2'><a href="#Contact">Contact</a></li>
                  </ul>
              </div>
            :
              ""
            }
        </div>
    </div>
  )
}

export default NavBar
