import React, { useState } from 'react';
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';
import CoverDesignLogo from '../assets/bookCoverDesign-logo.png';
import BookWritingLogo from '../assets/bookwriting-logo.png';
import GhostWritingLogo from '../assets/ghostwriting-logo.png';
import IllustrativeArtLogo from '../assets/illutrativeart-logo.png';
import PublishingLogo from '../assets/Publishing-logo.png';

const initialCards = [
  {
    image: GhostWritingLogo,
    title: 'Ghostwriting',
    description:
      'Reach a wider audience with our skilled ghostwriters, who thoughtfully craft and format your content to perfection.',
  },
  {
    image: BookWritingLogo,
    title: '⁠Book Editing',
    description:
      'Ensure your manuscript is flawless with our expert editors, dedicated to refining and polishing every word.',
  },
  {
    image: CoverDesignLogo,
    title: 'Book Cover Design',
    description:
      'Create an unforgettable first impression with a custom book cover that reflects your story’s soul.',
  },
  {
    image: IllustrativeArtLogo,
    title: 'Illustrative Art',
    description:
      'Add depth and beauty to your book with stunning, hand-crafted illustrations by professional artists.',
  },
  {
    image: PublishingLogo,
    title: 'Publishing',
    description:
      'From manuscript to market, we provide seamless publishing support and strategies for success.',
  },
];

const Services = () => {
  const [cards, setCards] = useState(initialCards);

  const rotateLeft = () => {
    const updated = [...cards];
    updated.unshift(updated.pop());
    setCards(updated);
  };

  const rotateRight = () => {
    const updated = [...cards];
    updated.push(updated.shift());
    setCards(updated);
  };

  return (
    <section className="py-16 flex flex-col items-center max-w-full mx-auto">
      <div className="w-[78%] mb-10">
        <div className="flex justify-between items-end w-full pb-11">
          <div className="w-[800px]">
            <span className="gradient-border text-md !px-10 !py-3">
              We Offer a Range of
            </span>
            <h2 className="text-[45px] font-semibold mb-1 mt-5 text-[#201A1A]">
              Professional Ghostwriting Services,
            </h2>
            <p className="text-[18px] leading-relaxed text-[#666666]">
              Our team excels in formatting and editing, delivering a range of book formats tailored to your unique needs.
            </p>
          </div>
          <div className="flex gap-2 ml-auto mb-4 lg:mb-0">
            <img src={ArrowLeft} className="w-[73px] cursor-pointer" onClick={rotateLeft} alt="Left" />
            <img src={ArrowRight} className="w-[73px] cursor-pointer" onClick={rotateRight} alt="Right" />
          </div>
        </div>
      </div>

      <div className="w-full mb-24">
        <div className="flex justify-center transition-transform duration-500 ease-in-out">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group flex-shrink-0 transition-all duration-300 px-11 py-24 xxl:px-8 xxl:py-14 w-[20%] flex flex-col justify-start items-start h-[550px] xxl:h-[500px]
                border border-gray-300 bg-white text-black hover:scale-[1.1]
                hover:bg-gradient-to-r hover:from-[#A458A2] hover:to-[#342A7C] hover:text-white
                hover:shadow-[0px_30px_60px_rgba(151,83,158,0.5)]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-[80px] w-auto object-contain mb-4 transition duration-300
                  group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-md mb-4 leading-relaxed">{card.description}</p>
              <button
                className="card-button relative font-semibold px-6 py-2 rounded-full z-10 transition-all duration-300 mt-10
                  bg-white text-black hover:bg-gradient-to-r hover:from-[#2E2A7A] hover:to-[#1BBED3] hover:text-white"
              >
                Let's Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
