import React from 'react';

import Stats from '../../components/addons/Stats';
import MentorApplicationProcess from './MentorApplicationProcess';
import MentorFeedback from './MentorFeedback';
import MentorHeader from './MentorHeader';
import MentorIntro from './MentorIntro';
import MentorRequirements from './MentorRequirements';

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
      </section>
    </>
  );
};

export default BecomeAMentor;
