import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import BlurFade from "@/components/ui/blur-fade";
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollProgressDemo from './components/ui/ScrollProgressDemo'
import { ChevronUp } from 'lucide-react'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <BlurFade delay={0.15} inView>
        <NavBar />
      </BlurFade>
      <ScrollProgressDemo />
      <BlurFade className="hidden md:block" delay={0.15 * 2} inView>
        <Hero />
      </BlurFade>
      <div className="md:hidden">
        <Hero />
      </div>
      <BlurFade delay={0.15 * 2} inView>
        <About />
      </BlurFade>
      <BlurFade delay={0.15 * 2.5} inView>
        <Education />
      </BlurFade>
      <BlurFade delay={0.15 * 3} inView>
        <Skills />
      </BlurFade>
      <BlurFade delay={0.15 * 3.5} inView>
        <Projects />
      </BlurFade>
      <BlurFade delay={0.15 * 4.0} inView>
        <Contact />
      </BlurFade>
      <Footer />
      <a href="#Navbar"><div className="w-[70px] h-[70px] flex justify-center items-center fixed bottom-10 right-6 ">
        <div className="w-12 h-12 hover:w-14 hover:h-14 flex justify-center items-center rounded-full cursor-pointer bg-yellow-300">
          <ChevronUp color="black" className='hover:size-8' />
        </div>
      </div></a>
    </div>
  )
}

export default App
