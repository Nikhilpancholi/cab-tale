import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Executive',
    location: 'Gurgaon',
    rating: 5,
    text: 'CabTale has been my go-to cab service for all corporate meetings. Professional drivers, punctual service!',
    avatar: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Manager',
    location: 'Delhi',
    rating: 5,
    text: 'Absolutely love the convenience and safety features. The app is so easy to use, and I always feel secure.',
    avatar: 'PS',
  },
  {
    name: 'Amit Patel',
    role: 'Entrepreneur',
    location: 'Noida',
    rating: 5,
    text: 'Best cab service in NCR! Transparent pricing, no surge charges during peak hours. Highly recommended!',
    avatar: 'AP',
  },
  {
    name: 'Sneha Reddy',
    role: 'Software Developer',
    location: 'Faridabad',
    rating: 5,
    text: 'The airport transfers are seamless. Driver tracked my flight and was waiting when I landed. Unmatched service.',
    avatar: 'SR',
  },
  {
    name: 'Vikram Singh',
    role: 'Consultant',
    location: 'Delhi',
    rating: 5,
    text: 'Five stars! Clean vehicles, courteous drivers, and always on time. Perfect for business travel.',
    avatar: 'VS',
  },
  {
    name: 'Ananya Mehta',
    role: 'Designer',
    location: 'Gurgaon',
    rating: 5,
    text: 'Safe, reliable, and comfortable rides every time. The booking process is super smooth and hassle-free.',
    avatar: 'AM',
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div
      className="shrink-0 w-[350px] md:w-[400px] p-8 rounded-3xl mx-3"
      style={{ 
        backgroundColor: 'var(--cabtale-pure-white)',
        boxShadow: '0 4px 20px rgba(56, 75, 112, 0.08)',
      }}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            fill="#F4D03F" 
            style={{ color: '#F4D03F' }} 
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="mb-6 leading-relaxed" style={{ color: 'var(--cabtale-charcoal)' }}>
        "{testimonial.text}"
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div 
          className="w-14 h-14 rounded-full flex items-center justify-center text-lg"
          style={{
            background: 'linear-gradient(135deg, var(--cabtale-soft-royal), var(--cabtale-sky-accent))',
            color: 'var(--cabtale-pure-white)',
          }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <div className="mb-1" style={{ color: 'var(--cabtale-deep-navy)' }}>
            {testimonial.name}
          </div>
          <div className="text-sm" style={{ color: 'var(--cabtale-muted-gray)' }}>
            {testimonial.role} • {testimonial.location}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="text-6xl md:text-8xl mb-4 opacity-20" style={{ color: 'var(--cabtale-muted-gray)' }}>
            03
          </div> */}
          <h2 className="mb-6 text-4xl md:text-5xl" style={{ color: 'var(--cabtale-deep-navy)' }}>
            What our customers say
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--cabtale-muted-gray)' }}>
            Join thousands of satisfied customers who trust CabTale for their daily commute
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, var(--cabtale-bg-gray), transparent)',
          }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, var(--cabtale-bg-gray), transparent)',
          }}
        />

        {/* Scrolling Testimonials */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: [0, -testimonials.length * 424], // 400px card width + 24px margin
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12 rounded-3xl"
          style={{ 
            backgroundColor: 'var(--cabtale-pure-white)',
            boxShadow: '0 4px 20px rgba(56, 75, 112, 0.08)',
          }}
        >
          {[
            { value: '50,000+', label: 'Happy Customers' },
            { value: '1M+', label: 'Rides Completed' },
            { value: '4.8/5', label: 'Average Rating' },
            { value: '500+', label: 'Verified Drivers' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl mb-2" style={{ color: 'var(--cabtale-deep-navy)' }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--cabtale-muted-gray)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
