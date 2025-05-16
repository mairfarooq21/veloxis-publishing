import React from 'react';
import ContactImg from '../assets/contact.png'

const ContactSection = () => {
  return (
    <div className="flex flex-col self-center md:flex-row gap-12 xxs:gap-0 max-w-[1500px] my-24 xxs:my-[60px] mx-auto px-10 overflow-hidden
                    xxs:px-4">
      {/* Contact Form */}
      <div className="flex-1 bg-white p-6 rounded-lg
                      xxs:p-4">
        <div className="gradient-border !text-black !px-10 !py-3 xxs:!px-6 xxs:!py-2">
          <span className="relative z-10">Contacts</span>
        </div>

        <h2 className="text-5xl font-semibold mt-7 mb-2 xxs:text-3xl">Let’s Talk About Your Project!</h2>
        <p className="text-gray-600 mb-6 xxs:text-sm">
          We are ready to share with you our design vision and lead you into the exciting world of creativity.
        </p>

        <form className="space-y-5">
          <div className="relative">
            <i className="fas fa-user absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500"></i>
            <input type="text" placeholder="Full Name" required className="w-full pl-12 py-3 border border-gray-300 rounded-xl text-base xxs:text-sm" />
          </div>

          <div className="relative">
            <i className="fas fa-envelope absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500"></i>
            <input type="email" placeholder="Email Address" required className="w-full pl-12 py-3 border border-gray-300 rounded-xl text-base xxs:text-sm" />
          </div>

          <div className="relative">
            <i className="fas fa-phone absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500"></i>
            <input type="tel" placeholder="Phone Number" required className="w-full pl-12 py-3 border border-gray-300 rounded-xl text-base xxs:text-sm" />
          </div>

          <div className="relative">
            <i className="fas fa-comment-dots absolute top-4 left-4 text-gray-500"></i>
            <textarea placeholder="Write something here..." required className="w-full pl-12 pt-3 pb-3 border border-gray-300 rounded-xl text-base min-h-[100px] resize-none xxs:text-sm"></textarea>
          </div>

          <button
            type="submit"
            className="badge relative w-full !py-3 font-bold text-xl !text-black bg-transparent border border-gray-300 overflow-hidden transition-all duration-300
             hover:bg-gradient-to-r hover:from-[#2E2A7A] hover:to-[#1BBED3] hover:!text-white xxs:text-base"
          >
            <span className="relative z-10">Submit Now</span>
          </button>

        </form>
      </div>

      {/* Contact Image */}
      <div
        className="flex-1 relative max-w-[45%] rounded-2xl bg-cover bg-center p-20 text-white flex items-center justify-center
                  xxs:max-w-full xxs:p-8 xxs:mt-10"
        style={{ backgroundImage: `url(${ContactImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,72,255,0.8)] to-[rgba(127,0,255,0.8)] opacity-10 rounded-2xl z-0" />
        <h3 className="relative z-10 text-[38px] font-bold text-center leading-snug xxs:text-xl">
          We specialize in bringing your book to life through comprehensive, professional publishing solutions—every step of the way.
        </h3>
      </div>
    </div>
  );
};

export default ContactSection;