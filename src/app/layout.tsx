

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import TopBar from "../components/TopBar"
import WhatsappButton from "../components/WhatsappButton"
import "./globals.css"


export const metadata = {
  title: "Nishant Homeo pharmacy",
   metadataBase: new URL("https://www.mynhp.in"),
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
  openGraph: {
    title: "Nishant Homeo Pharmacy",
    description:
      "Homeopathic treatment for allergies, thyroid, hair fall, PCOS, skin problems and chronic diseases.",
    url: "https://www.mynhp.in/nhp-nobg.png",
    siteName: "Nishant Homeo Pharmacy",
    images: [
      {
        url: "./nhp-nobg.png",
        width: 1200,
        height: 630,
        alt: "Nishant Homeo Pharmacy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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