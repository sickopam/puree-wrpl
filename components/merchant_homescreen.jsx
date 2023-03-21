import React from 'react'


// import '../styles/merchant_homescreen.css'

export default function MerchHome() {
  return (
    <div>
      <div id='top-container'>
        <p id='store-name'>Jane's Kitchen</p>
        <p id='address'>Jl. Dharmawangsa Raya No. 17b</p>
        <button id='cash-button'>
          /* belom gambar wallet */
          <p id='cash'>Rp 3,000,000</p>
          /* belom arrow */
        </button>
        <div id='revenue-transaction-box'>
          <p id='revenue'>Today's Revenue</p>
            <p id='revenue-amount'>225.6K</p>
          <p  id='transaction'>Today's Transaction</p>
            <p id='transaction-amount'>6</p>
        </div>
      </div>
    </div>
  )
}
