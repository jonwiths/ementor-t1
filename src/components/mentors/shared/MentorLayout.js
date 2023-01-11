import React from 'react';
import { Outlet } from 'react-router-dom';

import MNavbar from '../navbar/MNavbar';
import MLeftbar from '../leftbar/MLeftbar';
import MRightbar from '../rightbar/MRightbar';

const MentorDashboard = () => {
  return (
    <>
      <section className="">
        <MNavbar />
        <div className="flex flex-col md:flex-row justify-between items-start ">
          <div className="">
            <MLeftbar className="" />
          </div>
          <div className="container mx-auto w-full  rounded-2xl bg-gray-50 mt-4">
            <Outlet className="" />
          </div>
          {/* <MRightbar /> */}
        </div>
      </section>
    </>
  );
};

export default MentorDashboard;
