import React from 'react'

const Ratings = () => {
  return (
    <div className='px-8 py-4 space-y-5'>
        <div className='flex justify-between text-xs'>
          <h2>Last 100 rated orders</h2>
          <h3 className='font-light'>Updated 5 days ago</h3>
        </div>

        <div className='flex justify-between'>
          <div className='text-center grid items-center'>
            <div>
              <h1 className='text-2xl font-semibold'>4.8</h1>
              <h3 className='text-xs'>Ratings</h3>
            </div>
          </div>

          <div className='space-y-2'>
            {rate.map((e, i) => (
              <div className='flex justify-between space-x-6'>
                <h3 className='text-xs'>{e.label}</h3>
                <div className='grid items-center'>
                  <div id='ratings'/>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Ratings

const rate = [
  {id: 5, label: 5},
  {id: 4, label: 4},
  {id: 3, label: 3},
  {id: 2, label: 2},
  {id: 1, label: 1}
]