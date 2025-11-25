import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaXTwitter, FaGithub } from 'react-icons/fa6'
import { MdArrowOutward } from 'react-icons/md'

const Footer = () => {
  return (
    <div className="flex flex-row justify-evenly items-center mb-20 w-full">
      <a
        href="https://www.linkedin.com/in/akhil-krishnamurthy/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Avatar className="hover:shadow-red-400 hover:shadow-lg transition duration-300">
          <AvatarImage src="/profile-img.jpeg" />
          <AvatarFallback>Me!</AvatarFallback>
        </Avatar>
      </a>

      <a
        href="https://x.com/akhil_krish_"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaXTwitter className="text-white w-[24px] h-[24px] hover:text-red-400 transition duration-300" />
      </a>

      <a
        href="https://github.com/AkhilKrishna16"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub className="text-white w-[24px] h-[24px] hover:text-red-400 transition duration-300" />
      </a>

      <a
        href="/Akhil_Krishnamurthy_2026_Summer_Resume_Internships_2028 copy.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        <button className="relative rounded-md text-black border-none bg-white px-3 py-2 overflow-hidden group">
          <span className="relative z-10 font-semibold group-hover:text-white transition-colors duration-500 flex flex-row items-center">
            Resume
            <MdArrowOutward className="ml-2" />
          </span>
          <div className="absolute inset-0 bg-red-400 translate-y-[90%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
        </button>
      </a>
    </div>
  )
}

export default Footer
