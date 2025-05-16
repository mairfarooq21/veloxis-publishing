import React from "react";
import AuthorLeft from "../assets/author-left.png";
import AuthorRight from "../assets/author-right.png";

const Author = () => {
  return (
    <section
  className="flex flex-wrap md:flex-nowrap justify-between items-center py-8 pl-4 pr-0 bg-gradient-to-r from-[#A458A2] to-[#342A7C] h-[310px] w-full xxs:flex-col xxs:h-auto xxs:py-12"
  style={{ boxShadow: "0px 50px 60px rgba(151, 83, 158, 0.5)" }}
>
  {/* Left Image */}
  <div className="min-w-[484px] xxs:min-w-0 xxs:w-full xxs:flex xxs:justify-center xxs:mb-8">
    <img
      src={AuthorLeft}
      alt="The Missing Piece Book"
      className="min-w-[360px] mt-[50px] xxs:min-w-0 xxs:w-[70vw] xxs:max-w-[280px] xxs:mt-0"
    />
  </div>

  {/* Center Content */}
  <div className="text-white text-center s:-mx-20 xxs:px-4 xxs:w-full xxs:flex xxs:flex-col xxs:justify-center xxs:items-center">
    <h2 className="text-[38px] s:text-[35px] xs:text-[30px] font-semibold leading-[1.2] xxs:text-[26px] xxs:max-w-full xxs:mb-4">
      Your Journey to Becoming a <br /> Best-Selling Author has Never Been this Easy!
    </h2>
    <p className="text-[17px] mt-3 mb-4 xxs:text-[15px] xxs:max-w-[320px]">
      So, what are you waiting for? Click the button below to embark on your self-authorship journey today!
    </p>
    <div className="flex flex-col md:flex-row justify-center gap-4 mt-4 xxs:w-full xxs:px-6">
      {/* Hire Button */}
      <button className="card-button relative flex items-center justify-center px-9 py-3 text-white text-[20px] font-semibold rounded-full z-10 bg-gradient-to-r from-[#2E2A7A] to-[#1BBED3] hover:from-[white] hover:to-[white] hover:text-black xxs:text-[16px] xxs:px-6 xxs:py-2">
        Hire Author
      </button>

      {/* Chat Button */}
      <button className="card-button bg-white text-black font-semibold rounded-full px-6 py-[10px] hover:bg-gradient-to-r hover:!from-[#2E2A7A] hover:!to-[#1BBED3] hover:text-white xxs:text-[16px] xxs:px-5 xxs:py-2">
        Chat with Us
      </button>
    </div>
  </div>

  {/* Right Image */}
 <div className="min-w-[500px] mt-[140px] xxs:min-w-0 xxs:w-full xxs:flex xxs:justify-end xxs:mt-8 xxs:mb-[-170px]">
  <img
    src={AuthorRight}
    alt="PEMF Therapy Guides"
    className="min-w-[500px] mt-[140px] xxs:min-w-0 xxs:w-[100vw] xxs:max-w-[400px] xxs:mt-0"
  />
</div>

</section>


  )
}

export default Author