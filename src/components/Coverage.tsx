import { MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const cities = [
  { 
    name: 'Delhi', 
    areas: ['Connaught Place', 'Karol Bagh', 'Dwarka', 'Rohini', 'Saket'],
    color: 'var(--cabtale-soft-royal)',
  },
  { 
    name: 'Noida', 
    areas: ['Sector 18', 'Greater Noida', 'Noida Extension', 'Film City'],
    color: 'var(--cabtale-sky-accent)',
  },
  { 
    name: 'Gurgaon', 
    areas: ['Cyber City', 'DLF Phase', 'MG Road', 'Golf Course Road'],
    color: 'var(--cabtale-muted-steel)',
  },
  { 
    name: 'Faridabad', 
    areas: ['Sector 15', 'New Industrial Town', 'Ballabhgarh'],
    color: 'var(--cabtale-deep-navy)',
  },
];

export function Coverage() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--cabtale-pure-white)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="var(--cabtale-deep-navy)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ 
              backgroundColor: 'var(--cabtale-pale-ice)',
              color: 'var(--cabtale-deep-navy)',
            }}
          >
            <Sparkles size={16} />
            <span className="text-sm">Service Coverage</span>
          </div>
          
          <h2 className="mb-6 text-4xl md:text-5xl" style={{ color: 'var(--cabtale-deep-navy)' }}>
            Covering All Major Areas in <br className="hidden md:block" />
            Delhi NCR
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg" style={{ color: 'var(--cabtale-muted-gray)' }}>
            From the heart of Delhi to the outskirts of NCR, our comprehensive coverage 
            ensures you can book a ride wherever you are, whenever you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl p-6 transition-all hover:shadow-2xl cursor-pointer overflow-hidden"
              style={{ backgroundColor: 'var(--cabtale-cloud-white)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient overlay on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${city.color}, transparent)` }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-3 rounded-xl transition-all group-hover:scale-110"
                    style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                  >
                    <MapPin size={24} style={{ color: city.color }} />
                  </div>
                  <h3 className="text-2xl" style={{ color: 'var(--cabtale-deep-navy)' }}>
                    {city.name}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {city.areas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: city.color }}
                      />
                      <span className="text-sm" style={{ color: 'var(--cabtale-muted-gray)' }}>
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, var(--cabtale-deep-navy), var(--cabtale-muted-steel))',
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--cabtale-soft-royal), transparent)' }}
          />
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl mb-4" style={{ color: 'var(--cabtale-pure-white)' }}>
              Can't Find Your Area?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto text-lg" style={{ color: 'var(--cabtale-light-periwinkle)' }}>
              We're constantly expanding our service coverage. Drop us a message and we'll 
              let you know as soon as we're available in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 rounded-xl"
                style={{
                  backgroundColor: 'var(--cabtale-pure-white)',
                  color: 'var(--cabtale-deep-navy)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Coverage
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-xl border-2"
                style={{
                  borderColor: 'var(--cabtale-pure-white)',
                  color: 'var(--cabtale-pure-white)',
                }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                View Full Coverage Map
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
