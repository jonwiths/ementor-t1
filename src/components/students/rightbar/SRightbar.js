import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { RxDashboard } from 'react-icons/rx';
import {
  AiOutlineClockCircle,
  AiOutlineCloseCircle,
  AiOutlineDoubleLeft
} from 'react-icons/ai';
import { IoPeopleOutline } from 'react-icons/io5';
import { MdHistory } from 'react-icons/md';

import sampleProfile from '../../../assets/profile/profile-alex.webp';

const SRightbar = () => {
  const [rightBar, setLeftBar] = useState(true);

  return (
    <>
      <aside className="lg:flex hidden p-4">
        <div className="w-full p-4">
          <div className="">
            <h3>Hi, John Alexis</h3>
            <p>Please check our calendar</p>
          </div>
          <div className=""></div>
        </div>
      </aside>
    </>
  );
};

export default SRightbar;
