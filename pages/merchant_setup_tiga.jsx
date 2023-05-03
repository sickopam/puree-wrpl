import React from 'react'
import Image from 'next/image'
// import '../styles/merchant_setup.css'
import CornerLogo from '../images/corner-logo.png'
import Merchant from '../images/merchant.png'
import Link from 'next/link'
import Maps from '@/components/map'


export default function MerchantSetup3() {
  return (
    <div>
        <div className='bg-[#b0b0b0]'>
          <Image id='merchant' className='' src={Merchant}/>
          <Image id='corner-logo' className='-mt-96' src={CornerLogo}/>
        </div>

    <div id='box3' className='p-8 sticky overflow-y-scroll'>
        <h1 id='start'>Let your store be known!</h1>
        <p id='account-info' className='pb-8'>Pin point your store's exact location</p>
        <Maps/>
            <div id='' className='space-y-4 pt-8'>
                  
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
