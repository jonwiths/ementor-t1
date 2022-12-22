import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';

const CoreValues = () => {
  return (
    <article>
      <div className="container mx-auto w-full p-4">
        <h1 className="text-center p-4 bg-blue-100 ">
          <span className="text-blue-700">CORE</span> VALUES
        </h1>
        <div className="grid md:grid-cols-3 mt-6">
          <div className="flex flex-col items-center gap-2 mb-6">
            <BsFillCheckCircleFill size={30} />
            <h3>Core Value1</h3>
            <p className="md:text-left text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio doloremque quibusdam exercitationem, commodi maiores
              adipisci eligendi quia necessitatibus facilis aspernatur magni
              ipsam culpa ipsa reprehenderit.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 mb-6">
            <BsFillCheckCircleFill size={30} />
            <h3>Core Value1</h3>
            <p className="md:text-left text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio doloremque quibusdam exercitationem, commodi maiores
              adipisci eligendi quia necessitatibus facilis aspernatur magni
              ipsam culpa ipsa reprehenderit.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 mb-6">
            <BsFillCheckCircleFill size={30} />
            <h3>Core Value1</h3>
            <p className="md:text-left text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio doloremque quibusdam exercitationem, commodi maiores
              adipisci eligendi quia necessitatibus facilis aspernatur magni
              ipsam culpa ipsa reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CoreValues;
