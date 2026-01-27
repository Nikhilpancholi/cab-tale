import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"
import { Booking } from "./pages/Booking"
import DriverOnboarding from "./pages/DriverOnboarding"
import { About } from "./pages/About"
import { Services } from "./pages/Services"
import { ApplyNow } from "./pages/ApplyNow"
import WhatsappUs from "./components/WhatsappUs"

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/driver-onboarding" element={<DriverOnboarding />} />
          <Route path="/apply-now" element={<ApplyNow />} />
        </Routes>
        <Footer />
      </div>

      {/* WhatsApp button */}
      <WhatsappUs />
    </BrowserRouter>

  )
}

export default App
