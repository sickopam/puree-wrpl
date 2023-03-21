import React from 'react'
import Image from 'next/image'
import styles from '.././styles/Home.module.css'

import User from '../images/navbar/user.svg'
import Home from '../images/navbar/home.svg'
import Message from '../images/navbar/message.svg'
import Bell from '../images/navbar/bell.svg'

const Navbar = () => {
  return (
    <div className='py-7 flex justify-evenly h-fit tshadow'>
        <Image src={Home}/>
        <Image src={Bell}/>
        <Image src={Message}/>
        <Image src={User}/>
    </div>
  )
}

export default Navbar
