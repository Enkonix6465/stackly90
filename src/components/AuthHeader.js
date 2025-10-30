import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo1.png';
import { useLanguage } from '../context/LanguageContext';

const AuthHeader = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  
  const languageDropdownRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Stackly Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

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
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
