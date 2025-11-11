import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';
import './home.css';

const Home2 = () => {
  const { selectedLanguage } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Section 1: Hero Section - Event Discovery */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 text-white py-24 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.9, zIndex: 1 }}
          onError={(e) => {
            console.error('Video failed to load');
            e.target.style.display = 'none';
          }}
        >
          <source src="/videos/Home2-bg.mp4" type="video/mp4" />
        </video>  
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" style={{ zIndex: 2 }}></div>
        <div className="absolute inset-0" style={{ zIndex: 3 }}>
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideInDown">
              {getTranslation(selectedLanguage, 'home2HeroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 dark:text-gray-200 max-w-3xl mx-auto animate-slideInUp">
              {getTranslation(selectedLanguage, 'home2HeroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scaleIn">
              <Link to="/contact" className="bg-white text-purple-600 dark:bg-gray-200 dark:text-purple-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all shadow-lg">
                {getTranslation(selectedLanguage, 'browseEvents')}
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 dark:hover:bg-gray-800 dark:hover:text-white dark:hover:border-gray-800 transform hover:scale-105 transition-all">
                {getTranslation(selectedLanguage, 'createEvent')}
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fadeIn">
              <div className="hover-lift">
                <div className="text-4xl md:text-5xl font-bold gradient-text">{getTranslation(selectedLanguage, 'home2EventsHosted')}</div>
                <div className="text-gray-200 dark:text-gray-300 mt-2">{getTranslation(selectedLanguage, 'eventsHosted')}</div>
              </div>
              <div className="hover-lift">
                <div className="text-4xl md:text-5xl font-bold gradient-text">{getTranslation(selectedLanguage, 'home2HappyAttendees')}</div>
                <div className="text-gray-200 dark:text-gray-300 mt-2">{getTranslation(selectedLanguage, 'happyAttendees')}</div>
              </div>
              <div className="hover-lift">
                <div className="text-4xl md:text-5xl font-bold gradient-text">{getTranslation(selectedLanguage, 'home2Countries')}</div>
                <div className="text-gray-200 dark:text-gray-300 mt-2">{getTranslation(selectedLanguage, 'countries')}</div>
              </div>
              <div className="hover-lift">
                <div className="text-4xl md:text-5xl font-bold gradient-text">{getTranslation(selectedLanguage, 'home2SatisfactionRate')}</div>
                <div className="text-gray-200 dark:text-gray-300 mt-2">{getTranslation(selectedLanguage, 'satisfactionRate')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Upcoming Events */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'upcomingEvents')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getTranslation(selectedLanguage, 'upcomingEventsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover-lift">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-pink-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop" 
                  alt="Tech Summit" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 mb-3">
                  <span className="bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded-full">{getTranslation(selectedLanguage, 'technology')}</span>
                  <span>{getTranslation(selectedLanguage, 'techSummitDate')}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {getTranslation(selectedLanguage, 'techSummit')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {getTranslation(selectedLanguage, 'techSummitDesc')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{getTranslation(selectedLanguage, 'techSummitLocation')}</span>
                  <Link to="/contact" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                    {getTranslation(selectedLanguage, 'learnMore')} →
                  </Link>
                </div>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover-lift">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=400&fit=crop" 
                  alt="Startup Expo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 mb-3">
                  <span className="bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">{getTranslation(selectedLanguage, 'business')}</span>
                  <span>{getTranslation(selectedLanguage, 'startupExpoDate')}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {getTranslation(selectedLanguage, 'startupExpo')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {getTranslation(selectedLanguage, 'startupExpoDesc')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{getTranslation(selectedLanguage, 'startupExpoLocation')}</span>
                  <Link to="/contact" className="text-green-600 dark:text-green-400 font-semibold hover:underline">
                    {getTranslation(selectedLanguage, 'learnMore')} →
                  </Link>
                </div>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover-lift">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-red-600 relative">
                <img 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop" 
                  alt="Digital Marketing Con" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-yellow-600 dark:text-yellow-400 mb-3">
                  <span className="bg-yellow-100 dark:bg-yellow-900 px-3 py-1 rounded-full">{getTranslation(selectedLanguage, 'marketing')}</span>
                  <span>{getTranslation(selectedLanguage, 'digitalMarketingConDate')}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {getTranslation(selectedLanguage, 'digitalMarketingCon')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {getTranslation(selectedLanguage, 'digitalMarketingConDesc')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{getTranslation(selectedLanguage, 'digitalMarketingConLocation')}</span>
                  <Link to="/contact" className="text-yellow-600 dark:text-yellow-400 font-semibold hover:underline">
                    {getTranslation(selectedLanguage, 'learnMore')} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Event Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'eventCategories')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getTranslation(selectedLanguage, 'eventCategoriesDesc')}
            </p>
          </div>

          <div className="space-y-16">
            {/* Business - Left Aligned */}
            <div className="flex flex-col md:flex-row items-center gap-8 animate-fadeIn">
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop" 
                    alt="Business Events" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'business')}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {getTranslation(selectedLanguage, 'businessDesc')}
                </p>
              </div>
            </div>

            {/* Technology - Right Aligned */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 animate-fadeIn">
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop" 
                    alt="Technology Events" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:text-right">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'technology')}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {getTranslation(selectedLanguage, 'technologyDesc')}
                </p>
              </div>
            </div>

            {/* Design - Left Aligned */}
            <div className="flex flex-col md:flex-row items-center gap-8 animate-fadeIn">
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
                  <img 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop" 
                    alt="Design Events" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'design')}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {getTranslation(selectedLanguage, 'designDesc')}
                </p>
              </div>
            </div>

            {/* Marketing - Right Aligned */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 animate-fadeIn">
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                    alt="Marketing Events" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:text-right">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'marketing')}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {getTranslation(selectedLanguage, 'marketingDesc')}
                </p>
              </div>
            </div>

            {/* Healthcare - Left Aligned */}
            <div className="flex flex-col md:flex-row items-center gap-8 animate-fadeIn">
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" 
                    alt="Healthcare Events" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'healthcare')}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {getTranslation(selectedLanguage, 'healthcareDesc')}
                </p>
              </div>
            </div>

            {/* Education - Right Aligned */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 animate-fadeIn">
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
                  <img 
                    src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&h=600&fit=crop" 
                    alt="Education Events" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 md:text-right">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'education')}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {getTranslation(selectedLanguage, 'educationDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Features & Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'whyAttendEvents')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getTranslation(selectedLanguage, 'whyAttendEventsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-lift">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{getTranslation(selectedLanguage, 'networking')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {getTranslation(selectedLanguage, 'networkingDesc')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-lift">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{getTranslation(selectedLanguage, 'learnGrow')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {getTranslation(selectedLanguage, 'learnGrowDesc')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-lift">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{getTranslation(selectedLanguage, 'amazingVenues')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {getTranslation(selectedLanguage, 'amazingVenuesDesc')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-lift">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{getTranslation(selectedLanguage, 'exclusiveAccess')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {getTranslation(selectedLanguage, 'exclusiveAccessDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials & Reviews */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'whatAttendeesSay')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getTranslation(selectedLanguage, 'attendeeExperiences')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl hover-lift">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                {getTranslation(selectedLanguage, 'testimonial1')}
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'testimonial1Name')}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, 'testimonial1Role')}</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl hover-lift">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                {getTranslation(selectedLanguage, 'testimonial2')}
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Michael Chen" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'testimonial2Name')}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, 'testimonial2Role')}</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl hover-lift">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                {getTranslation(selectedLanguage, 'testimonial3')}
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="Emily Rodriguez" 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'testimonial3Name')}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, 'testimonial3Role')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Newsletter & CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 dark:opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            {getTranslation(selectedLanguage, 'stayUpdated')}
          </h2>
          <p className="text-xl mb-8 text-gray-100 dark:text-gray-200 animate-fadeIn">
            {getTranslation(selectedLanguage, 'newsletterDesc')}
          </p>

          <div className="max-w-md mx-auto mb-12 animate-scaleIn">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={getTranslation(selectedLanguage, 'emailPlaceholder')}
                className="flex-1 px-6 py-4 rounded-full text-gray-900 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/50 dark:focus:ring-gray-500"
              />
              <button className="bg-white text-purple-600 dark:bg-gray-200 dark:text-purple-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all shadow-lg">
                {getTranslation(selectedLanguage, 'subscribe')}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
            <div className="hover-lift">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">{getTranslation(selectedLanguage, 'weeklyUpdates')}</h3>
              <p className="text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'weeklyUpdatesDesc')}</p>
            </div>
            <div className="hover-lift">
              <div className="text-5xl mb-4">🎟️</div>
              <h3 className="text-xl font-bold mb-2">{getTranslation(selectedLanguage, 'earlyBirdOffers')}</h3>
              <p className="text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'earlyBirdOffersDesc')}</p>
            </div>
            <div className="hover-lift">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-2">{getTranslation(selectedLanguage, 'specialPerks')}</h3>
              <p className="text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'specialPerksDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;
