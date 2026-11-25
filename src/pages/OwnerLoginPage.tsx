import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { OWNER_DEMO_CREDENTIALS } from '../data/salonData';
import { useBooking } from '../context/BookingContext';

export const OwnerLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsOwnerLoggedIn } = useBooking();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      email.trim() === OWNER_DEMO_CREDENTIALS.email &&
      password === OWNER_DEMO_CREDENTIALS.password
    ) {
      setIsOwnerLoggedIn(true);
      navigate('/owner-dashboard');
    } else {
      setError('Invalid demo credentials. Use the demo email & password shown below.');
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl p-8 border border-border shadow-sm space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-primary text-accent flex items-center justify-center mx-auto">
            <Lock className="w-5 h-5" />
          </div>
          <h1 className="font-display text-3xl font-semibold text-primary">
            Owner Portal (Demo)
          </h1>
          <p className="text-xs text-muted">
            Sign in to view sample bookings, payment status, and today&apos;s metrics.
          </p>
        </div>

        <div className="rounded-xl bg-surface p-3.5 border border-border text-xs space-y-1">
          <span className="font-semibold text-primary block">Demo Credentials:</span>
          <span className="block text-ink">
            Email: <code>{OWNER_DEMO_CREDENTIALS.email}</code>
          </span>
          <span className="block text-ink">
            Password: <code>{OWNER_DEMO_CREDENTIALS.password}</code>
          </span>
          <button
            type="button"
            onClick={() => {
              setEmail(OWNER_DEMO_CREDENTIALS.email);
              setPassword(OWNER_DEMO_CREDENTIALS.password);
              setError('');
            }}
            className="mt-1.5 text-secondary underline font-medium"
          >
            Auto-fill demo credentials
          </button>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-muted mb-1">
              Owner Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-bg border border-border text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-muted mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-bg border border-border text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors"
          >
            Sign In to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};
