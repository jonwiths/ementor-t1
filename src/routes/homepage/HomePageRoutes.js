import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from '../../pages/about/About';
import Services from '../../pages/services/Services';
import BecomeAMentor from '../../pages/become-a-mentor/BecomeAMentor';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import SharedLayout from '../../layout/shared/SharedLayout';
import StudentDashboard from '../../components/students/StudentDashboard';
import MentorDashboard from '../../components/mentors/Dashboard';
import Error404 from '../error/404';
import MentorRegister from '../../pages/become-a-mentor/mentor-form/MentorRegister';
import MentorLogin from '../../pages/become-a-mentor/mentor-form/MentorLogin';

const HomePageRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<SharedLayout />}>
        <Route exact index element={<Home />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/become-a-mentor" element={<BecomeAMentor />} />
        <Route exact path="/mentor-register" element={<MentorRegister />} />
        <Route exact path="/mentor-login" element={<MentorLogin />} />

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/student-dashboard/" element={<StudentDashboard />} />
        <Route path="/mentor-dashboard/" element={<MentorDashboard />} />

        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default HomePageRoutes;
