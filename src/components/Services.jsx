import { Car, Plane, Mountain, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Car,
    title: 'Road Trips',
    description: 'Safe, trusted car rides for all your travel needs.',
  },
  {
    icon: Plane,
    title: 'Airport Pickup & Drop',
    description: 'Safe, reliable airport transfer services.',
  },
  {
    icon: Mountain,
    title: 'Hometown Rides',
    description: 'Experience local rides with trusted drivers.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel',
    description: 'Professional travel solutions for your business needs.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl" style={{ color: 'var(--cabtale-deep-navy)' }}>
            Book your ride
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl text-center transition-all hover:shadow-lg cursor-pointer group"
              style={{ backgroundColor: 'var(--cabtale-cloud-white)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Icon Container */}
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ 
                  backgroundColor: 'var(--cabtale-pale-ice)',
                }}
              >
                <service.icon 
                  size={40} 
                  style={{ color: 'var(--cabtale-soft-royal)' }} 
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg" style={{ color: 'var(--cabtale-deep-navy)' }}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: 'var(--cabtale-muted-gray)' }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
