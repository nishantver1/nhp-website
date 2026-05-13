import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 md:py-12 mt-2">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {/* Clinic Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold">
            Nishant Homeo Pharmacy
          </h2>

          <p className="mt-4 text-sm md:text-base text-gray-300 leading-relaxed">
            Trusted homeopathic clinic providing safe and natural treatment for
            chronic diseases and long-term wellness care.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-sm md:text-base text-gray-300">
            <p className="flex items-center justify-center md:justify-start gap-2 break-all">
              <FaPhone className="text-[#3ba6d6]" />
              +91 7834955603
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2 break-all">
              <FaEnvelope className="text-[#3ba6d6]" />
              nishanthomeopharmacy@gmail.com
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-[#3ba6d6]" />
              Burari, Delhi
            </p>
          </div>
        </div>

        {/* Social + Timings */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://wa.me/917834955603"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition shadow-md hover:scale-105"
            >
              <FaWhatsapp size={18} />
            </a>

            <a
              href="https://instagram.com/nhpdelhi84"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition shadow-md hover:scale-105"
            >
              <FaInstagram size={18} />
            </a>
          </div>

          {/* Timings */}
          <div className="mt-6 flex items-start justify-center md:justify-start gap-2 text-sm md:text-base text-gray-300 leading-relaxed">
            <FaClock className="mt-1 text-[#3ba6d6]" />

            <p>
              Mon: 4PM - 9:30PM
              <br />
              Tue - Sat: 9:30AM - 9:30PM
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 md:mt-10 border-t border-blue-800 pt-5 text-center text-xs md:text-sm text-gray-400 px-4">
        © {new Date().getFullYear()} Nishant Homeo Pharmacy. All rights
        reserved.
      </div>
    </footer>
  );
}
