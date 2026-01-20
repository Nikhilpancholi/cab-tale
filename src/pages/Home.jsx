// components 
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Fleet } from '../components/Fleet'
import { Features } from '../components/Features'
import { Testimonials } from '../components/Testimonial'
import { Coverage } from '../components/Coverage'

const Home = () => {
  return (
    <>
        <Hero />
        <Services />
        <Fleet />
        <Features />
        <Testimonials />
        <Coverage />
    </>
  )
}

export default Home