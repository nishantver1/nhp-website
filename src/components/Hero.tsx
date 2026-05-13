export default function Hero() {
  return (
    <section className="relative bg-linear-to-b from-white to-blue-100 py-20 overflow-hidden">

      {/* Background Logo */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/nhp-nobg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "400px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT → Text */}
        <div className="text-left">

          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Nishant Homeo Pharmacy
          </h1>

          <p className="mt-6 text-gray-700 text-lg">
            Homeopathy is a safe and natural system of medicine that treats
            the root cause of diseases. At Nishant Homoeo Pharmacy, we provide
            effective treatment for hair fall, skin problems, allergies,
            PCOS, thyroid, and chronic diseases.
          </p>

          <div className="mt-8 flex gap-4">

            <a
              href="https://wa.me/917834955603"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Book Consultation
            </a>

            <a
              href="/store"
              className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition"
            >
              Visit Store
            </a>

          </div>

        </div>

        {/* RIGHT → Map */}
        <div className="w-full rounded-xl overflow-hidden shadow-lg">

          <iframe
            src="https://maps.google.com/maps?q=nishant%20homoeo%20pharmacy%20burari%20delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="350"
            loading="lazy"
            className="border-0"
            style={{ border: "none" }}
          />

        </div>

      </div>

    </section>
  )
}