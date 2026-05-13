export default function AboutPage() {
  return (
    <section className="py-12 md:py-16 bg-white min-h-screen">

      <div className="max-w-5xl mx-auto px-4 md:px-6">

        <h1 className="text-3xl md:text-5xl font-bold text-blue-900 text-center">
          About Nishant Homeo Pharmacy
        </h1>

        <p className="mt-6 text-gray-700 text-sm md:text-lg leading-relaxed text-center">
          Nishant Homeo Pharmacy is a trusted homeopathic clinic in Burari, Delhi,
          providing natural and safe treatment for chronic and acute diseases.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-blue-50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-blue-900">
              Our Mission
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              To provide affordable and effective homeopathic treatment
              focused on long-term wellness and root-cause healing.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-blue-900">
              Treatments Offered
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Hair fall, thyroid disorders, allergies, skin diseases,
              PCOS, digestive disorders, and chronic health conditions.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}