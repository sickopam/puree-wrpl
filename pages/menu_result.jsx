import React from "react";
import Image from "next/image";

import back from '../images/back.jpg'
import search from '../images/Vector.png'
import ciken from '../images/ciken.png'

export default function menu_result() {
    return (
        <div>
            <div id="search" className="h-[85px] sticky bg-white flex shadow-lg">
                <a className="ml-8 mt-8 absolute" href='#'>
                        <Image src={back} className='w-8 rounded-full'></Image>
                </a>
                <div className="ml-20 mt-7 bg-slate-200 h-[40px] w-[270px] rounded-xl shadow-md flex">
                    <Image src={search} className="mt-3 ml-3 h-[18px]"></Image>
                    <p className="mt-3 ml-4 text-sm text-slate-400">Chicken</p>
                </div>
            </div>

            <div id="result">
                <div className="result_list flex ml-8 mt-12">
                    <Image src={ciken} className="w-[100px] h-[100px]"></Image>
                    <div className="block text-xs ml-4">
                        <p className="title">Chicken Soto Porridge - MPASI</p>
                        <p className="price mt-2 font-bold">53.280</p>
                    </div>
                </div>
                <hr className="m-4"/>
                <div className="result_list flex ml-8 mt-4">
                    <Image src={ciken} className="w-[100px] h-[100px]"></Image>
                    <div className="block text-xs ml-4">
                        <p className="title">Chicken Soto Porridge - MPASI</p>
                        <p className="price mt-2 font-bold">53.280</p>
                    </div>
                </div>
                <hr className="m-4"/>
                <div className="result_list flex ml-8 mt-4">
                    <Image src={ciken} className="w-[100px] h-[100px]"></Image>
                    <div className="block text-xs ml-4">
                        <p className="title">Chicken Soto Porridge - MPASI</p>
                        <p className="price mt-2 font-bold">53.280</p>
                    </div>
                </div>
                <hr className="m-4"/>
                <div className="result_list flex ml-8 mt-4">
                    <Image src={ciken} className="w-[100px] h-[100px]"></Image>
                    <div className="block text-xs ml-4">
                        <p className="title">Chicken Soto Porridge - MPASI</p>
                        <p className="price mt-2 font-bold">53.280</p>
                    </div>
                </div>
            </div>
        </div>
    )
}