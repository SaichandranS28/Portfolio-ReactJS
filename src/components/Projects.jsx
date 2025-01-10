import React from 'react'
import { MarqueeDemo } from './ui/MarqueeDemo'
import { MarqueeDemoVertical } from './ui/MarqueeDemoVertical'

function Projects() {
  return (
    <div>
      <div id='Projects' className="w-full secondary py-24 flex justify-center">
        <div className="w-4/5"> 
            <h1 className='text-5xl font-heroName'>Projects...</h1>
            <div className="hidden lg:block mt-8">
              <MarqueeDemo/>
            </div>
            <div className="lg:hidden mt-8">
              <MarqueeDemoVertical />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

{/* <div className="flex flex-wrap gap-5 mt-8 ">
    <div className="rounded-xl">
        <img src={p1} className='cursor-pointer rounded-xl h-52 w-72 object-cover' alt="" />
    </div>
    <div className="rounded-xl">
        <img src={p2} className='cursor-pointer rounded-xl h-52 w-72 object-cover' alt="" />
    </div>
    <div className="rounded-xl">
        <img src={p3} className='cursor-pointer rounded-xl h-52 w-72 object-fill' alt="" />
    </div>
    <div className="rounded-xl">
        <img src={p4} className='cursor-pointer rounded-xl h-52 w-72 object-fill' alt="" />
    </div>
    <div className="rounded-xl">
        <img src={p5} className='cursor-pointer rounded-xl h-52 w-72 object-fill' alt="" />
    </div>
</div> */}