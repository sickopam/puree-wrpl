import React from "react";
import Maps from '@/components/map'
import back from '../images/back.png'
import Link from "next/link";
import Image from "next/image";

const orders = [
    {menu: '[PinkFong] Chicken Japchae - MPASI', price: '53.280'},
    {menu: 'Japanese Beef Curry Udon - MPASI', price: '53.280'}
]

export default function order() {
    return (
        <div>
            <Maps className='h-[70%]'/>

            <div className="-mt-[24rem] flex">
                <Link href='/driver_home' className="">
                    <Image src={back} className="w-[34px] ml-8"></Image>
                </Link>
                <p className="text-sm bg-white p-2 px-3 rounded-2xl ml-20">Order <span>B-005</span></p>
            </div>

            <div className="card-order mt-[22rem] w-screen p-8 ">
                <p className="mb-7 text-sm">Order B-005 <span>for Katarina</span></p>

                <div className='space-y-5'>
                {orders.map((e) => (
                    <div className=' space-y-2 text-sm'>
                        <h1>{e.menu}</h1>
                        <h2 className='text-[#666666]'>{e.price}</h2>
                    </div>
                ))}
            </div>

            <div className='h-1 bg-[#f5f5f5] mt-5'/>
                <div id='order-summary' className='flex justify-between text-sm font-semibold px-[2rem] py-[1.5rem]'>
                    <h2>Subtotal</h2>
                    <h3>106.560</h3>
                </div>
                <div className='h-1 bg-[#f5f5f5]'/>
            </div>
        </div>
    )
}