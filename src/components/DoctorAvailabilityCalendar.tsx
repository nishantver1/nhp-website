"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CalendarProps {
  unavailableDates?: string[]; // Array of dates in 'YYYY-MM-DD' format
}

const DoctorAvailabilityCalendar: React.FC<CalendarProps> = ({
  unavailableDates = [],
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderDays = () => {
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Padding for days before the 1st
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2 md:p-4"></div>);
    }

    // Actual days
    for (let i = 1; i <= daysInMonth; i++) {
      const dateString = `${year}-${String(month + 1).padStart(
        2,
        "0"
      )}-${String(i).padStart(2, "0")}`;
      
      const isUnavailable = unavailableDates.includes(dateString);
      
      const cellDate = new Date(year, month, i);
      const isPast = cellDate < today;
      const isToday = cellDate.getTime() === today.getTime();
      const isFutureMonth =
        year > today.getFullYear() ||
        (year === today.getFullYear() && month > today.getMonth());

      let statusColor = "bg-green-100 text-green-800 border-green-200";
      let statusText = "Available";

      const isFuture = cellDate > today;

if (isUnavailable) {
  statusText = "Unavailable";
  statusColor ="bg-red-100 text-red-800 border-red-200"
} else if (isPast && !isToday) {
  statusText = "Past";
   statusColor ="bg-gray-100 text-gray-500 border-gray-200"
} else if (isFuture) {
  statusText = "Available"; // or "Not Confirmed" if you want
}

      days.push(
        <div
          key={i}
          className={`relative p-2 md:p-4 border rounded-lg flex flex-col items-center justify-center min-h-20 transition-all ${
            isToday ? "ring-2 ring-blue-500 ring-offset-2" : ""
          } ${statusColor}`}
        >
          <span className="text-lg font-semibold">{i}</span>
          <span className="text-xs font-medium mt-1">{statusText}</span>
        </div>
      );
    }

    return days;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900">
            Doctor Availability
          </h2>
          <p className="text-gray-600 mt-2">
            Check the calendar below to see when the doctor is available for consultation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevMonth}
              className="p-3 rounded-full hover:bg-blue-50 text-blue-700 transition"
              aria-label="Previous month"
            >
              <FaChevronLeft size={20} />
            </button>
            <h3 className="text-2xl font-bold text-gray-800">
              {monthNames[month]} {year}
            </h3>
            <button
              onClick={nextMonth}
              className="p-3 rounded-full hover:bg-blue-50 text-blue-700 transition"
              aria-label="Next month"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center font-semibold text-gray-500 text-sm md:text-base uppercase tracking-wider"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 md:gap-4">{renderDays()}</div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t pt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-100 border border-green-200"></div>
              <span className="text-sm text-gray-600 font-medium">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-100 border border-red-200"></div>
              <span className="text-sm text-gray-600 font-medium">Off / Unavailable</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-100 border border-yellow-200"></div>
              <span className="text-sm text-gray-600 font-medium">Not Confirmed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorAvailabilityCalendar;
