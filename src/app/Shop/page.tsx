import React from 'react'
import Navbar from '../Components/common/navbar'
import Shop from '../Components/Page/Shop/shop'
import Footer from '../Components/common/footer'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Shop/>
        <Footer/>
    </div>
  )
}

export default page