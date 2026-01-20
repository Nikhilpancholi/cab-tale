import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-2xl font-bold" style={{ color: 'var(--cabtale-deep-navy)' }}>
              CabTale
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <a href="#home" className="transition-colors" style={{ color: 'var(--cabtale-charcoal)' }}>
              Home
            </a>
            <a href="#about" className="transition-colors hover:opacity-70" style={{ color: 'var(--cabtale-charcoal)' }}>
              About
            </a>
            <a href="#services" className="transition-colors hover:opacity-70" style={{ color: 'var(--cabtale-charcoal)' }}>
              Services
            </a>
            <a href="#contact" className="transition-colors hover:opacity-70" style={{ color: 'var(--cabtale-charcoal)' }}>
              Contact
            </a>
            <button
              className="rounded-lg px-6 py-2.5 transition-colors"
              style={{
                backgroundColor: 'var(--cabtale-deep-navy)',
                color: 'var(--cabtale-pure-white)',
              }}
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
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
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#home"
              className="block py-2 transition-colors"
              style={{ color: 'var(--cabtale-charcoal)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="block py-2 transition-colors"
              style={{ color: 'var(--cabtale-charcoal)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block py-2 transition-colors"
              style={{ color: 'var(--cabtale-charcoal)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 transition-colors"
              style={{ color: 'var(--cabtale-charcoal)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button
              className="w-full rounded-lg px-6 py-2.5 transition-colors"
              style={{
                backgroundColor: 'var(--cabtale-deep-navy)',
                color: 'var(--cabtale-pure-white)',
              }}
            >
              Sign In
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
