import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import mentors from '../../sampleData/students/mentors';

const Professor = () => {
  return (
    <section>
      <div className="">
        {mentors.map((mentor) => (
          <article key={mentor.id} className="">
            <div className="border border-blue-900 rounded-2xl p-2  mb-2">
              <div className="flex justify-between ">
                {/* Image */}
                <div className="flex gap-x-3 justify-center items-center">
                  <img
                    src={mentor.img_url}
                    alt=""
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold">{mentor.name}</h3>
                    <p>{mentor.subject}</p>
                    <p className="mt-2">{mentor.description}</p>
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-col items-end">
                  <div className="flex gap-x-1">
                    <AiFillStar size={30} className="text-yellow-500" />
                    <h4 className="font-semibold">{mentor.ratings}</h4>
                  </div>
                  <h3 className="font-medium text-green-600 my-2">FREE</h3>
                  <button className="w-[200px] px-4 py-2 mb-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                    <Link to="/mentor/1">Request a Schedule</Link>
                  </button>
                  <button className="w-[200px] px-4 py-2 bg-white hover:bg-gray-100 text-blue-700 border border-blue-700 rounded-full">
                    <Link to="/mentor/1">View Profile</Link>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Professor;
