import React from 'react'
import Navbar from '@/components/profile/navbar'
import Profile from '@/components/profile/profile'
import Income from '@/components/profile/income'

export default function DriverHome() {
  return (
    <div className='h-screen'>
        {/* <h1></h1> */}
        <Profile/>
        <Income/>
        <div className='h-full grid items-end'>
            <Navbar/>
        </div>
    </div>
  )
}
