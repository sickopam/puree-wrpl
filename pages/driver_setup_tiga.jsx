
import React from 'react'
import Image from 'next/image'

//  import '../styles/merchant_setup.css'

import ProfilePicture from '../images/profile-picture.png'
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

             <div id='box' className='p-8 sticky'>    
         <h1 id='start'>Let us see who you are</h1>
             <p id='account-info' className='pb-10'>Personalize your account to register</p>
               <div id='' className='space-y-4'>
                 <div id='profile-div' className='flex justify-center'>
                   <input required type='file' id='file-upload'/> 
                   <label>
                   <Image id='profile' src={ProfilePicture}/>
                   <p id='add-photo'>Add your profile picture</p>
                   </label>
                 </div>
                 <p className='account-fill'>Username</p>
                     <input required type='text' className='fill-example'/>
                     {/* <div className='line'/> */}
        
                 <div className='w-full flex justify-evenly'>
                 <Link href='/driver_setup_dua'>
                   <button id='previous-button-sm' className='grid place-items-center'>
                     <p id='previous'>Previous</p>
                   </button>
                 </Link>
                 <Link href='/driver_setup_empat'>
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
