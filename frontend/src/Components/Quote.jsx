import React, { useState } from 'react';

const Quote = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="bg-gradient-to-r from-[#2e2a7a] to-[#1bbed3] py-[45px] px-10 text-white font-poppins flex justify-center items-center">
      <div className="w-[80%] s:w-[100%] flex justify-center items-center gap-[30px]">
        
        {/* 1st Grid: Text Area */}
        <div className="flex flex-col w-[30%]">
          <h2 className="text-[30px] xs:text-[25px] font-bold mb-[10px]">Get your Quote Today</h2>
          <p className="text-[18px] xs:text-[14px] mt-[-10px] leading-[1.6] text-[#e2e2e2]">
            Providing you the perfect solution for your business needs. Let's work together and unlock doors to success.
          </p>
        </div>

        {/* 2nd Grid: Form Inputs */}
        <div className="flex flex-col items-center gap-[15px] xs:gap-[10px] w-[40%]">
          <div className="flex gap-[25px] xs:gap-[20px]">
            <input type="text" className="xs:text-[14px] quote-input p-3 w-[240px] xs:w-[210px]" placeholder="Full Name" />
            <input type="text" className="xs:text-[14px] quote-input p-3 w-[240px] xs:w-[210px]" placeholder="Phone Number" />
          </div>
          <div className="flex gap-[25px] xs:gap-[20px]">
            <input type="email" className="xs:text-[14px] quote-input p-3 w-[240px] xs:w-[210px]" placeholder="Email" />
            <select className="xs:text-[14px] quote-input p-3 text-[#8f8f8f] w-[240px] xs:w-[210px]">
              <option className='text-black'>Select eBook Category</option>
              <option className='text-black'>Business</option>
              <option className='text-black'>Marketing</option>
              <option className='text-black'>Technology</option>
            </select>
          </div>
        </div>

        {/* 3rd Grid: Checkbox + Button */}
        <div className="flex flex-col gap-[20px] xs:gap-[15px] items-start w-[30%]">
          <div className="flex items-start gap-[10px] text-[11px] text-[#d1d1d1]">
            <input
              type="checkbox"
              id="quote-checkbox"
              className="w-[16px] h-[16px] mt-[3px]"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="quote-checkbox"
              className="text-[13px] xs:text-[12px] text-white"
            >
              Please <strong>check the box to communicate via sms or email</strong> – carrier charges may apply for sms, reply stop or unsubscribe to stop or unsubscribe anytime.
            </label>
          </div>
          <button
          type="submit"
          className="gradient-border relative !px-[60px] !py-[10px] !bg-white font-bold rounded-[30px] z-[1] overflow-hidden group border-[2px] border-transparent
            transition-all duration-300  hover:bg-gradient-to-r hover:from-[#2E2A7A] hover:to-[#1BBED3] hover:!text-white">
          <span
            className="xs:text-[14px] bg-gradient-to-r from-[#2E2A7A] to-[#1BBED3] bg-clip-text text-transparent transition-all duration-300 group-hover:text-white"
          >
    Submit
  </span>
</button>

        </div>

      </div>
    </section>
  );
};

export default Quote;
