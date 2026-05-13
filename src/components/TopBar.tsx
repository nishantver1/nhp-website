"use client"

import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa"

export default function TopBar() {
  return (
    <div className="bg-[#0f2f44] text-white text-xs sm:text-sm">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Phone */}
        <div className="flex items-center gap-2 text-center">
          <FaPhone className="text-[#3ba6d6]" />
          <span>+91 7834955603</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 text-center break-all">
          <FaEnvelope className="text-[#3ba6d6]" />
          <span>nishanthomeopharmacy@gmail.com</span>
        </div>

        {/* Timings */}
        <div className="flex items-center gap-2 text-center max-w-xs md:max-w-none">
          <FaClock className="text-[#3ba6d6]" />
          <span>
            Mon: 4PM - 9:30PM | Tue - Sat: 9:30AM - 9:30PM
          </span>
        </div>

      </div>

    </div>
  )
}