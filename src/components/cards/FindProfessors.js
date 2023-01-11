import React, { useRef, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import mentors from '../../sampleData/mentor/studentBooking';

const FindProfessors = () => {
  return (
    <div className="grid lg:grid-cols-3 w-full md:justify-evenly justify-center  rounded-2xl">
      {mentors.map((mentor) => (
        <article
          key={mentor.id}
          className="lg-w-[350px] w-[250px] p-8 bg-blue-100 rounded-xl my-4 flex flex-col md:justify-evenly gap-2"
        >
          <img src={mentor.img_url} alt="Profile" className="w-full" />
          <h4 className="font-semibold">{mentor.name}</h4>
          <div className="flex justify-between">
            <span className="flex items-center gap-1">
              <AiFillStar size={20} className="text-yellow-500" />
              <p>3.0</p>
            </span>
            <p className="font-semibold ">
              {' '}
              <span>FREE</span> /hr
            </p>
          </div>
          <button className="p-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full font-medium">
            <Link to="/profile/mentor-name">Book a meeting</Link>
          </button>
        </article>
      ))}
    </div>
  );
};

export default FindProfessors;
