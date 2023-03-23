import React from 'react'

const Income = () => {
  return (
    <div className='flex justify-center'>
        <div id='income' className='shadow-xl'>
          <div className='flex justify-evenly m-6 text-center'>
            <div className=''>
              <h3 className='text-lg'>Today's income</h3>
              <h2 className='text-xl font-semibold'>225.6K</h2>
            </div>
            <div className=''>
              <h3 className='text-lg'>Today's delivery</h3>
              <h2 className='text-xl font-semibold'>6</h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Income
