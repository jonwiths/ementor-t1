import React from 'react';
import { Outlet } from 'react-router-dom';

import SNavbar from '../navbar/SNavbar';
import SLeftbar from '../leftbar/SLeftbar';
import SRightbar from '../rightbar/SRightbar';

const StudentDashboard = () => {
  return (
    <>
      <section className="">
        <SNavbar />
        <div className="flex flex-col md:flex-row justify-between p-4 md:p-0">
          <SLeftbar />
          <Outlet />
          <SRightbar />
        </div>
      </section>
    </>
  );
};

export default StudentDashboard;
