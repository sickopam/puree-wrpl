import React, { useState } from 'react'
import Satu from "./merchant_setup_satu"
import Dua from "./merchant_setup_dua"
import Tiga from "./merchant_setup_tiga"


export default function MerchantSetup() {
    const [page, setPage] = useState(0);
  return (
    <>
        <Satu/>
        <Dua/>
        <Tiga/>
    </>
  )
}
