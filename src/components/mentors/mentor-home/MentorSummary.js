import React from 'react';
import { Link } from 'react-router-dom';

import { IoPeople } from 'react-icons/io5';
import { BsCurrencyDollar } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';

const MentorSummary = () => {
  return (
    <section className="">
      {/* container */}
      <div className="">
        {/* upper */}
        <div className="flex ">
          {/* inner top left */}
          <div className="">
            <div className="">
              <h1>Share your knowledge</h1>
              <h1>Inspire students to level up</h1>
              <h4 className="my-4">Start mentoring now!</h4>
              <button className="py-4 px-6 bg-gradient-to-br from-blue-500 to-violet-600 text-white rounded-3xl font-semibold">
                <Link to="schedule-timings">Start Now!</Link>
              </button>
            </div>
          </div>
          {/* inner top right */}
          <div className=""></div>
        </div>

        <div className="grid md:grid-cols-3 gap-3 my-6">
          <div className="flex items-center gap-3 bg-blue-100 p-5">
            <div className="p-3 bg-blue-300 ">
              <IoPeople size={35} />
            </div>
            <div className="flex flex-col ">
              <h3 className="font-medium">23</h3>
              <p>Total Students</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-pink-100 p-5">
            <div className="p-3 bg-pink-300 ">
              <AiFillCalendar size={35} />
            </div>
            <div className="flex flex-col ">
              <h3 className="font-medium">23</h3>
              <p>Available Meetings</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-violet-100 p-5">
            <div className="p-3 bg-violet-300 ">
              <BsCurrencyDollar size={35} />
            </div>
            <div className="flex flex-col ">
              <h3 className="font-medium">0</h3>
              <p>Total Earned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSummary;
