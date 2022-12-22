import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar2 from '../navigation/Navbar2';

const SharedLayout = () => {
  return (
    <>
      <Navbar2 />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
