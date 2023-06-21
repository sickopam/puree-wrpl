import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Cloud from '../images/cloud.png'
import Cloud2 from '../images/cloud2.png'
import Logo from '../images/Logo.svg'

export default function Logland() {
  return (
    <div className='h-screen bg-[#CFD7DC]'>
        <div className='inline-flex'>
            <Image className='drop-shadow-xl w-[58%] h-fit' src={Cloud}></Image>
            <Image className='mt-12' src={Cloud2}></Image>
        </div>
        <div className='flex justify-center'>
            <div className='space-y-10'>
                <Image src={Logo}></Image>
                <div className='grid space-y-5'>
                    
                        <button className='button grid place-items-center'>
                            <h1 className='font-bold text-white'>Here to buy</h1>
                        </button>
                    
                    <Link href='merchant_log'>
                    <button className='button2 grid place-items-center'>
                        <h1 className='font-bold text-[#666666]'>Here to sell</h1>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
