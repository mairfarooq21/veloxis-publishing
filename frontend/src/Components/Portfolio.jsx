import React from 'react';
import PortfolioBg from '../assets/portfolio-bg.jpg';
import Portfolio1 from '../assets/portfolio1.png';
import Portfolio2 from '../assets/portfolio2.png';
import Portfolio3 from '../assets/portfolio3.png';
import Portfolio4 from '../assets/portfolio4.png';
import Portfolio5 from '../assets/portfolio5.png';
import Portfolio6 from '../assets/portfolio6.png';
import Portfolio7 from '../assets/portfolio7.png';

const imagePaths = [
  Portfolio1,
  Portfolio2,
  Portfolio3,
  Portfolio4,
  Portfolio5,
  Portfolio6,
  Portfolio7,
];

const Portfolio = () => {
  const doubledImages = [...imagePaths, ...imagePaths];

  return (
    <section className="w-full bg-cover bg-center" style={{ backgroundImage: `url(${PortfolioBg})` }}>
      <section className="max-w-[1200px] mx-auto text-center pt-[80px] xxs:pt-[60px] pb-[30px] xxs:px-4">
        <button
          disabled
          className="badge !px-10 !py-3 xxs:!px-[16px] xxs:text-[16px]"
        >
          Our Portfolio
        </button>
        <h2 className="text-white text-[40px] xxs:text-[25px] font-semibold leading-snug mx-auto">
          Experience powerful storytelling across a variety of genres, brought to life by our talented team of writers.
        </h2>
      </section>

      {/* Top Slider */}
      <div className="w-full overflow-hidden py-6">
        <div className="flex gap-4 w-fit animate-scroll whitespace-nowrap">
          {doubledImages.map((src, index) => (
            <img
              key={`top-${index}`}
              src={src}
              alt={`Book ${index}`}
              className="w-[240px] h-[360px] object-cover shrink-0 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* Bottom Slider */}
      <div className="w-full overflow-hidden py-6">
        <div className="flex gap-4 w-fit animate-scroll-reverse whitespace-nowrap">
          {doubledImages.map((src, index) => (
            <img
              key={`bottom-${index}`}
              src={src}
              alt={`Book ${index}`}
              className="w-[240px] h-[360px] object-cover shrink-0 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      <section className="flex justify-center pt-[30px] pb-[80px]">
        <button className="card-button relative flex items-center justify-center px-9 xxs:px-5 py-3 text-white text-[20px] xxs:text-[16px] font-semibold rounded-full z-10 bg-gradient-to-r from-[#2E2A7A] to-[#1BBED3] hover:from-[white] hover:to-[white] hover:text-black">
          See All Portfolios
        </button>
      </section>
    </section>
  );
};

export default Portfolio;
