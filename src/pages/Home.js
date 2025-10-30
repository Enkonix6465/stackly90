import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';
import './home.css';

const AnimatedCounter = ({ end, duration = 6000, suffix = '', color = 'text-gray-900 dark:text-white' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className={`text-5xl font-bold mb-2 ${color}`}>
      {count}{suffix}
    </div>
  );
};

const Home = () => {
  const { selectedLanguage } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Section 1: Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-900 dark:to-blue-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {getTranslation(selectedLanguage, 'heroTitle')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                {getTranslation(selectedLanguage, 'heroSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-gray-900 dark:text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 w-full sm:w-auto">
                    {getTranslation(selectedLanguage, 'bookConsultation')}
                  </button>
                </Link>
                <Link to="/services">
                  <button className="border-2 border-white hover:bg-white hover:text-cyan-600 dark:hover:bg-gray-800 dark:hover:text-white dark:hover:border-gray-800 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 w-full sm:w-auto">
                    {getTranslation(selectedLanguage, 'exploreServices')}
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-gray-700">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{getTranslation(selectedLanguage, 'eventsCount')}</h3>
                      <p className="opacity-90">{getTranslation(selectedLanguage, 'eventsDelivered')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{getTranslation(selectedLanguage, 'attendeesCount')}</h3>
                      <p className="opacity-90">{getTranslation(selectedLanguage, 'attendeesEngaged')}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{getTranslation(selectedLanguage, 'ratingPercent')}</h3>
                      <p className="opacity-90">{getTranslation(selectedLanguage, 'clientSatisfaction')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Services */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">{getTranslation(selectedLanguage, 'whatWeOffer')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'comprehensiveSolutions')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {getTranslation(selectedLanguage, 'comprehensiveDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{getTranslation(selectedLanguage, 'conferenceManagementTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {getTranslation(selectedLanguage, 'conferenceManagementDesc')}
              </p>
              <Link to="/services" className="text-cyan-600 hover:text-cyan-700 font-semibold inline-flex items-center">
                {getTranslation(selectedLanguage, 'learnMore')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{getTranslation(selectedLanguage, 'corporateEventsTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {getTranslation(selectedLanguage, 'corporateEventsDesc')}
              </p>
              <Link to="/services" className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center">
                {getTranslation(selectedLanguage, 'learnMore')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{getTranslation(selectedLanguage, 'exhibitionManagementTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {getTranslation(selectedLanguage, 'exhibitionManagementDesc')}
              </p>
              <Link to="/services" className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center">
                {getTranslation(selectedLanguage, 'learnMore')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="group bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{getTranslation(selectedLanguage, 'eventPlanningTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {getTranslation(selectedLanguage, 'eventPlanningDesc')}
              </p>
              <Link to="/services" className="text-yellow-600 hover:text-yellow-700 font-semibold inline-flex items-center">
                {getTranslation(selectedLanguage, 'learnMore')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 5 */}
            <div className="group bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{getTranslation(selectedLanguage, 'weddingPlanningTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {getTranslation(selectedLanguage, 'weddingPlanningDesc')}
              </p>
              <Link to="/services" className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center">
                {getTranslation(selectedLanguage, 'learnMore')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 6 */}
            <div className="group bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{getTranslation(selectedLanguage, 'eventMarketingTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {getTranslation(selectedLanguage, 'eventMarketingDesc')}
              </p>
              <Link to="/services" className="text-indigo-600 hover:text-indigo-700 font-semibold inline-flex items-center">
                {getTranslation(selectedLanguage, 'learnMore')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">{getTranslation(selectedLanguage, 'whyChoose')}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                {getTranslation(selectedLanguage, 'trustedPartner')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {getTranslation(selectedLanguage, 'trustedPartnerDesc')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'provenTrackTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'provenTrackDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'innovativeSolutionsTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'innovativeSolutionsDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'dedicatedTeamTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'dedicatedTeamDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'costEffectiveTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'costEffectiveDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <AnimatedCounter end={500} suffix="+" duration={5500} color="text-cyan-500" />
                <div className="text-gray-600 dark:text-gray-400 font-medium">{getTranslation(selectedLanguage, 'eventsDeliveredStat')}</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <AnimatedCounter end={100} suffix="K+" duration={5500} color="text-blue-500" />
                <div className="text-gray-600 dark:text-gray-400 font-medium">{getTranslation(selectedLanguage, 'happyAttendeesStat')}</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <AnimatedCounter end={25} suffix="+" duration={3000} color="text-purple-500" />
                <div className="text-gray-600 dark:text-gray-400 font-medium">{getTranslation(selectedLanguage, 'yearsExperienceStat')}</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <AnimatedCounter end={98} suffix="%" duration={2500} color="text-green-500" />
                <div className="text-gray-600 dark:text-gray-400 font-medium">{getTranslation(selectedLanguage, 'satisfactionRateStat')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Process */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">{getTranslation(selectedLanguage, 'howWeWork')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'provenProcess')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {getTranslation(selectedLanguage, 'provenProcessDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-700 dark:to-blue-800 p-8 rounded-2xl text-white h-full">
                <div className="text-6xl font-bold opacity-20 dark:opacity-30 mb-4">01</div>
                <div className="w-14 h-14 bg-white dark:bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-cyan-500 dark:text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">{getTranslation(selectedLanguage, 'step1Title')}</h3>
                <p className="opacity-90">{getTranslation(selectedLanguage, 'step1Desc')}</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-700 dark:to-pink-800 p-8 rounded-2xl text-white h-full">
                <div className="text-6xl font-bold opacity-20 dark:opacity-30 mb-4">02</div>
                <div className="w-14 h-14 bg-white dark:bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-purple-500 dark:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">{getTranslation(selectedLanguage, 'step2Title')}</h3>
                <p className="opacity-90">{getTranslation(selectedLanguage, 'step2Desc')}</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 dark:from-green-700 dark:to-teal-800 p-8 rounded-2xl text-white h-full">
                <div className="text-6xl font-bold opacity-20 dark:opacity-30 mb-4">03</div>
                <div className="w-14 h-14 bg-white dark:bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-green-500 dark:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">{getTranslation(selectedLanguage, 'step3Title')}</h3>
                <p className="opacity-90">{getTranslation(selectedLanguage, 'step3Desc')}</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 dark:from-yellow-700 dark:to-orange-800 p-8 rounded-2xl text-white h-full">
                <div className="text-6xl font-bold opacity-20 dark:opacity-30 mb-4">04</div>
                <div className="w-14 h-14 bg-white dark:bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-yellow-500 dark:text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">{getTranslation(selectedLanguage, 'step4Title')}</h3>
                <p className="opacity-90">{getTranslation(selectedLanguage, 'step4Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">{getTranslation(selectedLanguage, 'clientSuccessStories')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'whatClientsSay')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {getTranslation(selectedLanguage, 'whatClientsSayDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                "{getTranslation(selectedLanguage, 'testimonial1Text')}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  JD
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'testimonial1Name')}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, 'testimonial1Title')}</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                "{getTranslation(selectedLanguage, 'testimonial2Text')}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  MR
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'testimonial2Name')}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, 'testimonial2Title')}</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                "{getTranslation(selectedLanguage, 'testimonial3Text')}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  ST
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'testimonial3Name')}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, 'testimonial3Title')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 dark:from-cyan-900 dark:via-blue-900 dark:to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 dark:opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {getTranslation(selectedLanguage, 'readyToCreate')}
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 dark:text-gray-200 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <button className="bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg transition duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                  {getTranslation(selectedLanguage, 'scheduleFreeConsultation')}
                </button>
              </Link>
              <Link to="/services">
                <button className="border-2 border-white hover:bg-white hover:text-cyan-600 dark:hover:bg-gray-800 dark:hover:text-white dark:hover:border-gray-800 px-10 py-4 rounded-lg font-semibold text-lg transition duration-300 w-full sm:w-auto">
                  {getTranslation(selectedLanguage, 'viewAllServices')}
                </button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-yellow-400 dark:text-yellow-500 mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-semibold mb-1">{getTranslation(selectedLanguage, 'emailUs')}</p>
                <p className="text-sm opacity-90 dark:text-gray-300">info@stackly.com</p>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 dark:text-yellow-500 mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="font-semibold mb-1">{getTranslation(selectedLanguage, 'callUs')}</p>
                <p className="text-sm opacity-90 dark:text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 dark:text-yellow-500 mb-2">
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="font-semibold mb-1">{getTranslation(selectedLanguage, 'visitUs')}</p>
                <p className="text-sm opacity-90 dark:text-gray-300">123 Stackly Street, Event City</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'ourServicesBottom')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {getTranslation(selectedLanguage, 'ourServicesBottomDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'eventPlanningCard')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {getTranslation(selectedLanguage, 'eventPlanningCardDesc')}
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'conferenceManagementCard')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {getTranslation(selectedLanguage, 'conferenceManagementCardDesc')}
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'weddingPlanningCard')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {getTranslation(selectedLanguage, 'weddingPlanningCardDesc')}
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'corporateEventsCard')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {getTranslation(selectedLanguage, 'corporateEventsCardDesc')}
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'exhibitionManagementCard')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {getTranslation(selectedLanguage, 'exhibitionManagementCardDesc')}
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'eventMarketingCard')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {getTranslation(selectedLanguage, 'eventMarketingCardDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'ourImpact')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {getTranslation(selectedLanguage, 'ourImpactDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">
                <AnimatedCounter end={500} suffix="+" duration={2500} color="text-cyan-500" />
              </div>
              <div className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'eventsManaged')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">
                <AnimatedCounter end={100} suffix="K+" duration={2500} color="text-blue-500" />
              </div>
              <div className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'happyAttendeesStats')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">
                <AnimatedCounter end={25} suffix="+" duration={2000} color="text-green-500" />
              </div>
              <div className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'yearsExperienceStats')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">
                <AnimatedCounter end={98} suffix="%" duration={2500} color="text-purple-500" />
              </div>
              <div className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'clientSatisfactionStats')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {getTranslation(selectedLanguage, 'readyToCreateBottom')}
          </h2>
          <p className="text-xl mb-8 opacity-90 dark:text-gray-200">
            {getTranslation(selectedLanguage, 'ctaDescriptionBottom')}
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300">
            {getTranslation(selectedLanguage, 'getStartedToday')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;