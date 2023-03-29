import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div id='nav' className='flex justify-evenly h-fit tshadow'>
        {img.map((items, i) => (
            <button>
              <img key={i} src={items.image}></img>
            </button>
        ))}
    </div>
  )
}

export default Navbar

const img = [
    {id: 1, image: 'navbar/home.svg'},
    {id: 2, image: 'navbar/bell.svg'},
    {id: 3, image: 'navbar/message.svg'},
    {id: 4, image: 'navbar/user.svg'}
]
