import React, { createContext, useContext, useState } from 'react';
import {
  BookingRecord,
  BookingStatus,
  INITIAL_SAMPLE_BOOKINGS,
  ServiceItem,
} from '../data/salonData';

interface BookingContextValue {
  selectedServices: ServiceItem[];
  addService: (service: ServiceItem) => void;
  removeService: (serviceId: string) => void;
  clearSelectedServices: () => void;
  bookings: BookingRecord[];
  createBooking: (booking: Omit<BookingRecord, 'id' | 'createdAt' | 'status'>) => BookingRecord;
  updateBookingStatus: (id: string, status: BookingStatus) => void;
  isOwnerLoggedIn: boolean;
  setIsOwnerLoggedIn: (val: boolean) => void;
}

const BookingContext = createContext<BookingContextValue | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([]);
  const [bookings, setBookings] = useState<BookingRecord[]>(INITIAL_SAMPLE_BOOKINGS);
  const [isOwnerLoggedIn, setIsOwnerLoggedIn] = useState<boolean>(false);

  const addService = (service: ServiceItem) => {
    setSelectedServices((prev) =>
      prev.some((item) => item.id === service.id) ? prev : [...prev, service]
    );
  };

  const removeService = (serviceId: string) => {
    setSelectedServices((prev) => prev.filter((item) => item.id !== serviceId));
  };

  const clearSelectedServices = () => setSelectedServices([]);

  const createBooking = (
    newBooking: Omit<BookingRecord, 'id' | 'createdAt' | 'status'>
  ): BookingRecord => {
    const created: BookingRecord = {
      ...newBooking,
      id: `MS-2026-${105 + bookings.length}`,
      status: 'Pending',
      createdAt: new Date().toLocaleString('en-IN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setBookings((prev) => [created, ...prev]);
    return created;
  };

  const updateBookingStatus = (id: string, status: BookingStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status } : b))
    );
  };

  return (
    <BookingContext.Provider
      value={{
        selectedServices,
        addService,
        removeService,
        clearSelectedServices,
        bookings,
        createBooking,
        updateBookingStatus,
        isOwnerLoggedIn,
        setIsOwnerLoggedIn,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextValue => {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return ctx;
};
