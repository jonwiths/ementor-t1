import React from 'react';
import { Outlet } from 'react-router-dom';

import SNavbar from './navbar/SNavbar';
import SLeftbar from './leftbar/SLeftbar';
import SRightbar from './rightbar/SRightbar';

const StudentDashboard = () => {
  return (
    <>
      <section className="">
        <SNavbar />
        <div className="flex justify-between">
          <SLeftbar />
          <Outlet />
          <SRightbar />
        </div>
      </section>
    </>
  );
};

export default StudentDashboard;
