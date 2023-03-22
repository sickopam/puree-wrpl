import React from 'react'
import Image from 'next/image'

// import '../styles/merchant_setup.css'

import CornerLogo from '../images/corner-logo.png'
import Map from '../images/map.png'
import Link from 'next/link'


export default function DriverSet1() {
  return (
    <div>
        <div className='bg-[#b0b0b0]'>
          <Image id='corner-logo' className='' src={CornerLogo}/>
          <Image id='map' className='brightness-75' src={Map}/>
    </div>

    <div id='box3' className='p-8 sticky'>
        <h1 id='start'>Let your store be known!</h1>
        <p id='account-info' className='pb-10'>Pin point your store's exact location</p>
            <div id='' className='space-y-4'>
                  
              <p className='account-fill'>Address</p>
                <input required type='text' className='fill-example'/>
              <div className='w-full flex justify-evenly'>

                <Link href='/merchant_setup_dua'>
                  <button id='previous-button-sm' className='grid place-items-center'>
                    <p id='previous'>Previous</p>
                  </button>
                </Link>
                <Link href='/merchant_homescreen'>
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
