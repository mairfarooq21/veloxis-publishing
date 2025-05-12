import React, { useState } from 'react';
import ArrowLeft from '../assets/arrow-left.svg'
import ArrowRight from '../assets/arrow-right.svg'

const initialCards = [
    {
      title: 'eBooks',
      description: 'For Kindle, Apple Books, Nook, and other e-readers.',
    },
    {
      title: 'Print Books',
      description: 'Paperback and hardcover formats with custom layouts.',
    },
    {
      title: 'Audiobooks',
      description: 'Professionally narrated books in all major formats.',
    },
    {
      title: 'Interactive PDFs',
      description: 'Enhanced PDFs with clickable links and designs.',
    },
    {
      title: 'Magazines',
      description: 'Layout and design for print and digital magazines.',
    },
  ];
  

const Services = () => {
    const [cards, setCards] = useState(initialCards);

    const rotateLeft = () => {
      const newCards = [...cards];
      newCards.unshift(newCards.pop());
      setCards(newCards);
    };
  
    const rotateRight = () => {
      const newCards = [...cards];
      newCards.push(newCards.shift());
      setCards(newCards);
    };
  
    return (
      <section className="py-16 flex flex-wrap items-center justify-center max-w-full mx-auto">
        <div className="flex flex-wrap items-center justify-center w-[78%]">
          <div className="flex items-end justify-between w-full pb-11">
            <div className="w-[800px]">
              <span className="relative inline-block text-black mb-2 px-[30px] py-[8px] rounded-full z-10 before:content-[''] before:absolute before:inset-0 before:p-[2px] before:rounded-full before:bg-transparent before:z-[-1] before:mask-composite-exclude before:mask-[linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] border-[#1bcdfc] border-[2px]">
                We Offer a Range of
              </span>
              <h2 className="text-[45px] font-semibold mb-4 text-[#201A1A]">
                Professional Ghostwriting Services,
              </h2>
              <p className="text-[18px] leading-relaxed text-[#666666]">
                Our team excels in formatting and editing, delivering a range of book formats tailored to your unique needs. Formats we offer include
              </p>
            </div>
            <div className="flex gap-2 ml-auto mb-4 lg:mb-0">
              <img src={ArrowLeft} className='w-[73px]' onClick={rotateLeft} alt="" />
              <img src={ArrowRight} className='w-[73px]' onClick={rotateRight} alt="" />
            </div>
          </div>
        </div>
  
        <div className="w-full mt-4">
          <div className="flex justify-between flex-wrap transition-all duration-500 ease-in-out">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`card flex-[0_0_18%] bg-white m-2 px-5 py-8 shadow-md text-black transition-all duration-300 hover:scale-[1.02] 
                  ${
                    index === 0
                      ? 'bg-gradient-to-r from-[#A458A2] to-[#342A7C] text-white scale-105 shadow-[0px_30px_60px_rgba(151,83,158,0.5)]'
                      : 'hover:bg-gradient-to-r hover:from-[#A458A2] hover:to-[#342A7C] hover:text-white hover:shadow-[0px_30px_60px_rgba(151,83,158,0.5)]'
                  }`}
              >
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm mb-4 leading-snug">{card.description}</p>
                <button
                  className={`relative font-semibold px-6 py-2 rounded-full z-10 transition-all duration-300 border-[2px] border-[#1BBED3]
                    ${
                      index === 0
                        ? 'bg-gradient-to-r from-[#2E2A7A] to-[#1BBED3] text-white'
                        : 'bg-white text-black hover:bg-gradient-to-r hover:from-[#2E2A7A] hover:to-[#1BBED3] hover:text-white'
                    }`}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Services