import React from 'react'
import Navbar from '@/components/home/navbar'
import Profile from '@/components/home/profile'
import Income from '@/components/home/income'
import Ratings from '@/components/home/ratings'
import Card from '@/components/home/card'

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
