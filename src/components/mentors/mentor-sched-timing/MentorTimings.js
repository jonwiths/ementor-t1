import React, { useEffect, useState } from 'react';

import moment from 'react-datepicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MentorTimings = () => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  const [selectedStart, setSelectedStart] = useState('');
  const [selectedEnd, setSelectedEnd] = useState('');

  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <section className="mt-6 w-full p-0 md:p-4">
        <div className="p-4">
          <h1 className="mb-4">Schedule Your Free Time</h1>
          <h3 className="mb-10">Create your free time to teach</h3>
          <h4 className="mt-4 mb-2">Select how long the meeting</h4>
          <div className="">
            <select
              id="duration"
              className="py-3 px-6  bg-gray-50 border border-gray-500 text-gray-700  rounded-lg outline-none cursor-pointer"
              defaultValue={'none'}
              onChange={(e) => {
                setSelectedDuration(e.target.value);
                console.log(selectedDuration);
              }}
            >
              <option disabled={true} value="none">
                Duration
              </option>
              <option value="1 hour">1 hour</option>
              <option value="2 hours">2 hours</option>
              <option value="3 hours">3 hours</option>
            </select>
          </div>
          <h4 className="mt-4 mb-2">Select Time</h4>
          {/* Start time */}
          <div className=" flex  md:flex-row flex-col gap-2 md:items-center items-start">
            <select
              id="duration"
              className="py-3 px-6 bg-gray-50 border border-gray-500 text-gray-700  rounded-lg outline-none cursor-pointer"
              defaultValue={'none'}
              onChange={(e) => {
                setSelectedStart(e.target.value);
                console.log(selectedStart);
              }}
            >
              <option disabled={true} value="none">
                Start
              </option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
            </select>
            <h4 className="">to</h4>
            <select
              id="duration"
              className="py-3 px-6  bg-gray-50 border border-gray-500 text-gray-700  rounded-lg outline-none cursor-pointer"
              defaultValue={'none'}
              onChange={(e) => {
                setSelectedEnd(e.target.value);
                console.log(selectedEnd);
              }}
            >
              <option disabled={true} value="none">
                End
              </option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="9:00 PM">9:00 PM</option>
            </select>
          </div>
          <div className="">
            <h4 className="mt-4 mb-2">Select Date</h4>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                console.log(date);
              }}
              className="p-3 border border-gray-500 rounded-xl outline-none"
            />
          </div>
          <div className="mt-4 max-w-[700px]  w-full p-4 border-2 border-blue-500 rounded-xl shadow-xl">
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
                <h4 className="font-medium">Time Summary</h4>
                <button>
                  {' '}
                  <h4 className="font-medium">Edit</h4>
                </button>
              </div>
              <div className="mt-2 ">
                {selectedDuration && (
                  <span className="md:w-fit w-full p-2 bg-blue-700 font-medium text-white flex md:flex-row flex-col gap-2 ">
                    <p>| {selectedDuration}</p>

                    {selectedStart && (
                      <p>
                        | {selectedStart} to {selectedEnd}
                      </p>
                    )}
                    <p>| {startDate.toLocaleDateString()}</p>
                    <p>| {selectedDay} </p>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="my-4">
            <button className="p-4 rounded-3xl bg-blue-600 hover:bg-blue-700 text-white font-medium">
              Add Date
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentorTimings;
