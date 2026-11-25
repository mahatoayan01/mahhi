import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { LocationPage } from './pages/LocationPage';
import { ContactPage } from './pages/ContactPage';
import { BookingPage } from './pages/BookingPage';
import { OwnerLoginPage } from './pages/OwnerLoginPage';
import { OwnerDashboardPage } from './pages/OwnerDashboardPage';

export const App: React.FC = () => {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/owner-login" element={<OwnerLoginPage />} />
            <Route path="/owner-dashboard" element={<OwnerDashboardPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </BookingProvider>
  );
};

export default App;
