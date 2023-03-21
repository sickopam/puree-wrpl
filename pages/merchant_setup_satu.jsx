import React from 'react'
import Image from 'next/image'

// import '../styles/merchant_setup.css'

import CornerLogo from '../images/corner-logo.png'
import Merchant from '../images/merchant.png'
import Link from 'next/link'

export default function MerchSetup() {
  return (
    <div className='bg-[#b0b0b0] font-poppins'>
        
          <Image id='corner-logo' className='h-fit' src={CornerLogo}/>
          <Image id='merchant' className='brightness-75' src={Merchant}/>
       

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
                <div className='h-full flex justify-center'>
                  <Link href='/merchant_setup_dua'>
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
