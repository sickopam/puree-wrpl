import React from 'react'
import Image from 'next/image'

import '.../styles/merchant_setup_dua.css'

import CornerLogo from '../images/corner-logo.png'
import Jar from '../images/jar.png'

export default function merchant_setup_dua() {
  return (
    <div>
      <div classname='h-screen bg-[#999999]'>
          <Image id='corner-logo' src={CornerLogo}/>
          <Image id='drive' src={Driver}/>
      </div>
      <div id='box'>
        <h1 id='start'>Start it up!</h1>
          <p id='account-info'>Provide your account information</p>
            <div id='bottom-container'>
                <p className='account-fill'>Full Name</p>
                    <input type='text' className='fill-example'>James</input>
                    <div className='line'/>

                <p className='account-fill'>Last Name</p>
                    <input type='tel' className='fill-example'>Doe</input>
                    <div className='line'/>

                <p className='account-fill'>Gender</p>
                    <select name="provinces" className='fill-example'>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    <div className='line'/>
                    
                <p className='account-fill'>Birthday</p>
                    <input type='date' className='fill-example' value="yyyy-mm-dd" 
                    min="1900-01-01" max="2022-12-31">2000-04-18</input>
                        <div className='line'/>
            </div>
                <button id='previous-button'>
                    <p id='previous'>Previous</p>
                </button>

                <button id='next-button'>
                    <p id='next'>Next</p>
                </button>
      </div>
    </div>
  )
}
