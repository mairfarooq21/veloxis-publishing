import React, { useState } from 'react';
import BestSeller1 from '../assets/bestseller1.png';
import BestSeller2 from '../assets/bestseller2.png';
import BestSeller3 from '../assets/bestseller3.png';
import BestSeller4 from '../assets/bestseller4.png';
import BestSeller5 from '../assets/bestseller5.png';
import BestSeller6 from '../assets/bestseller6.png';

const steps = [
  {
    title: 'Sign Up',
    content: 'Start by signing up at our website or giving us a call. It is very easy to reach us via online or a phone call.',
    icon: BestSeller1,
  },
  {
    title: 'Share Project Details',
    content: 'Share your project with us in detail. We will need to know the ins and outs of your project’s content.',
    icon: BestSeller2,
  },
  {
    title: 'Research & Draft',
    content: 'After confirmation of your order, our team carries out research and formulates an outline for your book.',
    icon: BestSeller3,
  },
  {
    title: 'Editing & Proofreading',
    content: 'Once the book has been completed, our editors proofread and make the final corrections.',
    icon: BestSeller4,
  },
  {
    title: 'Cover Designing',
    content: 'We then design the front and back covers for your book to match the very essence of the content inside.',
    icon: BestSeller5,
  },
  {
    title: 'Publishing',
    content: 'We publish your book and develop custom strategies to ensure maximum revenue generation for your book.',
    icon: BestSeller6,
  },
];

const BestSeller = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <section className="pt-24 max-w-[1300px] mx-auto flex mb-[100px] flex-col items-center">
        <h5 className="badge text-md !text-black !px-10 !py-3">6 Step Process</h5>
        <h1 className="text-5xl mt-4 font-bold mb-1">Creating A Best-Seller Book</h1>
        <p className="text-xl mt-3 text-gray-700 mb-8">Helping your busy schedule in mind, we’ve simplified the process into six easy steps.</p>
  
        {steps.map((step, index) => (
          <div
            key={index}
            className={`w-[80vw] my-4 transition-all duration-300 border border-black rounded-[50px] shadow-md overflow-hidden ${activeIndex === index ? 'bg-gradient-to-b from-[#2C3983] to-[#1DAEC9] text-white' : 'bg-[#F3F3F3]'}`}
          >
            <div
              className="flex items-center justify-between cursor-pointer px-10 py-14 text-[2.2rem] font-semibold"
              onClick={() => toggle(index)}
            >
              <span className="flex items-center gap-4">
                <img
                  src={step.icon}
                  alt="icon"
                  className={`w-20 pr-5 mr-3 ${activeIndex === index ? 'invert' : ''}`}
                />
                {step.title}
              </span>
              <span
                className={`w-16 h-16 flex items-center justify-center rounded-full border border-black text-3xl font-bold ${activeIndex === index ? 'bg-white text-black' : 'text-black'}`}
              >
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
  
            <div
              className={`px-10 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-[300px] pb-20' : 'max-h-0'}`}
            >
              <hr className="border-t border-gray-300 mb-6" />
              <p className="text-lg leading-relaxed">
                {step.content}
              </p>
            </div>
          </div>
        ))}
      </section>
    );
}

export default BestSeller