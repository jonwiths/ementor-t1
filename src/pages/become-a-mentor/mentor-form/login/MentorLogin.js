import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
// import axios from 'axios';

import { FiUser } from 'react-icons/fi';
import { TbMinusVertical } from 'react-icons/tb';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { HiExclamationCircle } from 'react-icons/hi';
import MentorLoginHeader from './MentorLoginHeader';

const MentorLogin = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('uncomment code status');

  const login = () => {
    if (email.trim() === '' && password.trim() === '') {
      setLoginStatus('Please fill up all the input.');
      emailRef.current.focus();
    } else if (email.trim() === '') {
      setLoginStatus('Email is empty.');
      emailRef.current.focus();
    } else if (password.trim() === '') {
      setLoginStatus('Password is empty.');
      passwordRef.current.focus();
    } else {
      // setLoginStatus('Invalid username or password.');
      navigate('/mentor/1');
    }
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoginStatus('');
  //   }, 4000);
  // }, [loginStatus]);

  return (
    <section className="relative text-gray-800 " id="login">
      <MentorLoginHeader />
      <div className="container mx-auto  h-screen w-full flex flex-col md:flex-row lg:justify-around justify-center">
        <div className="left-login w-full h-full hidden md:block bg-center">
          {/*bg-homepage-bg */}
          <div className="flex flex-col p-4 items-center justify-center mt-32">
            <div className="text-left">
              <h1 className="font-semibold text-7xl pb-10 leading-tight">
                Sign In and <br /> Share your knowledge
              </h1>
              <h3 className="leading-normal">
                If don't have an account <br />
                You can{' '}
                <Link
                  to="/mentor-register"
                  className="text-blue-700 font-semibold"
                >
                  Register here.
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="right-login w-full py-10 px-4 h-screen">
          <div className="max-w-[350px] mx-auto p-4">
            <h2 className="pb-2">Welcome, Our Mentor!</h2>
            <p className="font-semibold pb-4 pt-2">
              Please enter your details.
            </p>
            <form
              action=""
              id="login-form"
              className="login-form w-full"
              method="POST"
            >
              {loginStatus && (
                <p
                  className={
                    loginStatus === 'Please fill up all the input.' ||
                    loginStatus === 'Email is empty.' ||
                    loginStatus === 'Password is empty.' ||
                    loginStatus === 'Invalid username or password.' ||
                    loginStatus === 'uncomment code status'
                      ? 'px-1 py-2 text-red-700 bg-red-100  text-center mb-2 rounded-lg'
                      : 'px-1 py-2 text-green-700 bg-green-100 text-center mb-2 rounded-lg'
                  }
                >
                  <HiExclamationCircle
                    className={loginStatus !== null ? 'inline' : 'hidden'}
                    size={19}
                    style={{ marginRight: '3px' }}
                  />
                  {loginStatus}
                </p>
              )}
              <div className="input-container w-full max-w-[350px] ">
                <span className="w-full flex items-center justify-center p-4 gap-1 bg-blue-50 rounded-xl mb-2">
                  <FiUser size={25} />
                  <TbMinusVertical size={25} />
                  <input
                    ref={emailRef}
                    type="email"
                    className="outline-none border-none w-full p-1 bg-transparent"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                  />
                </span>
                <span className="w-full flex items-center justify-center p-4 gap-1 bg-blue-50 rounded-xl mb-4">
                  <RiLockPasswordLine size={25} />
                  <TbMinusVertical size={25} />
                  <input
                    ref={passwordRef}
                    type="password"
                    className="outline-none border-none w-full p-1 bg-transparent"
                    placeholder="Password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    required={true}
                  />
                </span>
              </div>
              <div className="max-w-[350px] ">
                <div className="flex md:justify-between flex-col sm:flex-row sm:justify-start items-start mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800 pr-2 pb-2 md:p-0"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-blue-700 hover:underline ">
                    Forgot password?
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={login}
                className="w-full text-white p-4 font-semibold bg-gradient-to-br from-blue-500 to-violet-600 rounded-xl"
              >
                LOGIN
              </button>
            </form>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>
            <a
              className="px-7 py-3 bg-blue-50 text-gray-800 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
              // style={{ backgroundColor: '#3b5998' }}
              href="#!"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              {/* <!-- Facebook --> */}
              <FcGoogle className="mr-2" />
              Log in using Gmail
            </a>

            <div className="md:hidden block mt-10">
              <p className="leading-normal">
                If don't have an account <br />
                You can{' '}
                <Link
                  to="/mentor-register"
                  className="text-blue-700 font-semibold"
                >
                  Register here.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorLogin;
