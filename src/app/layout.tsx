

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import TopBar from "../components/TopBar"
import WhatsappButton from "../components/WhatsappButton"
import "./globals.css"


export const metadata = {
  title: "Nishant Homeo pharmacy",
  description: "Nishant Homeo Pharmacy in Burari Delhi offering homeopathic treatment for allergies, thyroid, hair fall, PCOS, skin problems and chronic diseases.",
    keywords: [
    "Nishant Homeo Pharmacy",
    "Homeopathy clinic Delhi",
    "Burari homeopathy doctor",
    "Homeopathic treatment",
    "Hair fall treatment",
    "PCOS homeopathy",
    "Thyroid treatment",
    "Skin allergy treatment",
    "Homeopathy near me",
    "Best homeopathy clinic in Delhi",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TopBar/>
        <Navbar />
        <main className="p-3">
          {children}
          <WhatsappButton/>
        </main>
        <Footer/>

      </body>
    </html>
  )
}