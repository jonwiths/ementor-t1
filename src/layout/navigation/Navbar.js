import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import navLogo from '../../assets/logos/nav-logo.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNav = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className=" text-2xl font-bold mr-8">
        <img src={navLogo} alt="" />
      </NavLink>

      <div className="hidden lg:flex justify-between items-center w-full">
        <div className="nav-left">
          <NavLink to="/services" className={'navlink'}>
            Services
          </NavLink>
          <NavLink to="/about-us" className="navlink">
            About Us
          </NavLink>
          <NavLink to="/become-a-mentor" className="navlink">
            Become a Mentor
          </NavLink>
        </div>
        <div className="nav-right">
          <NavLink to="/login" className="login ">
            Log In
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? ' register font-sem' : 'register'
            }
          >
            Register
          </NavLink>
        </div>
      </div>

      {/* Burger Button */}
      <div
        onClick={handleNav}
        className="hamburger lg:hidden absolute top-15 right-5 z-40"
      >
        {showNavbar ? (
          <AiOutlineClose size={30}></AiOutlineClose>
        ) : (
          <HiMenuAlt1 size={30}></HiMenuAlt1>
        )}
      </div>

      {/* Mobile dropdown buttons */}
      <div
        onClick={handleNav}
        className={
          showNavbar
            ? 'absolute text-gray-700 left-0 top-0 z-30 w-full bg-gray-100  flex flex-col shadow-md'
            : 'absolute top-[-1000%]'
        }
      >
        <section className="">
          <NavLink to="/" className="text-2xl font-bold px-4">
            {/* Maven-edu */}
            <img src={navLogo} alt="" />
          </NavLink>
          <div className="flex flex-col">
            <NavLink to="/services" className="mobile-nav-navlink">
              Services
            </NavLink>
            <NavLink to="/about-us" className="mobile-nav-navlink">
              About Us
            </NavLink>
            <NavLink to="/become-a-mentor" className="mobile-nav-navlink">
              Become a Mentor
            </NavLink>

            <div className="underline"></div>

            <NavLink to="/login" className="login-mobile ">
              Log In
            </NavLink>
            <NavLink to="/register" className="register-mobile">
              Register
            </NavLink>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
