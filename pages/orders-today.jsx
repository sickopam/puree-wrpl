import React from "react";
import Image from "next/image";
import Link from "next/link";

import back from '../images/back.jpg'
import profile2 from '../images/profile-picture.png'
import message from '../images/message.jpeg'
import notif from '../images/notif.jpeg'
import home from '../images/home.jpg'

export default function orderToday() {
    return (
        <div className="h-screen">
            <div className="h-full p-8">
                <Link href='/merchant_homescreen'>
                    <Image src={back} className="w-[34px]"></Image>
                </Link>
                <p className="font-semibold text-[16px] flex justify-center -mt-5">Orders</p>
                <div className="flex w-full justify-around mt-6 text-[14px]">
                    <div className="border-b-2 border-black w-[155px]">
                        <Link href='/orders-today' className="flex justify-center p-2">Today</Link>
                    </div>
                    <div className= "w-[155px]">
                        <Link href='/orders-history' className="flex justify-center p-2">History</Link>
                    </div>
                </div>

                <div className="divide-y divide-slate-200 p-4 mt-5">
                    <div className="flex justify-around mb-5">
                        <div className="">
                            <p className="text-[14px] text-gray-800 font-semibold">B-006</p>
                            <p className="text-[12px] text-gray-600">4 items for Bening</p>
                        </div>

                        <div className="bg-yellow-400 w-[130px] h-[30px] rounded-xl ml-16">
                            <p className="text-[12px] flex justify-center font-semibold text-white p-1.5">Received</p>
                        </div>
                    </div>

                    <div className="flex justify-around my-5 pt-5">
                        <div className="">
                            <p className="text-[14px] text-gray-800 font-semibold">B-006</p>
                            <p className="text-[12px] text-gray-600">4 items for Bening</p>
                        </div>

                        <div className="bg-yellow-400 w-[130px] h-[30px] rounded-xl ml-16">
                            <p className="text-[12px] flex justify-center font-semibold text-white p-1.5">Received</p>
                        </div>
                    </div>

                    <div className="flex justify-around my-5 pt-5">
                        <div className="">
                            <p className="text-[14px] text-gray-800 font-semibold">B-006</p>
                            <p className="text-[12px] text-gray-600">4 items for Bening</p>
                        </div>

                        <div className="bg-yellow-400 w-[130px] h-[30px] rounded-xl ml-16">
                            <p className="text-[12px] flex justify-center font-semibold text-white p-1.5">Received</p>
                        </div>
                    </div>

                    <div className="flex justify-around my-5 pt-5">
                        <div className="">
                            <p className="text-[14px] text-gray-800 font-semibold">B-006</p>
                            <p className="text-[12px] text-gray-600">4 items for Bening</p>
                        </div>

                        <div className="bg-yellow-400 w-[130px] h-[30px] rounded-xl ml-16">
                            <p className="text-[12px] flex justify-center font-semibold text-white p-1.5">Received</p>
                        </div>
                    </div>
                </div>
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