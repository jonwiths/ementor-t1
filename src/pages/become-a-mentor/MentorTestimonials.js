import React, { useState } from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';

import samplePhoto from '../../assets/background/sample-user-profile-1g.jpg';

const MentorTestimonials = () => {
  return (
    <article>
      <div className="container mx-auto p-4 ">
        <h1 className="font-semibold text-center bg-gray-100 p-6 mb-4">
          ADVISER's TESTIMONIAL
        </h1>

        <article className="flex flex-col-reverse md:flex-row justify-evenly gap-4">
          {/* LEFT */}
          <div className="flex w-full md:w-1/2">
            <div className="px-4 py-8 bg-gray-200 flex flex-col items-center">
              <img
                className=" w-28 h-2w-28 rounded-full border-4 border-gray-700 mb-4 object-cover"
                src={samplePhoto}
                alt="Rounded avatar"
              />
              <div className="px-4">
                <q className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  eaque necessitatibus illum sint a libero accusantium dolores
                  ut nostrum maiores veritatis magni, reprehenderit minus
                  debitis iusto blanditiis aut quis quam?
                </q>
                <h3 className="font-semibold pt-4 text-center">
                  Bryan Lawrence T. Asistin
                </h3>
                <p className=" text-center">Capstone Adviser</p>
                <div className="flex items-center gap-3 justify-center mt-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin size={20} />
                  </a>
                  <a
                    href="https:/facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="font-semibold">Feedbacks for our own mentors</h3>
            <p className="mt-6">
              Short message of the person who is giving us motivation in doing
              this program
            </p>
            <hr className="md:my-16 my-10 border-2 border-gray-700" />
            {/* <div className="flex gap-6 mt-6">
              <button onClick={() => handleLeftBtn(testimonials[0].id)}>
                <BsArrowLeftCircle
                  size={50}
                  className="cursor-pointer text-gray-700  hover:text-blue-700"
                />
              </button>
              <button onClick={() => handleRightBtn(testimonials[0].id)}>
                <BsArrowRightCircle
                  size={50}
                  className="cursor-pointer text-gray-700  hover:text-blue-700"
                />
            </div>
              </button> */}
          </div>
        </article>
      </div>
    </article>
  );
};

export default MentorTestimonials;
