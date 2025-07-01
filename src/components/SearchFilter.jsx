import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  subWeeks,
  subMonths,
  //   format,
} from "date-fns";

export default function SearchFilter({ onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [rangeLabel, setRangeLabel] = useState("");

  const handleRangeSelect = (range) => {
    let startDate, endDate;
    const today = new Date();

    switch (range) {
      case "today": {
        startDate = today;
        endDate = today;
        setRangeLabel("Today");
        break;
      }

      case "currentWeek": {
        startDate = startOfWeek(today, { weekStartsOn: 1 });
        endDate = endOfWeek(today, { weekStartsOn: 1 });
        setRangeLabel("Current Week");
        break;
      }

      case "lastWeek": {
        const lastWeek = subWeeks(today, 1);
        startDate = startOfWeek(lastWeek, { weekStartsOn: 1 });
        endDate = endOfWeek(lastWeek, { weekStartsOn: 1 });
        setRangeLabel("Last Week");
        break;
      }
      case "currentMonth": {
        startDate = startOfMonth(today);
        endDate = endOfMonth(today);
        setRangeLabel("Current Month");
        break;
      }
      case "lastMonth": {
        const lastMonth = subMonths(today, 1);
        startDate = startOfMonth(lastMonth);
        endDate = endOfMonth(lastMonth);
        setRangeLabel("Last Month");
        break;
      }
      default:
        return;
    }

    onFilter({
      search: searchTerm,
      date: null,
      range: { start: startDate, end: endDate },
    });
  };

  const handleClear = () => {
    setSearchTerm("");
    setSelectedDate(null);
    setRangeLabel("");
    onFilter({ search: "", date: null, range: null });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilter({ search: e.target.value, date: selectedDate, range: null });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setRangeLabel("");
    onFilter({ search: searchTerm, date, range: null });
  };

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 bg-white rounded-md shadow">
      <input
        type="text"
        placeholder="Search by Property or Employee"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md px-3 py-2 w-64"
      />

      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM-dd-yyyy"
        placeholderText="Select a date"
        className="border border-gray-300 rounded-md px-3 py-2"
      />

      <select
        onChange={(e) => handleRangeSelect(e.target.value)}
        value={rangeLabel}
        className="border border-gray-300 rounded-md px-3 py-2"
      >
        <option value="">Select a date range</option>
        <option value="today">Today</option>
        <option value="currentWeek">Current Week</option>
        <option value="lastWeek">Last Week</option>
        <option value="currentMonth">Current Month</option>
        <option value="lastMonth">Last Month</option>
      </select>

      <button
        onClick={handleClear}
        className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
      >
        Clear Filters ✕
      </button>
    </div>
  );
}
