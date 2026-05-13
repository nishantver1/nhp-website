"use client"

import { FaPhone } from "react-icons/fa"

export default function CallBtn() {
  return (
    <a
      href="tel:+917834955603"
      className="fixed bottom-24 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
    >
      <FaPhone size={22} />
    </a>
  )
}