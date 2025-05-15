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
            Here are a few reasons you might be considering a ghostwriting or book publishing service:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-[#201A1A]">
            <li><strong>You're a busy professional with limited time to write.</strong></li>
            <li><strong>You’re not sure how to begin the writing process.</strong></li>
            <li><strong>You don’t consider yourself a writer.</strong></li>
            <li><strong>You’re seeking expert feedback on your manuscript.</strong></li>
            <li><strong>You need professional design for your book cover or illustrations.</strong></li>
            <li><strong>You’ve already written a book but aren’t sure how to market it.</strong></li>
          </ul>
          <p className="mb-2 leading-relaxed text-[#666666]">
            We understand that writing isn’t everyone’s strength—but that shouldn’t stop you from sharing your vision with the world. You have unique ideas that deserve to be heard. Our team is here to bring them to life.
          </p>
          <p className="leading-relaxed text-[#666666]">
            Let’s work together to turn your story into a bestseller. We’d be honored to be part of your journey.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyWe