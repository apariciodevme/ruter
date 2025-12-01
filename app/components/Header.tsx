import React from 'react'
import { IoMenu } from 'react-icons/io5'
const Header = () => {
  return (
    <div className="flex items-center justify-between h-18 p-5 bg-secondary">
        <h1 className='text-2xl font-semibold'>
            Ruter #
        </h1>
        
        <button className='px-4 flex cursor-pointer items-center gap-2 py-1.5 bg-button/20 text-[#86AFFF] rounded-full bg text-xl hover:bg-button/30 transition duration-200'>Menu <IoMenu className='w-5 h-5'/> </button>
        
    </div>
  )
}

export default Header