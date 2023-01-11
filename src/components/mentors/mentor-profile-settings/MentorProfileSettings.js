import React, { useState } from 'react';

import userProfileSample from '../../../assets/profile/profile-alex.webp';
import MentorProfileSettingsAbout from './MentorProfileSettingsAbout';

const mentorInfo = [
  {
    id: 1,
    f_name: 'John Alexis',
    l_name: 'Cochico',
    email: 'jdoeeee@email.com',
    phone: '09123456789'
  }
];

const MentorProfileSettings = () => {
  const [enableInput, setEnableInput] = useState(true);

  const [errMsg, setErrMsg] = useState('');

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [p_number, setP_number] = useState('');

  const editBtn = () => {
    setEnableInput(!enableInput);
  };

  const saveBtn = () => {
    if (
      fname.trim() === '' &&
      lname.trim() === '' &&
      email.trim() === '' &&
      p_number.trim() === ''
    ) {
      setErrMsg('Fill up all input');
    } else if (
      fname.trim() === '' ||
      lname.trim() === '' ||
      email.trim() === '' ||
      p_number.trim() === ''
    ) {
      setErrMsg('Fill up all input');
    } else {
      console.log(fname);
      console.log(lname);
      console.log(email);
      console.log(p_number);
      setEnableInput(!enableInput);
      setErrMsg('');
    }
  };

  return (
    <>
      <section className="mt-4 w-full">
        <div className="flex gap-2 lg:flex-row flex-col w-full lg:items-start p-4">
          <aside className="w-full md:w-[250px] flex flex-col items-center border-2 border-blue-300 p-4 ">
            <img
              src={userProfileSample}
              alt=""
              className="w-52 border-blue-600 border-4"
            />
            <h3 className="font-semibold py-4 text-center">
              John Alexis Cochico
            </h3>
            <p className="pb-2 font-medium">Work at Krusty Crab</p>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              dicta quisquam repellat commodi culpa ipsum
            </p>
            {/* <div className="">
              <button
                className="p-2 mr-2 bg-blue-600 text-gray-50"
                onClick={editBtn}
              >
                Edit Profile
              </button>
              {!enableInput && (
                <button
                  className="p-2 bg-blue-600 text-gray-50"
                  onClick={saveBtn}
                >
                  Save
                </button>
              )}
            </div> */}
          </aside>
          <MentorProfileSettingsAbout />
        </div>
      </section>
    </>
  );
};

export default MentorProfileSettings;
