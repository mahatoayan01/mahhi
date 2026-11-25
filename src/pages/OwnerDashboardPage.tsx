import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Calendar, IndianRupee, LogOut, Users } from 'lucide-react';
import { BookingStatus } from '../data/salonData';
import { useBooking } from '../context/BookingContext';

const STATUS_OPTIONS: BookingStatus[] = [
  'Pending',
  'Confirmed',
  'Completed',
  'Cancelled',
];

export const OwnerDashboardPage: React.FC = () => {
  const { bookings, updateBookingStatus, isOwnerLoggedIn, setIsOwnerLoggedIn } =
    useBooking();
  const [filter, setFilter] = useState<'All' | BookingStatus>('All');
  const navigate = useNavigate();

  if (!isOwnerLoggedIn) {
    return <Navigate to="/owner-login" replace />;
  }

  const todayStr = '2026-11-25';
  const todaysBookings = bookings.filter((b) => b.date === todayStr);
  const todaysRevenue = todaysBookings
    .filter((b) => b.status !== 'Cancelled')
    .reduce((sum, b) => sum + b.totalAmountInr, 0);
  const pendingCount = bookings.filter((b) => b.status === 'Pending').length;

  const visibleBookings =
    filter === 'All' ? bookings : bookings.filter((b) => b.status === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
            Owner Dashboard (Sample Data Only)
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-primary">
            Bookings &amp; Payment Overview
          </h1>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsOwnerLoggedIn(false);
            navigate('/owner-login');
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white text-xs font-medium text-primary hover:bg-surface"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-5 border border-border flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-surface text-primary flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-muted block">Today&apos;s Appointments</span>
            <span className="font-display text-3xl font-semibold text-primary">
              {todaysBookings.length}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-border flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-surface text-primary flex items-center justify-center">
            <IndianRupee className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-muted block">Today&apos;s Revenue (Demo)</span>
            <span className="font-display text-3xl font-semibold text-primary">
              ₹{todaysRevenue.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-border flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-surface text-primary flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-muted block">Pending Requests</span>
            <span className="font-display text-3xl font-semibold text-secondary">
              {pendingCount}
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {(['All', ...STATUS_OPTIONS] as const).map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setFilter(status)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium ${
              filter === status
                ? 'bg-primary text-white'
                : 'bg-surface text-primary hover:bg-border/60'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-2xl border border-border overflow-x-auto shadow-xs">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-surface/60 text-xs uppercase tracking-wider text-muted">
              <th className="py-3.5 px-4">ID &amp; Guest</th>
              <th className="py-3.5 px-4">Services</th>
              <th className="py-3.5 px-4">Date &amp; Slot</th>
              <th className="py-3.5 px-4">Stylist</th>
              <th className="py-3.5 px-4">Demo Payment</th>
              <th className="py-3.5 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/70">
            {visibleBookings.map((b) => (
              <tr key={b.id} className="hover:bg-bg/50">
                <td className="py-3.5 px-4">
                  <span className="text-xs text-muted block">{b.id}</span>
                  <span className="font-semibold text-ink block">{b.customerName}</span>
                  <span className="text-xs text-muted">{b.phone}</span>
                </td>
                <td className="py-3.5 px-4 max-w-xs text-xs text-ink">
                  {b.services.join(', ')}
                </td>
                <td className="py-3.5 px-4 text-xs">
                  <span className="font-medium text-ink block">{b.date}</span>
                  <span className="text-muted">{b.timeSlot}</span>
                </td>
                <td className="py-3.5 px-4 text-xs text-muted">{b.stylist}</td>
                <td className="py-3.5 px-4 text-xs">
                  <span className="font-semibold text-primary block">
                    ₹{b.totalAmountInr.toLocaleString('en-IN')}
                  </span>
                  <span className="text-muted">
                    {b.paymentMethod} ({b.paymentStatus})
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <select
                    value={b.status}
                    onChange={(e) =>
                      updateBookingStatus(b.id, e.target.value as BookingStatus)
                    }
                    className="px-2.5 py-1.5 rounded-lg bg-bg border border-border text-xs font-medium text-primary"
                  >
                    {STATUS_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
