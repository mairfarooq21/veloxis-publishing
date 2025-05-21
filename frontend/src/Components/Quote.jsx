import React, { useState } from 'react';

const Quote = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    category: '',
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    const cleaned = value.replace(/[^a-zA-Z\s]/g, '');
    setFormData({ ...formData, fullName: cleaned });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '').slice(0, 11);
      setFormData({ ...formData, [name]: cleaned });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="bg-gradient-to-r from-[#2e2a7a] to-[#1bbed3] py-[45px] xxs:py-[30px] px-10 xxs:px-4 text-white font-poppins flex justify-center items-center">
      <form
        action="https://formsubmit.co/info@veloxispublishing.com"
        method="POST"
        className="w-[80%] s:w-[100%] flex justify-center items-center gap-[30px] xxs:gap-[20px] xxs:flex-col"
      >
        {/* Redirect to thank you page */}
        <input type="hidden" name="_next" value="https://veloxispublishing.com/thankyou/" />

        {/* Send checkbox value as hidden field */}
        <input type="hidden" name="Consent" value={isChecked ? 'Yes' : 'No'} />

        {/* 1st Grid: Text Area */}
        <div className="flex flex-col w-[30%] xxs:w-[100%]">
          <h2 className="text-[30px] xs:text-[25px] font-bold mb-[10px]">Get your Quote Today</h2>
          <p className="text-[18px] xs:text-[14px] mt-[-10px] leading-[1.6] text-[#e2e2e2]">
            Providing you the perfect solution for your business needs. Let's work together and unlock doors to success.
          </p>
        </div>

        {/* 2nd Grid: Form Inputs */}
        <div className="flex flex-col items-center gap-[15px] xs:gap-[10px] xxs:gap-[20px] w-[40%] xxs:w-[100%]">
          <div className="flex xxs:flex-col gap-[25px] xs:gap-[20px] xxs:w-full">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleNameChange}
              className="xs:text-[14px] text-[#000000] quote-input p-3 w-[240px] xs:w-[210px] xxs:w-full"
              placeholder="Full Name"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={11}
              className="xs:text-[14px] text-[#000000] quote-input p-3 w-[240px] xs:w-[210px] xxs:w-[100%]"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="flex xxs:flex-col gap-[25px] xs:gap-[20px] xxs:w-[100%]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="xs:text-[14px] text-[#000000] quote-input p-3 w-[240px] xs:w-[210px] xxs:w-[100%]"
              placeholder="Email"
              required
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="xs:text-[14px] quote-input p-3 h-full text-[#000000] w-[240px] xs:w-[210px] xxs:w-[100%]"
              required
            >
              <option value="">Select eBook Category</option>
              <option>Book Writing</option>
              <option>Book Editing</option>
              <option>Book Marketing</option>
              <option>Book Publishing</option>
              <option>Illustration</option>
            </select>
          </div>
        </div>

        {/* 3rd Grid: Checkbox + Button */}
        <div className="flex flex-col gap-[20px] xs:gap-[15px] items-start w-[30%] xxs:w-[100%]">
          <div className="flex items-start gap-[10px] text-[11px] text-[#d1d1d1]">
            <input
              type="checkbox"
              id="quote-checkbox"
              className="w-[16px] h-[16px] mt-[3px]"
              checked={isChecked}
              onChange={handleCheckboxChange}
              required
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
              transition-all duration-300 hover:bg-gradient-to-r hover:from-[#2E2A7A] hover:to-[#1BBED3] hover:!text-white"
          >
            <span className="xs:text-[14px] bg-gradient-to-r from-[#2E2A7A] to-[#1BBED3] bg-clip-text text-transparent transition-all duration-300 group-hover:text-white">
              Submit
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Quote;
