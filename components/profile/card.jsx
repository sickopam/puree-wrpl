import React from 'react'

function Card() {
  return (
    <div id='card' className='p-8 space-y-8'>
      <div className='flex justify-between'>
        {btn.map((e) => (
            <div className='space-y-2'>
                <button id='box-btn' className='grid place-items-center'>
                    <img src={e.img} alt='btn'></img>
                </button>
                <h2 className='text-xs text-center'>{e.label}</h2>
            </div>
        ))}
      </div>

      <div id='map'>

      </div>
    </div>
  )
}

export default Card

const btn = [
    // {img: ['/profile-card/cart.svg', '/profile-card/notebook.svg', '/profile-card/star.svg', '/profile-card/speaker.svg']}
    {id: 21, img: '/profile-card/cart.svg', label: 'Orders'},
    {id: 22, img: '/profile-card/notebook.svg', label: 'History'},
    {id: 23, img: '/profile-card/star.svg', label: 'Reviews'},
    {id: 24, img: '/profile-card/speaker.svg', label: 'Activity'},
]