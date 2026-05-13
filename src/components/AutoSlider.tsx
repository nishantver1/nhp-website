"use client";

import {
  FaHeartbeat,
  FaLeaf,
  FaUserMd,
  FaClinicMedical,
  FaRegSmile,
  FaStethoscope,
} from "react-icons/fa";

type Highlight = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const data: Highlight[] = [
  {
    title: "Natural Healing",
    desc: "Safe and gentle homeopathic treatment for long-term wellness.",
    icon: <FaLeaf />,
  },
  {
    title: "Experienced Care",
    desc: "Personalized consultation and patient-focused treatment plans.",
    icon: <FaUserMd />,
  },
  {
    title: "Chronic Disease Care",
    desc: "Support for thyroid, PCOS, allergies, migraines, and more.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Modern Clinic",
    desc: "Comfortable clinic environment with trusted healthcare support.",
    icon: <FaClinicMedical />,
  },
  {
    title: "Patient Satisfaction",
    desc: "Focused on improving health naturally and effectively.",
    icon: <FaRegSmile />,
  },
  {
    title: "Holistic Treatment",
    desc: "Treating the root cause instead of only symptoms.",
    icon: <FaStethoscope />,
  },
];

export default function AutoSlider() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url('/nhp-nobg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "250px",
        }}
      />

      {/* Heading */}
      <div className="relative text-center px-4">

        <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
          Clinic Highlights
        </h2>

        <p className="mt-3 text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the care, treatments, and wellness-focused approach at
          Nishant Homeo Pharmacy.
        </p>

      </div>

      {/* Slider */}
      <div className="relative mt-10 overflow-hidden">

        <div className="flex w-max gap-4 md:gap-6 animate-scroll px-4">

          {[...data, ...data].map((item, i) => (
            <div
              key={i}
              className="min-w-[240px] md:min-w-[320px] bg-white border border-blue-100 p-5 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >

              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-blue-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 mt-3 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}