import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MRightbar = () => {
  const [calendarValue, setCalendarValue] = useState(new Date());

  return (
    <aside className="p-4 h-full w-fit  max-w-[300px] lg:block hidden">
      {/* container */}
      <div className="">
        <div className="">
          <h3 className="font-semibold">Hi, John Alexis Cochico</h3>
          <h4>Here's the date for today</h4>
          <div className="mt-6">
            <Calendar onChange={setCalendarValue} value={calendarValue} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MRightbar;
