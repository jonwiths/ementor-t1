import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import navLogo from '../../assets/logos/nav-logo.png';

const Navbar2 = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNav = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="h-1/5 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className=" items-center justify-between lg:flex hidden">
            <NavLink to="/" className="navlink">
              <img src={navLogo} alt="" />
            </NavLink>
            <div className="">
              <NavLink to="/services" className="navlink">
                Services
              </NavLink>
              <NavLink to="/about-us" className="navlink">
                About Us
              </NavLink>
              <NavLink to="/become-a-mentor" className="navlink">
                Become a Mentor
              </NavLink>
            </div>
          </div>
          <div className="lg:flex gap-2 hidden">
            <Link to="/login" className="p-4 text-xl">
              Login
            </Link>
            <Link
              to="/register"
              className="p-4 bg-blue-700 rounded-xl text-gray-100 font-semibold text-center flex items-center"
            >
              Enroll Now
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden p-2 flex items-center justify-between">
          <img src={navLogo} alt="" />
          <div onClick={handleNav} className="flex justify-end">
            {showNavbar ? (
              <AiOutlineClose size={30}></AiOutlineClose>
            ) : (
              <HiMenuAlt1 size={30}></HiMenuAlt1>
            )}
          </div>
        </div>

        {/* Mobile dropdown buttons */}
        <div
          onClick={handleNav}
          className={
            showNavbar
              ? 'absolute top-15 left-0 z-20 bg-gray-100 w-full'
              : 'absolute top-[-1000%]'
          }
        >
          <section className=" pb-4">
            <div className="flex flex-col p-4">
              <NavLink to="/" className="mobile-nav-navlink">
                Home
              </NavLink>
              <NavLink to="/services" className="mobile-nav-navlink">
                Services
              </NavLink>
              <NavLink to="/about-us" className="mobile-nav-navlink">
                About Us
              </NavLink>
              <NavLink to="/become-a-mentor" className="mobile-nav-navlink">
                Become a Mentor
              </NavLink>

              <div className="underline mb-4"></div>

              <NavLink
                to="/login"
                className="py-4 px-6 mt-2 text-center bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 rounded-full"
              >
                Log In
              </NavLink>
              <NavLink to="/register" className="become-a-mentor-link ">
                Enroll now
              </NavLink>
            </div>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
