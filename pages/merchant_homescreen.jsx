import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import top from '../images/homescreen-top.png'
import ads from '../images/ads.png'
import supplies from '../images/supplies.png'
import orders from '../images/orders.png'
import menu from '../images/menu.png'
import profile2 from '../images/profile-picture.png'
import message from '../images/message.jpeg'
import notif from '../images/notif.jpeg'
import home from '../images/home.jpg'
import titiktiga from '../images/titik tiga.png'
import wallet from '../images/wallet.png'
import walletarrow from '../images/wallet-arrow.png'

export default function MerchantHomescreen() {
  return (
    <div>
        <div>
            <Image src={top} className='object-fill w-screen h-60'/>
            <Image src={titiktiga} className='-mt-40 ml-80 mr-5'/>
                <div className='-mt-24 ml-6'>
                    <p className='font-bold text-white text-3xl'>Jane's Kitchen</p> 
                    <p className='font-normal text-white text-xs'>Jl. Dharmawangsa Raya No. 17, Kb</p>
                    <div className='mt-2 box-border rounded-full drop-shadow-lg bg-yellow-400 w-36 h-6 p-1 grid grid-cols-5'>
                        <Image src={wallet} className='ml-2'/>
                        <p className='ml-1 font-medium text-xs text-yellow-800 col-span-3'>Rp 3,560,300</p>
                        <Image src={walletarrow} className='mt-0.5 ml-3'/>
                    </div>
                </div>
        </div>
        <div className='h-24 w-80 mx-8 rounded-lg drop-shadow-lg mt-8 bg-white p-5'>
            <div className='grid grid-cols-2'>
                <p className='font-medium text-black text-sm text-center'>Today's revenue</p>
                <p className='font-medium text-black text-sm text-center'>Today's transaction</p>
            </div>
            <div className='grid grid-cols-2 mt-2'>
            <p className='font-semibold text-black text-xl text-center'>225.6 K</p>
                <p className='font-semibold text-black text-xl text-center'>6</p>
            </div>
        </div>

        <div className='mt-9 mx-9 grid grid-cols-4 gap-x-7'>
            <div className=' rounded-lg-xl bg-white h-14 w-14 drop-shadow-lg box-border'>
                <Image src={orders} className='mx-auto mt-2'/>
            </div>
            <div>
                <Link href='/menu_page'>
                    <button>
                        <div className=' rounded-lg-xl bg-white h-14 w-14 drop-shadow-lg box-border'>
                            <Image src={menu} className='mx-auto mt-2'/>
                        </div>
                    </button>
                </Link>
            </div>
            <div className=' rounded-lg-xl bg-white h-14 w-14 drop-shadow-lg box-border'>
                <Link href='/supplies'>
                    <Image src={supplies} className='mx-auto mt-2'/>                
                </Link>
            </div>
            <div className=' rounded-lg-xl bg-white h-14 w-14 drop-shadow-lg box-border'>
                <Image src={ads} className='mx-auto mt-2'/>
            </div>
        </div>

        <div className='mt-2 mx-9 grid grid-cols-4 gap-x-7'>
            <p className='font-medium text-black text-xs text-center'>Orders</p>
            <p className='font-medium text-black text-xs text-center'>Menu</p>
            <p className='font-medium text-black text-xs text-center'>Supplies</p>
            <p className='font-medium text-black text-xs text-center'>Ads</p>
        </div>

        <div className='mt-10 ml-8'>
            <p className='font-semibold text-black'>Transaction Statistics</p>
        </div>

        <div className='box-border h-80 w-80 mx-8 rounded-lg-3xl drop-shadow-lg mt-8 bg-white p-5'>

        </div>

        <div className='container h-24 fixed bottom-0 justify-around shadow-inner bg-white'>
            <Image src={home} className='my-5 w-7 h-7'/>                
            <Image src={message} className='my-6 w-8 h-6'/>
            <Image src={notif} className='my-5 w-7 h-8'/>
            <Image src={profile2} className='my-5 w-8 h-8'/>
        </div>
    </div>
  )
}
