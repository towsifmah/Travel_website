import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div className="bg-Travelimg relative  bg-cover bg-center h-96">
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold font-poppins text-[#fff] mb-4">
            Contact
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-poppins font-semibold my-3">
              Contact Details
            </h2>
            <div className="flex items-center gap-x-2 mb-4">
              <MdEmail className="text-blue-500" />
              <h4 className="font-poppins">info@travelagency.com</h4>
            </div>
            <div className="flex items-center gap-x-2 mb-4">
              <FaPhone className="text-blue-500" />
              <h4 className="font-poppins">+1234567890</h4>
            </div>
            <div className="flex items-center gap-x-2">
              <FaLocationDot className="text-blue-500" />
              <h4 className="font-poppins">123 Travel St, City, Bangladesh</h4>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold font-poppins my-4">
              Get in Touch
            </h3>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2 font-poppins"
                htmlFor="Name"
              >
                Name
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded font-poppins"
                type="name"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2 font-poppins"
                htmlFor="Name"
              >
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded font-poppins"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2 font-poppins"
                htmlFor="Name"
              >
                Message
              </label>
              <textarea
                className="w-full p-2  border border-gray-300 rounded font-poppins "
                name="message"
                placeholder="Writing message"
                id=""
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
