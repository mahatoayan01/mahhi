import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  CalendarCheck,
  Lock,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { useBooking } from '../context/BookingContext';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/location', label: 'Location' },
  { to: '/contact', label: 'Contact' },
  { to: '/book', label: 'Book Appointment' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { selectedServices } = useBooking();
  const location = useLocation();

  const whatsappHref = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${SALON_INFO.name}, I would like to inquire about an appointment.`
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      {/* Top Info Strip */}
      <div className="bg-primary text-bg/90 text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span className="hidden sm:inline">{SALON_INFO.address.landmark}</span>
              <span className="sm:hidden">Kala Chowki, Mumbai</span>
            </span>
            <span className="hidden md:inline text-bg/40">|</span>
            <span className="hidden md:inline">{SALON_INFO.hoursSummary}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${SALON_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>{SALON_INFO.phonePrimary}</span>
            </a>
            <Link
              to="/owner-login"
              className="inline-flex items-center gap-1 text-bg/80 hover:text-accent transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Owner Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-primary text-accent flex items-center justify-center border border-accent/40 shadow-sm">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-primary block leading-none">
                {SALON_INFO.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted block mt-0.5">
                Ladies Beauty Salon
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent'
                      : 'text-muted hover:text-primary'
                  }`
                }
              >
                {item.label}
                {item.to === '/book' && selectedServices.length > 0 && (
                  <span className="ml-1.5 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-secondary text-white">
                    {selectedServices.length}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/book"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors shadow-sm"
            >
              <CalendarCheck className="w-4 h-4 text-accent" />
              <span>Book Now</span>
              {selectedServices.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-accent text-ink text-xs font-bold">
                  {selectedServices.length}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg border border-border text-primary hover:bg-surface"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-bg px-4 py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-ink hover:bg-surface'
                  }`
                }
              >
                <span>{item.label}</span>
                {item.to === '/book' && selectedServices.length > 0 && (
                  <span className="px-2 py-0.5 text-xs rounded-full bg-accent text-ink font-semibold">
                    {selectedServices.length}
                  </span>
                )}
              </NavLink>
            ))}
            <Link
              to="/owner-login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-muted hover:bg-surface"
            >
              <Lock className="w-4 h-4" />
              <span>Owner Login</span>
            </Link>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1 pb-20 sm:pb-0">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-bg/90 border-t border-accent/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-display text-2xl font-semibold text-white">
              {SALON_INFO.name}
            </h3>
            <p className="text-sm text-bg/75 max-w-md leading-relaxed">
              {SALON_INFO.tagline}. Dedicated to bridal artistry, hair care, skin
              treatments, and attentive neighborhood hospitality.
            </p>
            <p className="text-xs text-accent-soft/90">
              {SALON_INFO.address.full}
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-sm text-bg/80">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/owner-login" className="hover:text-accent transition-colors">
                  Owner Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">
              Visit & Hours
            </h4>
            <p className="text-sm text-bg/80">{SALON_INFO.hoursSummary}</p>
            <p className="text-sm text-bg/80">
              Phone:{' '}
              <a
                href={`tel:${SALON_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="underline hover:text-accent"
              >
                {SALON_INFO.phonePrimary}
              </a>
            </p>
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-xs text-accent underline hover:text-white pt-1"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 px-4 text-center text-xs text-bg/60">
          © {new Date().getFullYear()} {SALON_INFO.name}. Demo website — replace marked
          placeholders and sample images before live launch.
        </div>
      </footer>

      {/* Floating WhatsApp & Call Buttons */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-2.5">
        <a
          href={`tel:${SALON_INFO.phonePrimary.replace(/\s+/g, '')}`}
          aria-label="Call salon"
          className="w-12 h-12 rounded-full bg-primary text-white shadow-lg border border-accent/40 flex items-center justify-center hover:scale-105 transition-transform"
        >
          <Phone className="w-5 h-5 text-accent" />
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-[#1E7E48] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>

      {/* Sticky Mobile Book Now Bar */}
      {location.pathname !== '/book' && (
        <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-bg/95 backdrop-blur border-t border-border px-4 py-2.5 flex items-center justify-between gap-3">
          <div className="text-xs">
            <span className="font-semibold text-primary block">
              {selectedServices.length > 0
                ? `${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''} selected`
                : 'Kala Chowki, Mumbai'}
            </span>
            <span className="text-muted">10:00 AM – 9:00 PM</span>
          </div>
          <Link
            to="/book"
            className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium shadow-sm"
          >
            Book Now
          </Link>
        </div>
      )}
    </div>
  );
};
