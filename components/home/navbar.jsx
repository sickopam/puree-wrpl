import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div id='nav' className='flex justify-evenly h-fit tshadow'>
        {img.map((items, i) => (
            <Link href={items.route}>
              <img className='hover:bg-yellow' key={i} src={items.image}></img>
            </Link>
        ))}
    </div>
  )
}

export default Navbar

const img = [
    {id: 1, image: 'navbar/home.svg', route: '/driver_home'},
    {id: 2, image: 'navbar/message.svg', route: '/driver_messages'},
    {id: 3, image: 'navbar/bell.svg', route: '/driver_notif'},
    {id: 4, image: 'navbar/user.svg', route: '/driver_profile'}
]
