import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

import Logland from '@/pages/login_landing'
// import Merch from '@/pages/merchant_log'
// import MerchSetup from '@/components/merchant_setup'
// import MerchHome from '@/components/merchant_homescreen'
import DriverSet1 from '@/pages/driver_setup_satu'
import DriverLand from './driver_landing'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  window.screen.orientation.lock('portrait')
  return (
    <>
      <Head>
      </Head>
      <DriverLand/>

    </>
  )
}
