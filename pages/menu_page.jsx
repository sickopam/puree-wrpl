import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import top from '../images/top.jpg'
import back from '../images/back.jpg'
import peach from '../images/peach.jpg'
import nanas from '../images/nanas.jpg'
import mango from '../images/mango.jpg'
import kiwi from '../images/kiwi.jpg'
import kacang from '../images/kacang.jpg'
import kacang2 from '../images/kacang2.jpg'
import blueberry from '../images/blueberry.jpg'
import alpukat from '../images/alpukat.jpg'
import home from '../images/home.jpg'
import profile2 from '../images/profile-picture.png'
import message from '../images/message.jpeg'
import notif from '../images/notif.jpeg'

export default function menu_page() {
    return (
        <div>
            <div className='w-screen grid place-items-start h-[20vh]'>
                <Image src={top} className='object-fill h-[20vh] w-screen'></Image>
                <button className="ml-8 mt-5 absolute">
                    <Image src={back} className='w-8 rounded-full'></Image>
                </button>
            </div>
            <div className='mx-8 rounded drop-shadow-lg -mt-16 bg-white p-5'>
                <div>
                    <p className='text-2xl font-bold'>Jane's Kitchen</p>
                </div>
                <div>
                    <p className='text-sm truncate mt-3 font-light'>
                    Jl. Dharmawangsa Raya, No. 17, Kby. Baru, Jakarta 
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2 ml-10 my-6 h-screen '>
                <div>
                    <Image src={peach} className='w-32'></Image>
                    <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                    <p className='text-sm font-semibold'>53.280</p>
                </div>
                <div>
                    <Image src={nanas} className='w-32'></Image>
                    <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                    <p className='text-sm font-semibold'>53.280</p>
                </div>
                <div>
                    <Image src={mango} className='w-32'></Image>
                    <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                    <p className='text-sm font-semibold'>53.280</p>
                </div>
                <div>
                    <Image src={kiwi} className='w-32'></Image>
                    <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                    <p className='text-sm font-semibold'>53.280</p>
                </div>
                <div>
                    <Image src={kacang2} className='w-32'></Image>
                    <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                    <p className='text-sm font-semibold'>53.280</p>
                </div>
                <div>
                    <Image src={kacang} className='w-32'></Image>
                    <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                    <p className='text-sm font-semibold'>53.280</p>
                </div>
                <div>
                    <Image src={blueberry} className='w-32'></Image>
                    <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                    <p className='text-sm font-semibold'>53.280</p>
                </div>
                <div>
                    <Image src={alpukat} className='w-32'></Image>
                    <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                    <p className='text-sm font-semibold'>53.280</p>
                </div>
            </div>

            <div className='fixed bottom-32 right-9'>
                <button class="bg-white rounded-full w-14 h-14 shadow-inner">
                    <p className='text-amber-400 text-6xl -mt-2'>+</p>
                </button>
                <div className='hidden bg-white text-base float-left py-2 list-none text-left rounded shadow hover:shadow-lg outline-none'>
                    <a href="#" className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'> 
                        Add menu
                    </a>
                    <a href="#" className='text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'> 
                        Add promotion
                    </a>
                </div>
            </div>
            
            <div className='container h-24 fixed bottom-0 justify-around shadow-inner bg-white'>
                    <Image src={home} className='my-5 w-7 h-7'></Image>
                    <Image src={message} className='my-6 w-8 h-6'></Image>
                    <Image src={notif} className='my-5 w-7 h-8'></Image>
                    <Image src={profile2} className='my-5 w-8 h-8'></Image>
            </div>
        </div>
    )
}