

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import TopBar from "../components/TopBar"
import WhatsappButton from "../components/WhatsappButton"
import "./globals.css"


export const metadata = {
  title: "Nishant Homeo pharmacy",
  description: "Natural homeopathic treatment",
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