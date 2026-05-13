"use client"

import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa"

export default function TopBar() {
  return (
    <div className="bg-[#0f2f44] text-white text-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-evenly items-center flex-col md:flex-row gap-3">

        {/* Phone */}
        <div className="flex items-center gap-2">
          <FaPhone />
          <span>+91 7834955603</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <span>nishanthomeopharmacy@gmail.com</span>
        </div>

        {/* Timings */}
        <div className="flex items-center gap-2">
          <FaClock />
          <span>Mon(4pm -9:30pm)Tue - Sat : 9:30AM - 9:30 PM</span>
        </div>

      </div>

    </div>
  )
}