import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  Calendar,
  CheckCircle2,
  CreditCard,
  Plus,
  Trash2,
  User,
} from 'lucide-react';
import {
  BookingRecord,
  SERVICES,
  TEAM_MEMBERS,
  TIME_SLOTS,
} from '../data/salonData';
import { useBooking } from '../context/BookingContext';

export const BookingPage: React.FC = () => {
  const {
    selectedServices,
    addService,
    removeService,
    clearSelectedServices,
    createBooking,
  } = useBooking();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-11-26');
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[1]);
  const [stylist, setStylist] = useState('Any Available Specialist');
  const [paymentMethod, setPaymentMethod] = useState<
    'Demo UPI' | 'Demo Card' | 'Pay at Salon'
  >('Pay at Salon');
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRecord | null>(
    null
  );

  const totalEstimate = selectedServices.reduce(
    (sum, s) => sum + s.demoPriceInr,
    0
  );

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || selectedServices.length === 0) {
      return;
    }

    const record = createBooking({
      customerName: customerName.trim(),
      phone: phone.trim(),
      services: selectedServices.map((s) => s.name),
      date,
      timeSlot,
      stylist,
      totalAmountInr: totalEstimate,
      paymentMethod,
      paymentStatus:
        paymentMethod === 'Pay at Salon' ? 'Pay at Salon' : 'Demo Paid',
    });

    setConfirmedBooking(record);
    clearSelectedServices();
  };

  if (confirmedBooking) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-3xl p-8 border border-border shadow-sm text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-[#1E7E48] mx-auto" />
          <span className="inline-block px-3 py-1 rounded-full bg-surface text-xs font-semibold text-secondary">
            DEMO BOOKING CONFIRMED · {confirmedBooking.id}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-primary">
            Thank You, {confirmedBooking.customerName}
          </h1>
          <p className="text-sm text-muted">
            Your demo appointment request has been recorded and is now visible in the
            Owner Dashboard.
          </p>

          <div className="bg-bg rounded-2xl p-5 text-left text-sm space-y-2 border border-border">
            <div className="flex justify-between">
              <span className="text-muted">Date &amp; Time</span>
              <span className="font-semibold text-ink">
                {confirmedBooking.date} · {confirmedBooking.timeSlot}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Preferred Stylist</span>
              <span className="font-semibold text-ink">{confirmedBooking.stylist}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Services</span>
              <span className="font-semibold text-ink text-right max-w-xs">
                {confirmedBooking.services.join(', ')}
              </span>
            </div>
            <div className="flex justify-between pt-2 border-t border-border">
              <span className="text-muted">Demo Estimate / Payment</span>
              <span className="font-semibold text-primary">
                ₹{confirmedBooking.totalAmountInr.toLocaleString('en-IN')} (
                {confirmedBooking.paymentMethod})
              </span>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-medium"
            >
              Back to Home
            </Link>
            <Link
              to="/owner-login"
              className="px-6 py-2.5 rounded-full border border-border text-primary text-xs font-medium hover:bg-surface"
            >
              View in Owner Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
          Appointment Request
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-primary mt-1">
          Book Your Appointment
        </h1>
      </div>

      {/* Prominent Demo Payment Disclaimer */}
      <div className="rounded-2xl bg-amber-50 border border-amber-300/80 p-4 flex items-start gap-3 text-amber-950">
        <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm">
          <strong>DEMO ONLY:</strong> Online booking and payment on this website are for
          demonstration purposes only. No real payment is charged and no real card data
          is collected.
        </div>
      </div>

      <form
        onSubmit={handleConfirm}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Services */}
          <div className="bg-white rounded-2xl p-6 border border-border space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-semibold text-primary">
                1. Selected Services
              </h2>
              <Link to="/services" className="text-xs text-secondary underline">
                Browse full menu
              </Link>
            </div>

            {selectedServices.length === 0 ? (
              <p className="text-xs text-muted">
                No services selected yet. Quick-add below:
              </p>
            ) : (
              <ul className="divide-y divide-border/70">
                {selectedServices.map((s) => (
                  <li
                    key={s.id}
                    className="py-2.5 flex items-center justify-between gap-3 text-sm"
                  >
                    <div>
                      <span className="font-medium text-ink block">{s.name}</span>
                      <span className="text-xs text-muted">
                        {s.duration} · {s.priceLabel}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeService(s.id)}
                      className="p-1.5 text-muted hover:text-secondary"
                      aria-label={`Remove ${s.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="pt-2 flex flex-wrap gap-2">
              {SERVICES.filter(
                (s) => !selectedServices.some((sel) => sel.id === s.id)
              )
                .slice(0, 4)
                .map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => addService(s)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface text-primary text-xs hover:bg-border/60"
                  >
                    <Plus className="w-3 h-3" />
                    <span>{s.name}</span>
                  </button>
                ))}
            </div>
          </div>

          {/* Step 2: Date, Time & Stylist */}
          <div className="bg-white rounded-2xl p-6 border border-border space-y-4">
            <h2 className="font-display text-2xl font-semibold text-primary flex items-center gap-2">
              <Calendar className="w-5 h-5 text-secondary" />
              <span>2. Date, Time &amp; Stylist</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-bg border border-border text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted mb-1">
                  Preferred Stylist
                </label>
                <select
                  value={stylist}
                  onChange={(e) => setStylist(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-bg border border-border text-sm"
                >
                  <option value="Any Available Specialist">
                    Any Available Specialist
                  </option>
                  {TEAM_MEMBERS.map((m) => (
                    <option key={m.id} value={m.role}>
                      {m.role} ({m.name})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-muted mb-2">
                Time Slot (10:00 AM – 9:00 PM)
              </label>
              <div className="flex flex-wrap gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTimeSlot(slot)}
                    className={`px-3.5 py-2 rounded-full text-xs font-medium transition-colors ${
                      timeSlot === slot
                        ? 'bg-primary text-white'
                        : 'bg-surface text-primary hover:bg-border/60'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Guest Details */}
          <div className="bg-white rounded-2xl p-6 border border-border space-y-4">
            <h2 className="font-display text-2xl font-semibold text-primary flex items-center gap-2">
              <User className="w-5 h-5 text-secondary" />
              <span>3. Your Details</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-bg border border-border text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98XXX XXXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-bg border border-border text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Summary & Demo Payment */}
        <div className="lg:col-span-5 bg-surface rounded-3xl p-6 sm:p-7 border border-border space-y-5 sticky top-24">
          <h2 className="font-display text-2xl font-semibold text-primary flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-secondary" />
            <span>Booking &amp; Demo Checkout</span>
          </h2>

          <div className="bg-white rounded-2xl p-4 border border-border space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted">Services Selected</span>
              <span className="font-semibold">{selectedServices.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Slot</span>
              <span className="font-semibold">
                {date} · {timeSlot}
              </span>
            </div>
            <div className="flex justify-between pt-2 border-t border-border">
              <span className="font-medium text-primary">Estimated Total (Demo)</span>
              <span className="font-bold text-primary">
                ₹{totalEstimate.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
              Payment Option (Demo Only)
            </span>
            {(['Pay at Salon', 'Demo UPI', 'Demo Card'] as const).map((method) => (
              <label
                key={method}
                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer text-sm ${
                  paymentMethod === method
                    ? 'bg-white border-primary font-medium'
                    : 'bg-white/60 border-border text-muted'
                }`}
              >
                <span>{method}</span>
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                />
              </label>
            ))}
          </div>

          <button
            type="submit"
            disabled={selectedServices.length === 0}
            className="w-full py-3.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {selectedServices.length === 0
              ? 'Select at least 1 service'
              : 'Confirm Demo Appointment'}
          </button>
        </div>
      </form>
    </div>
  );
};
