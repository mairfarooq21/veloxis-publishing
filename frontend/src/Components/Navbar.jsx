import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/veloxis-logo.png'
import Phone from '../assets/phone.svg'

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-5 py-5 mb-[-119px]">
      <div className="logo w-[192px]">
        <img
          src={Logo}
          alt="Veloxis Publishing"
          className="h-[72px]"
        />
      </div>
      <ul className="flex list-none gap-5 text-white text-[16px]">
        <NavLink to='/' className="flex flex-col items-center gap-1">
          <p className="font-[500] hover:underline transition-all duration-200">Home</p>
        </NavLink>
        <NavLink to='/about-us' className="flex flex-col items-center gap-1">
          <p className="font-[500] hover:underline transition-all duration-200">About Us</p>
        </NavLink>
        <NavLink to='/book-writing' className="flex flex-col items-center gap-1">
          <p className="font-[500] hover:underline transition-all duration-200">Book Writing</p>
        </NavLink>
        <NavLink to='/book-editing' className="flex flex-col items-center gap-1">
          <p className="font-[500] hover:underline transition-all duration-200">Book Editing</p>
        </NavLink>
        <NavLink to='/book-marketing' className="flex flex-col items-center gap-1">
          <p className="font-[500] hover:underline transition-all duration-200">Book Marketing</p>
        </NavLink>
        <NavLink to='/book-publishing' className="flex flex-col items-center gap-1">
          <p className="font-[500] hover:underline transition-all duration-200">Book Publishing</p>
        </NavLink>
        <NavLink to='/illustration' className="flex flex-col items-center gap-1">
          <p className="font-[500] hover:underline transition-all duration-200">Illustration</p>
        </NavLink>
        <NavLink to='/contact-us' className="flex flex-col items-center gap-1">
          <p className="font-[500] hover:underline transition-all duration-200">Contact Us</p>
        </NavLink>
      </ul>
      <div className="p-[1.75px] rounded-full bg-gradient-to-r from-[#1BBED3] to-[#2E2A7A] inline-block">
        <a
          href="tel:8703339799"
          className="group gradient-border !text-white bg-gradient-to-r from-[#2E2A7A] to-[#1BBED3] !px-[36px] !py-[11px] flex items-center justify-center rounded-full font-[600] no-underline text-[16px] bg-clip-padding hover:!text-black transition-colors duration-300 hover:from-white hover:to-white"
        >
        <img
          src={Phone}
          alt="Call Icon"
          className="w-[17px] mr-1 transition duration-300 group-hover:invert"
        />
          (870) 333–9799
        </a>

      </div>
    </header>
  )
}

export default Navbar