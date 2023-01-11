import React from 'react';
import getStudentBooking from '../../../sampleData/mentor/studentBooking';

const MentorBookingTable = () => {
  return (
    <div className="overflow-x-auto mt-6 ">
      <table className="w-full text-left text-white p-4 rounded-2xl ">
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
        <tbody className="">
          {getStudentBooking.map((booking) => (
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
  );
};

export default MentorBookingTable;
