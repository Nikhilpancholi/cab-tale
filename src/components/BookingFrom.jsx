import { MapPin, Calendar, Clock, Users, ArrowRight, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export function BookingForm() {
  return (
    <div
      className="rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden"
      style={{ backgroundColor: 'var(--cabtale-pure-white)' }}
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <div 
          className="w-full h-full rounded-full"
          style={{ 
            background: 'radial-gradient(circle, var(--cabtale-soft-royal), transparent)',
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="mb-2 text-2xl "  style={{ color: 'var(--cabtale-deep-navy)' }}>
              Book Your Ride Now
            </h2>
            <p style={{ color: 'var(--cabtale-muted-gray)' }}>
              Fill in the details and get instant fare estimates
            </p>
          </div>
          <div className="hidden md:block">
            <div 
              className="px-4 py-2 rounded-full text-sm"
              style={{ 
                backgroundColor: 'var(--cabtale-pale-ice)',
                color: 'var(--cabtale-deep-navy)',
              }}
            >
              🎉 Special Offers Available
            </div>
          </div>
        </div>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pickup Location */}
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="pickup"
                className="block mb-3 flex items-center gap-2"
                style={{ color: 'var(--cabtale-charcoal)' }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <MapPin size={16} style={{ color: 'var(--cabtale-deep-navy)' }} />
                </div>
                Pickup Location
              </label>
              <div className="relative group">
                <input
                  id="pickup"
                  type="text"
                  placeholder="Enter pickup address or landmark"
                  className="w-full px-5 py-4 rounded-xl border-2 outline-none transition-all"
                  style={{
                    borderColor: 'var(--cabtale-soft-border)',
                    backgroundColor: 'var(--cabtale-cloud-white)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--cabtale-soft-royal)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--cabtale-soft-border)'}
                />
              </div>
            </motion.div>

            {/* Drop Location */}
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="drop"
                className="block mb-3 flex items-center gap-2"
                style={{ color: 'var(--cabtale-charcoal)' }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <MapPin size={16} style={{ color: 'var(--cabtale-soft-royal)' }} />
                </div>
                Drop Location
              </label>
              <div className="relative group">
                <input
                  id="drop"
                  type="text"
                  placeholder="Enter destination address"
                  className="w-full px-5 py-4 rounded-xl border-2 outline-none transition-all"
                  style={{
                    borderColor: 'var(--cabtale-soft-border)',
                    backgroundColor: 'var(--cabtale-cloud-white)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--cabtale-soft-royal)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--cabtale-soft-border)'}
                />
              </div>
            </motion.div>

            {/* Date */}
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="date"
                className="block mb-3 flex items-center gap-2"
                style={{ color: 'var(--cabtale-charcoal)' }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <Calendar size={16} style={{ color: 'var(--cabtale-deep-navy)' }} />
                </div>
                Pickup Date
              </label>
              <input
                id="date"
                type="date"
                className="w-full px-5 py-4 rounded-xl border-2 outline-none transition-all"
                style={{
                  borderColor: 'var(--cabtale-soft-border)',
                  backgroundColor: 'var(--cabtale-cloud-white)',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--cabtale-soft-royal)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--cabtale-soft-border)'}
              />
            </motion.div>

            {/* Time */}
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label
                htmlFor="time"
                className="block mb-3 flex items-center gap-2"
                style={{ color: 'var(--cabtale-charcoal)' }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <Clock size={16} style={{ color: 'var(--cabtale-deep-navy)' }} />
                </div>
                Pickup Time
              </label>
              <input
                id="time"
                type="time"
                className="w-full px-5 py-4 rounded-xl border-2 outline-none transition-all"
                style={{
                  borderColor: 'var(--cabtale-soft-border)',
                  backgroundColor: 'var(--cabtale-cloud-white)',
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--cabtale-soft-royal)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--cabtale-soft-border)'}
              />
            </motion.div>
          </div>

          {/* Passengers & Trip Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="passengers"
                className="block mb-3 flex items-center gap-2"
                style={{ color: 'var(--cabtale-charcoal)' }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)' }}
                >
                  <Users size={16} style={{ color: 'var(--cabtale-deep-navy)' }} />
                </div>
                Passengers
              </label>
              <select
                id="passengers"
                className="w-full px-5 py-4 rounded-xl border-2 outline-none transition-all appearance-none cursor-pointer"
                style={{
                  borderColor: 'var(--cabtale-soft-border)',
                  backgroundColor: 'var(--cabtale-cloud-white)',
                }}
              >
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4 Passengers</option>
                <option>5+ Passengers</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="triptype"
                className="block mb-3"
                style={{ color: 'var(--cabtale-charcoal)' }}
              >
                Trip Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="px-4 py-4 rounded-xl border-2 transition-all hover:scale-105"
                  style={{
                    borderColor: 'var(--cabtale-soft-royal)',
                    backgroundColor: 'var(--cabtale-pale-ice)',
                    color: 'var(--cabtale-deep-navy)',
                  }}
                >
                  One Way
                </button>
                <button
                  type="button"
                  className="px-4 py-4 rounded-xl border-2 transition-all hover:scale-105"
                  style={{
                    borderColor: 'var(--cabtale-soft-border)',
                    color: 'var(--cabtale-charcoal)',
                  }}
                >
                  Round Trip
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="group w-full px-8 py-5 rounded-xl transition-all hover:shadow-2xl flex items-center justify-center gap-3"
            style={{
              background: 'linear-gradient(135deg, var(--cabtale-deep-navy), var(--cabtale-soft-royal))',
              color: 'var(--cabtale-pure-white)',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg">Search Available Cabs</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.button>

          <p className="text-center  text-md" style={{ color: 'var(--cabtale-muted-gray)' }}>
            ✓ Multiple payment options  •   ✓ Secure booking  •   ✓ No hidden charges
          </p>
        </form>
      </div>
    </div>
  );
}
