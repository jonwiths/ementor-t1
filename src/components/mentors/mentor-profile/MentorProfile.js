import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import userProfileSample from '../../../assets/profile/profile-alex.webp';
import MentorProfileUpper from './MentorProfileUpper';

const MentorProfile = () => {
  return (
    <section className="mt-4 w-full p-4">
      {/* container */}
      <div className="w-full mx-auto">
        {/* Upper */}
        <MentorProfileUpper />
      </div>
    </section>
  );
};

export default MentorProfile;
