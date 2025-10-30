import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Language Context
const LanguageContext = createContext();

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('US');

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  // Save language preference whenever it changes
  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem('selectedLanguage', language);
  };

  const value = {
    selectedLanguage,
    changeLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
