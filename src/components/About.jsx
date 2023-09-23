import React from 'react'
import portfolio from '../assets/portfolio.jpg'
const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={portfolio} alt="img-portfolio" />
            <div className='flex flex-col justify-center p-4'>
                <h2 className='text-[#00df9a] md:text-4xl sm:text-3xl text-2xl '>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatu</p>
                        <button className='bg-black w-[150px]  rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default About