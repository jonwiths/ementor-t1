import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { RxDashboard } from 'react-icons/rx';
import {
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
  AiOutlineDoubleRight
} from 'react-icons/ai';
import { IoPeopleOutline } from 'react-icons/io5';
import { MdHistory, MdOutlineReviews } from 'react-icons/md';
import { TbFileInvoice } from 'react-icons/tb';

const MLeftbar = () => {
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
      <aside className="s-leftbar mr-4 w-full max-w-fit h-full bg-gray-100">
        <div className={leftBar ? 'md:block hidden ' : 'hidden'}>
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
                    to="/mentor/1"
                    className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2"
                  >
                    <RxDashboard size={30} className="font-semibold" />
                    <h4 className="font-semibold">Dashboard</h4>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/mentor/1/booking"
                    className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2"
                  >
                    <AiOutlineClockCircle size={30} className="font-semibold" />
                    <h4 className="font-semibold">Booking</h4>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/mentor/1/schedule-timings"
                    className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2"
                  >
                    <MdHistory size={30} className="font-semibold" />
                    <h4 className="font-semibold">Schedule Timig</h4>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/mentor/1/invoices"
                    className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2"
                  >
                    <TbFileInvoice size={30} className="font-semibold" />
                    <h4 className="font-semibold">Invoices</h4>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/mentor/1/reviews"
                    className="s-dashboard flex items-center gap-4 py-4 px-8 hover:bg-blue-300 rounded-xl mb-2"
                  >
                    <MdOutlineReviews size={30} className="font-semibold" />
                    <h4 className="font-semibold">Reviews</h4>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MLeftbar;
