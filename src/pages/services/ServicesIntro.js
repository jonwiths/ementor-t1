import React from 'react';
import { Link } from 'react-router-dom';

import sampleBg from '../../assets/background/.webp/homepage-bg.webp';

const ServicesIntro = () => {
  return (
    <article className="mt-6">
      <div className="container mx-auto p-4">
        <h1 className="font-semibold text-center ">
          Are you want to <span className="text-blue-700">change</span>
          your mode of learning?
        </h1>
        <hr className="max-w-[500px] mx-auto border-gray-500 my-4" />
        <h1 className="font-semibold text-center ">
          Or you want <span className="text-blue-700">share</span> your
          knowledge?
        </h1>
        <p className="text-center pt-6">
          We got you fam! Just select on which type you are and answer all the
          questions we are going to give and YEY! We will change the way of
          learning and teaching.
        </p>
        <div className="flex flex-col">
          {/* Left */}
          <div className="flex md:flex-row flex-col-reverse items-center py-4">
            <div className="md:w-1/2 w-full flex items-center justify-center">
              <img
                src={sampleBg}
                alt="..."
                className="object-cover max-h-[500px]"
              />
            </div>
            <div className="md:w-1/2 w-full ">
              <h2 className="font-semibold my-4 text-blue-700 uppercase text-center md:text-left">
                Want to top on you class?
              </h2>
              <h3 className="font-semibold pb-4 text-center md:text-left">
                Welcome to our Student's Portal.
              </h3>
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                officiis corrupti quos consequatur facere. Fuga, architecto
                dignissimos? Inventore, quia dolore perferendis commodi nostrum
                praesentium amet quos non? Esse, ex facilis.
              </p>
              <Link
                to="/register"
                className="flex become-a-mentor-link max-w-[200px] mb-4"
              >
                Become a Student
              </Link>
            </div>
          </div>
          {/* Left */}
          <div className="flex md:flex-row-reverse flex-col-reverse items-center py-4">
            <div className="md:w-1/2 w-full flex items-center justify-center">
              <img
                src={sampleBg}
                alt="..."
                className="object-cover max-h-[500px]"
              />
            </div>
            <div className="md:w-1/2 w-full ">
              <h2 className="font-semibold my-4 text-blue-700 uppercase text-center md:text-left">
                Willing to share you knowledge for FREE?
              </h2>
              <h3 className="font-semibold pb-4 text-center md:text-left">
                Welcome to our Mentor's Portal.
              </h3>
              <p className="pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                officiis corrupti quos consequatur facere. Fuga, architecto
                dignissimos? Inventore, quia dolore perferendis commodi nostrum
                praesentium amet quos non? Esse, ex facilis.
              </p>
              <Link
                to="/register"
                className="flex become-a-mentor-link max-w-[200px] mb-4"
              >
                Become a Mentor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServicesIntro;
