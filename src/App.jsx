import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import CareerCounsellingPage from './CareerCounsellingPage';
import BookingPage from './components/BookingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import { ThemeProvider } from './ThemeContext';
import WhatsAppWidget from './components/WhatsAppWidget';
import ScrollToTop from './components/ScrollToTop';
import { trackPageView } from './lib/pixel';

function PixelTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <PixelTracker />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/career-counselling" element={<CareerCounsellingPage />} />
          <Route path="/career" element={<CareerCounsellingPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
        <WhatsAppWidget />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
