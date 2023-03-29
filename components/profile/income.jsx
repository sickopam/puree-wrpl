import React from 'react'

const Income = () => {
  return (
    <div className='flex justify-center'>
        <div id='income' className='shadow-xl'>
          <div className='flex justify-between m-6 text-center'>
            {income.map((p, i) => (
              <>
                <div>
                  <h3 className='text-lg'>{p.title}</h3>
                  <h3 className='text-xl font-semibold'>{p.val}</h3>
                </div>
              </>
            ))}
            {/* <div className=''>
              <h3 className='text-lg'>Today's income</h3>
              <h2 className='text-xl font-semibold'>225.6K</h2>
            </div>
            <div className=''>
              <h3 className='text-lg'>Today's delivery</h3>
              <h2 className='text-xl font-semibold'>6</h2>
            </div> */}
          </div>
        </div>
    </div>
  )
}

export default Income

const income = [
  {id: 1, title: 'Todays income', val: '225.6K'},
  {id: 2, title: 'Todays Delivery', val: '6'}
]