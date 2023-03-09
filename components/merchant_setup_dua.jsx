import React from 'react'
import Image from 'next/image'

import 'styles/merchant_setup_dua.css'

import CornerLogo from '../images/corner-logo.png'
import Jar from '../images/jar.png'

export default function merchant_setup_dua() {
  return (
    <div>
      <div classname='h-screen bg-[#999999]'>
          <Image id='corner-logo' src={CornerLogo}/>
          <Image id='jar' src={Jar}/>
      </div>
      <div id='box'>
        <h1 id='start'>Start it up!</h1>
          <p id='account-info'>Provide your account information</p>
            <div id='bottom-container'>
                <p className='account-fill'>Store Name</p>
                    <input type='text' className='fill-example'>Jane's Kitchen</input>
                    <div className='line'/>

                <p className='account-fill'>Province</p>
                    <select name="provinces" className='fill-example'>
                        <option>Select Province</option>
                        <option>Jakarta, D.K.I</option>
                        <option>D.I. Yogyakarta</option>
                        <option>Jakarta, D.K.I</option>
                    </select>
                        <div className='line'/>

                <p className='account-fill'>City/Region</p>
                    <select name="city" className='fill-example'>
                        <option>Select City</option>
                        <option>Jakarta Selatan</option>
                        <option>Jakarta Timur</option>
                        <option>Jakarta Barat</option>
                    </select>
                        <div className='line'/>
                    
                <p className='account-fill'>Address</p>
                    <input type='text' className='fill-example'>Jl. Dharmawangsa Raya No. 17, Kby. Baru</input>
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
