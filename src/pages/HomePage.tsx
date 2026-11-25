import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Instagram,
  MapPin,
  Plus,
  Sparkles,
  Star,
} from 'lucide-react';
import {
  FAQS,
  GALLERY_ITEMS,
  PACKAGES,
  REVIEWS,
  SALON_INFO,
  SERVICES,
  TEAM_MEMBERS,
} from '../data/salonData';
import { useBooking } from '../context/BookingContext';

export const HomePage: React.FC = () => {
  const { selectedServices, addService, removeService } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const popularServices = SERVICES.filter((s) => s.popular);

  const isSelected = (id: string) => selectedServices.some((s) => s.id === id);

  return (
    <div>
      {/* 1. Asymmetric Split-Editorial Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-bg via-bg to-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-medium text-primary">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Kala Chowki, Lalbaug · {SALON_INFO.catersTo}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary leading-[1.08] tracking-tight">
              Graceful Bridal Artistry &amp; Everyday Beauty Care
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              Welcome to <strong className="text-ink font-semibold">{SALON_INFO.name}</strong>{' '}
              on G.D. Ambekar Marg. Thoughtful bridal makeup, tailored haircuts,
              rejuvenating facials, and relaxing rituals in a warm, clean neighborhood studio.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors shadow-md"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-accent" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-primary/25 bg-white/70 text-primary text-sm font-medium hover:bg-surface transition-colors"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Verified Quick Facts Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border/80">
              <div className="flex items-start gap-2.5">
                <Star className="w-4 h-4 text-accent fill-accent shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-ink block">
                    {SALON_INFO.rating.score} / 5 Rating
                  </span>
                  <span className="text-muted">{SALON_INFO.rating.countLabel}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-ink block">Open Daily</span>
                  <span className="text-muted">10:00 AM – 9:00 PM</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-ink block">Kala Chowki, Mumbai</span>
                  <span className="text-muted">G.D. Ambekar Marg, 400033</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Arched Editorial Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-t-[10rem] rounded-b-3xl overflow-hidden border-4 border-white shadow-xl bg-surface">
                <img
                  src={SALON_INFO.heroImage.path}
                  alt={SALON_INFO.heroImage.alt}
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-muted px-2">
                <span>Sample Studio Preview (replace with real interior photo)</span>
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-medium underline"
                >
                  Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About the Salon */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-surface rounded-3xl p-8 sm:p-12 border border-border">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
              About Our Salon
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary">
              A Trusted Kala Chowki Sanctuary for Women &amp; Brides
            </h2>
            <p className="text-xs text-muted italic">
              {SALON_INFO.establishedNote}
            </p>
          </div>
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-ink/85 leading-relaxed">
            <p>
              Located at Irani Chawl on G.D. Ambekar Marg in Kala Chowki,{' '}
              <strong>{SALON_INFO.name}</strong> is known among local guests for
              attentive one-on-one haircuts, neat and hygienic surroundings, and
              dependable bridal &amp; occasion makeup.
            </p>
            <p>
              Whether you are preparing for your wedding day, refreshing your hair
              with a nourishing spa ritual, or stopping by for a glow facial and
              eyebrow threading, our team focuses on unhurried care tailored to you.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Popular Services */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
              Most Requested
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary mt-1">
              Popular Salon Services
            </h2>
          </div>
          <Link
            to="/services"
            className="text-sm font-medium text-primary hover:text-secondary inline-flex items-center gap-1.5"
          >
            <span>View all {SERVICES.length} services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularServices.map((service) => {
            const added = isSelected(service.id);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative h-52 bg-surface">
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
                  <div>
                    <h3 className="font-display text-xl font-semibold text-primary">
                      {service.name}
                    </h3>
                    <p className="text-xs text-muted mt-1.5 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border/70 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-xs text-muted block">{service.duration}</span>
                      <span className="text-sm font-semibold text-ink">
                        {service.priceLabel}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        added ? removeService(service.id) : addService(service)
                      }
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-colors ${
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
      </section>

      {/* 4. Packages & Offers */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Bridal &amp; Occasion
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-1">
              Curated Bridal &amp; Party Packages
            </h2>
            <p className="text-sm text-white/75 mt-2">
              Transparent starting benchmarks for bridal and family functions. Call or
              visit for personalized combo quotes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-2xl bg-white/8 border border-white/15 p-6 flex flex-col justify-between gap-5"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-accent font-semibold">
                    {pkg.audience}
                  </span>
                  <h3 className="font-display text-2xl font-semibold mt-1">
                    {pkg.name}
                  </h3>
                  <p className="text-sm font-semibold text-accent-soft mt-2">
                    {pkg.priceLabel}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-white/85">
                    {pkg.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <p className="text-[11px] text-white/65 leading-relaxed">{pkg.note}</p>
                  <Link
                    to="/book"
                    className="block text-center py-2.5 rounded-full bg-accent text-ink text-xs font-semibold hover:bg-accent-soft transition-colors"
                  >
                    Inquire / Book Slot
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Work & Studio Gallery */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
              Visual Showcase
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary mt-1">
              Studio &amp; Work Gallery
            </h2>
          </div>
          <span className="text-xs text-muted">
            Sample images shown — swap with your real salon &amp; bridal photos
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-surface border border-border aspect-[4/5]"
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent p-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-accent-soft block">
                  {item.category} · Sample
                </span>
                <span className="font-display text-lg font-medium">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Meet the Team */}
      <section className="py-14 bg-surface/70 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
              Our Specialists
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary mt-1">
              Meet the Salon Team
            </h2>
            <p className="text-xs text-muted mt-2">
              Placeholder profiles — update with your stylists&apos; real names and
              portraits in <code>src/data/salonData.ts</code>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl p-6 border border-border text-center space-y-3"
              >
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  loading="lazy"
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-accent/40"
                />
                <div>
                  <h3 className="font-display text-xl font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-secondary mt-0.5">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs text-muted leading-relaxed">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Customer Reviews & Instagram */}
      <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
              Guest Feedback
            </span>
            <h2 className="font-display text-3xl font-semibold text-primary mt-1">
              What Clients Say
            </h2>
          </div>

          <div className="space-y-4">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-5 border border-border shadow-xs space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: rev.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-3.5 h-3.5 text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-muted">{rev.source}</span>
                </div>
                <p className="text-sm text-ink/90 italic leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </p>
                <p className="text-xs font-medium text-primary">— {rev.reviewerName}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-surface rounded-3xl p-6 sm:p-8 border border-border flex flex-col justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-secondary text-xs font-semibold uppercase tracking-wider">
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </div>
            <h3 className="font-display text-2xl font-semibold text-primary">
              Follow Our Latest Looks
            </h3>
            <p className="text-xs text-muted">
              Handle: <strong>{SALON_INFO.social.instagramHandle}</strong>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {GALLERY_ITEMS.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                className="w-full h-28 object-cover rounded-xl border border-border"
              />
            ))}
          </div>

          <a
            href={SALON_INFO.social.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-white text-xs font-medium hover:bg-primary-light transition-colors"
          >
            <Instagram className="w-4 h-4 text-accent" />
            <span>Open Instagram (Placeholder Link)</span>
          </a>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-14 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
            Good to Know
          </span>
          <h2 className="font-display text-3xl font-semibold text-primary mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-border overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-sm font-semibold text-primary">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/50 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
