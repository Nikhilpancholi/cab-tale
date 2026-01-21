import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/cabtale-logo.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          {/* <Link to="/" className="shrink-0 flex items-center gap-2 ">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--cabtale-deep-navy), var(--cabtale-soft-royal))',
              }}
            >
              <span className="text-xl" style={{ color: 'var(--cabtale-pure-white)' }}>
                <img src="https://i0.wp.com/cabtale.com/wp-content/uploads/2025/08/logo1-removebg-preview.jpg?fit=100%2C50&ssl=1" alt="" />
              </span>
            </div>
            <h1 className="text-2xl" style={{ color: 'var(--cabtale-deep-navy)' }}>
              CabTale
            </h1>
            <img src={logo} alt="CabTale Logo" />
          </Link> */}
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center gap-2 bg-black">
            <img 
              src={logo} 
              alt="CabTale Logo" 
              className="h-12 w-auto sm:h-14 md:h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-10">
            <Link 
              to="/" 
              className="transition-all hover:scale-105" 
              style={{ 
                color: isActive('/') ? 'var(--cabtale-soft-royal)' : 'var(--cabtale-charcoal)',
                fontWeight: isActive('/') ? '600' : '400',
              }}
            >
              Home
            </Link>
                        <Link 
              to="/about" 
              className="transition-all hover:scale-105" 
              style={{ 
                color: isActive('/about') ? 'var(--cabtale-soft-royal)' : 'var(--cabtale-charcoal)',
                fontWeight: isActive('/about') ? '600' : '400',
              }}
            >
              About
            </Link>

            <Link 
              to="/services" 
              className="transition-all hover:scale-105" 
              style={{ 
                color: isActive('/services') ? 'var(--cabtale-soft-royal)' : 'var(--cabtale-charcoal)',
                fontWeight: isActive('/services') ? '600' : '400',
              }}
            >
              Services
            </Link>

            <Link 
              to="/booking" 
              className="transition-all hover:scale-105" 
              style={{ 
                color: isActive('/booking') ? 'var(--cabtale-soft-royal)' : 'var(--cabtale-charcoal)',
                fontWeight: isActive('/booking') ? '600' : '400',
              }}
            >
              Booking
            </Link>

            <Link 
              to="/driver-onboarding"
              className="transition-all hover:scale-105" 
              style={{ 
                color: isActive('/driver-onboarding') ? 'var(--cabtale-soft-royal)' : 'var(--cabtale-charcoal)',
                fontWeight: isActive('/driver-onboarding') ? '600' : '400',
              }}
            >
              Driver Onboarding
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:opacity-80"
              style={{ 
                backgroundColor: 'var(--cabtale-pale-ice)',
                color: 'var(--cabtale-deep-navy)',
              }}
            >
              <Phone size={18} />
              <span>+011 6965 6817</span>
            </a>
            <Link
              to="/booking"
              className="px-6 py-2.5 rounded-lg transition-all hover:shadow-lg hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, var(--cabtale-deep-navy), var(--cabtale-dark-navy))',
                color: 'var(--cabtale-pure-white)',
              }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg"
              style={{ color: 'var(--cabtale-deep-navy)' }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t" style={{ borderColor: 'var(--cabtale-soft-border)' }}>
            <Link
              to="/"
              className="block py-2 transition-colors"
              style={{ color: 'var(--cabtale-charcoal)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/booking"
              className="block py-2 transition-colors"
              style={{ color: 'var(--cabtale-charcoal)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Ride
            </Link>
            <Link
              to="/about"
              className="block py-2 transition-colors"
              style={{ color: 'var(--cabtale-charcoal)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/driver-onboarding"
              className="block py-2 transition-colors"
              style={{ color: 'var(--cabtale-charcoal)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Drive with Us
            </Link>
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg"
              style={{ 
                backgroundColor: 'var(--cabtale-pale-ice)',
                color: 'var(--cabtale-deep-navy)',
              }}
            >
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </a>
            <Link
              to="/booking"
              className="block w-full text-center rounded-lg px-6 py-2.5 transition-colors"
              style={{
                background: 'linear-gradient(135deg, var(--cabtale-deep-navy), var(--cabtale-dark-navy))',
                color: 'var(--cabtale-pure-white)',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}