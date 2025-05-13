import React from 'react'
import Image from '../assets/whywe.png'

const WhyWe = () => {
  return (
    <section className="flex flex-wrap gap-6 justify-center items-center w-[100%] mx-auto pb-[100px]">
      <div className="flex justify-end items-center w-[50%] max-h-[300px] p-2 bg-gradient-to-r from-[#342A7C] to-[#A458A2]">
        <img src={Image} alt="Books on blanket" className="max-w-[700px]" />
      </div>
      <div className="flex-1 w-[50%] p-5">
        <div className='w-[640px]'>
          <span className="gradient-border !px-10 !py-3">
            Why We
          </span>
          <h2 className="text-[45px] font-semibold mt-4 mb-4">
            You Need Professional Book Publishing Services?
          </h2>
          <p className="mb-2 leading-relaxed text-[#666666]">
            Here is a list of reasons why you might be looking for a ghostwriting service;
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-[#201A1A]">
            <li><strong>You're a busy professional on your daily grind.</strong></li>
            <li><strong>You do not know where to start.</strong></li>
            <li><strong>You might not be a writer.</strong></li>
            <li><strong>You need an expert opinion on your already-written manuscript.</strong></li>
            <li><strong>You have no design expertise for a book cover or any illustrations.</strong></li>
            <li><strong>You already have a book but aren't sure about how to sell it.</strong></li>
          </ul>
          <p className="mb-2 leading-relaxed text-[#666666]">
            We understand that writing isn’t everyone’s cup of tea, but that does not mean people should give up on their ideas. You’re a wonderful person full of never-before-thought visions; we’re here to actualize them.
          </p>
          <p className="leading-relaxed text-[#666666]">
            Why not let us join you on this journey to create your best-selling book? We’d be honored to collaborate with you!
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyWe