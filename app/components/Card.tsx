import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className='flex relative hover:text-button  flex-col mt-20 cursor-pointer hover: rounded-3xl bg-secondary items-center justify-center  gap-5 m-5 transition duration-300  hover:bg-[#3d3e45]  '>
      <Image
      src={'/b50ea71cf5e180031ac6fa12e31dd150a5de0de0-1280x854.jpg'}
      height={800}
      width={800}
      alt='image'      
      className='w-full h-fit rounded-t-3xl'
      />

      {/*Text and Button*/}
      <div className='flex flex-col items-center justify-center p-5 gap-2 h-full '>
      <h1 className='text-2xl font-semibold'>Night-time metro from Saturday-Sunday</h1>
      <p className='text-md text-gray-400 text-center'>From November 16thto December 28th, you can take the metro, <br /> night to sunday on lines 2 and 3.</p>
      <button className='px-4 mt-4 flex cursor-pointer items-center gap-2 py-1.5 bg-button/20 text-[#86AFFF] rounded-full bg text-xl hover:bg-button/30 transition duration-200'>More information</button>
      </div>
   
    </div>
  )
}

export default Card