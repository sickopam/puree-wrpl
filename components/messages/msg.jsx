import React from 'react'

const Msg = () => {
  return (
    <div className=''>
        {text.map((t, i) => (
            <div className='w-full inline-flex space-x-5'>
                <div className='grid items-center pl-4'>
                    <span id='profilepic'/>
                </div>
                <div id='msg' className='w-full flex justify-between'>
                    <div className='grid items-center'>
                        <div>
                            <h1 className='font-semibold'>{t.name}</h1>
                            <h2 className='text-sm'>{t.msg}</h2>
                            <h3 className='text-xs'>{t.resto}</h3>
                        </div>
                    </div>
                    <div className='grid items-center pr-4'>
                        <h3 className='text-xs'>{t.date}</h3>
                    </div>
                </div> 
            </div>
        ))}
    </div>
  )
}

export default Msg

const text = [
    {id: 31, name: 'Tumor', msg: 'Quickly', resto: 'KFC', date: '29/6'},
    {id: 31, name: 'Leukie', msg: 'Quickly', resto: 'McDonalds', date: '21/1'},
    {id: 31, name: 'Bronchi', msg: 'Quickly', resto: 'Toetoeng', date: '10/7'},
    {id: 31, name: 'Pneumoni', msg: 'Quickly', resto: 'MM', date: '24/9'},
    {id: 31, name: 'Pneumoni', msg: 'Quickly', resto: 'MM', date: '24/9'},
    {id: 31, name: 'Pneumoni', msg: 'Quickly', resto: 'MM', date: '24/9'},
    {id: 31, name: 'Pneumoni', msg: 'Quickly', resto: 'MM', date: '24/9'},
    {id: 31, name: 'Pneumoni', msg: 'Quickly', resto: 'MM', date: '24/9'},
    {id: 31, name: 'Pneumoni', msg: 'Quickly', resto: 'MM', date: '24/9'},
    {id: 31, name: 'Pneumoni', msg: 'Quickly', resto: 'MM', date: '24/9'},
    {id: 31, name: 'Pneumoni', msg: 'Quickly', resto: 'MM', date: '24/9'},
    {id: 31, name: 'Pneumoni', msg: 'Quickly', resto: 'MM', date: '24/9'},
]