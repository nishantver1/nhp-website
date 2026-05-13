import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaClock } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-2">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Clinic Info */}
        <div>
          <h2 className="text-xl font-bold">Nishant Homoeo Pharmacy</h2>

          <p className="mt-4 text-gray-300">
            Trusted homeopathic clinic providing safe and natural treatment
            for chronic diseases.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-gray-300">

            <p className="flex items-center gap-2">
              <FaPhone /> +91 7834955603
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope /> nishanthomeopharmacy@gmail.com
            </p>

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Burari, Delhi
            </p>

          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>

          <div className="flex gap-4">

            <a
              href="https://wa.me/917834955603"
              className="bg-green-500 p-3 rounded-full hover:bg-green-600 transition"
            >
              <FaWhatsapp />
            </a>

            <a
              href="#"
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebook />
            </a>

          </div>

          {/* Timings */}
          <p className="mt-6 text-gray-300 flex items-center gap-2">
            <FaClock/> Mon(4PM-9:30PM) tue - sun : 9:30AM-9:30PM
          </p>

        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Nishant Homoeo Pharmacy. All rights reserved.
      </div>

    </footer>
  )
}