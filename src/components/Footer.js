import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';
import logo from '../assets/images/logo1.png';

const Footer = () => {
  const { selectedLanguage } = useLanguage();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group">
              <img 
                src={logo} 
                alt="STACKLY Logo" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {getTranslation(selectedLanguage, 'footerDescription')}
            </p>
            <div className="flex space-x-3">
              {/* Social Media Icons */}
              <a href="#" className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'quickLinks')}</h3>
            <div className="space-y-2">
              <Link to="/home" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm transition">
                {getTranslation(selectedLanguage, 'home1Link')}
              </Link>
              <Link to="/home2" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm transition">
                {getTranslation(selectedLanguage, 'home2Link')}
              </Link>
              <Link to="/about" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm transition">
                {getTranslation(selectedLanguage, 'aboutUs')}
              </Link>
              <Link to="/services" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm transition">
                {getTranslation(selectedLanguage, 'ourServices')}
              </Link>
              <Link to="/blog" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm transition">
                {getTranslation(selectedLanguage, 'blogLink')}
              </Link>
              <Link to="/contact" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm transition">
                {getTranslation(selectedLanguage, 'contactUs')}
              </Link>
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'ourServices')}</h3>
            <div className="space-y-2">
              <Link to="/services/corporate-events" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm transition">
                {getTranslation(selectedLanguage, 'corporateEventsLink')}
              </Link>
              <Link to="/services/conference-management" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm transition">
                {getTranslation(selectedLanguage, 'conferenceManagementLink')}
              </Link>
              <Link to="/services/wedding-planning" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm transition">
                {getTranslation(selectedLanguage, 'weddingPlanningLink')}
              </Link>
              <Link to="/services/exhibition-trade-shows" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm transition">
                {getTranslation(selectedLanguage, 'exhibitionManagementLink')}
              </Link>
              <Link to="/services/virtual-events" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm transition">
                {getTranslation(selectedLanguage, 'virtualEventsLink')}
              </Link>
              <Link to="/services/party-celebrations" className="block text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm transition">
                {getTranslation(selectedLanguage, 'partyCelebrationsLink')}
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'contactUsFooter')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-red-500">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-blue-500 mt-0.5">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">info@enkonix.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-pink-500 mt-0.5">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">123 Stackly Street, Event City, Bangalore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {getTranslation(selectedLanguage, 'copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm">
              {getTranslation(selectedLanguage, 'privacyPolicy')}
            </Link>
            <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm">
              {getTranslation(selectedLanguage, 'termsOfService')}
            </Link>
            <Link to="#" className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 text-sm">
              {getTranslation(selectedLanguage, 'cookiePolicy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;