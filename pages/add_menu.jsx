import React from 'react'
import Image from 'next/image'

import top from '../images/top-addmenu.png'
import back from '../images/back.jpg'
import addphoto from '../images/add-photo.png'

export default function add_menu() {
  return (
    <div>
        <div>
            <Image src={top} className='object-fill h-36 w-screen'></Image>
            <a className="ml-8 -mt-24 absolute" href='#'>
                <Image src={back} className='w-8 rounded-full'></Image>
            </a>
            <p className='-mt-12 font-semibold text-white flex items-center justify-center'>Add Menu</p>
        </div>

        
    </div>
  )
}
