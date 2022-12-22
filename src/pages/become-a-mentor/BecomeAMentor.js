import React from 'react';

import Stats from '../../components/addons/Stats';
import MentorApplicationProcess from './MentorApplicationProcess';
import MentorFeedback from './MentorFeedback';
import MentorHeader from './MentorHeader';
import MentorIntro from './MentorIntro';
import MentorRequirements from './MentorRequirements';
import MentorTestimonials from './MentorTestimonials';

const BecomeAMentor = () => {
  return (
    <>
      <section className="">
        <MentorHeader />
        <MentorIntro />
        <MentorRequirements />
        <Stats />
        <MentorApplicationProcess />
        <MentorFeedback />
        <MentorTestimonials />
      </section>
    </>
  );
};

export default BecomeAMentor;
