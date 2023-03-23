import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import top from '../images/top-addmenu.png'
import back from '../images/back.jpg'
import addphoto from '../images/add-photo.png'

export default function AddMenu() {
  return (
    <div>
        <div>
            <Image src={top} className='object-fill h-36 w-screen'></Image>
            <a className="ml-8 -mt-24 absolute" href='#'>
                <Image src={back} className='w-8 rounded-full'></Image>
            </a>
            <p className='-mt-12 font-semibold text-white flex items-center justify-center'>Add Menu</p>
        </div>

        <div className='grid grid-rows-2 grid-cols-2'>
            <div className='ml-8 mt-16 row-span-2'>
                <input required type='file' id='file-upload'/> 
                    <Image id='add-photo' src={addphoto}/>
            </div>
            <p className='-ml-8 mt-16 mr-10 text-xs text-gray-400 font-normal row-span-1'>Put the best photo of your food. Make it as appetizing as possible to attract buyers!</p>
            <p className='-ml-8 mt-8 font-bold text-base text-yellow-400 row-span-1'>Upload Photo</p>
       </div>

       <div className='ml-8'>
            <p className='text-sm font-medium text-gray-500'>Dish Name</p>            
            <input required type='text' className='mt-1 rounded-lg w-80 h-12 border-solid border border-gray-500 bg-whites'/>
            
            <p className='mt-8 text-sm font-medium text-gray-500'>Description</p>            
            <input required type='text' className='mt-1 rounded-lg w-80 h-12 border-solid border border-gray-500 bg-whites'/>
            
            <p className='mt-8 text-sm font-medium text-gray-500'>Price</p>            
            <input required type='text' className='mt-1 rounded-lg w-80 h-12 border-solid border border-gray-500 bg-whites'/>
       </div>

        <Link href='/menu_page'>
            <button className='ml-8 mt-20 rounded-lg w-80 h-12 bg-yellow-400'>
                <p className='text-white'>Save Menu</p>
            </button>
        </Link>
    </div>
  )
}
