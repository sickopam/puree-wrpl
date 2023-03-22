import React from 'react'
import Image from 'next/image'

// import '../styles/merchant_setup.css'

import CornerLogo from '../images/corner-logo.png'
import Merchant from '../images/merchant.png'
import Link from 'next/link'


export default function DriverSet1() {
  return (
    <div>
        <div className='bg-[#b0b0b0] h-64'>
          <Image id='merchant' className='brightness-75' src={Merchant}/>
          <Image id='corner-logo' className='-mt-96' src={CornerLogo}/>
        </div>  

    <div className='p-8 sticky bg-white rounded-t-3xl -mt-8'>
        <h1 id='start'>Tell us about your store!</h1>
        <p className='pb-10 font-extralight text-xs mt-4 text-gray-600'>Provide your store's information</p>
            <div id='' className='space-y-4'>

              <p className='account-fill'>Store Name</p>
                <input required type='email' className='fill-example'/>

              <p className='account-fill'>Province</p>
                <select required name='province' className='fill-example'>
                    <option>Jakarta, D.K.I</option>
                </select>
                  

              <p className='account-fill'>City/Region</p>
              <select required name='city' className='fill-example'>
                    <option>Jakarta Selatan</option>
                </select>
                  
              <p className='account-fill'>Address</p>
                <input required type='text' className='fill-example'/>
              <div className='w-full flex justify-evenly pt-10'>

                <Link href='/merchant_setup_satu'>
                  <button id='previous-button-sm' className='grid place-items-center'>
                    <p id='previous'>Previous</p>
                  </button>
                </Link>
                <Link href='/merchant_setup_tiga'>
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
