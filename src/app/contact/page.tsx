import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="bg-white py-12 md:py-16 min-h-screen">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            Get in touch with Nishant Homeo Pharmacy for appointments,
            consultations, and healthcare guidance.
          </p>

        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Card */}
          <div className="bg-blue-50 rounded-2xl p-6 md:p-8 shadow-sm">

            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Clinic Information
            </h2>

            <div className="space-y-5 text-gray-700">

              <div className="flex items-start gap-3">
                <FaPhone className="text-[#3ba6d6] mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+91 7834955603 Mukesh kumar</p>
                  <p>+91 7827429086 Tushar</p>
                  <p>+91 6388461581 shubhank</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaEnvelope className="text-[#3ba6d6] mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="break-all">
                    nishanthomeopharmacy@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#3ba6d6] mt-1" />
                <div>
                  <p className="font-medium">Location</p>
                  <p>Burari, Delhi</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaClock className="text-[#3ba6d6] mt-1" />
                <div>
                  <p className="font-medium">Clinic Hours</p>
                  <p>Mon: 4PM - 9:30PM</p>
                  <p>Tue - Sat: 9:30AM - 9:30PM</p>
                </div>
              </div>

            </div>

          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">

            <iframe
              src="https://maps.google.com/maps?q=nishant%20homoeo%20pharmacy%20burari%20delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full min-h-[350px] md:min-h-full border-0"
              style={{ border: "none" }}
            />

          </div>

        </div>

      </div>

    </section>
  );
}