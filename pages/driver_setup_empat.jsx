import React from 'react'
import Image from 'next/image'

//   import '../styles/merchant_setup.css'

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

        <div id='box2' className='p-8 sticky'>
         <h1 id='start'>Tell us about your ride!</h1>
         <p id='account-info' className='pb-8'>One last step!</p>
             <div className='space-y-7'>
                <div>
                    <p className='account-fill'>Year</p>
                        <select required name="year">
                            <option>Select Year</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                        </select>
                </div>
                <div>
                    <p className='account-fill'>Brand</p>
                        <select required name="brand">
                            <option>Select Brand</option>
                            <option>Honda</option>
                            <option>Toyota</option>
                            <option>Suzuki</option>
                        </select>
                </div>
                <div>
                    <p className='account-fill'>Series</p>
                        <select required name="series">
                            <option>Select Series</option>
                            <option>Vario</option>
                            <option>Lexi</option>
                            <option>Supra</option>
                        </select>
                </div>
                <div>
                    <p className='account-fill'>Color</p>
                        <select required name="color">
                            <option>Select Color</option>
                            <option>White</option>
                            <option>Blue</option>
                            <option>Yellow</option>
                        </select>
                </div>
                <div>
                    <p className='account-fill'>License Plate</p>
                    <div className='inline-flex w-full'>
                        <select required name="license-plate" className='w-[20%]'>
                            <option>AB</option>
                            <option>B</option>
                            <option>D</option>
                            <option>E</option>
                        </select>
                        <input type='number' placeholder='Enter your plate number'/>
                    </div>
                </div>
                <div className='w-full flex justify-evenly'>
                    <Link href='/driver_setup_tiga'>
                        <button id='previous-button-sm' className='grid place-items-center'>
                            <p id='previous'>Previous</p>
                        </button>
                    </Link>
                    <Link href='/driver_home'>
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
