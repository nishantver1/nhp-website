"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/nhp-nobg.png"
            alt="Nishant Pharmacy"
            width={42}
            height={42}
            className="rounded-full border border-cyan-500"
          />

          <span className="text-slate-800 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
            Nishant Homeo Pharmacy
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <Link href="/" className="hover:text-cyan-600 transition-colors">
            Home
          </Link>

          <Link href="/about" className="hover:text-cyan-600 transition-colors">
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-cyan-600 transition-colors"
          >
            Contact
          </Link>

          {/* CTA */}
          <a
            href="tel:+917834955603"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-lg transition shadow-sm"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-5 pt-2 bg-white border-t border-slate-100 flex flex-col gap-4 shadow-sm">
          <Link
            href="/"
            className="text-slate-700 hover:text-cyan-600 transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-slate-700 hover:text-cyan-600 transition"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-slate-700 hover:text-cyan-600 transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <a
            href="tel:+917834955603"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-lg transition shadow-sm"
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
}
