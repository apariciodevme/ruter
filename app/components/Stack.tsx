import Link from 'next/link'
import React from 'react'

const Stack = () => {
    return (
        <div className='flex flex-col space-y-5 items-center justify-center p-8 bg-[#202126] rounded-xl' >
            <div className='p-5 w-full rounded-xl bg-[#2e2f36] hover:bg-[#3d3e45] '>
                <Link href={'/'}>
                    <span></span>
                    <h2>
                        Abour the metro project
                    </h2>
                    <span></span>

                </Link>


            </div>
           
        </div>
    )
}

export default Stack