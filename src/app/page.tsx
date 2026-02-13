import Image from "next/image";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import { Analytics } from "@vercel/analytics/react";

import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Analytics />
      <div className="flex flex-col lg:flex-row justify-between items-start min-h-screen">
        <div className="lg:w-[44%] w-full lg:sticky lg:top-0 lg:h-screen lg:max-w-[480px]">
          <div className="flex flex-col justify-center items-start p-6 h-full lg:pr-8">
            <Hero />
            <Footer />
          </div>
        </div>

        <div className="lg:w-[56%] w-full lg:ml-auto lg:pl-12">
          <div className="lg:h-screen lg:overflow-y-auto snap-y snap-mandatory lg:pr-12">
            <div className="snap-start">
              <Experiences />
            </div>

            <div className="snap-start">
              <Projects />
            </div>

            <div className="snap-start">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
