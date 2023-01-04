import React from 'react';
import MentorSummary from './MentorSummary';
import Professor from '../../../components/cards/Professor';
const MentorHome = () => {
  return (
    <section className=" ">
      <div className="w-full">
        <div className="w-full">
          <MentorSummary />
        </div>
        <div className="p-4">
          <Professor />
        </div>
      </div>
    </section>
  );
};

export default MentorHome;
