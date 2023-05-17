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
    </div>
  )
}
