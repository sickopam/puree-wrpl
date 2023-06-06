import React, { useState } from "react";
import Maps from '@/components/map'
import Image from "next/image";
import msg from '../images/msg.jpg'

export default function order() {

    const [selected, setSelected] = useState(undefined);

    const buttonHandler = (e, id, i) => {
      e.currentTarget.classList.toggle("active");
      if (id !== selected) {
        // const button = document.querySelectorAll("#progress_bar");
        // button.forEach((btn, index) => {
        //   if (index !== i) {
        //     btn.classList.add("active");
        //     console.log(index)
        //   }
        // });
        setSelected(id);
      } else {
        const button = document.querySelectorAll("#progress_bar");
        const tombol = document.querySelectorAll('#delivered')
        button.forEach(btn => {
          btn.classList.add("active");
        });
        tombol.forEach(btn => {
            btn.classList.add("active")
        })
        setSelected(undefined);
      }
    };

    return (
        <div className="h-fit">
            <div id="mapcont">
                <Maps/>
            </div>

            <div id="trackbox">
                <div className="flex justify-center pt-3">
                    <div id="puller"/>
                </div>
                <div id='order-summary' className='space-y-7'>
                    <div className='inline-flex gap-1'>
                        <div className="inline-flex gap-2">
                            <h1 className='text-lg font-semibold'>Order</h1>
                            <span className='font-bold'>&#183;</span>
                            <h2 className='font-semibold'>B-005</h2>
                        </div>
                        <h2 className='text-xs grid items-center text-[#666666]'>for Katarina</h2>
                    </div>

                    <div className='space-y-7'>
                        {orders.map((e) => (
                            <div className='font-semibold space-y-2 text-sm'>
                                <h1 className="text-[#333333]">{e.menu}</h1>
                                <h2 className='text-[#666666]'>{e.price}</h2>
                            </div>
                        ))}
                    </div>
                </div> 

                <div className='h-1 bg-[#f5f5f5]'/>
                <div id='order-summary' className='flex justify-between text-xs text-[#666666] font-semibold'>
                    <h2>Subtotal</h2>
                    <div>
                        <h3 className="text-right">106.560</h3>
                        <div className="text-2xs font-light inline-flex">
                            <h4>Paid with <a className="font-semibold">PureePay</a></h4>
                        </div>
                    </div>
                </div>
                <div className='h-1 bg-[#f5f5f5]'/>

                <div id='order-summary'>
                    <div className='flex justify-between'>
                        <div className='inline-flex space-x-4'>
                            <div id='driver_pic'/>
                            <div>
                                <h2 id='driver_name'>Gruu Baby Food</h2>
                                <h3 id='driver_title'>Jl. Dharmawangsa Raya, No. 17</h3>
                            </div>
                        </div>
                        <div className='grid items-center'>
                            <Image style={{width: '24px', height: '20px'}} src={msg}/>
                        </div>
                    </div>
                </div>

                <div id='order-summary'>
                    <div className='flex justify-evenly items-center'>
                        {progress.map((items, i) => (
                            <div onClick={e => {
                            buttonHandler(e, items.id, i);
                            }} key={items.id} id='progress_bar'/>
                        ))}
                        <div onClick={e => {
                            buttonHandler(e);
                            }} id='delivered'/>
                    </div>
                    <div id='progress_label'>
                        {progress.map((e) => (
                            <h3>{e.label}</h3>
                        ))}
                        <h3>Delivered</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

const progress = [{id: 1, label: 'Received', button: 'Processing'}, {id: 2, label: 'Processing', button: 'On Delivery'}, {id: 3, label: 'On Delivery', button: "Waiting for customer's confirmation"}]

const orders = [
    {menu: '[PinkFong] Chicken Japchae - MPASI', price: '53.280'},
    {menu: 'Japanese Beef Curry Udon - MPASI', price: '53.280'}
]