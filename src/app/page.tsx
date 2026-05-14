import About from "../components/About"
import AutoSlider from "../components/AutoSlider"
import Hero from "../components/Hero"
import LiveDoctorAvailabilityCalendar from "../components/LiveDoctorAvailabilityCalendar"

export default function Home() {
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      name: "Nishant Homeo Pharmacy",
      url: "https://www.mynhp.in",
      logo: "https://www.mynhp.in/nhp-nobg.png",
      image: "https://www.mynhp.in/nhp-nobg.png",
    }),
  }}
/>
  return (
    <main>
      <Hero />
      <LiveDoctorAvailabilityCalendar />
      <About/>
      <AutoSlider/>
    </main>
  )
}