export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-100 py-12 md:py-20 overflow-hidden">

      {/* Background Logo */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/nhp-nobg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "220px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* LEFT → Text */}
        <div className="text-center md:text-left">

          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            Nishant Homeo Pharmacy
          </h1>

          <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-700 leading-relaxed">
            Homeopathy is a safe and natural system of medicine that treats
            the root cause of diseases. At Nishant Homoeo Pharmacy, we provide
            effective treatment for hair fall, skin problems, allergies,
            PCOS, thyroid, and chronic diseases.
          </p>

          {/* Buttons */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">

            <a
              href="https://wa.me/917834955603"
              className="bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800 transition text-sm md:text-base text-center"
            >
              Book Consultation
            </a>

            <a
              href="/contact"
              className="border border-blue-700 text-blue-700 px-5 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition text-sm md:text-base text-center"
            >
              Contact
            </a>

          </div>

        </div>

        {/* RIGHT → Map */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">

          <iframe
            src="https://maps.google.com/maps?q=nishant%20homoeo%20pharmacy%20burari%20delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            loading="lazy"
            className="border-0 w-full"
            style={{ border: "none" }}
          />

        </div>

      </div>

    </section>
  );
}