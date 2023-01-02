import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import About from '../../pages/about/About';
import Services from '../../pages/services/Services';
import BecomeAMentor from '../../pages/become-a-mentor/BecomeAMentor';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import SharedLayout from '../../layout/shared/SharedLayout';
// import StudentDashboard from '../../components/students/StudentDashboard';
import MentorDashboard from '../../components/mentors/Dashboard';
import Error404 from '../error/404';
import MentorRegister from '../../pages/become-a-mentor/mentor-form/MentorRegister';
import MentorLogin from '../../pages/become-a-mentor/mentor-form/MentorLogin';

import StudentBooking from '../../components/students/student-booking/StudentBooking';
import StudentHome from '../../components/students/student-home/StudentHome';
import StudentHistory from '../../components/students/student-history/History';
import StudentMentors from '../../components/students/student-mentor/Mentors';
import StudentLayout from '../../components/students/shared/StudentLayout';

const HomePageRoutes = () => {
  const currentUser = true;

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />;
    }
    return children;
  };

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
        <Route path="*" element={<Error404 />} />
      </Route>

      <Route
        path="student/1"
        element={
          <ProtectedRoute>
            {' '}
            <StudentLayout />{' '}
          </ProtectedRoute>
        }
      >
        <Route index element={<StudentHome />} />
        <Route path="booking" element={<StudentBooking />} />
        <Route path="history" element={<StudentHistory />} />
        <Route path="mentors" element={<StudentMentors />} />
        <Route path="*" element={<Error404 />} />
      </Route>

      <Route
        path="/mentor-dashboard/"
        element={
          <ProtectedRoute>
            {' '}
            <MentorDashboard />{' '}
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default HomePageRoutes;
