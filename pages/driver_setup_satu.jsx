import React from 'react'
import Image from 'next/image'

// import '../styles/merchant_setup.css'

import CornerLogo from '../images/corner-logo.png'
import Driver from '../images/driver.png'
import Link from 'next/link'


export default function DriverSet1() {
  return (
    <div className='bg-[#b0b0b0] h-fit font-poppins'>
        <div className='inline-flex container'>
          <Image id='corner-logo' className='h-fit' src={CornerLogo}/>
          <Image id='driver' className='brightness-75' src={Driver}/>
        </div>

    <div id='box' className='p-8 sticky'>
        <h1 id='start'>Start it up!</h1>
        <p id='account-info' className='pb-10'>Provide your account information</p>
            <form id='' className=''>
              <div className='space-y-8'>
                {form.map((e, i) => (
                  <div key={i} className='space-y-1'>
                    <p>{e.label}</p>
                    <input placeholder={e.pholder} type={e.type} required/>
                  </div>
                ))}
                <div className='h-full flex justify-center'>
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

const form = [
  {id: 1, label: 'Email', type: 'email', pholder: 'james_d@gmail.com'},
  {id: 2, label: 'Phone Number', type: 'tel', pholder: '+62877889900'},
  {id: 3, label: 'Password', type: 'password', pholder: 'Minimum 8 characters'},
  {id: 4, label: 'Confirm Password', type: 'password', pholder: 'Please retype your password'}
]
