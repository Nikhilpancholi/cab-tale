import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"
import { Booking } from "./pages/Booking"
import DriverOnboarding from "./pages/DriverOnboarding"

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/driver-onboarding" element={<DriverOnboarding />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
