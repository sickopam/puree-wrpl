import React, { useState } from 'react'
import Satu from "./merchant_setup_satu"
import Dua from "./merchant_setup_dua"
import Tiga from "./merchant_setup_tiga"


export default function MerchantSetup() {
    const [page, setPage] = useState(0);

    const conditionalComponent = () => {
      switch (page) {
        case 0:
          return <Satu />;
        case 1:
          return <Dua />;
         case 2:
          return <Tiga />;
        default:
          return <Satu />;
      }
    };

  return (
    <>
        {conditionalComponent()}
        {/* <Button onClick={handleSubmit}>
          { page === 0 || page === 1 ? "Next" : "Submit" }
        </Button> */}
    </>
  )
}
