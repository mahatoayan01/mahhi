import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock, Plus, Search } from 'lucide-react';
import {
  SERVICE_CATEGORIES,
  SERVICES,
  ServiceCategory,
} from '../data/salonData';
import { useBooking } from '../context/BookingContext';

export const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | ServiceCategory>('All');
  const [query, setQuery] = useState('');
  const { selectedServices, addService, removeService } = useBooking();

  const filtered = SERVICES.filter((service) => {
    const matchesCategory =
      activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isSelected = (id: string) => selectedServices.some((s) => s.id === id);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
            Service Menu
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-primary mt-1">
            Treatments &amp; Bridal Services
          </h1>
          <p className="text-sm text-muted mt-2 max-w-xl">
            Select one or more services to carry them straight into your appointment
            booking. Exact rates for individual treatments are confirmed on consultation.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bridal, facial, hair..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-border text-sm focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {(['All', ...SERVICE_CATEGORIES] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-primary text-white shadow-sm'
                : 'bg-surface text-primary hover:bg-border/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Selected Services Banner */}
      {selectedServices.length > 0 && (
        <div className="bg-primary text-white rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-md">
          <div>
            <span className="text-xs text-accent font-semibold uppercase tracking-wider block">
              Selected for Booking ({selectedServices.length})
            </span>
            <span className="text-sm text-white/90">
              {selectedServices.map((s) => s.name).join(' · ')}
            </span>
          </div>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-ink text-xs font-semibold hover:bg-accent-soft transition-colors"
          >
            <span>Proceed to Booking</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Services Grid */}
      {filtered.length === 0 ? (
        <div className="bg-surface rounded-2xl p-10 text-center text-sm text-muted">
          No services match your current filter. Try clearing the search box.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => {
            const added = isSelected(service.id);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-border shadow-xs flex flex-col"
              >
                <div className="relative h-48 bg-surface">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-bg/90 text-primary text-[11px] font-medium">
                    {service.category}
                  </span>
                  {service.sampleImage && (
                    <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-ink/70 text-white text-[10px]">
                      Sample Image
                    </span>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <h2 className="font-display text-xl font-semibold text-primary">
                      {service.name}
                    </h2>
                    <p className="text-xs text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/70 flex items-center justify-between gap-2">
                    <div className="space-y-0.5">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <Clock className="w-3.5 h-3.5" />
                        {service.duration}
                      </span>
                      <span className="block text-sm font-semibold text-ink">
                        {service.priceLabel}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        added ? removeService(service.id) : addService(service)
                      }
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                        added
                          ? 'bg-secondary text-white'
                          : 'bg-surface text-primary hover:bg-primary hover:text-white'
                      }`}
                    >
                      {added ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to booking</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
