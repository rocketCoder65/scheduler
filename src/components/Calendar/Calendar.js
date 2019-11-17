import React from 'react';

const Calendar = () => (
  <div className="calendar">
    <div className="calendar__nav">
      <input 
        className="calendar__month" 
        type="text" 
        defaultValue={new Date(Date.now()).getFullYear()} 
        aria-label="year"
      >
      </input>
    </div>
  </div>
)

export default Calendar;