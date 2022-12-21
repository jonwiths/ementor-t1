import React from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';

import boyImage from '../../assets/background/sample-user-profile-1g.jpg';
import girlImage from '../../assets/background/sample-user-profile-2g.jpg';
import TeamCard from '../../components/cards/TeamCard';

const Team = () => {
  return (
    <>
      <section className="container my-5 mx-auto">
        <div className="md:mb-10 mb-0 px-2 text-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-12 w-full bg-blue-700 p-4">
            Meet the <span className="text-blue-400">TEAM</span>
          </h2>
          <TeamCard />
        </div>
      </section>
    </>
  );
};

export default Team;
