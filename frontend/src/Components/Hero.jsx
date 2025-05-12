import React from 'react'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BgImg from '../assets/hero-bg.png'
import RatingImg from '../assets/hero-rating.svg'
import Book1Img from '../assets/hero-book1.png'
import Book2Img from '../assets/hero-book2.png'
import Book3Img from '../assets/hero-book3.png'
import ArrowImg from '../assets/hero-arrow.svg'

const Hero = () => {
  const [books, setBooks] = useState([Book1Img, Book2Img, Book3Img]);

  const rotateBooks = () => {
    setBooks((prev) => [prev[2], prev[0], prev[1]]);
  };

  const sizeClasses = ["w-[35%]", "w-[28%]", "w-[21%]"];

  return (
    <section className="bg-gradient-to-r from-black via-black to-[#142155] w-full h-[100vh]">
      <div
        className="w-full h-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex justify-between items-center w-full mt-11">
          {/* First Column */}
          <div className="w-[50%] flex justify-end pl-10">
            <div className="w-[745px]">
              <span className="relative inline-block text-white mb-2 px-[30px] py-[8px] rounded-full z-10 before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-full before:bg-transparent before:z-[-1] before:mask-composite-exclude before:mask-[linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] border-[#1bcdfc] border-[2px]">
                Professional Book Writing Services USA
              </span>
              <h1 className="text-white text-[50px] font-bold mt-3 mb-6 leading-tight">
                Your Ultimate Destination For Professional Book Publishing
              </h1>
              <p className="text-white text-lg mb-[30px] leading-relaxed text-[20px] font-[400]">
                From manuscript to bestseller, let our expert team turn your ideas
                <br /> into a published book – 100% Author Satisfaction!
              </p>
              <div className="flex flex-row mb-8 gap-4">
                <a
                  href="#"
                  className="text-white bg-gradient-to-r from-[#2E2A7A] to-[#1BBED3] border-[2px] border-[#1BBED3] px-[26px] py-[11px] flex items-center justify-center rounded-full font-[600] no-underline text-[16px] bg-clip-padding"
                >
                  Let’s Get Started
                </a>
                <a
                  href="#"
                  className="text-black bg-white border-[2px] border-[white] px-[26px] py-[11px] flex items-center justify-center rounded-full font-[600] no-underline text-[16px] bg-clip-padding"
                >
                  Live Chat
                </a>
              </div>
              <div className="pt-10">
                <img src={RatingImg} alt="Leader Badge" className="w-4/5" />
              </div>
            </div>
          </div>

          {/* Second Column with Animated Books */}
          <div className="flex justify-start w-[50%] pr-5">
            <div className="flex items-center gap-[25px] relative">
              <AnimatePresence mode="popLayout">
                {books.map((book, index) => (
                  <motion.div
                    key={`${book}-${index}`}
                    layout="position"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`${sizeClasses[index]} transition-all duration-700 shadow-[0px_10px_40px_21px_rgba(0,0,0,0.562)]`}
                  >
                    <img src={book} alt={`Book ${index + 1}`} className="w-full" />
                  </motion.div>
                ))}
              </AnimatePresence>
              <motion.img
                src={ArrowImg}
                alt="Arrow"
                onClick={rotateBooks}
                whileTap={{ scale: 0.9 }}
                className="w-[64px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;