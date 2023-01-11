import React, { useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import MentorBookingTable from './MentorBookingTable';

import getStudentBooking from '../../../sampleData/mentor/studentBooking';

const MentorBooking = () => {
  const [search, setSearch] = useState('');

  const searchRef = useRef();

  const handleSearchBtn = () => {
    // console.log(search);

    searchRef.current.focus();

    getStudentBooking.filter((booking) =>
      booking.name.toLocaleLowerCase().includes(search)
    );
  };

  return (
    <section className="mt-6 w-full p-4">
      <div className="p-4">
        <h1>Booking Summary</h1>
        <div className="flex justify-between mt-6">
          <span className="flex justify-between items-center gap-x-2 border p-1">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search name here..."
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-1 outline-none border-none bg-gray-50"
              maxLength={20}
            />
            <BsSearch size={20} />
            <button
              className="py-2 px-4 rounded-2xl text-white bg-blue-600 hover:bg-blue-700"
              onClick={() => handleSearchBtn(search)}
            >
              Search
            </button>
          </span>
          <div className="">
            <h3>{new Date().toDateString()}</h3>
          </div>
        </div>

        {/* Table */}
        <div className="relative overflow-x-auto mt-6">
          <table className="w-full text-left text-white p-4 rounded-2xl">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Mentee List
                </th>
                <th scope="col" className="px-6 py-3">
                  Schedule Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Schedule Duration
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-left">
              {getStudentBooking
                .filter((booking) =>
                  booking.name.toLocaleLowerCase().includes(search)
                )
                .map((booking) => (
                  <tr
                    className="text-gray-700 bg-blue-50 border-blue-900 border-b-2 gap-x-10 border-spacing-y-4"
                    key={booking.id}
                  >
                    <th
                      scope="row"
                      className="flex px-6 py-4  font-medium text-gray-700 whitespace-nowrap "
                    >
                      {booking.name}
                    </th>
                    <td className="px-6 py-4">{booking.sched}</td>
                    <td className="px-6 py-4">{booking.time}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <button className="rounded-xl py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white">
                        View
                      </button>
                      <button className="rounded-xl py-2 px-3 bg-red-500 hover:bg-red-600 text-white">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MentorBooking;
