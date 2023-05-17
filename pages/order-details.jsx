import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import back from '../images/back.jpg'

export default function orderDetails() {
  return (
    <div className='h-screen'>

        <div style={{position: 'sticky', top: 0}} className='shadow-lg p-8 bg-white'>
            <div className='inline-flex w-full'>
                <Link href='shop_page'>
                    <Image src={back} className='w-8 rounded-full shadow-xl grid items-center'></Image>
                </Link>
                <div className='grid place-items-center w-full'>
                    <div className='flex justify-evenly space-x-2'>
                        <h1 className='font-bold'>Orders</h1>
                        <span className='font-bold'>&#183;</span>
                        <h2 className='text-[#666666]'>B-005</h2>
                    </div>
                </div>
            </div>
        </div>

        <div id='bg_choose'>Click on the action button to update your customer’s order status, keep your customer updated!</div>

        <div id='order-summary' className='space-y-7'>
            <div className='inline-flex gap-1'>
                <h1 className='text-lg font-semibold'>Order Summary</h1>
                <h2 className='text-xs grid items-center text-[#666666]'>for Katarina</h2>
            </div>

            <div className='space-y-7'>
                {orders.map((e) => (
                    <div className='font-semibold space-y-2 text-sm'>
                        <h1>{e.menu}</h1>
                        <h2 className='text-[#666666]'>{e.price}</h2>
                    </div>
                ))}
            </div>

        </div> 
        <div className='h-1 bg-[#f5f5f5]'/>
        <div id='order-summary' className='flex justify-between text-sm font-semibold'>
            <h2>Subtotal</h2>
            <h3>106.560</h3>
        </div>
        <div className='h-1 bg-[#f5f5f5]'/>
    </div>
  )
}

const orders = [
    {menu: '[PinkFong] Chicken Japchae - MPASI', price: '53.280'},
    {menu: 'Japanese Beef Curry Udon - MPASI', price: '53.280'}
]
