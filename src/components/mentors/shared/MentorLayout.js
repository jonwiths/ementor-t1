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
        <div className="flex flex-col md:flex-row justify-between items-start md:p-0">
          <MLeftbar />
          <Outlet />
          <MRightbar />
        </div>
      </section>
    </>
  );
};

export default MentorDashboard;
