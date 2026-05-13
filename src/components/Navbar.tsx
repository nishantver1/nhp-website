"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/nhp-nobg.png"
            alt="Nishant Pharmacy"
            width={42}
            height={42}
            className="rounded-full border-2 border-[#3ba6d6]"
          />

          <span className="text-blue-900 text-sm sm:text-base md:text-xl font-bold tracking-wide leading-tight">
            Nishant Homeo Pharmacy
          </span>

        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium">

          <Link
            href="/"
            className="hover:text-[#3ba6d6] transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-[#3ba6d6] transition"
          >
            about
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#3ba6d6] transition"
          >
            Contact
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white border-t">

          <Link
            href="/"
            className="hover:text-[#3ba6d6] transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-[#3ba6d6] transition"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#3ba6d6] transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

        </div>
      )}

    </nav>
  )
}