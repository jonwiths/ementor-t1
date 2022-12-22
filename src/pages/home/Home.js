import React from 'react';
import { Link } from 'react-router-dom';

import homepageBg from '../../assets/background/homepage-bg.png';
import SignUp from '../../components/addons/SignUp';
import Stats from '../../components/addons/Stats';
import Second from './Second';

const Home = () => {
  return (
    <>
      <div className="home ">
        <section className="container w-full mx-auto">
          <article className="flex flex-col md:flex-row-reverse lg:justify-around justify-center">
            <div className="left w-full lg:block">
              <img
                src={homepageBg}
                alt="Ementor"
                className="w-full object-cover "
              />
            </div>
            <div className="right md:py-0 py-24 flex flex-col md:items-start justify-center w-full p-4">
              <h1 className="lg:text-7xl text-5xl pb-3">Investing in </h1>
              <h1 className="lg:text-7xl text-5xl pb-3">Knowledge and</h1>
              <h1 className="lg:text-7xl text-5xl pb-3 mb-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-violet-600">
                Your Future
              </h1>
              <p className="text-xl mb-4 text-gray-500">
                We are ready to help you grow together, Start developing right
                now!
              </p>
              <Link to="/register" className="btn-blue">
                Enroll Now
              </Link>
            </div>
          </article>
        </section>
        <Second />
        <Stats />
        <SignUp />
      </div>
    </>
  );
};

export default Home;
