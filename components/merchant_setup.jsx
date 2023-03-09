import React from 'react'
import Image from 'next/image'

// import '../styles/merchant_setup.css'

import CornerLogo from '../images/corner-logo.png'
import Jar from '../images/jar.png'

export default function MerchSetup() {
  return (
    <div className='h-screen'>
      <div className='bg-[#b0b0b0]'>
        
        <div classname='inline-flex'>
            <Image id='corner-logo' src={CornerLogo}/>
            <Image id='jar' src={Jar}/>
        </div>
        <div id='box'>
          <h1 id='start'>Start it up!</h1>
            <p id='account-info'>Provide your account information</p>
              <div id=''>

                <p className='account-fill'>Email</p>
                  <input type='email' className='fill-example'/>
                  <label>jane_d@gmail.com</label>
                    <div className='line'/>
                <p className='account-fill'>Phone Number</p>
                  <input type='tel' className='fill-example'/>
                    <div className='line'/>

                <p className='account-fill'>Password</p>
                  <input type='password' className='fill-example'/>

                    <div className='line'/>
                    
                <p className='account-fill'>Confirm Password</p>
                  <input type='password' className='fill-example'/>
                      <div className='line'/>
              </div>
              <button id='next-button'>
                <p id='next'>Next</p>
              </button>
        </div>
      </div>
    </div>
  )
}
