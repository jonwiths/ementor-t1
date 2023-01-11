import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

import userProfileSample from '../../../assets/profile/profile-alex.webp';

const MentorProfile = () => {
  const navigate = useNavigate();
  return (
    <section className="mt-4 w-full p-4">
      <div className="container w-full mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-1 mb-2 bg-blue-200 hover:bg-blue-300"
        >
          Back
        </button>
        <div className="flex justify-between items-center p-6 border border-gray-300">
          <div className="flex items-start gap-3">
            <div className="">
              <img
                src={userProfileSample}
                alt=""
                className="rounded-full w-32 h-2w-32 border-blue-500 border-4"
              />
            </div>
            <div className="">
              <h4 className="font-medium">John Alexis Cochico</h4>
              <p className="text-gray-500">Mentor</p>

              <h4 className="font-medium mt-4">Contact Me</h4>
              <div className="flex gap-3">
                <a href="!#" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin
                    className="rounded-full text-blue-500 cursor-pointer hover:text-blue-600"
                    size={35}
                  />
                </a>
                <a href="!#" target="_blank" rel="noopener noreferrer">
                  <BsFacebook
                    className="rounded-full text-blue-500 cursor-pointer hover:text-blue-600"
                    size={35}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <h4 className="text-medium text-blue-600">
              <span className="font-semibold text-2xl">FREE</span> /hour
            </h4>
            <button className="p-3 bg-blue-600 hover:bg-blue- text-white rounded-3xl">
              <Link to="/mentor/:mentor_id">Book me</Link>
            </button>
          </div>
        </div>

        <div className="p-6 border border-gray-300 my-6 border-b-2 border-b-blue-600">
          <h3 className="font-medium">About me</h3>
          <hr className="my-5 border border-gray-200" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            nesciunt earum nostrum recusandae ab suscipit dolores temporibus
            quisquam repellat optio. Aut ad possimus doloribus maiores.
          </p>
        </div>

        <div className="p-6 border border-gray-300 my-6 border-b-2 border-b-blue-600">
          <h3 className="font-medium">Personal Information</h3>
          <hr className="my-5 border border-gray-200" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            nesciunt earum nostrum recusandae ab suscipit dolores temporibus
            quisquam repellat optio. Aut ad possimus doloribus maiores.
          </p>
        </div>

        <div className="p-6 border border-gray-300 my-6 border-b-2 border-b-blue-600">
          <h3 className="font-medium">Education and Experience</h3>
          <hr className="my-5 border border-gray-200" />

          <h4 className="my-3">Education</h4>
          <div className="grid md:grid-cols-3  gap-y-4">
            <div className="">
              <p className="font-semibold">
                Polytechnic University of the Philippines
              </p>
              <p>College</p>
            </div>
            <div className="">
              <p className="font-semibold">
                Polytechnic University of the Philippines
              </p>
              <p>High School</p>
            </div>
            <div className="">
              <p className="font-semibold">
                Polytechnic University of the Philippines
              </p>
              <p>Elementary</p>
            </div>
          </div>

          <h4 className=" mt-6 mb-3">Experience</h4>
          <div className=" gap-y-4">
            <div className="">
              <p className="font-semibold">Krusty Crab Corp.</p>
              <p>Current Job</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorProfile;
