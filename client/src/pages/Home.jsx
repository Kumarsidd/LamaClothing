import React from 'react'
import { Announcement, Navbar, Slider, Categories, Newsletter , Footer  } from '../components/index'

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
        {/* <Products /> */}
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home