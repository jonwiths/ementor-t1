import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <section className=" bg-blue-300">
      <div className="container w-full mx-auto flex items-center justify-between sm:flex-row flex-col px-4 py-8">
        <div className="md:w-3/5 w-full md:mt-0 flex flex-col items-center">
          <h2 className="md:text-4xl text-2xl text-gray-700 text-center  md:pt-0">
            Be part of our growing community.
          </h2>
          <h2 className="md:text-4xl text-2xl text-gray-700 text-center  md:pt-0">
            Enroll as our student.
          </h2>
        </div>
        <Link
          to="/register"
          className="py-4 px-8 md:px-6 mt-4 md:mt-0 text-center bg-blue-700 text-gray-50 font-semibold rounded-xl"
        >
          Enroll Now
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
