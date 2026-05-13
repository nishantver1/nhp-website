"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CalendarProps {
  unavailableDates?: string[];
}

const DoctorAvailabilityCalendar: React.FC<CalendarProps> = ({
  unavailableDates = [],
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
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

    // Empty spaces before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="min-h-[78px] md:min-h-20" />,
      );
    }

    // Actual days
    for (let i = 1; i <= daysInMonth; i++) {
      const dateString = `${year}-${String(month + 1).padStart(
        2,
        "0",
      )}-${String(i).padStart(2, "0")}`;

      const cellDate = new Date(year, month, i);

      // Tuesday = 2
      const isTuesday = cellDate.getDay() === 2;

      // Manual unavailable dates + Tuesdays
      const isUnavailable = unavailableDates.includes(dateString) || isTuesday;

      const isPast = cellDate < today;
      const isToday = cellDate.getTime() === today.getTime();

      let statusColor = "bg-green-100 text-green-800 border-green-200";

      let statusText = "Avail.";

      const isFuture = cellDate > today;

      if (isUnavailable) {
        statusText = isTuesday ? "Weekly Off" : "Off";

        statusColor = "bg-red-100 text-red-800 border-red-200";
      } else if (isPast && !isToday) {
        statusText = "Past";

        statusColor = "bg-gray-100 text-gray-500 border-gray-200";
      } else if (isFuture) {
        statusText = "Avail.";
      }

      days.push(
        <div
          key={i}
          className={`relative p-1.5 md:p-4 border rounded-xl flex flex-col items-center justify-center min-h-[78px] md:min-h-20 transition-all hover:scale-[1.02] ${
            isToday ? "ring-2 ring-blue-500 ring-offset-2" : ""
          } ${statusColor}`}
        >
          <span className="text-sm md:text-lg font-semibold">{i}</span>

          <span className="text-[10px] md:text-xs font-medium mt-1 text-center break-words leading-tight">
            {statusText}
          </span>
        </div>,
      );
    }

    return days;
  };

  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url('/nhp-nobg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "220px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Doctor Availability
          </h2>

          <p className="text-sm md:text-base text-gray-600 mt-2">
            Check the calendar below to see when the doctor is available for
            consultation.
          </p>
        </div>

        {/* Calendar Box */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-8">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <button
              onClick={prevMonth}
              className="p-2 md:p-3 rounded-full hover:bg-blue-50 text-blue-700 transition"
              aria-label="Previous month"
            >
              <FaChevronLeft size={16} />
            </button>

            <h3 className="text-lg md:text-2xl font-bold text-gray-800">
              {monthNames[month]} {year}
            </h3>

            <button
              onClick={nextMonth}
              className="p-2 md:p-3 rounded-full hover:bg-blue-50 text-blue-700 transition"
              aria-label="Next month"
            >
              <FaChevronRight size={16} />
            </button>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 gap-1.5 md:gap-4 mb-3 md:mb-4">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center font-semibold text-gray-500 text-[10px] md:text-sm uppercase tracking-wider"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1.5 md:gap-4">
            {renderDays()}
          </div>

          {/* Legend */}
          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-6 border-t pt-5 md:pt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-100 border border-green-200"></div>

              <span className="text-xs md:text-sm text-gray-600 font-medium">
                Available
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-100 border border-red-200"></div>

              <span className="text-xs md:text-sm text-gray-600 font-medium">
                Off / Weekly Off
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gray-100 border border-gray-200"></div>

              <span className="text-xs md:text-sm text-gray-600 font-medium">
                Past
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorAvailabilityCalendar;
