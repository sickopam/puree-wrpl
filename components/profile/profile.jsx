import React from 'react'

const Profile = () => {
  return (
    <div id='driver-bg' className='py-16 px-8 flex justify-between'>
        <div className='inline-flex h-full space-x-5 pb-5'>
            <div id='profilepic' className=''/>
            <div className='grid items-center'>
                <h2 className='font-semibold text-2xl text-white'>James Doe</h2>
                <div id='wallet' className='flex justify-between px-2'>
                    <img className='scale-[60%]' src='wallet/wallet.svg'></img>
                    <h3 className='text-sm grid items-center'>Rp. 3,560,300</h3>
                    <img className='scale-[50%]' src='wallet/arrow.svg'></img>
                </div>
            </div>
        </div>
        <img src='wallet/bullet.svg'/>
    </div>
  )
}

export default Profile
