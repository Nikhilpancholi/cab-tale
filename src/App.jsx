import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"
import DriverOnboarding from "./pages/DriverOnboarding"
import Booking from "./pages/Booking"
import About from "./pages/About"

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
        <Header />
        {/* <Hero />
        <Services />
        <Fleet />
        <Features />
        <Testimonials />
        <Coverage /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/driver-onboarding" element={<DriverOnboarding />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
