import React, { useRef, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import mentors from '../../../sampleData/mentor/studentBooking';

import FindProfessors from '../../cards/FindProfessors';
const Mentors = () => {
  const [search, setSearch] = useState('');

  const searchRef = useRef();

  const handleSearchBtn = () => {
    // console.log(search);

    searchRef.current.focus();

    mentors.filter((booking) =>
      booking.name.toLocaleLowerCase().includes(search)
    );
  };

  return (
    <section className="mt-6 w-full p-4">
      <div className="w-full mx-auto container">
        <h1>Mentors</h1>
        <div className="flex lg:flex-row flex-col justify-between my-6  ">
          <span className="flex justify-between items-center gap-2 border-2 p-1 lg:mb-0 mb-4">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search name here..."
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-1 outline-none border-none bg-white"
              maxLength={20}
            />
            <span className="sm:block hidden">
              <BsSearch />
            </span>
            <button
              className="lg:block hidden py-2 px-4 rounded-2xl text-white bg-blue-600 hover:bg-blue-700"
              onClick={() => handleSearchBtn(search)}
            >
              Search
            </button>
          </span>
          <div className="">
            <h3>{new Date().toDateString()}</h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 w-full md:justify-evenly justify-center  rounded-2xl">
          {mentors
            .filter((mentor) =>
              mentor.name.toLocaleLowerCase().includes(search)
            )
            .map((mentor) => (
              <article
                key={mentor.id}
                className="lg-w-[350px] w-[250px] p-8 bg-blue-100 rounded-xl my-4 flex flex-col md:justify-evenly gap-2"
              >
                <img src={mentor.img_url} alt="Profile" className="w-full" />
                <h4 className="font-semibold">{mentor.name}</h4>
                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    <AiFillStar size={20} className="text-yellow-500" />
                    <p>3.0</p>
                  </span>
                  <p className="font-semibold ">
                    {' '}
                    <span>FREE</span> /hr
                  </p>
                </div>
                <button className="p-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full font-medium">
                  <Link to="/profile/mentor-name">Book a meeting</Link>
                </button>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
