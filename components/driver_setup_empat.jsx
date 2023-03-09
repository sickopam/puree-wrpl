import React from 'react'
import Image from 'next/image'

import '.../styles/merchant_setup_dua.css'

import CornerLogo from '../images/corner-logo.png'
import Driver from '../images/driver.png'

export default function driver_setup_dua() {
  return (
    <div>
      <div classname='h-screen bg-[#999999]'>
          <Image id='corner-logo' src={CornerLogo}/>
          <Image id='drive' src={Driver}/>
      </div>
      <div id='box'>
        <h1 id='start'>Tell us about your ride!</h1>
          <p id='account-info'>One last step!</p>
            <div id='bottom-container'>
                <p className='account-fill'>Year</p>
                    <select name="year" className='fill-example'>
                        <option>Select Year</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                    </select>
                        <div className='line'/>

                <p className='account-fill'>Brand</p>
                    <select name="brand" className='fill-example'>
                        <option>Select Brand</option>
                        <option>Honda</option>
                        <option>Toyota</option>
                        <option>Suzuki</option>
                    </select>
                        <div className='line'/>

                <p className='account-fill'>Series</p>
                    <select name="series" className='fill-example'>
                        <option>Select Series</option>
                        <option>Vario</option>
                        <option>Lexi</option>
                        <option>Supra</option>
                    </select>
                        <div className='line'/>

                <p className='account-fill'>Color</p>
                    <select name="color" className='fill-example'>
                        <option>Select Color</option>
                        <option>White</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                    </select>
                        <div className='line'/>

                <p className='account-fill'>License Plate</p>
                    <select id="license-plate" className='fill-example'>
                        <option>AB</option>
                        <option>B</option>
                        <option>D</option>
                        <option>E</option>
                    </select>
                        <div className='line'/>
                    <input type='text' className='fill-example'>1459 AF</input>
                
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
