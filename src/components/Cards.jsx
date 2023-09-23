import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-2xl text-black font-bold text-center py-8'>Basic</h2>
                <p className='text-center text-4xl font-bold'>10$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1 Site Web</p>
                    <p className='py-2 border-b mx-8'>1 domaaine</p>
                    <p className='py-2 border-b mx-8'>Support</p>
                </div>
                <button className='bg-[#00df9a] w-[150px]  rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-2xl  text-blue-500 font-bold text-center py-8'>Standard</h2>
                <p className='text-center text-4xl font-bold'>20$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>2 Site Web</p>
                    <p className='py-2 border-b mx-8'>2 domaaine</p>
                    <p className='py-2 border-b mx-8'>Support</p>
                </div>
                <button className='bg-[#00df9a] w-[150px]  rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <h2 className='text-2xl font-bold text-yellow-400 text-center py-8'>Premium</h2>
                <p className='text-center text-4xl font-bold'>50$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>4 Site Web</p>
                    <p className='py-2 border-b mx-8'>4 domaaine</p>
                    <p className='py-2 border-b mx-8'>Support</p>
                </div>
                <button className='bg-[#00df9a] w-[150px]  rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Cards