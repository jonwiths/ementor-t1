import React, { useState } from 'react';

const MentorTimings = () => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedDuration, setSelectedDuration] = useState(1);

  return (
    <section className="mt-6 w-full p-4">
      <div className="p-4">
        <h1 className="mb-4">Schedule Your Free Time</h1>
        <h4>Create your free time to teach</h4>
        <div className="mt-6">
          <select
            id="duration"
            className="py-3 px-6  bg-gray-50 border border-gray-500 text-gray-700  rounded-lg outline-none cursor-pointer"
            defaultValue={1}
          >
            <option
              value="1"
              onChange={(e) => setSelectedDuration(e.target.value)}
            >
              30 mins
            </option>
            <option
              value="2"
              onChange={(e) => setSelectedDuration(e.target.value)}
            >
              1 hour
            </option>
            <option
              value="3"
              onChange={(e) => setSelectedDuration(e.target.value)}
            >
              2 hours
            </option>
            <option
              value="3"
              onChange={(e) => setSelectedDuration(e.target.value)}
            >
              3 hours
            </option>
          </select>
        </div>
        <div className="mt-4 max-w-[700px] mx-auto w-full p-4 border-2 border-blue-500 rounded-xl shadow-xl">
          <h3 className="mb-4 font-medium">Choose your free day</h3>
          <div className="flex overflow-y-auto gap-3">
            <button
              className="booking-day-btn"
              onClick={(e) => {
                setSelectedDay(e.target.value);
                console.log(selectedDay);
              }}
              value="Monday"
            >
              Monday
            </button>
            <button
              className="booking-day-btn"
              onClick={(e) => {
                setSelectedDay(e.target.value);
                console.log(selectedDay);
              }}
              value="Tuesday"
            >
              Tuesday
            </button>
            <button
              className="booking-day-btn"
              onClick={(e) => {
                setSelectedDay(e.target.value);
                console.log(selectedDay);
              }}
              value="Wednesday"
            >
              Wednesday
            </button>
            <button
              className="booking-day-btn"
              onClick={(e) => {
                setSelectedDay(e.target.value);
                console.log(selectedDay);
              }}
              value="Thursday"
            >
              Thursday
            </button>
            <button
              className="booking-day-btn"
              onClick={(e) => {
                setSelectedDay(e.target.value);
                console.log(selectedDay);
              }}
              value="Friday"
            >
              Friday
            </button>
            <button
              className="booking-day-btn"
              onClick={(e) => {
                setSelectedDay(e.target.value);
                console.log(selectedDay);
              }}
              value="Saturday"
            >
              Saturday
            </button>
          </div>
          <hr className="my-6 bg-black border" />
          <div className="">
            <div className="flex justify-between">
              <h4 className="font-medium">Time Slots</h4>
              <button>
                {' '}
                <h4 className="font-medium">Edit</h4>
              </button>
            </div>
            <div className="">
              <p>{selectedDuration}</p>
              <p>{selectedDay}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorTimings;
