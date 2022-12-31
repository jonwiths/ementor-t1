import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { RxDashboard } from 'react-icons/rx';
import {
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
  AiOutlineDoubleRight
} from 'react-icons/ai';
import { IoPeopleOutline } from 'react-icons/io5';
import { MdHistory } from 'react-icons/md';

import sampleProfile from '../../../assets/profile/profile-alex.webp';

const SLeftbar = () => {
  const [leftBar, setLeftBar] = useState(true);

  return (
    <>
      <div
        className={
          leftBar
            ? 'hidden'
            : ' fixed h-screen bg-blue-400 p-2 flex justify-center'
        }
        onClick={() => setLeftBar(!leftBar)}
      >
        <button>
          <AiOutlineDoubleRight size={30} />
        </button>
      </div>
      <aside className="s-leftbar p-4">
        <div className={leftBar ? 'md:block hidden bg-gray-100' : 'hidden'}>
          <div className="relative">
            <button
              className="absolute top-2 right-2 "
              onClick={() => setLeftBar(!leftBar)}
            >
              <AiOutlineCloseCircle size={30} className="" />
            </button>
            <div className="px-4 py-8 mt-4">
              <section className="menu">
                <div className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2">
                  <Link to="/student-dashboard">
                    <RxDashboard size={30} className="font-semibold" />
                  </Link>
                  <h4 className="font-semibold">Dashboard</h4>
                </div>
                <div className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2">
                  <Link to="/student-booking">
                    <AiOutlineClockCircle size={30} className="font-semibold" />
                  </Link>
                  <h4 className="font-semibold">Booking</h4>
                </div>
                <div className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2">
                  <Link to="/student-mentor">
                    <IoPeopleOutline size={30} className="font-semibold" />
                  </Link>
                  <h4 className="font-semibold">Mentors</h4>
                </div>
                <div className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2">
                  <Link to="/student-history">
                    <MdHistory size={30} className="font-semibold" />
                  </Link>
                  <h4 className="font-semibold">History</h4>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="block md:hidden w-full bg-gray-100">
          <div
            className={
              leftBar ? 'w-full block md:hidden bg-gray-100' : 'hidden'
            }
          >
            <div className="relative">
              <button
                className="absolute top-2 right-2 "
                onClick={() => setLeftBar(!leftBar)}
              >
                <AiOutlineCloseCircle size={30} className="" />
              </button>
              <div className="px-4 py-8 mt-4">
                <section className="menu">
                  <div className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2">
                    <Link to="/student-dashboard">
                      <RxDashboard size={30} className="font-semibold" />
                    </Link>
                    <h4 className="font-semibold">Dashboard</h4>
                  </div>
                  <div className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2">
                    <Link to="/student-booking">
                      <AiOutlineClockCircle
                        size={30}
                        className="font-semibold"
                      />
                    </Link>
                    <h4 className="font-semibold">Booking</h4>
                  </div>
                  <div className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2">
                    <Link to="/student-mentor">
                      <IoPeopleOutline size={30} className="font-semibold" />
                    </Link>
                    <h4 className="font-semibold">Mentors</h4>
                  </div>
                  <div className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2">
                    <Link to="/student-history">
                      <MdHistory size={30} className="font-semibold" />
                    </Link>
                    <h4 className="font-semibold">History</h4>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SLeftbar;
