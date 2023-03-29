import React from 'react'
import Navbar from '@/components/profile/navbar'
import Profile from '@/components/profile/profile'
import Income from '@/components/profile/income'
import Ratings from '@/components/profile/ratings'

export default function DriverHome() {
  return (
    <div className='h-fit'>
        {/* <h1></h1> */}
        <Profile/>
        <Income/>
        <Ratings/>
        <div className='h-full grid items-end'>
            <Navbar/>
        </div>
    </div>
  )
}
