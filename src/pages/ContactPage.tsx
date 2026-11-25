import React, { useState } from 'react';
import { CheckCircle2, Instagram, Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
          Get in Touch
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-primary mt-1">
          Contact Us
        </h1>
        <p className="text-sm text-muted mt-2 max-w-xl">
          Have a question about bridal makeup dates, pre-bridal packages, or hair
          consultations? Call us directly or send a quick inquiry below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-border space-y-4">
            <h2 className="font-display text-2xl font-semibold text-primary">
              Direct Channels
            </h2>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${SALON_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-surface hover:bg-border/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-secondary" />
                <div>
                  <span className="font-semibold text-primary block">
                    {SALON_INFO.phonePrimary}
                  </span>
                  <span className="text-xs text-muted">Primary Salon Line</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-surface hover:bg-border/50 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#1E7E48]" />
                <div>
                  <span className="font-semibold text-primary block">
                    WhatsApp Inquiry
                  </span>
                  <span className="text-xs text-muted">Quick bridal &amp; slot queries</span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface">
                <Mail className="w-4 h-4 text-secondary" />
                <div>
                  <span className="font-semibold text-primary block">Email</span>
                  <span className="text-xs text-muted">{SALON_INFO.email}</span>
                </div>
              </div>

              <a
                href={SALON_INFO.social.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-surface hover:bg-border/50 transition-colors"
              >
                <Instagram className="w-4 h-4 text-secondary" />
                <div>
                  <span className="font-semibold text-primary block">Instagram</span>
                  <span className="text-xs text-muted">
                    {SALON_INFO.social.instagramHandle}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-border">
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#1E7E48] mx-auto" />
              <h2 className="font-display text-3xl font-semibold text-primary">
                Inquiry Noted (Demo)
              </h2>
              <p className="text-sm text-muted max-w-md mx-auto">
                Thank you, <strong>{name}</strong>. This is a client-side demo form; for
                an immediate response, please call{' '}
                <a
                  href={`tel:${SALON_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="underline text-primary"
                >
                  {SALON_INFO.phonePrimary}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setPhone('');
                  setMessage('');
                }}
                className="mt-2 px-5 py-2 rounded-full bg-surface text-primary text-xs font-medium"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-primary">
                Send an Inquiry
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-bg border border-border text-sm focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-4 py-2.5 rounded-xl bg-bg border border-border text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-muted mb-1">
                  Message or Service Question
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your occasion, preferred date, or service..."
                  className="w-full px-4 py-2.5 rounded-xl bg-bg border border-border text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors"
              >
                <Send className="w-4 h-4 text-accent" />
                <span>Send Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
