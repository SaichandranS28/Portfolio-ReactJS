import React from 'react'
import about from "../assets/AboutMe.png"
import { AnimatedSubscribeButtonDemo } from './ui/AnimatedSubscribeButtonDemo'

function About() {
  return (
    <div id='About' className='primary flex sm:flex-row justify-center py-24'>
      <div className="w-[95%] flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <img src={about} className='h-[80%] w-[80%] rounded-2xl' alt="" />
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center text-white">
            <div className="py-12 sm:pr-10">
              <h1 className='font-heroName text-5xl mb-5 text-center'>About me</h1>
              <p class="text-[#dedede] font-heroName text-lg leading-relaxed mb-4 text-center sm:text-justify">I'm a <strong class="text-blue-500">Front-End Developer</strong> with a passion for creating modern, responsive, and interactive websites. I specialize in <strong className='text-white'>ReactJS</strong>, <strong className='text-white'>TailwindCSS</strong>, <strong className='text-white'>HTML</strong>, <strong className='text-white'>CSS</strong>, and <strong className='text-white'>JavaScript</strong>.</p> 
              <p class="text-[#dedede] font-heroName text-lg leading-relaxed text-center sm:text-justify">I love bringing ideas to life through clean code and engaging designs. My focus is on delivering user-friendly, performance-driven web experiences that <span className='font-heroFont'>look great on any device</span>.</p>
              <div className="mt-5 flex justify-center">
                <a href="src\assets\Resume.pdf" download><AnimatedSubscribeButtonDemo /></a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
