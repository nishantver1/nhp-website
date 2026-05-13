import About from "../components/About"
import AutoSlider from "../components/AutoSlider"
import Hero from "../components/Hero"
import LiveDoctorAvailabilityCalendar from "../components/LiveDoctorAvailabilityCalendar"

export default function Home() {
  return (
    <main>
      <Hero />
      <LiveDoctorAvailabilityCalendar />
      <About/>
      <AutoSlider/>
    </main>
  )
}