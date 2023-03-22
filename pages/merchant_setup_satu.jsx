import React from 'react'
import Image from 'next/image'

// import '../styles/merchant_setup.css'

import CornerLogo from '../images/corner-logo.png'
import Merchant from '../images/merchant.png'
import Link from 'next/link'

export default function MerchSetup() {
  return (
    <div>
    <div className='bg-[#b0b0b0] h-64'>
      <Image id='merchant' className='' src={Merchant}/>
      <Image id='corner-logo' className='-mt-96' src={CornerLogo}/>
    </div>   

    <div className='p-8 sticky bg-white rounded-t-3xl -mt-8'>
        <h1 id='start'>Start it up!</h1>
        <p className='pb-10 font-extralight text-xs mt-2 text-gray-600'>Provide your account information</p>
            <form className='mt-4'>
              <div className='space-y-4'>
                <p className=''>Email</p>
                  <input type='email' placeholder='jane_d@gmail.com' class="placeholder-gray-500 placeholder-opacity-8" required/>

                <p className='account-fill'>Phone Number</p>
                  <input type='tel' placeholder='+628138764826' class="placeholder-gray-500 placeholder-opacity-80" required/>

                <p className='account-fill'>Password</p>
                  <input type='password'required/>
                    
                <p className='account-fill'>Confirm Password</p>
                  <input type='password' required/>

                <div className='h-full flex justify-center'>
                  <Link href='/merchant_setup_dua'>
                    <button id='next-button' className='grid place-items-center mt-5'>
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
