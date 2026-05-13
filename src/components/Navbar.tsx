import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white text-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/nhp-nobg.png"
            alt="Nishant Pharmacy"
            width={50}
            height={50}
            className="rounded-full border-2 border-[#3ba6d6]"
          />

          <span className=" text-blue-900 text-xl font-bold tracking-wide">
            Nishant Homeo Pharmacy
          </span>

        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 font-medium">

          <Link
            href="/"
            className="hover:text-[#3ba6d6] transition"
          >
            Home
          </Link>

          <Link
            href="/store"
            className="hover:text-[#3ba6d6] transition"
          >
            Store
          </Link>

          {/* <Link
            href="/blog"
            className="hover:text-[#3ba6d6] transition"
          >
            Blog
          </Link> */}

          <Link
            href="/contact"
            className="hover:text-[#3ba6d6] transition"
          >
            Contact
          </Link>

        </div>

      </div>
    </nav>
  )
}