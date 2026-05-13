"use client";

type Disease = {
  title: string;
  desc: string;
};

const data: Disease[] = [
 { title: "Hair Fall", desc: "Effective treatment for hair loss" },
  { title: "Skin Allergy", desc: "Natural skin disease treatment" },
  { title: "PCOS", desc: "Hormonal balance with homeopathy" },
  { title: "Migraine", desc: "Long-term relief from headaches" },
  { title: "Thyroid", desc: "Safe thyroid management" },
  { title: "Acidity", desc: "Relief from acid reflux and indigestion" },
  { title: "Diabetes", desc: "Support for blood sugar management" },
  { title: "Arthritis", desc: "Joint pain and inflammation relief" },
  { title: "Asthma", desc: "Better breathing and lung support" },
  { title: "Eczema", desc: "Soothing chronic skin conditions" },
  { title: "Psoriasis", desc: "Natural care for skin disorders" },
  { title: "Depression", desc: "Mental wellness and emotional balance" },
  { title: "Anxiety", desc: "Reduce stress and nervousness" },
  { title: "Insomnia", desc: "Improve sleep quality naturally" },
  { title: "Allergic Rhinitis", desc: "Relief from sneezing and allergies" },
  { title: "Kidney Stones", desc: "Support for stone dissolution" },
  { title: "Constipation", desc: "Improve digestion and bowel movement" },
  { title: "Piles", desc: "Treatment for hemorrhoids" },
  { title: "Sinusitis", desc: "Relief from sinus infections" },
  { title: "Back Pain", desc: "Chronic and acute pain relief" },
];

export default function AutoSlider() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-blue-900">
        Treatments We Offer
      </h2>

      <div className="mt-10 overflow-hidden">
        <div className="flex w-max gap-6 animate-scroll">

          {[...data, ...data].map((item, i) => (
            <div
              key={i}
              className="min-w-70 bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}