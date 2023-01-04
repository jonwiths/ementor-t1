import { Navigate, Route, Routes } from 'react-router-dom';

import About from '../../pages/about/About';
import Services from '../../pages/services/Services';
import BecomeAMentor from '../../pages/become-a-mentor/BecomeAMentor';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import SharedLayout from '../../layout/shared/SharedLayout';
import Error404 from '../error/404';
import MentorRegister from '../../pages/become-a-mentor/mentor-form/register/MentorRegister';
import MentorLogin from '../../pages/become-a-mentor/mentor-form/login/MentorLogin';

import StudentBooking from '../../components/students/student-booking/StudentBooking';
import StudentHome from '../../components/students/student-home/StudentHome';
import StudentHistory from '../../components/students/student-history/History';
import StudentMentors from '../../components/students/student-mentor/Mentors';
import StudentLayout from '../../components/students/shared/StudentLayout';

import MentorHome from '../../components/mentors/mentor-home/MentorHome';
import MentorBooking from '../../components/mentors/mentor-booking/MentorBooking';
import MentorTimings from '../../components/mentors/mentor-sched-timing/MentorTimings';
import MentorReviews from '../../components/mentors/mentor-reviews/MentorReviews';
import MentorInvoice from '../../components/mentors/mentor-invoice/MentorInvoice';
import MentorLayout from '../../components/mentors/shared/MentorLayout';

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
        path="mentor/1"
        element={
          <ProtectedRoute>
            {' '}
            <MentorLayout />{' '}
          </ProtectedRoute>
        }
      >
        <Route index element={<MentorHome />} />
        <Route path="booking" element={<MentorBooking />} />
        <Route path="reviews" element={<MentorReviews />} />
        <Route path="schedule-timings" element={<MentorTimings />} />
        <Route path="invoices" element={<MentorInvoice />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default HomePageRoutes;
