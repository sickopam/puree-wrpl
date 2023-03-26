import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import top from '../images/top-supply.jpg'
import back from '../images/back.jpg'
import home from '../images/home.jpg'
import profile2 from '../images/profile-picture.png'
import message from '../images/message.jpeg'
import notif from '../images/notif.jpeg'

export default function Supplies() {
    return(
        <div>
            <div>
                <Image src={top}></Image>
                <Link href='/merchant_homescreen'>
                <div className="ml-8 -mt-24 absolute" href='#'>
                        <Image src={back} className='w-8 rounded-full'></Image>
                </div>
                </Link>
                <p className='-mt-12 font-semibold text-white flex items-center justify-center'>Supplies</p>
            </div>

            <div className='mt-5 h-16 bg-slate-200'>
                <p className='text-xs text-slate-400 px-8 pt-4'>Set up your supply! Turn off menus that are sold out so your customer can’t see it on your page</p>
            </div>

            <div className='mx-8 mt-8'>
                <div className='flex'>
                    <div>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>

                    <div className='mt-6 absolute right-8'>
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                </div>

                <div className='flex mt-6'>
                    <div>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>

                    <div className='mt-6 absolute right-8'>
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                </div>

                <div className='flex mt-6'>
                    <div>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>

                    <div className='mt-6 absolute right-8'>
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                </div>

                <div className='flex mt-6'>
                    <div>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>

                    <div className='mt-6 absolute right-8'>
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                </div>

                <div className='flex mt-6'>
                    <div>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>

                    <div className='mt-6 absolute right-8'>
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                </div>

                <div className='flex mt-6'>
                    <div>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>

                    <div className='mt-6 absolute right-8'>
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                </div>

                <div className='flex mt-6'>
                    <div>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>

                    <div className='mt-6 absolute right-8'>
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                </div>

                <div className='flex mt-6'>
                    <div>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>

                    <div className='mt-6 absolute right-8'>
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                </div>

                <div className='flex mt-6'>
                    <div>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>

                    <div className='mt-6 absolute right-8'>
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
                </div>

                <div className='flex mt-6'>
                    <div>
                        <p className='mt-4 text-sm font-medium'>Avocado Purée</p>
                        <p className='text-sm font-semibold'>53.280</p>
                    </div>

                    <div className='mt-6 absolute right-8'>
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                    </div>
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