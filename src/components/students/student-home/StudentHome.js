import React from 'react';
import Professor from '../../cards/Professor';

const Home = () => {
  return (
    <section className=" my-5 md:mx-4 mx-0 w-full">
      <div className="bg-blue-100 rounded-xl p-4 ">
        <div className="">
          <h3>Welcome, Student</h3>
        </div>
        <div className="h-4/5 w-full p-4 ">
          <Professor />
        </div>
      </div>
    </section>
  );
};

export default Home;
