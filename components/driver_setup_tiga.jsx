import React from 'react'
import Image from 'next/image'

import '.../styles/merchant_setup_dua.css'

import CornerLogo from '../images/corner-logo.png'
import Jar from '../images/jar.png'
import ProfilePicture from '../images/profile-picture.png'

export default function driver_setup_tiga() {
  return (
    <div>
      <div classname='h-screen bg-[#999999]'>
          <Image id='corner-logo' src={CornerLogo}/>
          <Image id='driver' src={Driver}/>
      </div>
      <div id='box'>
        
        <h1 id='start'>Let us see who you are</h1>
            <p id='account-info'>Personalize your account to register</p>
                <input type='file' onChange="loadFile(event"> 
                    <Image id='profile' src={ProfilePicture}/>
                </input>
                <p id='add-photo'></p>
            <p className='account-fill'>Username</p>
                <input type='text' className='fill-example'>James D.</input>
                <div className='line'/>
      </div>
                <button id='previous-button'>
                    <p id='previous'>Previous</p>
                </button>

                <button id='next-button'>
                    <p id='next'>Next</p>
                </button>
    </div>
  )
}
