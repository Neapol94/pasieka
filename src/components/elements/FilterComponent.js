import * as React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import Button from 'react-bootstrap/Button';
import './FilterComponent.css'

export default function FilterComponent({handleFilterByDate}) {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmitFilterDate = (e) => {
    e.preventDefault()
    console.log("u dziecka: ", startDate, endDate)
    handleFilterByDate(startDate, endDate)
  }

  return (
    <div>
      <span>Filtruj po dacie:</span>
      <form className="datesRangePicker" onSubmit={handleSubmitFilterDate}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd/MM/yyyy"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd/MM/yyyy"
          minDate={startDate}
        />
        <Button type="submit" variant="primary">Zatwierdź</Button>
      </form>
    </div>
  );
}
