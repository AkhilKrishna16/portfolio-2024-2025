import Image from "next/image";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer"

import Projects from '@/components/Projects'
import Experiences from '@/components/Experiences'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main>
      <div className="flex lg:flex-row justify-between items-center h-screen">
        <div className='w-1/2 flex flex-col justify-evenly items-center fixed'>
          <Hero />
          <Footer />
        </div>
        

        <div className='w-1/2 ml-auto'>
          <div className='h-screen overflow-y-auto snap-y snap-mandatory'>

            <div className="snap-start">
              <Experiences />
            </div>

            <div className='snap-start'>
              <Projects />
            </div>

            <div className='snap-start'>
              <Skills />
            </div>
          </div>
        </div>

      </div>
      
    </main>
  );
}
