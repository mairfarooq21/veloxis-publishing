import React from 'react';
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo3 from '../assets/logo3.png';
import Logo4 from '../assets/logo4.png';
import Logo5 from '../assets/logo5.png';
import Logo6 from '../assets/logo6.png';

const logos = [
  { src: Logo1, className: 'w-[105px] h-[37px]' },
  { src: Logo2, className: 'w-[220px] h-[47px]' },
  { src: Logo3, className: 'w-[274px] h-[23px]' },
  { src: Logo4, className: 'w-[244px] h-[43px]' },
  { src: Logo5, className: 'w-[229] h-[38px]' },
  { src: Logo6, className: 'w-[60px] h-[60px]' },
];

const BrandCarousel = () => {
  return (
    <section className="bg-white py-[60px] overflow-hidden w-[78%] mx-auto">
      <div className="relative w-full max-w-[1200px] mx-auto h-[100px]">
        <div className="flex w-max animate-carousel gap-10">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center justify-center min-w-[100px]">
              <img
                src={logo.src}
                alt={`logo-${i}`}
                className={`${logo.className} object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
