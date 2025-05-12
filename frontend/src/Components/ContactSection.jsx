import React from 'react';
import ContactImg from '../assets/contact.png'

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 max-w-[1300px] mx-auto my-24 overflow-hidden">
      {/* Contact Form */}
      <div className="flex-1 bg-white p-6 rounded-lg">
        <div className="relative w-[150px] mb-4 text-center font-semibold text-black cursor-pointer rounded-full bg-white z-10">
          <span className="relative z-10">Contacts</span>
          <div className="absolute inset-0 p-[2px] rounded-full bg-gradient-to-l from-[#2E2A7A] to-[#1BBED3] mask-xor z-0" />
        </div>

        <h2 className="text-3xl font-semibold mb-2">Let’s Talk About Your Project!</h2>
        <p className="text-gray-600 mb-6">
          We are ready to share with you our design vision and lead you into the exciting world of creativity.
        </p>

        <form className="space-y-5">
          <div className="relative">
            <i className="fas fa-user absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500"></i>
            <input type="text" placeholder="Full Name" required className="w-full pl-12 py-3 border border-gray-300 rounded-xl text-base" />
          </div>

          <div className="relative">
            <i className="fas fa-envelope absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500"></i>
            <input type="email" placeholder="Email Address" required className="w-full pl-12 py-3 border border-gray-300 rounded-xl text-base" />
          </div>

          <div className="relative">
            <i className="fas fa-phone absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500"></i>
            <input type="tel" placeholder="Phone Number" required className="w-full pl-12 py-3 border border-gray-300 rounded-xl text-base" />
          </div>

          <div className="relative">
            <i className="fas fa-comment-dots absolute top-4 left-4 text-gray-500"></i>
            <textarea placeholder="Write something here..." required className="w-full pl-12 pt-3 pb-3 border border-gray-300 rounded-xl text-base min-h-[100px] resize-none"></textarea>
          </div>

          <button type="submit" className="relative w-full py-3 font-bold text-black bg-white rounded-full z-10 hover:bg-gradient-to-r from-[#00e5ff] to-[#7200ff] hover:text-white transition-colors">
            <span className="relative z-10">Submit Now</span>
            <div className="absolute inset-0 p-[2px] rounded-full bg-gradient-to-l from-[#2E2A7A] to-[#1BBED3] mask-xor z-0" />
          </button>
        </form>
      </div>

      {/* Contact Image */}
      <div className="flex-1 relative max-w-[50%] rounded-2xl bg-cover bg-center p-20 text-white flex items-center justify-center" style={{ backgroundImage: `url(${ContactImg})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,72,255,0.8)] to-[rgba(127,0,255,0.8)] opacity-10 rounded-2xl z-0" />
        <h3 className="relative z-10 text-3xl font-bold text-center leading-snug">
          We specialise in helping our customers bring their books to life through professional, end-to-end publishing solutions.
        </h3>
      </div>
    </div>
  );
};

export default ContactSection;
