import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Card() {
  return (
    <div id='card' className='p-8 space-y-8'>
      <div className='flex justify-between'>
        <Link href='/orders'>
          <div className='space-y-2'>
            <button id='box-btn' className='grid place-items-center'>
              <img src='/profile-card/cart.svg' alt='btn'></img>
            </button>
            <h2 className='text-xs text-center'>Orders</h2>
          </div>
        </Link>
        {btn.map((e) => (
            <div className='space-y-2'>
                <button id='box-btn' className='grid place-items-center'>
                    <img src={e.img} alt='btn'></img>
                </button>
                <h2 className='text-xs text-center'>{e.label}</h2>
            </div>
        ))}
      </div>

      <div id='map' className=' p-3'>
          <div id='high-demand' className='grid place-items-center'>
            <h3 className='text-2xs'>High demand areas</h3>
          </div>
      </div>
    </div>
  )
}

export default Card

const btn = [
    // {img: ['/profile-card/cart.svg', '/profile-card/notebook.svg', '/profile-card/star.svg', '/profile-card/speaker.svg']}
    // {id: 21, img: '/profile-card/cart.svg', label: 'Orders'},
    {id: 22, img: '/profile-card/notebook.svg', label: 'History'},
    {id: 23, img: '/profile-card/star.svg', label: 'Reviews'},
    {id: 24, img: '/profile-card/speaker.svg', label: 'Activity'},
]