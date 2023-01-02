import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoMdNotifications } from 'react-icons/io';
import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineCloseCircle, AiFillCaretDown } from 'react-icons/ai';

import logo from '../../../assets/logos/maven-logo-2.jpg';
import sampleProfile from '../../../assets/profile/profile-alex.webp';
import notification from '../../../sampleData/students/notification';

const Navbar = () => {
  const [userClick, setUserClick] = useState(false);
  const [notifClick, setNotifClick] = useState(false);
  const [burgerBtn, setbBurgerBtn] = useState(false);

  return (
    <nav className="snavbar ">
      <div className="">
        <div className="nav-container w-full h-1/6 flex items-center justify-between p-4 shadow-lg">
          {/* Left */}
          <div className="left ">
            <span className="flex items-center gap-1 font-semibold">
              <img
                src={logo}
                alt="maven logo"
                className="w-10 outline-none border-none"
              />
              Maven-edu
            </span>
          </div>

          {/* Right */}
          <div className="right md:flex hidden gap-3">
            <div className="search flex items-center gap-1 border border-gray-700 rounded-lg py-1 px-2">
              <BiSearch size={21} />
              <input
                type="text"
                placeholder="Search for keywords..."
                className="p-2 outline-none border-none"
                maxLength={20}
              />
            </div>
            <div className="flex items-center gap-x-4">
              <button
                onClick={() => {
                  setUserClick(!userClick);
                  if (notifClick) {
                    setNotifClick(!notifClick);
                  }
                }}
              >
                <img
                  src={sampleProfile}
                  alt="profile pic"
                  className="w-10 rounded-full"
                />
              </button>
              <div
                className={
                  userClick
                    ? 'w-full md:w-auto bg-gray-200 rounded-xl absolute top-16 md:right-16 right-0 z-200 p-4'
                    : 'hidden'
                }
              >
                <p className="font-semibold">John Alexis Cochico</p>
                <p>Student</p>
                <div className="border border-blue-700 my-2"></div>
                <div className="flex flex-col items-start font-medium ">
                  <Link to="/student/1/" className="p-1 w-full">
                    Dashboard
                  </Link>
                  <Link className="p-1 w-full">Profile Settings</Link>
                  <Link to="/login" className="p-1 w-full text-left">
                    Logout
                  </Link>
                </div>
              </div>
              {/* Notif div */}
              <button
                onClick={() => {
                  setNotifClick(!notifClick);
                  if (userClick) {
                    setUserClick(!userClick);
                  }
                }}
              >
                {notifClick ? (
                  <IoMdNotifications size={30} />
                ) : (
                  <IoNotificationsOutline size={30} />
                )}
              </button>
              <div
                className={
                  notifClick
                    ? 'w-full md:w-auto bg-gray-200 rounded-xl absolute top-16 md:right-2 right-0 -z-2 p-4'
                    : 'hidden'
                }
              >
                {/* THIS NEED TO BE MAPPED USING API */}
                <div className="">
                  {notification.map((notif) => (
                    <article className="flex gap-2 pb-3" key={notif.id}>
                      <img
                        src={notif.img_url}
                        alt="profile "
                        className="w-10 rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="">
                          {' '}
                          <span className="font-semibold">
                            {notif.name}
                          </span>{' '}
                          {notif.message}
                        </p>
                        <p className="text-sm">{notif.time}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Right */}
          <div className="md:hidden block ">
            <button onClick={() => setbBurgerBtn(!burgerBtn)}>
              {burgerBtn ? (
                <AiOutlineCloseCircle size={30} />
              ) : (
                <HiMenuAlt2 size={30} />
              )}
            </button>
          </div>
        </div>
        {/* 


         */}
        {/* MOBILE */}
        {/* 
        
        
        */}
        <div
          className={
            burgerBtn
              ? 'absolute top-15 left-0 z-99  w-full py-6 bg-blue-50 '
              : 'hidden'
          }
        >
          <section className="">
            <div className="w-full flex flex-col items-center justify-center gap-y-2">
              <div className="search flex items-center gap-1 border border-gray-700 rounded-lg py-1 px-2">
                <input
                  type="text"
                  placeholder="Search for keywords..."
                  className="p-2 outline-none border-none bg-blue-50"
                  maxLength={20}
                />
                <BiSearch size={21} />
              </div>

              <button
                onClick={() => {
                  setUserClick(!userClick);
                  if (notifClick) {
                    setNotifClick(!notifClick);
                  }
                }}
                className="flex gap-x-2 items-center p-2"
              >
                <h4 className="font-semibold">John Alexis Cochico </h4>
                <AiFillCaretDown />
              </button>
              <div
                className={userClick ? ' flex flex-col items-start ' : 'hidden'}
              >
                <Link
                  to="/student/1"
                  className="w-full font-medium text-lg p-1"
                >
                  Dashboard
                </Link>
                <Link className="w-full font-medium text-lg p-1">
                  User Settings
                </Link>
                <button>
                  <Link className="w-full font-medium text-lg p-1" to="/login">
                    Logout
                  </Link>
                </button>
              </div>

              {/* NOTIFICATION */}

              <button
                onClick={() => {
                  setNotifClick(!notifClick);
                  if (userClick) {
                    setUserClick(!userClick);
                  }
                }}
                className="flex gap-x-2 items-center p-2"
              >
                <h4 className="font-semibold">Notification </h4>
                <AiFillCaretDown />
              </button>
              {/* THIS NEED TO BE MAPPED USING API */}
              <div
                className={
                  notifClick
                    ? ' flex flex-col items-start p-2 w-full'
                    : 'hidden'
                }
              >
                {notification.map((notif) => (
                  <article
                    className="flex gap-2 p-2 border-gray-500 border mb-1 w-full"
                    key={notif.id}
                  >
                    <img
                      src={notif.img_url}
                      alt="profile "
                      className="w-16 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="">
                        {' '}
                        <span className="font-semibold">{notif.name}</span>{' '}
                        {notif.message}
                      </p>
                      <p className="text-sm text-gray-500">{notif.time}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
