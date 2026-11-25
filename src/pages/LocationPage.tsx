import React from 'react';
import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const LocationPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
          Visit Us
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-primary mt-1">
          Location &amp; Opening Hours
        </h1>
        <p className="text-sm text-muted mt-2 max-w-xl">
          Conveniently situated on G.D. Ambekar Marg in Kala Chowki / Lalbaug, Mumbai.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-border space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h2 className="font-display text-2xl font-semibold text-primary">
                  Salon Address
                </h2>
                <p className="text-sm text-ink/85 leading-relaxed">
                  {SALON_INFO.address.line1}
                  <br />
                  {SALON_INFO.address.line2}
                  <br />
                  {SALON_INFO.address.cityStatePin}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-border/70">
              <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div className="text-sm space-y-1">
                <span className="font-semibold text-primary block">Call for Directions</span>
                <a
                  href={`tel:${SALON_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="text-ink underline block"
                >
                  {SALON_INFO.phonePrimary}
                </a>
                <span className="text-xs text-muted block">
                  Alt: {SALON_INFO.phoneSecondary}
                </span>
              </div>
            </div>

            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-primary text-white text-xs font-medium hover:bg-primary-light transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-accent" />
            </a>
          </div>

          <div className="bg-surface rounded-2xl p-6 border border-border space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              <h2 className="font-display text-2xl font-semibold text-primary">
                Opening Hours
              </h2>
            </div>
            <ul className="divide-y divide-border/70 text-sm">
              {SALON_INFO.hours.map((row) => (
                <li key={row.day} className="py-2 flex items-center justify-between">
                  <span className="font-medium text-ink">{row.day}</span>
                  <span className="text-muted">{row.time}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-muted">
              Note: Hours may vary on public holidays. Calling ahead is recommended for
              bridal or weekend slots.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl overflow-hidden border border-border bg-surface h-[440px] lg:h-full min-h-[420px] shadow-sm">
            <iframe
              title="Mahhindrs Swaroop Ladies Beauty Salon Map"
              src={SALON_INFO.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
