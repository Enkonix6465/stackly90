import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo1.png';
import { getTranslation } from '../utils/translations';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  
  const homeDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const languageDropdownRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
    setIsServicesDropdownOpen(false); // Close services dropdown when opening home
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    setIsHomeDropdownOpen(false); // Close home dropdown when opening services
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  // Check for logged-in user
  useEffect(() => {
    const checkUser = () => {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        try {
          const userData = JSON.parse(currentUser);
          setUser(userData);
        } catch (error) {
          console.error('Error parsing user data:', error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    // Check on mount
    checkUser();

    // Listen for storage changes
    const handleStorageChange = (e) => {
      if (e.key === 'currentUser') {
        checkUser();
      }
    };

    // Custom event for same-tab updates
    const handleUserUpdate = () => {
      checkUser();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('userUpdated', handleUserUpdate);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('userUpdated', handleUserUpdate);
    };
  }, []);

  // Generate avatar from email
  const getAvatarUrl = () => {
    if (!user || !user.email) {
      return 'https://ui-avatars.com/api/?name=Guest&background=94a3b8&color=fff&size=128&bold=true';
    }
    
    // Get first two letters of email
    const emailInitials = user.email.substring(0, 2).toUpperCase();
    
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(emailInitials)}&background=0ea5e9&color=fff&size=128&bold=true`;
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    window.dispatchEvent(new Event('userUpdated'));
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (homeDropdownRef.current && !homeDropdownRef.current.contains(event.target)) {
        setIsHomeDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isHomeDropdownOpen || isServicesDropdownOpen || isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isHomeDropdownOpen, isServicesDropdownOpen, isLanguageDropdownOpen]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center space-x-3">
                <img 
                  src={logo} 
                  alt="Stackly Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Home Dropdown */}
            <div 
              className="relative group"
              ref={homeDropdownRef}
            >
              <button 
                onClick={toggleHomeDropdown}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 px-3 py-2 text-sm font-medium flex items-center"
              >
                {getTranslation(selectedLanguage, 'home')}
                <svg className={`ml-1 w-4 h-4 transition-transform ${isHomeDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isHomeDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 animate-fadeIn">
                  <Link 
                    to="/home" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-cyan-500"
                    onClick={() => setIsHomeDropdownOpen(false)}
                  >
                    {getTranslation(selectedLanguage, 'home1')}
                  </Link>
                  <Link 
                    to="/home2" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-cyan-500"
                    onClick={() => setIsHomeDropdownOpen(false)}
                  >
                    {getTranslation(selectedLanguage, 'home2')}
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 px-3 py-2 text-sm font-medium"
            >
              {getTranslation(selectedLanguage, 'about')}
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              ref={servicesDropdownRef}
            >
              <button 
                onClick={toggleServicesDropdown}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 px-3 py-2 text-sm font-medium flex items-center"
              >
                {getTranslation(selectedLanguage, 'services')}
                <svg className={`ml-1 w-4 h-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50 animate-fadeIn">
                  <Link 
                    to="/services" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-cyan-500"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    {getTranslation(selectedLanguage, 'allServices')}
                  </Link>
                  <Link 
                    to="/services/conference-management" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-cyan-500"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    {getTranslation(selectedLanguage, 'conferenceManagement')}
                  </Link>
                  <Link 
                    to="/services/corporate-events" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-cyan-500"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    {getTranslation(selectedLanguage, 'corporateEvents')}
                  </Link>
                  <Link 
                    to="/services/wedding-planning" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-cyan-500"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    {getTranslation(selectedLanguage, 'weddingPlanning')}
                  </Link>
                  <Link 
                    to="/services/exhibition-trade-shows" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-cyan-500"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    {getTranslation(selectedLanguage, 'exhibitionTradeShows')}
                  </Link>
                  <Link 
                    to="/services/virtual-events" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-cyan-500"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    {getTranslation(selectedLanguage, 'virtualEvents')}
                  </Link>
                  <Link 
                    to="/services/party-celebrations" 
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-cyan-500"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    {getTranslation(selectedLanguage, 'partyCelebrations')}
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/blog" 
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 px-3 py-2 text-sm font-medium"
            >
              {getTranslation(selectedLanguage, 'blog')}
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 px-3 py-2 text-sm font-medium"
            >
              {getTranslation(selectedLanguage, 'contact')}
            </Link>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language selector with dropdown */}
            <div className="hidden md:block relative" ref={languageDropdownRef}>
              <button
                onClick={toggleLanguageDropdown}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition"
                title="Select Language"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              
              {/* Language Dropdown */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-50 animate-fadeIn border border-gray-200 dark:border-gray-700">
                  <button 
                    onClick={() => handleLanguageChange('US')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-between ${
                      selectedLanguage === 'US' ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">US</span>
                      <span className={selectedLanguage === 'US' ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}>English</span>
                    </div>
                    {selectedLanguage === 'US' && (
                      <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <button 
                    onClick={() => handleLanguageChange('SA')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-between ${
                      selectedLanguage === 'SA' ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">SA</span>
                      <span className={selectedLanguage === 'SA' ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}>العربية</span>
                    </div>
                    {selectedLanguage === 'SA' && (
                      <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <button 
                    onClick={() => handleLanguageChange('IL')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-between ${
                      selectedLanguage === 'IL' ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">IL</span>
                      <span className={selectedLanguage === 'IL' ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}>עברית</span>
                    </div>
                    {selectedLanguage === 'IL' && (
                      <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* User Avatar */}
            <div className="hidden md:block relative">
              {user ? (
                <div className="relative group">
                  <button className="relative">
                    <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 hover:border-cyan-500 dark:hover:border-cyan-500 transition cursor-pointer">
                      <img 
                        src={getAvatarUrl()} 
                        alt="User Avatar" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                  
                  {/* User dropdown menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {user.email}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {user.loginDate} {user.loginTime}
                      </p>
                    </div>
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {getTranslation(selectedLanguage, 'profile')}
                    </Link>
                    <Link 
                      to="/settings" 
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {getTranslation(selectedLanguage, 'settings')}
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {getTranslation(selectedLanguage, 'logout')}
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="relative">
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 hover:border-cyan-500 dark:hover:border-cyan-500 transition cursor-pointer">
                    <img 
                      src={getAvatarUrl()} 
                      alt="Guest Avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              )}
            </div>

            {/* Sign In button */}
            <Link 
              to="/" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition"
            >
              {getTranslation(selectedLanguage, 'signIn')}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500">
                About
              </Link>
              <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500">
                Services
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500">
                Blog
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;