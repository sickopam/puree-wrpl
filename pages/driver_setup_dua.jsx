import React from 'react'
import Image from 'next/image'

// import '../styles/merchant_setup.css'

import CornerLogo from '../images/corner-logo.png'
import Driver from '../images/driver.png'
import Link from 'next/link'


export default function DriverSet1() {
  return (
    <div className='bg-[#b0b0b0]'>
        <div className='inline-flex container'>
          <Image id='corner-logo' className='h-fit' src={CornerLogo}/>
          <Image id='driver' className='brightness-75' src={Driver}/>
        </div>

    <div id='box' className='p-8 sticky'>
        <h1 id='start'>Tell us about yourself!</h1>
        <p id='account-info' className='pb-10'>Provide your personal information</p>
            <div id='' className='space-y-4'>

              <p className='account-fill'>First Name</p>
                <input required type='email' className='fill-example'/>
                  {/* <div className='line'/> */}

              <p className='account-fill'>Last Name</p>
                <input required type='tel' className='fill-example'/>
                  {/* <div className='line'/> */}

              <p className='account-fill'>Gender</p>
                <input required type='password' className='fill-example'/>
                  {/* <div className='line'/> */}
                  
              <p className='account-fill'>Birthday</p>
                <input required type='password' className='fill-example'/>
                    {/* <div className='line'/> */}
              <div className='w-full flex justify-evenly'>

                <Link href='/driver_setup_satu'>
                  <button id='previous-button-sm' className='grid place-items-center'>
                    <p id='previous'>Previous</p>
                  </button>
                </Link>
                <Link href='/driver_setup_tiga'>
                  <button id='next-button-sm' className='grid place-items-center'>
                    <p id='next'>Next</p>
                  </button>
                </Link>
                
              </div>
            </div>
        </div>
    </div>
  )
}
