import React from 'react'

const ContactWindow = () => {
  return (
    <section className="relative z-20 px-5 text-center fade-in-out">
      <div className="max-w-[1100px] mx-auto bg-gradient-to-br from-[#2e2d91] to-[#15c9e2] rounded-2xl py-[60px] px-10 xxs:py-10 xxs:px-5 text-white">
        <h2 className="text-[3.5rem] font-bold xxs:text-2xl">
          Move even faster with Veloxis
        </h2>
        <p className="text-[2.8rem] font-bold mb-8 xxs:text-lg">
          Your guide in the Book Publishing.
        </p>
        <div className="flex justify-center flex-wrap gap-5 xxs:flex-col xxs:items-center">
          <button className="bg-white text-black font-bold border-2 border-white py-2.5 px-12 rounded-full text-lg hover:opacity-90 transition-all duration-300
             hover:bg-gradient-to-r hover:from-[#2E2A7A] hover:to-[#1BBED3] hover:!text-white hover:border-white
             xxs:px-8 xxs:w-full xxs:max-w-xs">
            Let’s Talk
          </button>
          <button className="bg-transparent text-white font-semibold py-3 px-7 rounded-full text-base border-2 border-white hover:bg-gradient-to-r hover:from-[#2E2A7A] hover:to-[#1BBED3]
             xxs:w-full xxs:max-w-xs">
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactWindow