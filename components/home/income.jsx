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
          </div>
        </div>
    </div>
  )
}

export default Income

const income = [
  {id: 1, title: "Today's income", val: '225.6K'},
  {id: 2, title: "Today's Delivery", val: '6'}
]