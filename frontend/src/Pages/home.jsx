import React from 'react'
import Navbar from '../components//Navbar.jsx'
import Hero from '../Components/Hero.jsx'
import Quote from '../Components/Quote.jsx'
import BrandCarousel from '../Components/BrandCarousel.jsx'
import WhyWe from '../Components/WhyWe.jsx'
import Services from '../Components/Services.jsx'
import Portfolio from '../Components/Portfolio.jsx'
import Author from '../Components/Author.jsx'
import BestSeller from '../Components/BestSeller.jsx'
import TestimonialsSlider from '../Components/TestimonialsSlider.jsx'
import ContactSection from '../Components/ContactSection.jsx'
import ContactWindow from '../Components/ContactWindow.jsx'
import Footer from '../Components/Footer.jsx'

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
      <TestimonialsSlider />
      <ContactSection />
      <ContactWindow />
      <Footer />
    </>
  )
}

export default Home