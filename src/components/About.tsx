export default function About() {
  return (
    <section className="py-12 md:py-16 bg-white">

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="text-center mb-10">

          <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
            Homeopathic Clinic in Burari, Delhi
          </h2>

          <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nishant Homeo Pharmacy provides trusted homeopathic treatment
            for hair fall, allergies, thyroid disorders, PMOS(PCOS), skin diseases,
            digestive issues, and chronic health conditions in Burari, Delhi.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-blue-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900">
              Hair Fall Treatment
            </h3>

            <p className="mt-3 text-gray-600 text-sm md:text-base">
              Natural homeopathic solutions for hair fall and scalp-related problems.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900">
              PMOS(PCOS) & Thyroid Care
            </h3>

            <p className="mt-3 text-gray-600 text-sm md:text-base">
              Personalized homeopathic treatment for hormonal imbalance and thyroid issues.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900">
              Skin & Allergy Treatment
            </h3>

            <p className="mt-3 text-gray-600 text-sm md:text-base">
              Safe and effective treatment for allergies, acne, eczema, and skin diseases.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}