import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

import UserLanding from '@/pages/user_landing'
import UserSet2 from '@/pages/user_setup_dua'
import user_homescreen from './user_homescreen'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        {/* <title>Create Capacitor App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <MerchSetup/> */}
      
      <UserLanding/>
      {/* <MerchHome/> */}
      {/* <Logland/> */}
      {/* <Merch/> */}
      {/* <user_homescreen/> */}

      <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Lobster;
  }

  * {
    box-sizing: border-box;
  }
  
`}</style>
    </>
  )
  }
