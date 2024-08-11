import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 p-4 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-poppins font-bold mb-4 ">
              Travel Agengy
            </h2>
            <p className="font-poppins mb-4">
              Your trusted partner for unforgettable travel experiences. Explore
              the world with us.
            </p>
          </div>
          <div className="flex flex-col md:items-center">
            <h2 className="text-lg font-semibold font-poppins">Quick Links</h2>
            <div className="flex flex-col my-4 gap-y-2">
              <Link to="/">Home</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold font-poppins mb-4">Follow Us</h2>
            <div className="flex items-center gap-x-4 mb-4">
              <FaFacebookF
                size={24}
                className="text-blue-500 hover:text-blue-600 duration-500"
              />
              <FaInstagram
                size={24}
                className="text-pink-500 hover:text-pink-600 duration-500"
              />
              <FaTwitter
                size={24}
                className="text-blue-400 hover:text-blue-500 duration-500"
              />
              <FaYoutube
                size={24}
                className="text-red-500 hover:text-red-600 duration-500"
              />
            </div>
            <form className="flex items-center justify-center mt-8">
              <input
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 outline-none"
                type="email"
                placeholder="Enter your Email"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg border border-blue-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex justify-between border-t">
          <p className="text-md font-poppins font-medium mt-4">
            ©️ 2024 Travel Agency. All right reserved
          </p>
          <div className="flex items-center gap-x-4 mt-4 font-poppins text-md font-medium">
            <Link to=""> Privacy Policy</Link>
            <Link to="">Terms of Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
