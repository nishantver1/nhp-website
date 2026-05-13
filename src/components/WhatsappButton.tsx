"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/917834955603?text=Hello%20I%20want%20consultation"
      target="_blank"
      className="fixed bottom-6 right-6 flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 animate-pulse"
    >
      <FaWhatsapp size={24} />

      <span className="">
      WhatsApp
      </span>
    </a>
  )
}