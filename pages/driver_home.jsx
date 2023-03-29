import React from 'react'
import Navbar from '@/components/profile/navbar'
import Profile from '@/components/profile/profile'
import Income from '@/components/profile/income'
import Ratings from '@/components/profile/ratings'
import Card from '@/components/profile/card'

export default function DriverHome() {
  return (
    <div className='h-fit'>
        {/* <h1></h1> */}
        <Profile/>
        <Income/>
        <Ratings/>
        <Card/>
        <Navbar/>
    </div>
  )
}
