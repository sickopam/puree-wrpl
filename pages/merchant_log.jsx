import React from 'react'
import Image from 'next/image'

import Cloud from '.././images/cloud.png'
import Cloud2 from '.././images/cloud2.png'
import Logo from '.././images/merchant_logo.png'

export default function Merch() {
  return (
    <div className='h-screen bg-[#CFD7DC]'>
        <div className='inline-flex'>
            <Image className='drop-shadow-xl w-[58%] h-fit' src={Cloud}></Image>
            <Image className='mt-12' src={Cloud2}></Image>
        </div>
        <div className='flex justify-center'>
            <div className='space-y-10'>
                <div className='flex justify-center'>
                    <Image className='' src={Logo}></Image>
                </div>
                <div className='grid space-y-5'>
                    <button className='button grid place-items-center'>
                        <h1 className='font-bold text-white'>Register with email</h1>
                    </button>
                    <button className='button2 grid place-items-center'>
                        <h1 className='font-bold text-[#666666]'>Sign in with Google</h1>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
