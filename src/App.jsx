import { BookingForm } from "./components/BookingFrom"
import { Coverage } from "./components/Coverage"
import { Features } from "./components/Features"
import { Fleet } from "./components/Fleet"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Testimonials } from "./components/Testimonial"

const App = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
      <Header />
      <Hero />
      {/* <BookingForm /> */}
      <Services />
      <Fleet />
      <Features />
      <Testimonials />
      <Coverage />
      <Footer />
    </div>
  )
}

export default App
