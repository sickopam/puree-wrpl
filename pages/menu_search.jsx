import React from "react";
import Image from "next/image";

import back from '../images/back.jpg'
import search from '../images/Vector.png'

export default function menu_search() {
    return (
        <div>
            <div id="search" className="h-[85px] sticky bg-white flex shadow-lg">
                <a className="ml-8 mt-8 absolute" href='#'>
                        <Image src={back} className='w-8 rounded-full'></Image>
                </a>
                <div className="ml-20 mt-7 bg-slate-200 h-[40px] w-[270px] rounded-xl shadow-md flex">
                    <Image src={search} className="mt-3 ml-3 h-[18px]"></Image>
                    <p className="mt-3 ml-4 text-sm text-slate-400">What are looking for?</p>
                </div>
            </div>
        </div>
    )
}