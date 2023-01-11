import React from 'react';
import { Link } from 'react-router-dom';

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
      </div>
    </section>
  );
};

export default MentorSummary;
