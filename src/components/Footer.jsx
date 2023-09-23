import React from 'react'
import {FaGithubSquare, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare} from "react-icons/fa"
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-10 px-2  text-gray-300 text-center'>
        <div>
        <h1 className='text-[#00df9a] text-3xl  font-bold md:py-6'>Front End</h1>
        <p className='py-4'> le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine </p>
        <div className='flex w-[100%] justify-center items-center gap-4 cursor-pointer '>
            <FaFacebookSquare size={30} className='hover:text-[#00df9a] duration-400 ease-in'/>
            <FaInstagramSquare size={30} className='hover:text-[#00df9a] duration-400 ease-in'/>
            <FaTwitterSquare size={30} className='hover:text-[#00df9a] duration-400 ease-in'/>
            <FaYoutubeSquare size={30} className='hover:text-[#00df9a] duration-400 ease-in'/>
            <FaGithubSquare size={30}  className='hover:text-[#00df9a] duration-400 ease-in'/>
        </div>
        </div>
    </div>
  )
}

export default Footer