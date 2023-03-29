import React from 'react'
import Image from 'next/image'

// import '../styles/merchant_setup.css'

import CornerLogo from '../images/corner-logo.png'
import Jar from '../images/jar.png'
import Link from 'next/link'


export default function UserSet1() {
  return (
    <div className='bg-[#b0b0b0]'>
    
        <div className='h-64'>
          <Image className= 'logo-user-setup' src={CornerLogo}/>
          <Image className='jar' src={Jar}/>
        </div>

    <div id='box' className='p-8 sticky bg-white rounded-t-3xl mt-2'>
        <h1 id='start'>Start it up!</h1>
        <p className='pb-10 font-extralight text-xs mt-2 text-gray-600'>Provide your account information</p>
            <form action="" className='divide-y -mt-2'>
              <div id='' className='space-y-4'>

                <p className=''>Email</p>
                <input type='email' id ='input-satu' placeholder='jane_d@gmail.com' class="placeholder-gray-500 placeholder-opacity-8" required/>

                <p className=''>Phone Number</p>
                <input type='tel' id ='input-satu' placeholder='+628138764826' class="placeholder-gray-500 placeholder-opacity-80" required/>

                <p className=''>Password</p>
                <input type='password' id ='input-satu' required 
                  minlength="8"
                  maxlength="16"
                  alphabet="A-Za-z0-9+_%@!$*~-"
                  requiredclasses="[A-Z] [a-z] [0-9] [+_%@!$*~-]"
                  requiredclasscount="3"
                  disallowedwords="{{username}}"/>
                        
                <p className=''>Confirm Password</p>
                <input type='password' id ='input-satu' required/>

                <div className='h-full flex justify-center'>
                  <Link href='/user_setup_dua'>
                    <button id='next-button' className='grid place-items-center mt-5'>
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
