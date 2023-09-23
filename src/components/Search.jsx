import React from 'react'

const Search = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
            <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Search Now And Contact Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row justify-between items-center w-full'>
                    <input className='p-3 w-full flex rounded-md text-black' type="name" placeholder='Search now'/>
                    <button className='bg-[#00df9a] w-[200px]  rounded-md font-medium my-6 mx-auto py-3 ml-4 px-6 text-black'>Search Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search