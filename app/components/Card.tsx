import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 p-5 w-full h-96 bg-[#2E2F36] rounded-2xl '>
      <Image
      src={'/'}
      height={100}
      width={100}
      alt='image'      
      />
      <h1>Night-time metro from Saturday-Sunday</h1>
      <p>From November 16thto December 28th, you can take the metro, night to sunday on lines 2 and 3.</p>
      <button>More information</button>
    </div>
  )
}

export default Card