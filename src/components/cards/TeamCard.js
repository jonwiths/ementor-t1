import React from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import teamData from '../../sampleData/team';

const TeamCard = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-10 ">
        {teamData.map((member) => (
          <div
            className="mb-6 lg:mb-0 hover:-translate-y-2 transition duration-300 ease-in-out over"
            key={member.id}
          >
            <div className="bg-white block rounded-lg shadow-lg">
              <div className="relative bg-no-repeat bg-cover">
                <img
                  src={member.img_url}
                  className="w-full rounded-t-lg"
                  alt="..."
                />
              </div>
            </div>

            <div className="p-6 mb-6 text-gray-50 bg-blue-700 border-blue-700 rounded-br-lg rounded-bl-lg outline-none shadow-none">
              <h4 className="font-bold">{member.name}</h4>
              <p>{member.role}</p>
              <div className="flex items-center gap-3 justify-center mt-3">
                <a
                  href={member.linked_in}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin size={20} />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamCard;
