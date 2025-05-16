import React from 'react'
import Image from '../assets/whywe.png'

const WhyWe = () => {
  return (
    <section className="flex flex-wrap xxs:flex-col-reverse gap-6 xxs:gap-[80px] justify-center items-center xxs:items-start w-[100%] mx-auto pb-[100px]">
      <div className="flex justify-end items-center w-[50%] xxs:w-[90%] max-h-[300px] xs:max-h-[200px] xxs:max-h-[100px] p-2 bg-gradient-to-r from-[#342A7C] to-[#A458A2]">
        <img src={Image} alt="Books on blanket" className="max-w-[700px] xs:max-w-[550px] xxs:max-w-[280px]" />
      </div>
      <div className="flex-1 w-[50%] xxs:w-[100%] p-5 xxs:p-4 pr-10 xxs:pr-4">
        <div className='w-[640px] xs:w-fit'>
          <span className="gradient-border !px-10 xs:!px-8 !py-3 xs:text-[14px] xxs:!px-[14px] xxs:text-[13px]">
            Why We
          </span>
          <h2 className="text-[45px] xs:text-[35px] xxs:text-[27px] font-semibold mt-4 mb-4 xs:leading-[45px] xxs:leading-[32px]">
            You Need Professional Book Publishing Services?
          </h2>
          <p className="mb-2 leading-relaxed text-[#666666] xs:text-[14px]">
            Here are a few reasons you might be considering a ghostwriting or book publishing service:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2 text-[#201A1A] xs:text-[14px]">
            <li><strong>You're a busy professional with limited time to write.</strong></li>
            <li><strong>You’re not sure how to begin the writing process.</strong></li>
            <li><strong>You don’t consider yourself a writer.</strong></li>
            <li><strong>You’re seeking expert feedback on your manuscript.</strong></li>
            <li><strong>You need professional design for your book cover or illustrations.</strong></li>
            <li><strong>You’ve already written a book but aren’t sure how to market it.</strong></li>
          </ul>
          <p className="mb-2 leading-relaxed text-[#666666] xs:text-[14px]">
            We understand that writing isn’t everyone’s strength—but that shouldn’t stop you from sharing your vision with the world. You have unique ideas that deserve to be heard. Our team is here to bring them to life.
          </p>
          <p className="leading-relaxed text-[#666666] xs:text-[14px]">
            Let’s work together to turn your story into a bestseller. We’d be honored to be part of your journey.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyWe