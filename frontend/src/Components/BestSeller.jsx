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
    content: "Begin by signing up on our website or giving us a call—connecting with us is quick and easy. You'll gain instant access to our publishing resources and a dedicated team ready to support your journey. No complicated steps—just a simple start to getting your book out into the world.",
    icon: BestSeller1,
  },
  {
    title: 'Share Project Details',
    content: "Tell us everything about your book idea so we can fully understand your vision. Whether it’s a rough concept or a full manuscript, we’re here to listen and collaborate. The more you share, the better we can tailor our services to bring your story to life.",
    icon: BestSeller2,
  },
  {
    title: 'Research & Draft',
    content: "Once your order is confirmed, our team conducts research and creates a detailed outline. We ensure your content is accurate, engaging, and aligned with your target audience. You’ll receive regular updates and drafts so you’re always part of the creative process.",
    icon: BestSeller3,
  },
  {
    title: 'Editing & Proofreading',
    content: "Our editors review the draft, correct errors, and polish the manuscript for perfection. We focus on clarity, consistency, tone, and grammar to elevate your writing. The result is a refined, publication-ready manuscript that meets industry standards.",
    icon: BestSeller4,
  },
  {
    title: 'Cover Designing',
    content: "We craft professional front and back covers that align with your story’s theme. Our designers combine creativity and market trends to create eye-catching visuals. A stunning cover ensures your book stands out both online and on shelves.",
    icon: BestSeller5,
  },
  {
    title: 'Publishing',
    content: "Your book is published and supported by customized strategies for maximum exposure and revenue. We distribute across leading platforms and help you reach your ideal readers. From launch to long-term sales, we’re with you every step of the way.",
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