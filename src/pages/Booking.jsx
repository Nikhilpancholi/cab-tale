import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Calendar, Clock, Users, Car, CreditCard, Check } from 'lucide-react';
import { AppBookingPromo } from '../components/AppBookingPromo';

const steps = [
  { id: 1, title: 'Location', icon: MapPin },
  { id: 2, title: 'Date & Time', icon: Calendar },
  { id: 3, title: 'Vehicle Type', icon: Car },
  { id: 4, title: 'Passengers', icon: Users },
  { id: 5, title: 'Payment', icon: CreditCard },
];

export function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    vehicleType: '',
    passengers: 1,
    paymentMethod: '',
  });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: 'var(--cabtale-bg-gray)' }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--cabtale-deep-navy)' }}>
            Book Your Ride
          </h1>
          <p className="text-lg" style={{ color: 'var(--cabtale-muted-gray)' }}>
            Complete the steps below to book your cab
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            {/* Progress Bar */}
            <div
              className="absolute top-6 left-0 h-1"
              style={{
                backgroundColor: 'var(--cabtale-soft-border)',
                width: '100%',
                zIndex: 0,
              }}
            >
              <motion.div
                className="h-full"
                style={{ backgroundColor: 'var(--cabtale-soft-royal)' }}
                initial={{ width: '0%' }}
                animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Steps */}
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center relative z-10">
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    currentStep >= step.id ? 'bg-gradient' : 'bg-gray'
                  }`}
                  style={{
                    backgroundColor:
                      currentStep >= step.id ? 'var(--cabtale-soft-royal)' : 'var(--cabtale-cloud-white)',
                    color: currentStep >= step.id ? 'var(--cabtale-pure-white)' : 'var(--cabtale-muted-gray)',
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {currentStep > step.id ? <Check size={20} /> : <step.icon size={20} />}
                </motion.div>
                <span
                  className="text-sm text-center hidden md:block"
                  style={{
                    color: currentStep >= step.id ? 'var(--cabtale-deep-navy)' : 'var(--cabtale-muted-gray)',
                  }}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          className="p-8 rounded-3xl"
          style={{ backgroundColor: 'var(--cabtale-pure-white)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Step 1: Location */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl mb-6" style={{ color: 'var(--cabtale-deep-navy)' }}>
                Where would you like to go?
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 rounded-xl border-2"
                    style={{ borderColor: 'var(--cabtale-soft-border)' }}
                    placeholder="Enter pickup address"
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                    Drop-off Location
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 rounded-xl border-2"
                    style={{ borderColor: 'var(--cabtale-soft-border)' }}
                    placeholder="Enter drop-off address"
                    value={formData.dropoff}
                    onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl mb-6" style={{ color: 'var(--cabtale-deep-navy)' }}>
                When do you need the ride?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-4 rounded-xl border-2"
                    style={{ borderColor: 'var(--cabtale-soft-border)' }}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block mb-2" style={{ color: 'var(--cabtale-charcoal)' }}>
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full p-4 rounded-xl border-2"
                    style={{ borderColor: 'var(--cabtale-soft-border)' }}
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Vehicle Type */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl mb-6" style={{ color: 'var(--cabtale-deep-navy)' }}>
                Choose your vehicle
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Sedan', 'Hatchback', 'SUV', 'Luxury'].map((type) => (
                  <motion.button
                    key={type}
                    className="p-6 rounded-xl border-2 text-left transition-all"
                    style={{
                      borderColor:
                        formData.vehicleType === type ? 'var(--cabtale-soft-royal)' : 'var(--cabtale-soft-border)',
                      backgroundColor: formData.vehicleType === type ? 'var(--cabtale-pale-ice)' : 'transparent',
                    }}
                    onClick={() => setFormData({ ...formData, vehicleType: type })}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Car size={32} style={{ color: 'var(--cabtale-soft-royal)', marginBottom: '8px' }} />
                    <div className="text-lg" style={{ color: 'var(--cabtale-deep-navy)' }}>
                      {type}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Passengers */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl mb-6" style={{ color: 'var(--cabtale-deep-navy)' }}>
                How many passengers?
              </h2>
              <div className="flex items-center gap-4">
                <button
                  className="w-12 h-12 rounded-xl"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)', color: 'var(--cabtale-deep-navy)' }}
                  onClick={() => setFormData({ ...formData, passengers: Math.max(1, formData.passengers - 1) })}
                >
                  −
                </button>
                <div className="text-4xl" style={{ color: 'var(--cabtale-deep-navy)' }}>
                  {formData.passengers}
                </div>
                <button
                  className="w-12 h-12 rounded-xl"
                  style={{ backgroundColor: 'var(--cabtale-pale-ice)', color: 'var(--cabtale-deep-navy)' }}
                  onClick={() => setFormData({ ...formData, passengers: Math.min(7, formData.passengers + 1) })}
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Payment */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl mb-6" style={{ color: 'var(--cabtale-deep-navy)' }}>
                Select payment method
              </h2>
              <div className="space-y-4">
                {['Cash', 'UPI', 'Card', 'Wallet'].map((method) => (
                  <motion.button
                    key={method}
                    className="w-full p-4 rounded-xl border-2 text-left flex items-center justify-between transition-all"
                    style={{
                      borderColor:
                        formData.paymentMethod === method
                          ? 'var(--cabtale-soft-royal)'
                          : 'var(--cabtale-soft-border)',
                      backgroundColor:
                        formData.paymentMethod === method ? 'var(--cabtale-pale-ice)' : 'transparent',
                    }}
                    onClick={() => setFormData({ ...formData, paymentMethod: method })}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span style={{ color: 'var(--cabtale-deep-navy)' }}>{method}</span>
                    {formData.paymentMethod === method && <Check style={{ color: 'var(--cabtale-soft-royal)' }} />}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {currentStep > 1 && (
              <motion.button
                className="px-6 py-3 rounded-xl border-2"
                style={{
                  borderColor: 'var(--cabtale-deep-navy)',
                  color: 'var(--cabtale-deep-navy)',
                }}
                onClick={handlePrevious}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Previous
              </motion.button>
            )}
            <motion.button
              className="flex-1 px-6 py-3 rounded-xl"
              style={{
                backgroundColor: currentStep === steps.length ? '#F4D03F' : 'var(--cabtale-deep-navy)',
                color: currentStep === steps.length ? 'var(--cabtale-deep-navy)' : 'var(--cabtale-pure-white)',
              }}
              onClick={handleNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentStep === steps.length ? 'Confirm Booking' : 'Next'}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Coming Soon Section */}
      <AppBookingPromo />
    </div>

    
  );
}
