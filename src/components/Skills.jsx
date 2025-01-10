import React from 'react'
import { IconCloudDemo } from './ui/IconCloudDemo'
import { FadeTextDemo } from './ui/FadeTextDemo'

function Skills() {
  return (
    <div>
        <div id='Skills' className="w-full primary flex justify-center items-center">
            <div className="w-4/5 sm:1/2 flex flex-col sm:flex-row justify-between py-24">
                <div className="hidden sm:block w-1/2 flex-row justify-end">
                    <div className="">
                        <IconCloudDemo />
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-white font-heroName flex justify-center items-center">
                    <div className="">
                        <h1 className='text-4xl'>I Know these....</h1>
                        <div className="mt-10 sm:w-1/2 sm:flex sm:flex-col sm:justify-center pl-10">
                            <FadeTextDemo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills