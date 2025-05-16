import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/veloxis-logo.png'
import Phone from '../assets/phone.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="relative z-30">
      <div className="flex justify-between items-center px-5 py-5 mb-[-119px] relative z-30">
        {/* Logo (goes behind mobile menu) */}
        <div className="logo w-[192px] xxs:w-[140px] z-0">
          <img
            src={Logo}
            alt="Veloxis Publishing"
            className="h-[72px] xxs:h-[60px]"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="flex list-none gap-5 text-white text-[16px] xxs:text-[14px] xxs:hidden">
          {[
            ['/', 'Home'],
            ['/about-us', 'About Us'],
            ['/book-writing', 'Book Writing'],
            ['/book-editing', 'Book Editing'],
            ['/book-marketing', 'Book Marketing'],
            ['/book-publishing', 'Book Publishing'],
            ['/illustration', 'Illustration'],
            ['/contact-us', 'Contact Us'],
          ].map(([to, label]) => (
            <li key={to}>
              <NavLink to={to} className="flex flex-col items-center gap-1">
                <p className="font-[500] hover:underline transition-all duration-200">{label}</p>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Call Button */}
        <div className="p-[1px] xxs:hidden rounded-full bg-gradient-to-r from-[#1BBED3] to-[#2E2A7A] inline-block">
          <a
            href="tel:8703339799"
            className="group gradient-border !text-white bg-gradient-to-r from-[#2E2A7A] to-[#1BBED3] !px-[36px] xs:!px-[20px] !py-[11px] flex items-center justify-center rounded-full font-[600] no-underline text-[16px] xs:text-[14px] bg-clip-padding hover:!text-black transition-colors duration-300 hover:from-white hover:to-white"
          >
            <img
              src={Phone}
              alt="Call Icon"
              className="w-[17px] xs:w-[14px] mr-1 transition duration-300 group-hover:invert"
            />
            (870) 333–9799
          </a>
        </div>

        {/* Burger Icon (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="xxs:block hidden text-white z-50"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xxs:flex hidden flex-col items-start gap-5 px-5 pb-6 pt-4 bg-[#2E2A7A] text-white text-[14px] w-full absolute top-full left-0 z-40 shadow-xl">
          {[
            ['/', 'Home'],
            ['/about-us', 'About Us'],
            ['/book-writing', 'Book Writing'],
            ['/book-editing', 'Book Editing'],
            ['/book-marketing', 'Book Marketing'],
            ['/book-publishing', 'Book Publishing'],
            ['/illustration', 'Illustration'],
            ['/contact-us', 'Contact Us'],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="font-[500] hover:underline transition-all duration-200"
            >
              {label}
            </NavLink>
          ))}

          {/* Call Button (Mobile) */}
          <div className="p-[1px] rounded-full bg-gradient-to-r from-[#1BBED3] to-[#2E2A7A] inline-block mt-2 w-full">
            <a
              href="tel:8703339799"
              className="group gradient-border !text-white bg-gradient-to-r from-[#2E2A7A] to-[#1BBED3] w-full !px-[20px] !py-[11px] flex items-center justify-center rounded-full font-[600] no-underline text-[14px] bg-clip-padding hover:!text-black transition-colors duration-300 hover:from-white hover:to-white"
            >
              <img
                src={Phone}
                alt="Call Icon"
                className="w-[14px] mr-2 transition duration-300 group-hover:invert"
              />
              (870) 333–9799
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar