import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../modules/home/Carousel'
import HomeCard from '../modules/home/HomeCard'


function Home() {
  return (
    <>
      {/*Plantilla para Principal page*/}
      
      <Navbar />
      <Carousel />
      <HomeCard />
      <Footer />
    </>
  )
}

export default Home