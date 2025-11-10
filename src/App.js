import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import AuthHeader from './components/AuthHeader';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import ConferenceManagement from './pages/ConferenceManagement';
import CorporateEvents from './pages/CorporateEvents';
import WeddingPlanning from './pages/WeddingPlanning';
import ExhibitionTradeShows from './pages/ExhibitionTradeShows';
import VirtualEvents from './pages/VirtualEvents';
import PartyCelebrations from './pages/PartyCelebrations';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';
import BlogPost3 from './pages/BlogPost3';

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/forgot-password' || location.pathname === '/reset-password';
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdminPage && !isAuthPage && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/conference-management" element={<ConferenceManagement />} />
          <Route path="/services/corporate-events" element={<CorporateEvents />} />
          <Route path="/services/wedding-planning" element={<WeddingPlanning />} />
          <Route path="/services/exhibition-trade-shows" element={<ExhibitionTradeShows />} />
          <Route path="/services/virtual-events" element={<VirtualEvents />} />
          <Route path="/services/party-celebrations" element={<PartyCelebrations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post1" element={<BlogPost1 />} />
          <Route path="/blog/post2" element={<BlogPost2 />} />
          <Route path="/blog/post3" element={<BlogPost3 />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Routes>
      </main>
      {!isAuthPage && !isAdminPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;