import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BgImg from '../assets/hero-bg.png';
import RatingImg from '../assets/hero-rating.svg';
import Book1Img from '../assets/hero-book1.png';
import Book2Img from '../assets/hero-book2.png';
import Book3Img from '../assets/hero-book3.png';
import ArrowImg from '../assets/hero-arrow.svg';

const Hero = () => {
  const [books, setBooks] = useState([Book1Img, Book2Img, Book3Img]);
  const lastClickRef = useRef(0);

  const rotateBooks = () => {
    const now = Date.now();
    if (now - lastClickRef.current < 700) return; // throttle clicks
    lastClickRef.current = now;
    setBooks((prev) => [prev[2], prev[0], prev[1]]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotateBooks();
    }, 3000); // 3s for smoother transition on iOS
    return () => clearInterval(interval);
  }, []);

  const sizeClasses = ['w-[35%]', 'w-[28%]', 'w-[21%]'];

  return (
    <section className="bg-gradient-to-r from-black via-black to-[#142155] w-full h-fit">
      <div
        className="w-full h-full py-[160px] xxs:py-[100px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex justify-between items-center w-full mt-[70px] xxs:flex-col xxs:gap-[50px]">
          {/* Left Column */}
          <div className="w-[50%] xxs:w-[100%] flex justify-end pl-10 xxs:pl-4 pr-[75px] xxs:pr-4 xs:pr-10">
            <div className="w-fit">
              <span className="gradient-border relative inline-block !text-white mb-2 px-[30px] xxs:px-[14px] py-[8px] rounded-full z-10 border-[#1bcdfc] border-[2px] text-[16px] xs:text-[14px] xxs:text-[13px] xxs:font-[300]">
                Professional Book Writing Services USA
              </span>
              <h1 className="text-white text-[50px] xs:text-[38px] xxs:text-[30px] font-bold mt-3 mb-6 leading-tight">
                Your Ultimate Destination For Professional Book Publishing
              </h1>
              <p className="text-white text-lg mb-[30px] leading-relaxed text-[20px] xs:text-[16px] xxs:text-[14px] font-[400]">
                Let our expert team transform your ideas into a published book –
                with 100% Author Satisfaction!
              </p>
              <div className="flex flex-row mb-8 gap-4">
                <a
                  href="#"
                  className="gradient-border !text-white bg-gradient-to-r from-[#2E2A7A] to-[#1BBED3] !px-[36px] xs:!px-[26px] xxs:!px-[20px] !py-[11px] flex items-center justify-center rounded-full font-[600] no-underline text-[16px] xs:text-[15px] bg-clip-padding hover:!text-black transition-colors duration-300 hover:from-[white] hover:to-[white]"
                >
                  Let’s Get Started
                </a>
                <a
                  href="#"
                  className="gradient-border text-black bg-gradient-to-r from-[white] to-[white] border-[2px] border-[white] px-[26px] xs:px-[26px] xxs:!px-[20px] py-[11px] flex items-center justify-center rounded-full font-[600] no-underline text-[16px] xs:text-[15px] bg-clip-padding hover:!text-white hover:bg-gradient-to-r hover:from-[#2E2A7A] hover:to-[#1BBED3]"
                >
                  Live Chat
                </a>
              </div>
              <div className="pt-10 xxs:pt-5">
                <img src={RatingImg} alt="Leader Badge" className="w-4/5 xs:w-[500px]" />
              </div>
            </div>
          </div>

          {/* Right Column - Animated Books */}
          <div className="flex justify-start w-[50%] xxs:w-[100%] xxs:pl-4 pr-5 xxs:pr-3">
            <div className="flex items-center gap-[25px] xxs:gap-[8px] relative">
              <AnimatePresence>
                {books.map((book, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`${sizeClasses[index]} transition-all duration-900 shadow-[0px_10px_40px_21px_rgba(0,0,0,0.562)]`}
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
                className="w-[64px] xs:w-[44px] xxs:w-[40px] xxs:pl-[5px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
