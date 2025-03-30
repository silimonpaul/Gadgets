import { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

function Calendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-widget">
      <ReactCalendar
        onChange={setDate}
        value={date}
        className="custom-calendar"
      />
    </div>
  );
}

export default Calendar;