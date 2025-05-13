import { FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowRight } from "react-icons/fa"
import FooterLogo from '../assets/footer-logo.png'
import FooterBg from '../assets/footer-bg.jpg'

const Footer = () => {
  return (
    <div className="relative mt-[-200px] pt-[300px] z-[1] bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${FooterBg})`}}>
      <div className="flex flex-wrap justify-between text-white px-[10%]">
        {/* Logo Section */}
        <div className="flex-1 min-w-[220px] mb-8">
          <img
            src={FooterLogo}
            alt="Veloxis Logo"
            className="max-w-[160px] mb-5"
          />
          <p className="text-[#d1d1d1] leading-relaxed text-xl">
            We are your one-stop solution for all of your book writing, editing, and publishing needs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[220px] mb-8 justify-items-center">
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="ml-6 space-y-2 text-md text-[#d1d1d1] ">
            {["About Us", "Book Writing", "Book Editing", "Book Marketing", "Book Publishing", "Illustration", "Contact Us"].map(link => (
              <li key={link} className="hover:font-bold cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 min-w-[220px] mb-8">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-[#d1d1d1] text-md my-4 w-[80%]">Phone: (870) 233–9799</p>
          <p className="text-[#d1d1d1] text-md my-4 w-[80%]">Email: Info@veloxispublishing.com</p>
          <p className="text-[#d1d1d1] text-md my-4 w-[80%]">Address: 2200 Meadowlake Rd, Conway AR 72032</p>
          <div className="flex mt-6 space-x-3">
            <FaFacebookF className="bg-gradient-to-r from-[#1e3c72] to-[#2a9fd6] rounded-full p-2 text-white text-lg w-9 h-9 cursor-pointer" />
            <FaInstagram className="bg-gradient-to-r from-[#1e3c72] to-[#2a9fd6] rounded-full p-2 text-white text-lg w-9 h-9 cursor-pointer" />
            <FaLinkedinIn className="bg-gradient-to-r from-[#1e3c72] to-[#2a9fd6] rounded-full p-2 text-white text-lg w-9 h-9 cursor-pointer" />
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[220px] mb-8 text-[#d1d1d1] text-md">
          <h3 className="text-2xl font-semibold text-white mb-4">Sign up to our newsletter</h3>
          <p>Stay up to date with the latest news, announcements, and articles.</p>
          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-3 border border-gray-300 rounded-l-md bg-transparent outline-none w-[300px]"
            />
            <button className="px-4 py-3 bg-gradient-to-r from-[#1e3c72] to-[#2a9fd6] text-white rounded-r-md">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-5 text-[#a1a1a1] w-[100%] bg-[#0a0a0a]">
        ©2025. Veloxis Publishing. All Rights Reserved.
      </div>
    </div>
    
  );
}

export default Footer;
