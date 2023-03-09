import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// import '.../styles/merchant_setup_dua.css'

import CornerLogo from '../images/corner-logo.png'
import Driver from '../images/driver.png'

export default function driver_setup_dua() {
  return (
    <div className='bg-[#b0b0b0]'>
      <div classname='inline-flex container'>
          <Image id='corner-logo' className='h-fit' src={CornerLogo}/>
          <Image id='driver' src={Driver}/>
      </div>

    <div id='box' className='p-8 sticky'>
        <h1 id='start'>Tell us about your ride!</h1>
        <p id='account-info' className='pb-10'>One last step!</p>
            <div className='space-y-4'>
                <p className='account-fill'>Year</p>
                    <select name="year" className='fill-example'>
                        <option>Select Year</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                    </select>
                        {/* <div className='line'/> */}

                <p className='account-fill'>Brand</p>
                    <select name="brand" className='fill-example'>
                        <option>Select Brand</option>
                        <option>Honda</option>
                        <option>Toyota</option>
                        <option>Suzuki</option>
                    </select>
                        {/* <div className='line'/> */}

                <p className='account-fill'>Series</p>
                    <select name="series" className='fill-example'>
                        <option>Select Series</option>
                        <option>Vario</option>
                        <option>Lexi</option>
                        <option>Supra</option>
                    </select>
                        {/* <div className='line'/> */}

                <p className='account-fill'>Color</p>
                    <select name="color" className='fill-example'>
                        <option>Select Color</option>
                        <option>White</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                    </select>
                        {/* <div className='line'/> */}
                <div id='plate'>
                <p className='account-fill'>License Plate</p>
                    <select id="license-plate" className='fill-example'>
                        <option>AB</option>
                        <option>B</option>
                        <option>D</option>
                        <option>E</option>
                    </select>
                        {/* <div className='line'/> */}
                    <input type='text' className='fill-example'/>
                </div>
            </div>
                <div className='w-full flex justify-evenly'>
                <Link href='/driver_setup_empat'>
                  <button id='next-button-sm' className='grid place-items-center'>
                    <p id='next'>Next</p>
                  </button>
                </Link>
            </div>
      </div>
    </div>
  )
}
