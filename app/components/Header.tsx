'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMenu, IoClose, IoSearch } from 'react-icons/io5'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    'Plan journey',
    'About out tickets',
    'School transport',
    'Help and contact',
    'About us',
    'Log in'
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="flex items-center justify-between  h-18 p-5 bg-secondary relative z-50">
        <h1 className='text-2xl font-semibold'>
            Ruter#
        </h1>
        
        <button 
          onClick={toggleMenu}
          className='px-4 flex cursor-pointer items-center gap-2 py-1.5 bg-button/20 text-[#86AFFF] rounded-full bg text-xl hover:bg-button/30 transition duration-200'
        >
          Menu {isMenuOpen ? <IoClose className='w-6 h-6'/> : <IoMenu className='w-5 h-5'/>}
        </button>
      </div>

      {/* Side Navigation Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            style={{ backgroundColor: 'var(--background-items)' }}
            onClick={toggleMenu}
          />
          
          {/* Side Menu */}
          <nav className="fixed inset-0 z-40 flex flex-col pt-20">
            {/* Search bar at the top of the side menu */}
            <div className="w-full px-6 mb-4">
              
            <div className='relative'>
          <IoSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-200' size={24} />
          <input
            type="text"
            id="to"
            placeholder="Search Ruter.no"
            className='w-full p-3 pl-12 rounded-3xl bg-secondary border-neutral-500 border focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-neutral-400 text-md'
          />
        </div>
            </div>

            {/* Menu items with full-width borders */}
            {menuItems.map((item, index) => (
              <div key={index} className="relative w-full">
                {/* Border that spans full viewport width */}
                <div className="absolute left-0 " style={{ width: '100vw', left: '50%', transform: 'translateX(-50%)' }} />
                <Link
                  href="#"
                  className="block text-lg font-light py-4 px-6 relative"
                  style={{ color: 'var(--foreground)' }}
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
                <div className='w-full h-[0.5px] bg-neutral-500'></div>
              </div>
            ))}
          </nav>
        </>
      )}
    </>
  )
}

export default Header