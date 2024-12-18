import React from 'react'
import ed1 from "../assets/AVL.jpg"
import ed2 from "../assets/Kalashetra.jpg"
import ed3 from "../assets/SEC.png"
import education from "../assets/Education.webp" 

function Education() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-[85%] py-24 flex flex-col sm:flex-row justify-between items-center">
          <div className="w-3/5 p-6 mx-auto">
            <div className="flex flex-col">
              <h1 className='font-heroName text-5xl'>Education</h1>
              <div className="mt-10 flex flex-col items-center">
                
                <div className="flex flex-col justify-center sm:justify-start gap-3 sm:gap-10 items-center sm:flex-row p-2 w-4/5 shadow-2xl sm:items-center sm:hover:shadow-green-500 cursor-pointer">
                  <img src={ed3} className='h-24 border-2 border-blue-200 rounded-full' alt="" />
                  <div className="font-logoFont font-light text-center">
                    <h1 className='font-heroName text-xl'>Saveetha Engineering College</h1>
                    <p className='font-heroName'>( B.E CSE )</p>
                    <p>2020-2024</p>
                    <p>Scored - 82.6 %</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center sm:justify-start mt-5 gap-3 sm:gap-10 items-center sm:flex-row p-2 w-4/5 shadow-2xl sm:items-center sm:hover:shadow-green-500 cursor-pointer">
                  <img src={ed2} className='h-24 rounded-full' alt="" />
                  <div className="font-logoFont font-light flex flex-col text-center">
                    <h1 className='font-heroName text-xl'>Kalashetra Matriculation Hr Sec School</h1>
                    <p className='font-heroName'>( HSC )</p>
                    <p>2019-2020</p>
                    <p>Scored - 77.5 %</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center sm:justify-start mt-5 gap-3 sm:gap-10 items-center sm:flex-row p-2 w-4/5 shadow-2xl sm:items-center sm:hover:shadow-green-500 cursor-pointer">
                  <img src={ed1} className='h-24 rounded-full' alt="" />
                  <div className="font-logoFont font-light flex flex-col text-center">
                    <h1 className='font-heroName text-xl'>AVL Matriculation Hr Sec School</h1>
                    <p className='font-heroName'>( SSLC )</p>
                    <p>2017-2018</p>
                    <p>Scored : 91.5 %</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="hidden md:block w-2/5">
            <div className="flex justify-center">
              <img src={education} className='h-full rounded-xl' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;
