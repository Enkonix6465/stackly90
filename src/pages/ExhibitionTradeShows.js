import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';
import './home.css';

const AnimatedCounter = ({ end, duration = 2500, suffix = '', prefix = '', decimals = 0, color = 'text-white' }) => {
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
      const current = easeOutQuart * end;

      setCount(current);

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

  const formatNumber = (num) => {
    return num.toFixed(decimals);
  };

  return (
    <span ref={counterRef} className={color}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

const ExhibitionTradeShows = () => {
  const [activeTab, setActiveTab] = useState('booth');
  const { selectedLanguage } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Section 1: Hero with Animated Stats Banner */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-500 dark:from-orange-900 dark:via-amber-900 dark:to-yellow-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 dark:opacity-5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 dark:bg-yellow-600 opacity-10 dark:opacity-5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-block bg-white/20 dark:bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">
                {getTranslation(selectedLanguage, 'exhibitionSection1Badge')}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideInUp">
              {getTranslation(selectedLanguage, 'exhibitionSection1Title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 dark:opacity-90 animate-slideInUp" style={{animationDelay: '0.1s'}}>
              {getTranslation(selectedLanguage, 'exhibitionSection1Subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideInUp" style={{animationDelay: '0.2s'}}>
              <Link to="/contact" className="bg-white text-orange-600 dark:bg-gray-200 dark:text-orange-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-300 hover:shadow-2xl transform hover:scale-105 transition-all inline-block">
                {getTranslation(selectedLanguage, 'exhibitionSection1Button1')}
              </Link>
              <button className="bg-transparent border-2 border-white dark:border-gray-200 text-white dark:text-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 dark:hover:bg-gray-200 dark:hover:text-orange-700 transform hover:scale-105 transition-all">
                {getTranslation(selectedLanguage, 'exhibitionSection1Button2')}
              </button>
            </div>
          </div>

          {/* Floating Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slideInUp" style={{animationDelay: '0.3s'}}>
            <div className="glass backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 p-6 rounded-2xl text-center hover-lift">
              <div className="text-4xl mb-2">🎯</div>
              <div className="text-3xl font-bold mb-1">
                <AnimatedCounter end={1200} duration={2500} suffix="+" color="text-white" />
              </div>
              <div className="text-sm opacity-90 dark:opacity-80">
                {getTranslation(selectedLanguage, 'exhibitionSection1Stat1Label')}
              </div>
            </div>
            <div className="glass backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 p-6 rounded-2xl text-center hover-lift">
              <div className="text-4xl mb-2">🌍</div>
              <div className="text-3xl font-bold mb-1">
                <AnimatedCounter end={65} duration={2500} suffix="+" color="text-white" />
              </div>
              <div className="text-sm opacity-90 dark:opacity-80">
                {getTranslation(selectedLanguage, 'exhibitionSection1Stat2Label')}
              </div>
            </div>
            <div className="glass backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 p-6 rounded-2xl text-center hover-lift">
              <div className="text-4xl mb-2">👥</div>
              <div className="text-3xl font-bold mb-1">
                <AnimatedCounter end={5} duration={2500} suffix="M+" color="text-white" />
              </div>
              <div className="text-sm opacity-90 dark:opacity-80">
                {getTranslation(selectedLanguage, 'exhibitionSection1Stat3Label')}
              </div>
            </div>
            <div className="glass backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 p-6 rounded-2xl text-center hover-lift">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-3xl font-bold mb-1">
                <AnimatedCounter end={98} duration={2500} suffix="%" color="text-white" />
              </div>
              <div className="text-sm opacity-90 dark:opacity-80">
                {getTranslation(selectedLanguage, 'exhibitionSection1Stat4Label')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Exhibition Solutions with Interactive Tabs */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              {getTranslation(selectedLanguage, 'exhibitionSection2Label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'exhibitionSection2Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'exhibitionSection2Subtitle')}
            </p>
          </div>

          {/* Interactive Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'booth', labelKey: 'exhibitionSection2Tab1Label', icon: '🏗️' },
              { id: 'logistics', labelKey: 'exhibitionSection2Tab2Label', icon: '🚚' },
              { id: 'tech', labelKey: 'exhibitionSection2Tab3Label', icon: '💻' },
              { id: 'marketing', labelKey: 'exhibitionSection2Tab4Label', icon: '📢' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {getTranslation(selectedLanguage, tab.labelKey)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="animate-fadeIn">
            {activeTab === 'booth' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    titleKey: 'exhibitionSection2Booth1Title', 
                    descKey: 'exhibitionSection2Booth1Desc', 
                    featureKeys: ['exhibitionSection2Booth1Feature1', 'exhibitionSection2Booth1Feature2', 'exhibitionSection2Booth1Feature3']
                  },
                  { 
                    titleKey: 'exhibitionSection2Booth2Title', 
                    descKey: 'exhibitionSection2Booth2Desc', 
                    featureKeys: ['exhibitionSection2Booth2Feature1', 'exhibitionSection2Booth2Feature2', 'exhibitionSection2Booth2Feature3']
                  },
                  { 
                    titleKey: 'exhibitionSection2Booth3Title', 
                    descKey: 'exhibitionSection2Booth3Desc', 
                    featureKeys: ['exhibitionSection2Booth3Feature1', 'exhibitionSection2Booth3Feature2', 'exhibitionSection2Booth3Feature3']
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 p-8 rounded-2xl hover-lift border border-orange-100 dark:border-orange-800">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {getTranslation(selectedLanguage, item.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {getTranslation(selectedLanguage, item.descKey)}
                    </p>
                    <ul className="space-y-2">
                      {item.featureKeys.map((featureKey, i) => (
                        <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                          <span className="text-orange-600 mr-2">✓</span>
                          {getTranslation(selectedLanguage, featureKey)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'logistics' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    titleKey: 'exhibitionSection2Logistics1Title', 
                    descKey: 'exhibitionSection2Logistics1Desc', 
                    featureKeys: ['exhibitionSection2Logistics1Feature1', 'exhibitionSection2Logistics1Feature2', 'exhibitionSection2Logistics1Feature3']
                  },
                  { 
                    titleKey: 'exhibitionSection2Logistics2Title', 
                    descKey: 'exhibitionSection2Logistics2Desc', 
                    featureKeys: ['exhibitionSection2Logistics2Feature1', 'exhibitionSection2Logistics2Feature2', 'exhibitionSection2Logistics2Feature3']
                  },
                  { 
                    titleKey: 'exhibitionSection2Logistics3Title', 
                    descKey: 'exhibitionSection2Logistics3Desc', 
                    featureKeys: ['exhibitionSection2Logistics3Feature1', 'exhibitionSection2Logistics3Feature2', 'exhibitionSection2Logistics3Feature3']
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 p-8 rounded-2xl hover-lift border border-orange-100 dark:border-orange-800">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                      🚚
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {getTranslation(selectedLanguage, item.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {getTranslation(selectedLanguage, item.descKey)}
                    </p>
                    <ul className="space-y-2">
                      {item.featureKeys.map((featureKey, i) => (
                        <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                          <span className="text-orange-600 mr-2">✓</span>
                          {getTranslation(selectedLanguage, featureKey)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'tech' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    titleKey: 'exhibitionSection2Tech1Title', 
                    descKey: 'exhibitionSection2Tech1Desc', 
                    featureKeys: ['exhibitionSection2Tech1Feature1', 'exhibitionSection2Tech1Feature2', 'exhibitionSection2Tech1Feature3']
                  },
                  { 
                    titleKey: 'exhibitionSection2Tech2Title', 
                    descKey: 'exhibitionSection2Tech2Desc', 
                    featureKeys: ['exhibitionSection2Tech2Feature1', 'exhibitionSection2Tech2Feature2', 'exhibitionSection2Tech2Feature3']
                  },
                  { 
                    titleKey: 'exhibitionSection2Tech3Title', 
                    descKey: 'exhibitionSection2Tech3Desc', 
                    featureKeys: ['exhibitionSection2Tech3Feature1', 'exhibitionSection2Tech3Feature2', 'exhibitionSection2Tech3Feature3']
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 p-8 rounded-2xl hover-lift border border-orange-100 dark:border-orange-800">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                      💻
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {getTranslation(selectedLanguage, item.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {getTranslation(selectedLanguage, item.descKey)}
                    </p>
                    <ul className="space-y-2">
                      {item.featureKeys.map((featureKey, i) => (
                        <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                          <span className="text-orange-600 mr-2">✓</span>
                          {getTranslation(selectedLanguage, featureKey)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'marketing' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    titleKey: 'exhibitionSection2Marketing1Title', 
                    descKey: 'exhibitionSection2Marketing1Desc', 
                    featureKeys: ['exhibitionSection2Marketing1Feature1', 'exhibitionSection2Marketing1Feature2', 'exhibitionSection2Marketing1Feature3']
                  },
                  { 
                    titleKey: 'exhibitionSection2Marketing2Title', 
                    descKey: 'exhibitionSection2Marketing2Desc', 
                    featureKeys: ['exhibitionSection2Marketing2Feature1', 'exhibitionSection2Marketing2Feature2', 'exhibitionSection2Marketing2Feature3']
                  },
                  { 
                    titleKey: 'exhibitionSection2Marketing3Title', 
                    descKey: 'exhibitionSection2Marketing3Desc', 
                    featureKeys: ['exhibitionSection2Marketing3Feature1', 'exhibitionSection2Marketing3Feature2', 'exhibitionSection2Marketing3Feature3']
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 p-8 rounded-2xl hover-lift border border-orange-100 dark:border-orange-800">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">
                      📢
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {getTranslation(selectedLanguage, item.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {getTranslation(selectedLanguage, item.descKey)}
                    </p>
                    <ul className="space-y-2">
                      {item.featureKeys.map((featureKey, i) => (
                        <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                          <span className="text-orange-600 mr-2">✓</span>
                          {getTranslation(selectedLanguage, featureKey)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 3: Exhibition Types & Venues */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-orange-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              {getTranslation(selectedLanguage, 'exhibitionSection3Label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'exhibitionSection3Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'exhibitionSection3Subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                typeKey: 'exhibitionSection3Type1',
                icon: '🏢',
                venuesKey: 'exhibitionSection3Type1Venues',
                sizeKey: 'exhibitionSection3Type1Size',
                durationKey: 'exhibitionSection3Type1Duration',
                attendeesKey: 'exhibitionSection3Type1Attendees',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'
              },
              {
                typeKey: 'exhibitionSection3Type2',
                icon: '🛍️',
                venuesKey: 'exhibitionSection3Type2Venues',
                sizeKey: 'exhibitionSection3Type2Size',
                durationKey: 'exhibitionSection3Type2Duration',
                attendeesKey: 'exhibitionSection3Type2Attendees',
                image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop'
              },
              {
                typeKey: 'exhibitionSection3Type3',
                icon: '⚙️',
                venuesKey: 'exhibitionSection3Type3Venues',
                sizeKey: 'exhibitionSection3Type3Size',
                durationKey: 'exhibitionSection3Type3Duration',
                attendeesKey: 'exhibitionSection3Type3Attendees',
                image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop'
              },
              {
                typeKey: 'exhibitionSection3Type4',
                icon: '💡',
                venuesKey: 'exhibitionSection3Type4Venues',
                sizeKey: 'exhibitionSection3Type4Size',
                durationKey: 'exhibitionSection3Type4Duration',
                attendeesKey: 'exhibitionSection3Type4Attendees',
                image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=400&h=300&fit=crop'
              },
              {
                typeKey: 'exhibitionSection3Type5',
                icon: '🎨',
                venuesKey: 'exhibitionSection3Type5Venues',
                sizeKey: 'exhibitionSection3Type5Size',
                durationKey: 'exhibitionSection3Type5Duration',
                attendeesKey: 'exhibitionSection3Type5Attendees',
                image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&h=300&fit=crop'
              },
              {
                typeKey: 'exhibitionSection3Type6',
                icon: '🚗',
                venuesKey: 'exhibitionSection3Type6Venues',
                sizeKey: 'exhibitionSection3Type6Size',
                durationKey: 'exhibitionSection3Type6Duration',
                attendeesKey: 'exhibitionSection3Type6Attendees',
                image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop'
              }
            ].map((exhibition, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={exhibition.image} 
                    alt={getTranslation(selectedLanguage, exhibition.typeKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-4xl mb-2">{exhibition.icon}</div>
                    <h3 className="text-2xl font-bold text-white">
                      {getTranslation(selectedLanguage, exhibition.typeKey)}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {getTranslation(selectedLanguage, 'exhibitionSection3VenueTypeLabel')}
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, exhibition.venuesKey)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {getTranslation(selectedLanguage, 'exhibitionSection3BoothSizeLabel')}
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, exhibition.sizeKey)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {getTranslation(selectedLanguage, 'exhibitionSection3DurationLabel')}
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, exhibition.durationKey)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {getTranslation(selectedLanguage, 'exhibitionSection3AttendeesLabel')}
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, exhibition.attendeesKey)}
                      </p>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                    {getTranslation(selectedLanguage, 'exhibitionSection3LearnMoreButton')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Success Stories & Case Studies */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              {getTranslation(selectedLanguage, 'exhibitionSection4Label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'exhibitionSection4Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'exhibitionSection4Subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {[
              {
                companyKey: 'exhibitionSection4Story1Company',
                industryKey: 'exhibitionSection4Story1Industry',
                eventKey: 'exhibitionSection4Story1Event',
                boothKey: 'exhibitionSection4Story1Booth',
                results: {
                  leads: 2847,
                  engagement: 15000,
                  roi: 420,
                  meetings: 156
                },
                leadsLabelKey: 'exhibitionSection4Story1LeadsLabel',
                engagementLabelKey: 'exhibitionSection4Story1EngagementLabel',
                roiLabelKey: 'exhibitionSection4Story1RoiLabel',
                meetingsLabelKey: 'exhibitionSection4Story1MeetingsLabel',
                quoteKey: 'exhibitionSection4Story1Quote',
                personKey: 'exhibitionSection4Story1Person',
                roleKey: 'exhibitionSection4Story1Role',
                image: 'https://randomuser.me/api/portraits/women/44.jpg'
              },
              {
                companyKey: 'exhibitionSection4Story2Company',
                industryKey: 'exhibitionSection4Story2Industry',
                eventKey: 'exhibitionSection4Story2Event',
                boothKey: 'exhibitionSection4Story2Booth',
                results: {
                  leads: 4123,
                  engagement: 25000,
                  roi: 560,
                  meetings: 243
                },
                leadsLabelKey: 'exhibitionSection4Story2LeadsLabel',
                engagementLabelKey: 'exhibitionSection4Story2EngagementLabel',
                roiLabelKey: 'exhibitionSection4Story2RoiLabel',
                meetingsLabelKey: 'exhibitionSection4Story2MeetingsLabel',
                quoteKey: 'exhibitionSection4Story2Quote',
                personKey: 'exhibitionSection4Story2Person',
                roleKey: 'exhibitionSection4Story2Role',
                image: 'https://randomuser.me/api/portraits/men/32.jpg'
              }
            ].map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 rounded-2xl p-8 hover-lift border border-orange-100 dark:border-orange-800">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {getTranslation(selectedLanguage, story.companyKey)}
                    </h3>
                    <p className="text-orange-600 font-semibold">
                      {getTranslation(selectedLanguage, story.industryKey)}
                    </p>
                  </div>
                  <div className="text-5xl">🏆</div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    📍 {getTranslation(selectedLanguage, story.eventKey)}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    🏗️ {getTranslation(selectedLanguage, story.boothKey)}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      <AnimatedCounter end={story.results.leads} duration={6700} suffix="" decimals={0} color="text-orange-600" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {getTranslation(selectedLanguage, story.leadsLabelKey)}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      <AnimatedCounter end={story.results.engagement} duration={6700} suffix="+" decimals={0} color="text-orange-600" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {getTranslation(selectedLanguage, story.engagementLabelKey)}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      <AnimatedCounter end={story.results.roi} duration={6700} suffix="%" decimals={0} color="text-orange-600" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {getTranslation(selectedLanguage, story.roiLabelKey)}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      <AnimatedCounter end={story.results.meetings} duration={6700} suffix="" decimals={0} color="text-orange-600" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {getTranslation(selectedLanguage, story.meetingsLabelKey)}
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-orange-600 pl-4 mb-6">
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                    "{getTranslation(selectedLanguage, story.quoteKey)}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={story.image} 
                      alt={getTranslation(selectedLanguage, story.personKey)}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, story.personKey)}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {getTranslation(selectedLanguage, story.roleKey)}
                      </p>
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>

          {/* Key Metrics */}
          <div className="bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-800 dark:to-amber-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">
              {getTranslation(selectedLanguage, 'exhibitionSection4MetricsTitle')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metricKey: 'exhibitionSection4Metric1', valueKey: 'exhibitionSection4Metric1Value', icon: '💰' },
                { metricKey: 'exhibitionSection4Metric2', valueKey: 'exhibitionSection4Metric2Value', icon: '📈' },
                { metricKey: 'exhibitionSection4Metric3', valueKey: 'exhibitionSection4Metric3Value', icon: '⭐' },
                { metricKey: 'exhibitionSection4Metric4', valueKey: 'exhibitionSection4Metric4Value', icon: '🔄' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-4xl font-bold mb-2">
                    {getTranslation(selectedLanguage, item.valueKey)}
                  </div>
                  <div className="text-sm opacity-90 dark:opacity-80">
                    {getTranslation(selectedLanguage, item.metricKey)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Process & Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-orange-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              {getTranslation(selectedLanguage, 'exhibitionSection5Label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'exhibitionSection5Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'exhibitionSection5Subtitle')}
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-600 to-amber-500"></div>

            {/* Timeline Steps */}
            <div className="space-y-12">
              {[
                {
                  phaseKey: 'exhibitionSection5Step1Phase',
                  durationKey: 'exhibitionSection5Step1Duration',
                  icon: '🎯',
                  taskKeys: ['exhibitionSection5Step1Task1', 'exhibitionSection5Step1Task2', 'exhibitionSection5Step1Task3', 'exhibitionSection5Step1Task4'],
                  deliverableKeys: ['exhibitionSection5Step1Deliverable1', 'exhibitionSection5Step1Deliverable2', 'exhibitionSection5Step1Deliverable3', 'exhibitionSection5Step1Deliverable4']
                },
                {
                  phaseKey: 'exhibitionSection5Step2Phase',
                  durationKey: 'exhibitionSection5Step2Duration',
                  icon: '🎨',
                  taskKeys: ['exhibitionSection5Step2Task1', 'exhibitionSection5Step2Task2', 'exhibitionSection5Step2Task3', 'exhibitionSection5Step2Task4'],
                  deliverableKeys: ['exhibitionSection5Step2Deliverable1', 'exhibitionSection5Step2Deliverable2', 'exhibitionSection5Step2Deliverable3', 'exhibitionSection5Step2Deliverable4']
                },
                {
                  phaseKey: 'exhibitionSection5Step3Phase',
                  durationKey: 'exhibitionSection5Step3Duration',
                  icon: '🏗️',
                  taskKeys: ['exhibitionSection5Step3Task1', 'exhibitionSection5Step3Task2', 'exhibitionSection5Step3Task3', 'exhibitionSection5Step3Task4'],
                  deliverableKeys: ['exhibitionSection5Step3Deliverable1', 'exhibitionSection5Step3Deliverable2', 'exhibitionSection5Step3Deliverable3', 'exhibitionSection5Step3Deliverable4']
                },
                {
                  phaseKey: 'exhibitionSection5Step4Phase',
                  durationKey: 'exhibitionSection5Step4Duration',
                  icon: '🚚',
                  taskKeys: ['exhibitionSection5Step4Task1', 'exhibitionSection5Step4Task2', 'exhibitionSection5Step4Task3', 'exhibitionSection5Step4Task4'],
                  deliverableKeys: ['exhibitionSection5Step4Deliverable1', 'exhibitionSection5Step4Deliverable2', 'exhibitionSection5Step4Deliverable3', 'exhibitionSection5Step4Deliverable4']
                },
                {
                  phaseKey: 'exhibitionSection5Step5Phase',
                  durationKey: 'exhibitionSection5Step5Duration',
                  icon: '🔧',
                  taskKeys: ['exhibitionSection5Step5Task1', 'exhibitionSection5Step5Task2', 'exhibitionSection5Step5Task3', 'exhibitionSection5Step5Task4'],
                  deliverableKeys: ['exhibitionSection5Step5Deliverable1', 'exhibitionSection5Step5Deliverable2', 'exhibitionSection5Step5Deliverable3', 'exhibitionSection5Step5Deliverable4']
                },
                {
                  phaseKey: 'exhibitionSection5Step6Phase',
                  durationKey: 'exhibitionSection5Step6Duration',
                  icon: '🎉',
                  taskKeys: ['exhibitionSection5Step6Task1', 'exhibitionSection5Step6Task2', 'exhibitionSection5Step6Task3', 'exhibitionSection5Step6Task4'],
                  deliverableKeys: ['exhibitionSection5Step6Deliverable1', 'exhibitionSection5Step6Deliverable2', 'exhibitionSection5Step6Deliverable3', 'exhibitionSection5Step6Deliverable4']
                }
              ].map((step, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift border border-orange-100 dark:border-orange-800">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{step.icon}</div>
                        <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {getTranslation(selectedLanguage, step.durationKey)}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {index + 1}. {getTranslation(selectedLanguage, step.phaseKey)}
                      </h3>
                      <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          {getTranslation(selectedLanguage, 'exhibitionSection5TasksLabel')}
                        </p>
                        <ul className="space-y-1">
                          {step.taskKeys.map((taskKey, i) => (
                            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                              <span className="text-orange-600 mr-2">•</span>
                              {getTranslation(selectedLanguage, taskKey)}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          {getTranslation(selectedLanguage, 'exhibitionSection5DeliverablesLabel')}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverableKeys.map((deliverableKey, i) => (
                            <span key={i} className="bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 px-3 py-1 rounded-full text-xs">
                              {getTranslation(selectedLanguage, deliverableKey)}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center text-white font-bold text-xl z-10">
                    {index + 1}
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Guarantee */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'exhibitionSection5GuaranteeTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '⏰', titleKey: 'exhibitionSection5Guarantee1Title', descKey: 'exhibitionSection5Guarantee1Desc' },
                { icon: '💎', titleKey: 'exhibitionSection5Guarantee2Title', descKey: 'exhibitionSection5Guarantee2Desc' },
                { icon: '🤝', titleKey: 'exhibitionSection5Guarantee3Title', descKey: 'exhibitionSection5Guarantee3Desc' }
              ].map((guarantee, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-3">{guarantee.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {getTranslation(selectedLanguage, guarantee.titleKey)}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {getTranslation(selectedLanguage, guarantee.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Global Presence & CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Global Presence */}
          <div className="mb-20">
            <div className="text-center mb-12 animate-fadeIn">
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
                {getTranslation(selectedLanguage, 'exhibitionSection6Label')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                {getTranslation(selectedLanguage, 'exhibitionSection6Title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {getTranslation(selectedLanguage, 'exhibitionSection6Subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  regionKey: 'exhibitionSection6Region1',
                  cityKeys: ['exhibitionSection6Region1City1', 'exhibitionSection6Region1City2', 'exhibitionSection6Region1City3', 'exhibitionSection6Region1City4', 'exhibitionSection6Region1City5'],
                  exhibitionsKey: 'exhibitionSection6Region1Exhibitions',
                  icon: '🌎'
                },
                {
                  regionKey: 'exhibitionSection6Region2',
                  cityKeys: ['exhibitionSection6Region2City1', 'exhibitionSection6Region2City2', 'exhibitionSection6Region2City3', 'exhibitionSection6Region2City4', 'exhibitionSection6Region2City5'],
                  exhibitionsKey: 'exhibitionSection6Region2Exhibitions',
                  icon: '🌍'
                },
                {
                  regionKey: 'exhibitionSection6Region3',
                  cityKeys: ['exhibitionSection6Region3City1', 'exhibitionSection6Region3City2', 'exhibitionSection6Region3City3', 'exhibitionSection6Region3City4', 'exhibitionSection6Region3City5'],
                  exhibitionsKey: 'exhibitionSection6Region3Exhibitions',
                  icon: '🌏'
                }
              ].map((region, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 rounded-2xl p-8 hover-lift border border-orange-100 dark:border-orange-800">
                  <div className="text-6xl mb-4 text-center">{region.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-3">
                    {getTranslation(selectedLanguage, region.regionKey)}
                  </h3>
                  <p className="text-orange-600 font-semibold text-center mb-4">
                    {getTranslation(selectedLanguage, region.exhibitionsKey)}
                  </p>
                  <div className="space-y-2">
                    {region.cityKeys.map((cityKey, i) => (
                      <div key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="text-orange-600 mr-2">📍</span>
                        {getTranslation(selectedLanguage, cityKey)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Industry Recognition */}
            <div className="bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-800 dark:to-amber-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold text-center mb-8">
                {getTranslation(selectedLanguage, 'exhibitionSection6RecognitionTitle')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { awardKey: 'exhibitionSection6Award1', yearKey: 'exhibitionSection6Award1Year', orgKey: 'exhibitionSection6Award1Org' },
                  { awardKey: 'exhibitionSection6Award2', yearKey: 'exhibitionSection6Award2Year', orgKey: 'exhibitionSection6Award2Org' },
                  { awardKey: 'exhibitionSection6Award3', yearKey: 'exhibitionSection6Award3Year', orgKey: 'exhibitionSection6Award3Org' },
                  { awardKey: 'exhibitionSection6Award4', yearKey: 'exhibitionSection6Award4Year', orgKey: 'exhibitionSection6Award4Org' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl mb-2">🏆</div>
                    <p className="font-bold text-sm mb-1">
                      {getTranslation(selectedLanguage, item.awardKey)}
                    </p>
                    <p className="text-xs opacity-90 dark:opacity-80">
                      {getTranslation(selectedLanguage, item.yearKey)} - {getTranslation(selectedLanguage, item.orgKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-orange-900 dark:from-gray-800 dark:to-orange-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-12 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {getTranslation(selectedLanguage, 'exhibitionSection6CTATitle')}
                </h2>
                <p className="text-xl mb-8 opacity-90 dark:opacity-80">
                  {getTranslation(selectedLanguage, 'exhibitionSection6CTASubtitle')}
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'exhibitionSection6CTABenefit1',
                    'exhibitionSection6CTABenefit2',
                    'exhibitionSection6CTABenefit3',
                    'exhibitionSection6CTABenefit4'
                  ].map((benefitKey, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-orange-500 dark:bg-orange-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <span className="text-lg">{getTranslation(selectedLanguage, benefitKey)}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="bg-orange-500 dark:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 dark:hover:bg-orange-700 transform hover:scale-105 transition-all shadow-xl text-center">
                    {getTranslation(selectedLanguage, 'exhibitionSection6CTAButton1')}
                  </Link>
                  <button className="bg-transparent border-2 border-white dark:border-gray-200 text-white dark:text-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 dark:hover:bg-gray-200 dark:hover:text-orange-700 transform hover:scale-105 transition-all">
                    {getTranslation(selectedLanguage, 'exhibitionSection6CTAButton2')}
                  </button>
                </div>
              </div>

              {/* Right Side - Contact Info */}
              <div className="bg-white dark:bg-gray-800 p-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {getTranslation(selectedLanguage, 'exhibitionSection6ContactTitle')}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, 'exhibitionSection6ContactPhone')}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {getTranslation(selectedLanguage, 'exhibitionSection6ContactPhoneNumber')}
                      </p>
                      <p className="text-sm text-orange-600">
                        {getTranslation(selectedLanguage, 'exhibitionSection6ContactPhoneNote')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, 'exhibitionSection6ContactEmail')}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {getTranslation(selectedLanguage, 'exhibitionSection6ContactEmailAddress')}
                      </p>
                      <p className="text-sm text-orange-600">
                        {getTranslation(selectedLanguage, 'exhibitionSection6ContactEmailNote')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, 'exhibitionSection6ContactOffices')}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {getTranslation(selectedLanguage, 'exhibitionSection6ContactOfficesCount')}
                      </p>
                      <p className="text-sm text-orange-600">
                        {getTranslation(selectedLanguage, 'exhibitionSection6ContactOfficesNote')}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <p className="font-semibold text-gray-900 dark:text-white mb-3">
                      {getTranslation(selectedLanguage, 'exhibitionSection6ContactSocialTitle')}
                    </p>
                    <div className="flex gap-3">
                      {['LinkedIn', 'Instagram', 'Twitter', 'YouTube'].map((social, index) => (
                        <button key={index} className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center text-gray-700 dark:text-gray-300">
                          {social[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExhibitionTradeShows;
