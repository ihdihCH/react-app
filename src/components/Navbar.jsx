import React,{useState} from 'react'
import{AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav);
    }
    
  return (
    <div className= 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Front End</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Home</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Ressoursec</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Compny</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>About</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/> }
        </div>
        <div className={nav ? 'fixed left-0 top-0 md:hidden w-[60%] h-full borde-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>Front End</h1>
        <ul className='p-4 uppercase'>
            <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>Home</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>Ressoursec</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>Compny</li>
            <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'>About</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar