import React from 'react'
import Navbar from '../components/navbar.jsx'
import Hero from '../Components/Hero.jsx'
import Quote from '../Components/Quote.jsx'
import BrandCarousel from '../Components/BrandCarousel.jsx'
import WhyWe from '../Components/WhyWe.jsx'
import Services from '../Components/Services.jsx'
import Portfolio from '../Components/Portfolio.jsx'
import Author from '../Components/Author.jsx'
import BestSeller from '../Components/BestSeller.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
      <BrandCarousel />
      <WhyWe />
      <Services />
      <Portfolio />
      <Author />
      <BestSeller />
    </>
  )
}

export default Home