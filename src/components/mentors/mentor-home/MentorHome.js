import React from 'react';
import MentorSummary from './MentorSummary';
import Professor from '../../../components/cards/Professor';
const MentorHome = () => {
  return (
    <section className=" mt-6 w-full p-4">
      <div className="p-4">
        <div className="w-full">
          <MentorSummary />
        </div>
        <div className="py-4">
          <Professor />
        </div>
      </div>
    </section>
  );
};

export default MentorHome;
