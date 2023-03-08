import React from 'react'
import Image from 'next/image'

import 'styles/merchant_setup.css'

import CornerLogo from '../images/corner-logo.png'
import Jar from '../images/jar.png'

export default function merchant_setup() {
  return (
    <div>
      <div classname='h-screen bg-[#999999]'>
          <Image id='corner-box' src={CornerLogo}/>
          <Image id='jar' src={Jar}/>
      </div>
      <div>
        <h1 id='start'>Start it up!</h1>
          <p id='account-info'>Provide your account information</p>
            <div id='bottom-container'>
              <p className='account-fill'>Email</p>
                <p className='fill-example'>jane_d@gmail.com</p>
                  <div className='line'/>

              <p className='account-fill'>Phone Number</p>
                <p className='fill-example'>+62877889900</p>
                  <div className='line'/>

              <p className='account-fill'>Password</p>
                <p className='fill-example'>********</p>
                  <div className='line'/>
                  
              <p className='account-fill'>Confirm Password</p>
                <p className='fill-example'>********</p>
                    <div className='line'/>
            </div>
            <div id='next-button'>
              <p id='next'>Next</p>
            </div>
      </div>
    </div>
  )
}
