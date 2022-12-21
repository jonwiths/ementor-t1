import React from 'react';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';

const Second = () => {
  return (
    <section className="md:py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Flex container */}
        <div className="flex items-center justify-center py-0 md:py-14 pb-10">
          <h1 className=" ">Why we are the better than others?</h1>
        </div>
        <div className="flex flex-wrap">
          {/* Box 1 */}
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-3 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-50 w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <BsFillCalendarCheckFill />
                </div>
                <h6 className="text-xl font-semibold">
                  Convenient Study Schedule
                </h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Choose the available time base on your own convienience.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full md:w-4/12 px-3 text-center mt-5">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-50 w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <FaChalkboardTeacher />
                </div>
                <h6 className="text-xl font-semibold">Flexibility</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  You can choose your mentor based on your needs and price that
                  you can afford
                </p>
              </div>
            </div>
          </div>

          {/* Box 1 */}
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-3 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-50 w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <MdComputer />
                </div>
                <h6 className="text-xl font-semibold">
                  Modern Internet Platform
                </h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Book an e-meeting and meet your e-mentor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
