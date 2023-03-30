import React from 'react'
import Image from 'next/image'

//   import '../styles/merchant_setup.css'

import CornerLogo from '../images/corner-logo.png'
import Driver from '../images/driver.png'
import Link from 'next/link'


export default function DriverSet3() {
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
                <div className='space-y-7'>
                    {form.map((t, i) => (
                        <div key={i}>
                            <p>{t.label}</p>
                            <select required name={t.name}>
                                {t.opt.map((i) => (
                                        <option>{i}</option>
                                ))}
                            </select>
                        </div>
                    ))}
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
                    <Link href='/driver_setup_dua'>
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

const form = [
    {id: 21, label: 'Year', name:'year', opt: ['Select Year', '2020', '2019', '2018']},
    {id: 22, label: 'Brand', name:'brand', opt: ['Select Brand', 'Honda', 'Toyota', 'Suzuki']},
    {id: 23, label: 'Series', name:'series', opt: ['Select Series', 'Vario', 'Lexi', 'Supra']},
    {id: 24, label: 'Color', name:'color', opt: ['Select Color', 'White', 'Blue', 'Black']}
]