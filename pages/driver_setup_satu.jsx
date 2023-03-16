import React from 'react'
import Image from 'next/image'

// import '../styles/merchant_setup.css'

import CornerLogo from '../images/corner-logo.png'
import Driver from '../images/driver.png'
import Link from 'next/link'


export default function DriverSet1() {
  return (
    <div className='bg-[#b0b0b0] font-poppins'>
        <div className='inline-flex container'>
          <Image id='corner-logo' className='h-fit' src={CornerLogo}/>
          <Image id='driver' className='brightness-75' src={Driver}/>
        </div>

    <div id='box' className='p-8 sticky'>
        <h1 id='start'>Start it up!</h1>
        <p id='account-info' className='pb-10'>Provide your account information</p>
            <form id='' className=''>
              <div className='space-y-4'>
                <p className='account-fill'>Email</p>
                  <input type='email' required/>
                    {/* <div className='line'/> */}

                <p className='account-fill'>Phone Number</p>
                  <input type='tel' required/>
                    {/* <div className='line'/> */}

                <p className='account-fill'>Password</p>
                  <input type='password' required/>
                    {/* <div className='line'/> */}
                    
                <p className='account-fill'>Confirm Password</p>
                  <input type='password' required/>
                      {/* <div className='line'/> */}
                <div className='w-full flex justify-center'>
                  <Link href='/driver_setup_dua'>
                    <button id='next-button' className='grid place-items-center'>
                      <p id='next'>Next</p>
                    </button>
                  </Link>
                </div>                
              </div>
            </form>
        </div>
    </div>
  )
}
