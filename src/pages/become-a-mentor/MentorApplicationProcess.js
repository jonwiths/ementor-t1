import React from 'react';
import { FaHandsHelping, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MentorApplicationProcess = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col p-4 ">
        <h1 className="font-semibold text-center my-4">
          E-Mentor Application Process
        </h1>
        <div className="grid md:grid-cols-4 gap-x-2 mt-4">
          <div className="flex flex-col items-center p-4 border-2 bg-blue-200 mb-2">
            <FaLightbulb size={30} className />
            <p className="mt-2 text-center">STEP 1</p>
            <h4 className="font-semibold text-center">WEBSITE APPLICATION</h4>
            <p className="text-justify md:text-center mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              eaque velit quam quis laudantium maiores!
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border-2 bg-blue-400 mb-2">
            <FaLightbulb size={30} className />
            <p className="mt-2 text-center">STEP 2</p>
            <h4 className="font-semibold text-center">WEBSITE APPLICATION</h4>
            <p className="text-justify md:text-center mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              eaque velit quam quis laudantium maiores!
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border-2 bg-blue-200 mb-2">
            <FaLightbulb size={30} className />
            <p className="mt-2 text-center">STEP 3</p>
            <h4 className="font-semibold text-center">WEBSITE APPLICATION</h4>
            <p className="text-justify md:text-center mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              eaque velit quam quis laudantium maiores!
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border-2 bg-blue-400 mb-2">
            <FaLightbulb size={30} className />
            <p className="mt-2 text-center">STEP 4</p>
            <h4 className="font-semibold text-center">WEBSITE APPLICATION</h4>
            <p className="text-justify md:text-center mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              eaque velit quam quis laudantium maiores!
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-10">
          <p className="my-2">You still there, our future mentor?</p>
          <Link to="/mentor-register" className="become-a-mentor-link">
            Yes, I want to be a mentor
          </Link>
          <p className="md:mt-4 mt-6 font-semibold text-center">
            If you still have more questions about being an e-mentor, feel free
            to message us.
          </p>
          <p className="mt-2">Email: maven.edu05@gmail.com</p>
          <p className="mt-2">Phone: (+63)912 345 6789</p>
        </div>
      </div>
      <hr className="border text-gray-800 mt-6" />
    </section>
  );
};

export default MentorApplicationProcess;
