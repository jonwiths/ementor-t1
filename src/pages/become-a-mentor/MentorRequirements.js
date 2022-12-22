import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import homepageBg from '../../assets/background/homepage-bg.png';

const MentorRequirements = () => {
  return (
    <section>
      <div className="container mx-auto p-4 flex flex-col-reverse md:flex-row justify-between">
        <div className="md:w-3/5 w-full flex flex-col md:justify-center">
          <h2 className="font-semibold text-center md:text-left mt-6">
            {' '}
            Sharing your knowledge is admirable, but are you good enough to be
            an E-mentor?
          </h2>
          <p className="mt-4 md:text-left text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            illum consequatur facilis laborum consequuntur itaque doloribus
            dolore dolores, velit harum veniam aperiam ipsum obcaecati eos.
          </p>

          <div className="flex flex-col gap-2 mt-4 items-center md:items-start">
            <span className="flex items-center gap-2">
              <AiOutlineCheck size={20} className="text-green-700" />
              2+ years of industry experience
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineCheck size={20} className="text-green-700" />
              2+ years of industry experience
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineCheck size={20} className="text-green-700" />
              2+ years of industry experience
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineCheck size={20} className="text-green-700" />
              2+ years of industry experience
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineCheck size={20} className="text-green-700" />
              2+ years of industry experience
            </span>
          </div>

          <p className="mt-4 text-justify md:text-left">
            We want to help our mentors for extra income, but the{' '}
            <strong> main objective </strong>
            of our program is for the students who are eager to step up their
            mode of learning. That's why almost 100% of our E-mentors here are
            teaching for FREE.
          </p>
          <p className="mt-4 text-justify md:text-left mb-2">
            This place if for people who want to share their knowledge
            unconditionally.
          </p>

          <Link
            to="/mentor-register"
            className="become-a-mentor-link max-w-[250px]"
          >
            Become an E-mentor
          </Link>
        </div>
        <div className="md:w-2/5 w-full">
          <div className="">
            <img
              src={homepageBg}
              alt="..."
              className="max-h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorRequirements;
