import Navbar from '@/components/home/navbar'
import Msg from '@/components/messages/msg'
import React from 'react'

export default function DriverMsg() {
  return (
    <div className='h-screen'>
        <div id='chat-top' className='px-4 py-2 grid items-end tshadow'>
            <h1 className='text-2xl font-semibold'>Chats</h1>
        </div>
        <Msg/>
        <Navbar/>
    </div>
  )
}
