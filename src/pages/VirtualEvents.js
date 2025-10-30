import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';

const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '', decimals = 0, color = 'text-gray-900 dark:text-white' }) => {
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
      const currentCount = easeOutQuart * end;

      setCount(decimals > 0 ? currentCount.toFixed(decimals) : Math.floor(currentCount));

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
  }, [isVisible, end, duration, decimals]);

  return (
    <div ref={counterRef} className={`text-3xl font-bold mb-1 ${color}`}>
      {prefix}{count}{suffix}
    </div>
  );
};

const VirtualEvents = () => {
  const [activePlatform, setActivePlatform] = useState('webinar');
  const { selectedLanguage } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Section 1: Hero with Animated Tech Elements */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-900 dark:via-purple-900 dark:to-fuchsia-950 text-white overflow-hidden">
        {/* Animated Tech Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 dark:bg-blue-600 opacity-20 dark:opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-400 dark:bg-pink-600 opacity-20 dark:opacity-10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 dark:bg-purple-600 opacity-10 dark:opacity-5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-flex items-center bg-white/20 dark:bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-sm font-semibold">🌐 {getTranslation(selectedLanguage, 'virtualSection1Badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideInUp">
              {getTranslation(selectedLanguage, 'virtualSection1Title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-95 dark:opacity-90 animate-slideInUp" style={{animationDelay: '0.1s'}}>
              {getTranslation(selectedLanguage, 'virtualSection1Subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideInUp" style={{animationDelay: '0.2s'}}>
              <Link to="/contact" className="bg-white text-purple-600 dark:bg-gray-200 dark:text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-300 hover:shadow-2xl transform hover:scale-105 transition-all inline-block">
                {getTranslation(selectedLanguage, 'virtualSection1Button1')}
              </Link>
              <button className="bg-transparent border-2 border-white dark:border-gray-200 text-white dark:text-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-white dark:hover:bg-gray-200 hover:text-purple-600 dark:hover:text-purple-700 transform hover:scale-105 transition-all">
                {getTranslation(selectedLanguage, 'virtualSection1Button2')}
              </button>
            </div>
          </div>

          {/* Real-time Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slideInUp" style={{animationDelay: '0.3s'}}>
            {[
              { icon: '🌍', end: 195, suffix: '+', labelKey: 'virtualSection1Stat1Label', sublabelKey: 'virtualSection1Stat1Sublabel' },
              { icon: '👥', end: 10, suffix: 'M+', labelKey: 'virtualSection1Stat2Label', sublabelKey: 'virtualSection1Stat2Sublabel' },
              { icon: '🎯', end: 99.9, decimals: 1, suffix: '%', labelKey: 'virtualSection1Stat3Label', sublabelKey: 'virtualSection1Stat3Sublabel' },
              { icon: '⚡', prefix: '<', end: 100, suffix: 'ms', labelKey: 'virtualSection1Stat4Label', sublabelKey: 'virtualSection1Stat4Sublabel' }
            ].map((stat, index) => (
              <div key={index} className="glass backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 p-6 rounded-2xl hover-lift">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <AnimatedCounter 
                  end={stat.end} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix || ''}
                  decimals={stat.decimals || 0}
                  duration={2500} 
                  color="text-white font-bold" 
                />
                <div className="text-sm opacity-90 dark:opacity-80">{getTranslation(selectedLanguage, stat.labelKey)}</div>
                <div className="text-xs opacity-75 dark:opacity-70 mt-1">{getTranslation(selectedLanguage, stat.sublabelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Virtual Event Platforms & Solutions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
              {getTranslation(selectedLanguage, 'virtualSection2Badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'virtualSection2Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'virtualSection2Subtitle')}
            </p>
          </div>

          {/* Platform Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'webinar', labelKey: 'virtualSection2Tab1Label', icon: '🎓', attendeesKey: 'virtualSection2Tab1Attendees' },
              { id: 'conference', labelKey: 'virtualSection2Tab2Label', icon: '🎤', attendeesKey: 'virtualSection2Tab2Attendees' },
              { id: 'hybrid', labelKey: 'virtualSection2Tab3Label', icon: '🌐', attendeesKey: 'virtualSection2Tab3Attendees' },
              { id: 'expo', labelKey: 'virtualSection2Tab4Label', icon: '🏢', attendeesKey: 'virtualSection2Tab4Attendees' }
            ].map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActivePlatform(platform.id)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  activePlatform === platform.id
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-2xl mr-2">{platform.icon}</span>
                <span className="block text-sm">{getTranslation(selectedLanguage, platform.labelKey)}</span>
                <span className="block text-xs opacity-75">{getTranslation(selectedLanguage, platform.attendeesKey)}</span>
              </button>
            ))}
          </div>

          {/* Dynamic Platform Content */}
          <div className="animate-fadeIn">
            {activePlatform === 'webinar' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {getTranslation(selectedLanguage, 'virtualSection2WebinarTitle')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-8">
                    {getTranslation(selectedLanguage, 'virtualSection2WebinarDesc')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { titleKey: 'virtualSection2WebinarFeature1Title', descKey: 'virtualSection2WebinarFeature1Desc', icon: '🎥' },
                      { titleKey: 'virtualSection2WebinarFeature2Title', descKey: 'virtualSection2WebinarFeature2Desc', icon: '💬' },
                      { titleKey: 'virtualSection2WebinarFeature3Title', descKey: 'virtualSection2WebinarFeature3Desc', icon: '📺' },
                      { titleKey: 'virtualSection2WebinarFeature4Title', descKey: 'virtualSection2WebinarFeature4Desc', icon: '⏺️' },
                      { titleKey: 'virtualSection2WebinarFeature5Title', descKey: 'virtualSection2WebinarFeature5Desc', icon: '📊' },
                      { titleKey: 'virtualSection2WebinarFeature6Title', descKey: 'virtualSection2WebinarFeature6Desc', icon: '🔗' }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 p-4 rounded-xl">
                        <span className="text-3xl mr-3">{feature.icon}</span>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                            {getTranslation(selectedLanguage, feature.titleKey)}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {getTranslation(selectedLanguage, feature.descKey)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-200 dark:border-purple-800">
                    <img 
                      src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop"
                      alt="Webinar platform"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="glass backdrop-blur-md bg-white/20 rounded-xl p-4">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                            <span className="font-semibold">
                              {getTranslation(selectedLanguage, 'virtualSection2WebinarLiveLabel')} • 2,847 {getTranslation(selectedLanguage, 'virtualSection2WebinarAttendees')}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">🎯 {getTranslation(selectedLanguage, 'virtualSection2WebinarEngagement')}: 94%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePlatform === 'conference' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-200 dark:border-purple-800">
                    <img 
                      src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop"
                      alt="Virtual conference"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {getTranslation(selectedLanguage, 'virtualSection2ConferenceTitle')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-8">
                    {getTranslation(selectedLanguage, 'virtualSection2ConferenceDesc')}
                  </p>
                  <div className="space-y-4">
                    {[
                      { titleKey: 'virtualSection2ConferenceFeature1Title', descKey: 'virtualSection2ConferenceFeature1Desc', icon: '🎭' },
                      { titleKey: 'virtualSection2ConferenceFeature2Title', descKey: 'virtualSection2ConferenceFeature2Desc', icon: '🏛️' },
                      { titleKey: 'virtualSection2ConferenceFeature3Title', descKey: 'virtualSection2ConferenceFeature3Desc', icon: '🤝' },
                      { titleKey: 'virtualSection2ConferenceFeature4Title', descKey: 'virtualSection2ConferenceFeature4Desc', icon: '🏪' },
                      { titleKey: 'virtualSection2ConferenceFeature5Title', descKey: 'virtualSection2ConferenceFeature5Desc', icon: '🌐' },
                      { titleKey: 'virtualSection2ConferenceFeature6Title', descKey: 'virtualSection2ConferenceFeature6Desc', icon: '📱' }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover-lift">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl mr-4">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {getTranslation(selectedLanguage, feature.titleKey)}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {getTranslation(selectedLanguage, feature.descKey)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activePlatform === 'hybrid' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {getTranslation(selectedLanguage, 'virtualSection2HybridTitle')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-8">
                    {getTranslation(selectedLanguage, 'virtualSection2HybridDesc')}
                  </p>
                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 rounded-2xl p-8 mb-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-xl">
                      {getTranslation(selectedLanguage, 'virtualSection2HybridFeaturesTitle')}
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'virtualSection2HybridFeature1',
                        'virtualSection2HybridFeature2',
                        'virtualSection2HybridFeature3',
                        'virtualSection2HybridFeature4',
                        'virtualSection2HybridFeature5',
                        'virtualSection2HybridFeature6'
                      ].map((itemKey, index) => (
                        <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                          <span className="text-purple-600 text-xl mr-3">✓</span>
                          <span>{getTranslation(selectedLanguage, itemKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                      <div className="text-3xl mb-2">🏢</div>
                      <div className="text-2xl font-bold text-purple-600">
                        {getTranslation(selectedLanguage, 'virtualSection2HybridInPersonLabel')}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {getTranslation(selectedLanguage, 'virtualSection2HybridInPersonDesc')}
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                      <div className="text-3xl mb-2">💻</div>
                      <div className="text-2xl font-bold text-purple-600">
                        {getTranslation(selectedLanguage, 'virtualSection2HybridVirtualLabel')}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {getTranslation(selectedLanguage, 'virtualSection2HybridVirtualDesc')}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                    alt="Hybrid event"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            )}

            {activePlatform === 'expo' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop"
                    alt="Virtual expo"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {getTranslation(selectedLanguage, 'virtualSection2ExpoTitle')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-8">
                    {getTranslation(selectedLanguage, 'virtualSection2ExpoDesc')}
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { titleKey: 'virtualSection2ExpoFeature1Title', descKey: 'virtualSection2ExpoFeature1Desc', metricKey: 'virtualSection2ExpoFeature1Metric', icon: '🏛️' },
                      { titleKey: 'virtualSection2ExpoFeature2Title', descKey: 'virtualSection2ExpoFeature2Desc', metricKey: 'virtualSection2ExpoFeature2Metric', icon: '🎪' },
                      { titleKey: 'virtualSection2ExpoFeature3Title', descKey: 'virtualSection2ExpoFeature3Desc', metricKey: 'virtualSection2ExpoFeature3Metric', icon: '🤖' },
                      { titleKey: 'virtualSection2ExpoFeature4Title', descKey: 'virtualSection2ExpoFeature4Desc', metricKey: 'virtualSection2ExpoFeature4Metric', icon: '🎯' }
                    ].map((feature, index) => (
                      <div key={index} className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 p-6 rounded-xl hover-lift">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start flex-1">
                            <span className="text-4xl mr-4">{feature.icon}</span>
                            <div>
                              <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                                {getTranslation(selectedLanguage, feature.titleKey)}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {getTranslation(selectedLanguage, feature.descKey)}
                              </p>
                              <span className="text-xs font-semibold text-purple-600">
                                {getTranslation(selectedLanguage, feature.metricKey)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 3: Technology & Features Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-violet-50 dark:from-gray-900 dark:to-violet-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
              {getTranslation(selectedLanguage, 'virtualSection3Badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'virtualSection3Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'virtualSection3Subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                categoryKey: 'virtualSection3Category1',
                icon: '🎬',
                featureKeys: [
                  'virtualSection3Category1Feature1',
                  'virtualSection3Category1Feature2',
                  'virtualSection3Category1Feature3',
                  'virtualSection3Category1Feature4',
                  'virtualSection3Category1Feature5'
                ],
                color: 'from-violet-500 to-purple-500'
              },
              {
                categoryKey: 'virtualSection3Category2',
                icon: '🎯',
                featureKeys: [
                  'virtualSection3Category2Feature1',
                  'virtualSection3Category2Feature2',
                  'virtualSection3Category2Feature3',
                  'virtualSection3Category2Feature4',
                  'virtualSection3Category2Feature5'
                ],
                color: 'from-purple-500 to-fuchsia-500'
              },
              {
                categoryKey: 'virtualSection3Category3',
                icon: '🤝',
                featureKeys: [
                  'virtualSection3Category3Feature1',
                  'virtualSection3Category3Feature2',
                  'virtualSection3Category3Feature3',
                  'virtualSection3Category3Feature4',
                  'virtualSection3Category3Feature5'
                ],
                color: 'from-fuchsia-500 to-pink-500'
              },
              {
                categoryKey: 'virtualSection3Category4',
                icon: '📊',
                featureKeys: [
                  'virtualSection3Category4Feature1',
                  'virtualSection3Category4Feature2',
                  'virtualSection3Category4Feature3',
                  'virtualSection3Category4Feature4',
                  'virtualSection3Category4Feature5'
                ],
                color: 'from-blue-500 to-violet-500'
              },
              {
                categoryKey: 'virtualSection3Category5',
                icon: '💰',
                featureKeys: [
                  'virtualSection3Category5Feature1',
                  'virtualSection3Category5Feature2',
                  'virtualSection3Category5Feature3',
                  'virtualSection3Category5Feature4',
                  'virtualSection3Category5Feature5'
                ],
                color: 'from-green-500 to-emerald-500'
              },
              {
                categoryKey: 'virtualSection3Category6',
                icon: '🔒',
                featureKeys: [
                  'virtualSection3Category6Feature1',
                  'virtualSection3Category6Feature2',
                  'virtualSection3Category6Feature3',
                  'virtualSection3Category6Feature4',
                  'virtualSection3Category6Feature5'
                ],
                color: 'from-red-500 to-rose-500'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover-lift overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {getTranslation(selectedLanguage, feature.categoryKey)}
                  </h3>
                  <ul className="space-y-2">
                    {feature.featureKeys.map((featureKey, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                        <span className="text-purple-600 mr-2">→</span>
                        <span className="text-sm">{getTranslation(selectedLanguage, featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Partners */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
              {getTranslation(selectedLanguage, 'virtualSection3TechStackTitle')}
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'virtualSection3TechStackSubtitle')}
            </p>
            
            {/* Zig-Zag Platform Cards */}
            <div className="space-y-12">
              {[
                { 
                  nameKey: 'virtualSection3Platform1Name',
                  descKey: 'virtualSection3Platform1Desc',
                  image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
                  featureKeys: [
                    'virtualSection3Platform1Feature1',
                    'virtualSection3Platform1Feature2',
                    'virtualSection3Platform1Feature3',
                    'virtualSection3Platform1Feature4'
                  ],
                  align: 'left'
                },
                { 
                  nameKey: 'virtualSection3Platform2Name',
                  descKey: 'virtualSection3Platform2Desc',
                  image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop',
                  featureKeys: [
                    'virtualSection3Platform2Feature1',
                    'virtualSection3Platform2Feature2',
                    'virtualSection3Platform2Feature3',
                    'virtualSection3Platform2Feature4'
                  ],
                  align: 'right'
                },
                { 
                  nameKey: 'virtualSection3Platform3Name',
                  descKey: 'virtualSection3Platform3Desc',
                  image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
                  featureKeys: [
                    'virtualSection3Platform3Feature1',
                    'virtualSection3Platform3Feature2',
                    'virtualSection3Platform3Feature3',
                    'virtualSection3Platform3Feature4'
                  ],
                  align: 'left'
                },
                { 
                  nameKey: 'virtualSection3Platform4Name',
                  descKey: 'virtualSection3Platform4Desc',
                  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
                  featureKeys: [
                    'virtualSection3Platform4Feature1',
                    'virtualSection3Platform4Feature2',
                    'virtualSection3Platform4Feature3',
                    'virtualSection3Platform4Feature4'
                  ],
                  align: 'right'
                },
                { 
                  nameKey: 'virtualSection3Platform5Name',
                  descKey: 'virtualSection3Platform5Desc',
                  image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop',
                  featureKeys: [
                    'virtualSection3Platform5Feature1',
                    'virtualSection3Platform5Feature2',
                    'virtualSection3Platform5Feature3',
                    'virtualSection3Platform5Feature4'
                  ],
                  align: 'left'
                },
                { 
                  nameKey: 'virtualSection3Platform6Name',
                  descKey: 'virtualSection3Platform6Desc',
                  image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
                  featureKeys: [
                    'virtualSection3Platform6Feature1',
                    'virtualSection3Platform6Feature2',
                    'virtualSection3Platform6Feature3',
                    'virtualSection3Platform6Feature4'
                  ],
                  align: 'right'
                },
                { 
                  nameKey: 'virtualSection3Platform7Name',
                  descKey: 'virtualSection3Platform7Desc',
                  image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600&h=400&fit=crop',
                  featureKeys: [
                    'virtualSection3Platform7Feature1',
                    'virtualSection3Platform7Feature2',
                    'virtualSection3Platform7Feature3',
                    'virtualSection3Platform7Feature4'
                  ],
                  align: 'left'
                },
                { 
                  nameKey: 'virtualSection3Platform8Name',
                  descKey: 'virtualSection3Platform8Desc',
                  image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
                  featureKeys: [
                    'virtualSection3Platform8Feature1',
                    'virtualSection3Platform8Feature2',
                    'virtualSection3Platform8Feature3',
                    'virtualSection3Platform8Feature4'
                  ],
                  align: 'right'
                }
              ].map((platform, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${platform.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${platform.align === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                      <img 
                        src={platform.image}
                        alt={getTranslation(selectedLanguage, platform.nameKey)}
                        className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h4 className="text-3xl font-bold text-white mb-2">
                          {getTranslation(selectedLanguage, platform.nameKey)}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className={`${platform.align === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 p-8 rounded-2xl">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {getTranslation(selectedLanguage, platform.nameKey)}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {getTranslation(selectedLanguage, platform.descKey)}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {platform.featureKeys.map((featureKey, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                            <span className="text-gray-700 dark:text-gray-300">
                              {getTranslation(selectedLanguage, featureKey)}
                            </span>
                          </div>
                        ))}
                      </div>
                      <button className="mt-6 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                        {getTranslation(selectedLanguage, 'virtualSection3LearnMore')}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Success Metrics & ROI */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
              {getTranslation(selectedLanguage, 'virtualSection4Badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'virtualSection4Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'virtualSection4Subtitle')}
            </p>
          </div>

          {/* ROI Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded-2xl p-8 border-2 border-red-200 dark:border-red-800">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">🏢</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {getTranslation(selectedLanguage, 'virtualSection4InPersonTitle')}
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { itemKey: 'virtualSection4InPersonItem1', cost: '$50,000' },
                  { itemKey: 'virtualSection4InPersonItem2', cost: '$150,000' },
                  { itemKey: 'virtualSection4InPersonItem3', cost: '$75,000' },
                  { itemKey: 'virtualSection4InPersonItem4', cost: '$35,000' },
                  { itemKey: 'virtualSection4InPersonItem5', cost: '$40,000' },
                  { itemKey: 'virtualSection4InPersonItem6', cost: '$50,000' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-red-200 dark:border-red-800">
                    <span className="text-gray-700 dark:text-gray-300">
                      {getTranslation(selectedLanguage, item.itemKey)}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white">{item.cost}</span>
                  </div>
                ))}
                <div className="pt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {getTranslation(selectedLanguage, 'virtualSection4InPersonTotal')}
                  </span>
                  <span className="text-3xl font-bold text-red-600">$400,000</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800 relative">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
                {getTranslation(selectedLanguage, 'virtualSection4VirtualSave')}
              </div>
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">💻</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {getTranslation(selectedLanguage, 'virtualSection4VirtualTitle')}
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { itemKey: 'virtualSection4VirtualItem1', cost: '$25,000' },
                  { itemKey: 'virtualSection4VirtualItem2', cost: '$35,000' },
                  { itemKey: 'virtualSection4VirtualItem3', cost: '$20,000' },
                  { itemKey: 'virtualSection4VirtualItem4', cost: '$15,000' },
                  { itemKey: 'virtualSection4VirtualItem5', cost: '$15,000' },
                  { itemKey: 'virtualSection4VirtualItem6', cost: '$10,000' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-green-200 dark:border-green-800">
                    <span className="text-gray-700 dark:text-gray-300">
                      {getTranslation(selectedLanguage, item.itemKey)}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white">{item.cost}</span>
                  </div>
                ))}
                <div className="pt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {getTranslation(selectedLanguage, 'virtualSection4VirtualTotal')}
                  </span>
                  <span className="text-3xl font-bold text-green-600">$120,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { metricKey: 'virtualSection4Benefit1Metric', labelKey: 'virtualSection4Benefit1Label', descKey: 'virtualSection4Benefit1Desc', icon: '🌍' },
              { metricKey: 'virtualSection4Benefit2Metric', labelKey: 'virtualSection4Benefit2Label', descKey: 'virtualSection4Benefit2Desc', icon: '💰' },
              { metricKey: 'virtualSection4Benefit3Metric', labelKey: 'virtualSection4Benefit3Label', descKey: 'virtualSection4Benefit3Desc', icon: '📈' },
              { metricKey: 'virtualSection4Benefit4Metric', labelKey: 'virtualSection4Benefit4Label', descKey: 'virtualSection4Benefit4Desc', icon: '📊' }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 p-8 rounded-2xl text-center hover-lift">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {getTranslation(selectedLanguage, benefit.metricKey)}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {getTranslation(selectedLanguage, benefit.labelKey)}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {getTranslation(selectedLanguage, benefit.descKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Environmental Impact */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-800 dark:to-emerald-800 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                🌱 {getTranslation(selectedLanguage, 'virtualSection4EnvironmentTitle')}
              </h3>
              <p className="text-xl opacity-90 dark:opacity-80">
                {getTranslation(selectedLanguage, 'virtualSection4EnvironmentSubtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { metricKey: 'virtualSection4EnvironmentMetric1', labelKey: 'virtualSection4EnvironmentLabel1', descKey: 'virtualSection4EnvironmentDesc1' },
                { metricKey: 'virtualSection4EnvironmentMetric2', labelKey: 'virtualSection4EnvironmentLabel2', descKey: 'virtualSection4EnvironmentDesc2' },
                { metricKey: 'virtualSection4EnvironmentMetric3', labelKey: 'virtualSection4EnvironmentLabel3', descKey: 'virtualSection4EnvironmentDesc3' }
              ].map((impact, index) => (
                <div key={index} className="text-center bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">
                    {getTranslation(selectedLanguage, impact.metricKey)}
                  </div>
                  <h4 className="font-bold mb-1">
                    {getTranslation(selectedLanguage, impact.labelKey)}
                  </h4>
                  <p className="text-sm opacity-90 dark:opacity-80">
                    {getTranslation(selectedLanguage, impact.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Use Cases & Event Types */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">{getTranslation(selectedLanguage, 'virtualSection5Badge')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'virtualSection5Title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">{getTranslation(selectedLanguage, 'virtualSection5Title2')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'virtualSection5Subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                typeKey: 'virtualSection5Type1Type',
                icon: '🎓',
                attendeesKey: 'virtualSection5Type1Attendees',
                durationKey: 'virtualSection5Type1Duration',
                useCaseKey: 'virtualSection5Type1UseCase',
                featureKeys: ['virtualSection5Type1Feature1', 'virtualSection5Type1Feature2', 'virtualSection5Type1Feature3', 'virtualSection5Type1Feature4'],
                image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
              },
              {
                typeKey: 'virtualSection5Type2Type',
                icon: '🎤',
                attendeesKey: 'virtualSection5Type2Attendees',
                durationKey: 'virtualSection5Type2Duration',
                useCaseKey: 'virtualSection5Type2UseCase',
                featureKeys: ['virtualSection5Type2Feature1', 'virtualSection5Type2Feature2', 'virtualSection5Type2Feature3', 'virtualSection5Type2Feature4'],
                image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300&fit=crop'
              },
              {
                typeKey: 'virtualSection5Type3Type',
                icon: '🚀',
                attendeesKey: 'virtualSection5Type3Attendees',
                durationKey: 'virtualSection5Type3Duration',
                useCaseKey: 'virtualSection5Type3UseCase',
                featureKeys: ['virtualSection5Type3Feature1', 'virtualSection5Type3Feature2', 'virtualSection5Type3Feature3', 'virtualSection5Type3Feature4'],
                image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=400&h=300&fit=crop'
              },
              {
                typeKey: 'virtualSection5Type4Type',
                icon: '🏢',
                attendeesKey: 'virtualSection5Type4Attendees',
                durationKey: 'virtualSection5Type4Duration',
                useCaseKey: 'virtualSection5Type4UseCase',
                featureKeys: ['virtualSection5Type4Feature1', 'virtualSection5Type4Feature2', 'virtualSection5Type4Feature3', 'virtualSection5Type4Feature4'],
                image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop'
              },
              {
                typeKey: 'virtualSection5Type5Type',
                icon: '🏛️',
                attendeesKey: 'virtualSection5Type5Attendees',
                durationKey: 'virtualSection5Type5Duration',
                useCaseKey: 'virtualSection5Type5UseCase',
                featureKeys: ['virtualSection5Type5Feature1', 'virtualSection5Type5Feature2', 'virtualSection5Type5Feature3', 'virtualSection5Type5Feature4'],
                image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop'
              },
              {
                typeKey: 'virtualSection5Type6Type',
                icon: '💝',
                attendeesKey: 'virtualSection5Type6Attendees',
                durationKey: 'virtualSection5Type6Duration',
                useCaseKey: 'virtualSection5Type6UseCase',
                featureKeys: ['virtualSection5Type6Feature1', 'virtualSection5Type6Feature2', 'virtualSection5Type6Feature3', 'virtualSection5Type6Feature4'],
                image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop'
              }
            ].map((eventType, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover-lift">
                <div className="relative h-48">
                  <img 
                    src={eventType.image}
                    alt={getTranslation(selectedLanguage, eventType.typeKey)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-4xl mb-2">{eventType.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{getTranslation(selectedLanguage, eventType.typeKey)}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, 'virtualSection5AttendeesLabel')}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, eventType.attendeesKey)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, 'virtualSection5DurationLabel')}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, eventType.durationKey)}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{getTranslation(selectedLanguage, eventType.useCaseKey)}</p>
                  <div className="flex flex-wrap gap-2">
                    {eventType.featureKeys.map((featureKey, i) => (
                      <span key={i} className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-xs font-semibold">
                        {getTranslation(selectedLanguage, featureKey)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Getting Started & CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Simple 3-Step Process */}
          <div className="mb-20">
            <div className="text-center mb-16 animate-fadeIn">
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">{getTranslation(selectedLanguage, 'virtualSection6Badge')}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                {getTranslation(selectedLanguage, 'virtualSection6Title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">{getTranslation(selectedLanguage, 'virtualSection6Title2')}</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {getTranslation(selectedLanguage, 'virtualSection6Subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-1 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600" style={{zIndex: 0}}></div>

              {[
                {
                  step: 1,
                  titleKey: 'virtualSection6Step1Title',
                  descKey: 'virtualSection6Step1Desc',
                  icon: '🎯',
                  actionKey: 'virtualSection6Step1Action',
                  color: 'from-violet-500 to-purple-500'
                },
                {
                  step: 2,
                  titleKey: 'virtualSection6Step2Title',
                  descKey: 'virtualSection6Step2Desc',
                  icon: '🎨',
                  actionKey: 'virtualSection6Step2Action',
                  color: 'from-purple-500 to-fuchsia-500'
                },
                {
                  step: 3,
                  titleKey: 'virtualSection6Step3Title',
                  descKey: 'virtualSection6Step3Desc',
                  icon: '🚀',
                  actionKey: 'virtualSection6Step3Action',
                  color: 'from-fuchsia-500 to-pink-500'
                }
              ].map((step, index) => (
                <div key={index} className="relative z-10">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover-lift border-2 border-transparent hover:border-purple-200 dark:hover:border-purple-800 transition-all">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-4xl`}>
                      {step.icon}
                    </div>
                    <div className="text-center mb-4">
                      <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">{getTranslation(selectedLanguage, step.titleKey)}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center mb-4">{getTranslation(selectedLanguage, step.descKey)}</p>
                    <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 rounded-lg p-3 text-center">
                      <p className="text-sm font-semibold text-purple-600">{getTranslation(selectedLanguage, step.actionKey)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-900 dark:via-purple-900 dark:to-fuchsia-950 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left - Main CTA */}
              <div className="p-12 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {getTranslation(selectedLanguage, 'virtualSection6CTATitle')}
                </h2>
                <p className="text-xl mb-8 opacity-90 dark:opacity-80">
                  {getTranslation(selectedLanguage, 'virtualSection6CTASubtitle')}
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'virtualSection6CTABenefit1',
                    'virtualSection6CTABenefit2',
                    'virtualSection6CTABenefit3',
                    'virtualSection6CTABenefit4'
                  ].map((benefitKey, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <span className="text-lg">{getTranslation(selectedLanguage, benefitKey)}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/contact" className="bg-white text-purple-600 dark:bg-gray-200 dark:text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all shadow-xl text-center">
                    {getTranslation(selectedLanguage, 'virtualSection6CTAButton1')}
                  </Link>
                  <button className="bg-transparent border-2 border-white dark:border-gray-200 text-white dark:text-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-white dark:hover:bg-gray-200 hover:text-purple-600 dark:hover:text-purple-700 transform hover:scale-105 transition-all">
                    {getTranslation(selectedLanguage, 'virtualSection6CTAButton2')}
                  </button>
                </div>

                <div className="flex items-center space-x-4 text-sm opacity-90 dark:opacity-80">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span>{getTranslation(selectedLanguage, 'virtualSection6CTARating')}</span>
                </div>
              </div>

              {/* Right - Contact & Resources */}
              <div className="bg-white dark:bg-gray-800 p-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{getTranslation(selectedLanguage, 'virtualSection6ContactTitle')}</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'virtualSection6Contact1Title')}</p>
                      <p className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'virtualSection6Contact1Desc')}</p>
                      <p className="text-sm text-purple-600">{getTranslation(selectedLanguage, 'virtualSection6Contact1Availability')}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'virtualSection6Contact2Title')}</p>
                      <p className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'virtualSection6Contact2Desc')}</p>
                      <p className="text-sm text-purple-600">{getTranslation(selectedLanguage, 'virtualSection6Contact2Availability')}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'virtualSection6Contact3Title')}</p>
                      <p className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'virtualSection6Contact3Desc')}</p>
                      <p className="text-sm text-purple-600">{getTranslation(selectedLanguage, 'virtualSection6Contact3Availability')}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{getTranslation(selectedLanguage, 'virtualSection6ResourcesTitle')}</h4>
                  <div className="space-y-2">
                    {[
                      'virtualSection6Resource1',
                      'virtualSection6Resource2',
                      'virtualSection6Resource3',
                      'virtualSection6Resource4'
                    ].map((resourceKey, index) => (
                      <button key={index} className="w-full text-left text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 hover:underline">
                        {getTranslation(selectedLanguage, resourceKey)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                  <p className="text-purple-600 dark:text-purple-400 font-bold mb-1">{getTranslation(selectedLanguage, 'virtualSection6OfferBadge')}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'virtualSection6OfferText')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualEvents;
