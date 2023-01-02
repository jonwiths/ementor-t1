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
          leftBar ? 'hidden' : 'fixed bg-blue-400  flex justify-center z-100'
        }
        onClick={() => setLeftBar(!leftBar)}
      >
        <button>
          <AiOutlineDoubleRight size={30} />
        </button>
      </div>
      <aside className="s-leftbar mr-4 ">
        <div className={leftBar ? 'md:block hidden bg-gray-100' : 'hidden'}>
          <div className="relative">
            <button
              className="absolute top-2 right-2 z-20"
              onClick={() => setLeftBar(!leftBar)}
            >
              <AiOutlineCloseCircle size={30} className="" />
            </button>
            <div className="px-4 py-10 mt-4">
              <section className="menu">
                <div>
                  <Link
                    to="/student/1"
                    className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2"
                  >
                    <RxDashboard size={30} className="font-semibold" />
                    <h4 className="font-semibold">Dashboard</h4>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/student/1/booking"
                    className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2"
                  >
                    <AiOutlineClockCircle size={30} className="font-semibold" />
                    <h4 className="font-semibold">Booking</h4>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/student/1/mentors"
                    className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2"
                  >
                    <IoPeopleOutline size={30} className="font-semibold" />
                    <h4 className="font-semibold">Mentors</h4>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/student/1/history"
                    className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2"
                  >
                    <MdHistory size={30} className="font-semibold" />
                    <h4 className="font-semibold">History</h4>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Mobile */}
        {/* <div className="block md:hidden w-full bg-gray-100">
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
                    <Link to="/student/1">
                      <RxDashboard size={30} className="font-semibold" />
                    </Link>
                    <h4 className="font-semibold">Dashboard</h4>
                  </div>
                  <div className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2">
                    <Link to="/student/1/booking">
                      <AiOutlineClockCircle
                        size={30}
                        className="font-semibold"
                      />
                    </Link>
                    <h4 className="font-semibold">Booking</h4>
                  </div>
                  <div className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2">
                    <Link to="/student/1/mentors">
                      <IoPeopleOutline size={30} className="font-semibold" />
                    </Link>
                    <h4 className="font-semibold">Mentors</h4>
                  </div>
                  <div className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2">
                    <Link to="/student/1/history">
                      <MdHistory size={30} className="font-semibold" />
                    </Link>
                    <h4 className="font-semibold">History</h4>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div> */}
      </aside>
    </>
  );
};

export default SLeftbar;
