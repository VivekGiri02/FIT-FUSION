import { TbBrandMeta } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F8F5F0] border-t border-[#E5E5E5] py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">

        {/* Newsletter */}
        <div>
          <h3 className="text-lg text-[#111111] mb-4">Newsletter</h3>
          <p className="text-[#111111] mb-4">
            Stay updated with the latest fitness tips, workout plans, and exclusive gym events.
          </p>
          <p className="font-medium text-sm text-[#6B6B6B] mb-6">
            Sign up and get a free 7-day workout guide!
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 w-full text-sm border-t border-l border-b border-[#D6D6D6] rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
            />
            <button
              type="submit"
              className="bg-[#111111] text-white px-6 py-3 text-sm rounded-r-md hover:bg-[#1A1A1A] transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Gym Programs */}
        <div>
          <h3 className="text-lg text-[#111111] mb-4">Programs</h3>
          <ul className="space-y-2 text-[#6B6B6B]">
            <li><Link to="/strength" className="hover:text-[#111111] transition-colors">Strength Training</Link></li>
            <li><Link to="/cardio" className="hover:text-[#111111] transition-colors">Cardio Workouts</Link></li>
            <li><Link to="/bodybuilding" className="hover:text-[#111111] transition-colors">Bodybuilding Programs</Link></li>
            <li><Link to="/nutrition" className="hover:text-[#111111] transition-colors">Nutrition Plans</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg text-[#111111] mb-4">Support</h3>
          <ul className="space-y-2 text-[#6B6B6B]">
            <li><Link to="/contact" className="hover:text-[#111111] transition-colors">Contact Us</Link></li>
            <li><Link to="/about" className="hover:text-[#111111] transition-colors">About Us</Link></li>
            <li><Link to="/faqs" className="hover:text-[#111111] transition-colors">FAQs</Link></li>
            <li><Link to="/trainers" className="hover:text-[#111111] transition-colors">Our Trainers</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg text-[#111111] mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 my-6 text-[#6B6B6B]">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111]">
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111]">
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111]">
              <RiTwitterXLine className="h-5 w-5" />
            </a>
          </div>

          <p className="text-[#6B6B6B] mb-1">Call Us</p>
          <p className="flex items-center gap-2 text-[#111111]">
            <FiPhoneCall /> +91 9876543210
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-[#D6D6D6] pt-6">
        <p className="text-[#6B6B6B] text-sm tracking-tighter text-center">
          © 2026 , Fit-Body Gym. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;