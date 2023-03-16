import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Cloud from '../images/cloud.png'
import Cloud2 from '../images/cloud2.png'
import Logo from '../images/logo_driver.png'
import Road from '../images/road.png'

export default function DriverLand() {
  return (
    <div className='bg-[#CFD7DC] h-screen overflow-y-hidden grid place-items-center font-poppins'>
        <div className='w-screen grid place-items-center w-full'>
            <div className='flex justify-center pb-12 h-[48vh] items-end'>
                <Image className='h-fit' src={Logo}></Image>
            </div>
            <div className='grid space-y-7 justify-center'>
                <Link href='/driver_setup_satu'>
                    <button className='button text-center'>
                        <h1 className='font-bold text-white'>Register with email</h1>
                    </button>
                </Link>
                <button className='button2 text-center'>
                    <h1 className='font-bold text-[#666666]'>Sign in with Google</h1>
                </button>
            </div>
            <div className=''><div className='road'/></div>
            {/* <Image className='w-full' src={Road}></Image> */}
        </div>
    </div>
  )
}
