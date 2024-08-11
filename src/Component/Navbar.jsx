import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white rounded-md">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          <h3 className="text-2xl font-dm_sans font-bold text-black ">
            Travel
          </h3>

          <div className="hidden md:flex gap-x-4 text-sm font-bold font-poppins items-center">
            <Link
              to="/"
              className="px-6 py-2 hover:bg-gray-600 hover:text-white duration-300 rounded-sm"
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="px-6 py-2 hover:bg-gray-600 hover:text-white duration-300 rounded-sm"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 hover:bg-gray-600 hover:text-white duration-300 rounded-sm"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="px-6 py-2 hover:bg-gray-600 hover:text-white duration-300 rounded-sm"
            >
              About
            </Link>
            <button className="py-2 px-6 ml-10 border bg-gray-400 rounded-sm">
              Login
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {!open ? <FaBars /> : <FaTimes />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className=" md:hidden flex flex-col gap-y-6 text-sm font-bold font-poppins items-center">
          <Link
            to="/"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white duration-300 rounded-sm"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white duration-300 rounded-sm"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white duration-300 rounded-sm"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="px-6 py-2 hover:bg-gray-600 hover:text-white duration-300 rounded-sm"
          >
            About
          </Link>
          <button className="py-2 px-6 md:ml-10 md:mb-0 mb-4 border bg-gray-400 rounded-sm">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
