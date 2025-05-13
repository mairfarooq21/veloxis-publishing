import React from "react";
import AuthorLeft from "../assets/author-left.png";
import AuthorRight from "../assets/author-right.png";

const Author = () => {
  return (
    <section className="flex flex-wrap md:flex-nowrap justify-between items-center py-8 pl-4 pr-0 bg-gradient-to-r from-[#A458A2] to-[#342A7C] h-[310px] w-full" 
    style={{ boxShadow: '0px 50px 60px rgba(151, 83, 158, 0.5)' }}>
      {/* Left Image */}
      <div className="min-w-[484px]">
        <img src={AuthorLeft} alt="The Missing Piece Book" className="min-w-[360px] mt-[50px]" />
      </div>

      {/* Center Content */}
      <div className="text-white text-center w-[100%]">
        <h2 className="text-[2.4rem] font-semibold leading-[1.2]">
          Your Journey to Becoming a <br /> Best-Selling Author has Never Been this Easy!
        </h2>
        <p className="text-[17px] mt-3 mb-4">
          So, what are you waiting for? Click the button below to embark on your self-authorship journey today!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          {/* Hire Button */}
          <button className="card-button relative flex items-center justify-center px-9 py-3 text-white text-[20px] font-semibold rounded-full z-10 bg-gradient-to-r from-[#2E2A7A] to-[#1BBED3]">
            Hire Author
          </button>

          {/* Chat Button */}
          <button className="bg-white text-black font-semibold rounded-full px-6 py-[10px] hover:bg-gray-100 border-[2px] border-white">
            Chat with Us
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div>
        <img src={AuthorRight} alt="PEMF Therapy Guides" className="min-w-[500px] mt-[140px]" />
      </div>
    </section>
  )
}

export default Author