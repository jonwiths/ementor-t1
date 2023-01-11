import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import userProfileSample from '../../../assets/profile/profile-alex.webp';

const MentorProfileUpper = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={userProfileSample}
          alt="Profile"
          className="rounded-full w-36 h-36"
        />
        <h2 className="font-semibold mt-4 text-center">John Alexis Cochico</h2>
        <p>Works @ Krusty Crab</p>
      </div>
      <div className="w-full p-4 mt-4 flex md:flex-row flex-col justify-between gap-y-4 md:gap-y-0 border border-blue-700 rounded-xl bg-blue-50 ">
        <div className="flex flex-col items-center md:items-start ">
          <h3 className="font-semibold text-green-600">FREE</h3>
          <p>Price per hour</p>
        </div>
        <div className="flex flex-col items-center">
          <p className=" bg-green-600 text-white px-4 py-1 rounded-3xl">1 hr</p>
          <p>Minimum teaching hour(s)</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="flex gap-2">
            <AiFillStar size={30} className="text-yellow-500" />
            <h3 className="font-semibold">3.00</h3>
          </span>
          <p>Reviews</p>
        </div>
      </div>
      <div className="w-full p-4 mt-4 flex md:flex-row flex-col justify-between gap-y-4 md:gap-y-0 border border-blue-700 rounded-xl ">
        <div className="flex md:flex-row flex-col gap-x-1 ">
          <p>Available in: </p>
          <p>{new Date().toDateString()}</p>
        </div>
      </div>
    </>
  );
};

export default MentorProfileUpper;
