import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';
import './home.css';

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

const PartyCelebrations = () => {
  const [selectedOccasion, setSelectedOccasion] = useState('birthday');
  const { selectedLanguage } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Section 1: Hero with Dynamic Background */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-fuchsia-600 via-pink-500 to-rose-500 dark:from-fuchsia-900 dark:via-pink-900 dark:to-rose-950 text-white overflow-hidden">
        {/* Animated Confetti Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-300 dark:bg-yellow-500 rounded-full animate-float dark:opacity-60"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 dark:bg-blue-600 rounded-full animate-bounce dark:opacity-60" style={{animationDelay: '0.2s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-green-400 dark:bg-green-600 rounded-full animate-pulse dark:opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-purple-400 dark:bg-purple-600 rounded-full animate-float dark:opacity-60" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-pink-300 dark:bg-pink-500 rounded-full animate-bounce dark:opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 dark:from-black/50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fadeIn">
            <div className="inline-block bg-white/20 dark:bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">{getTranslation(selectedLanguage, 'partySection1Badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideInUp">
              {getTranslation(selectedLanguage, 'partySection1Title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 dark:opacity-90 animate-slideInUp" style={{animationDelay: '0.1s'}}>
              {getTranslation(selectedLanguage, 'partySection1Subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideInUp" style={{animationDelay: '0.2s'}}>
              <Link to="/contact" className="bg-white text-pink-600 dark:bg-gray-200 dark:text-pink-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-300 hover:shadow-2xl transform hover:scale-105 transition-all inline-block">
                {getTranslation(selectedLanguage, 'partySection1Button1')}
              </Link>
              <button className="bg-transparent border-2 border-white dark:border-gray-200 text-white dark:text-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-white dark:hover:bg-gray-200 hover:text-pink-600 dark:hover:text-pink-700 transform hover:scale-105 transition-all">
                {getTranslation(selectedLanguage, 'partySection1Button2')}
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slideInUp" style={{animationDelay: '0.3s'}}>
            {[
              { icon: '🎊', value: 5000, suffix: '+', labelKey: 'partySection1Stat1Label' },
              { icon: '⭐', value: 4.9, suffix: '/5', decimals: 1, labelKey: 'partySection1Stat2Label' },
              { icon: '🎈', value: 100, suffix: '%', labelKey: 'partySection1Stat3Label' },
              { icon: '💝', value: 50, suffix: '+', labelKey: 'partySection1Stat4Label' }
            ].map((stat, index) => (
              <div key={index} className="glass backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 p-6 rounded-2xl text-center hover-lift">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals || 0}
                  duration={2500}
                  color="text-white"
                />
                <div className="text-sm opacity-90 dark:opacity-80">{getTranslation(selectedLanguage, stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Occasion Selector with Interactive Cards */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">
              {getTranslation(selectedLanguage, 'partySection2Label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'partySection2Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'partySection2Subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              { id: 'birthday', icon: '🎂', titleKey: 'partySection2Occasion1', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop' },
              { id: 'graduation', icon: '🎓', titleKey: 'partySection2Occasion2', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop' },
              { id: 'baby', icon: '👶', titleKey: 'partySection2Occasion3', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop' },
              { id: 'anniversary', icon: '💑', titleKey: 'partySection2Occasion4', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop' },
              { id: 'retirement', icon: '🎉', titleKey: 'partySection2Occasion5', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=400&fit=crop' },
              { id: 'engagement', icon: '💍', titleKey: 'partySection2Occasion6', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=400&fit=crop' },
              { id: 'holiday', icon: '🎄', titleKey: 'partySection2Occasion7', image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&h=400&fit=crop' },
              { id: 'kids', icon: '🎈', titleKey: 'partySection2Occasion8', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop' }
            ].map((occasion) => (
              <button
                key={occasion.id}
                onClick={() => setSelectedOccasion(occasion.id)}
                className={`group relative p-6 rounded-2xl transition-all transform hover:scale-105 overflow-hidden h-48 ${
                  selectedOccasion === occasion.id
                    ? 'shadow-2xl ring-4 ring-pink-500'
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{backgroundImage: `url(${occasion.image})`}}
                ></div>
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 ${
                  selectedOccasion === occasion.id ? 'opacity-90' : 'opacity-70 group-hover:opacity-85'
                } transition-opacity`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-white h-full flex flex-col justify-end">
                  <div className="text-5xl mb-3">{occasion.icon}</div>
                  <h3 className="font-bold text-lg">{getTranslation(selectedLanguage, occasion.titleKey)}</h3>
                  {selectedOccasion === occasion.id && (
                    <div className="mt-2">
                      <span className="inline-block bg-pink-500 px-3 py-1 rounded-full text-xs font-semibold">
                        {getTranslation(selectedLanguage, 'partySection2OccasionSelected')}
                      </span>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Dynamic Content Based on Selection */}
          <div className="bg-gradient-to-br from-pink-50 to-fuchsia-50 dark:from-pink-900/10 dark:to-fuchsia-900/10 rounded-3xl p-8 md:p-12 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedOccasion === 'birthday' && getTranslation(selectedLanguage, 'partySection2BirthdayTitle')}
                  {selectedOccasion === 'graduation' && getTranslation(selectedLanguage, 'partySection2GraduationTitle')}
                  {selectedOccasion === 'baby' && getTranslation(selectedLanguage, 'partySection2BabyTitle')}
                  {selectedOccasion === 'anniversary' && getTranslation(selectedLanguage, 'partySection2AnniversaryTitle')}
                  {selectedOccasion === 'retirement' && getTranslation(selectedLanguage, 'partySection2RetirementTitle')}
                  {selectedOccasion === 'engagement' && getTranslation(selectedLanguage, 'partySection2EngagementTitle')}
                  {selectedOccasion === 'holiday' && getTranslation(selectedLanguage, 'partySection2HolidayTitle')}
                  {selectedOccasion === 'kids' && getTranslation(selectedLanguage, 'partySection2KidsTitle')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {selectedOccasion === 'birthday' && getTranslation(selectedLanguage, 'partySection2BirthdayDesc')}
                  {selectedOccasion === 'graduation' && getTranslation(selectedLanguage, 'partySection2GraduationDesc')}
                  {selectedOccasion === 'baby' && getTranslation(selectedLanguage, 'partySection2BabyDesc')}
                  {selectedOccasion === 'anniversary' && getTranslation(selectedLanguage, 'partySection2AnniversaryDesc')}
                  {selectedOccasion === 'retirement' && getTranslation(selectedLanguage, 'partySection2RetirementDesc')}
                  {selectedOccasion === 'engagement' && getTranslation(selectedLanguage, 'partySection2EngagementDesc')}
                  {selectedOccasion === 'holiday' && getTranslation(selectedLanguage, 'partySection2HolidayDesc')}
                  {selectedOccasion === 'kids' && getTranslation(selectedLanguage, 'partySection2KidsDesc')}
                </p>
                <ul className="space-y-3">
                  {selectedOccasion === 'birthday' && ['partySection2BirthdayFeature1', 'partySection2BirthdayFeature2', 'partySection2BirthdayFeature3', 'partySection2BirthdayFeature4'].map((key, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-pink-600 mr-3 text-xl">✓</span>
                      {getTranslation(selectedLanguage, key)}
                    </li>
                  ))}
                  {selectedOccasion === 'graduation' && ['partySection2GraduationFeature1', 'partySection2GraduationFeature2', 'partySection2GraduationFeature3', 'partySection2GraduationFeature4'].map((key, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-pink-600 mr-3 text-xl">✓</span>
                      {getTranslation(selectedLanguage, key)}
                    </li>
                  ))}
                  {selectedOccasion === 'baby' && ['partySection2BabyFeature1', 'partySection2BabyFeature2', 'partySection2BabyFeature3', 'partySection2BabyFeature4'].map((key, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-pink-600 mr-3 text-xl">✓</span>
                      {getTranslation(selectedLanguage, key)}
                    </li>
                  ))}
                  {selectedOccasion === 'anniversary' && ['partySection2AnniversaryFeature1', 'partySection2AnniversaryFeature2', 'partySection2AnniversaryFeature3', 'partySection2AnniversaryFeature4'].map((key, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-pink-600 mr-3 text-xl">✓</span>
                      {getTranslation(selectedLanguage, key)}
                    </li>
                  ))}
                  {selectedOccasion === 'retirement' && ['partySection2RetirementFeature1', 'partySection2RetirementFeature2', 'partySection2RetirementFeature3', 'partySection2RetirementFeature4'].map((key, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-pink-600 mr-3 text-xl">✓</span>
                      {getTranslation(selectedLanguage, key)}
                    </li>
                  ))}
                  {selectedOccasion === 'engagement' && ['partySection2EngagementFeature1', 'partySection2EngagementFeature2', 'partySection2EngagementFeature3', 'partySection2EngagementFeature4'].map((key, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-pink-600 mr-3 text-xl">✓</span>
                      {getTranslation(selectedLanguage, key)}
                    </li>
                  ))}
                  {selectedOccasion === 'holiday' && ['partySection2HolidayFeature1', 'partySection2HolidayFeature2', 'partySection2HolidayFeature3', 'partySection2HolidayFeature4'].map((key, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-pink-600 mr-3 text-xl">✓</span>
                      {getTranslation(selectedLanguage, key)}
                    </li>
                  ))}
                  {selectedOccasion === 'kids' && ['partySection2KidsFeature1', 'partySection2KidsFeature2', 'partySection2KidsFeature3', 'partySection2KidsFeature4'].map((key, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-pink-600 mr-3 text-xl">✓</span>
                      {getTranslation(selectedLanguage, key)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={
                      selectedOccasion === 'birthday' ? 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop' :
                      selectedOccasion === 'graduation' ? 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=600&fit=crop' :
                      selectedOccasion === 'baby' ? 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop' :
                      selectedOccasion === 'anniversary' ? 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop' :
                      selectedOccasion === 'retirement' ? 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop' :
                      selectedOccasion === 'engagement' ? 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop' :
                      selectedOccasion === 'holiday' ? 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=600&h=600&fit=crop' :
                      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop'
                    }
                    alt="Party celebration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Comprehensive Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50 dark:from-gray-900 dark:to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">
              {getTranslation(selectedLanguage, 'partySection3Label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'partySection3Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'partySection3Subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                categoryKey: 'partySection3Service1Category',
                icon: '🏰',
                itemKeys: [
                  'partySection3Service1Item1',
                  'partySection3Service1Item2',
                  'partySection3Service1Item3',
                  'partySection3Service1Item4'
                ],
                color: 'from-pink-500 to-rose-500'
              },
              {
                categoryKey: 'partySection3Service2Category',
                icon: '✨',
                itemKeys: [
                  'partySection3Service2Item1',
                  'partySection3Service2Item2',
                  'partySection3Service2Item3',
                  'partySection3Service2Item4'
                ],
                color: 'from-purple-500 to-pink-500'
              },
              {
                categoryKey: 'partySection3Service3Category',
                icon: '🍰',
                itemKeys: [
                  'partySection3Service3Item1',
                  'partySection3Service3Item2',
                  'partySection3Service3Item3',
                  'partySection3Service3Item4'
                ],
                color: 'from-fuchsia-500 to-pink-500'
              },
              {
                categoryKey: 'partySection3Service4Category',
                icon: '🎵',
                itemKeys: [
                  'partySection3Service4Item1',
                  'partySection3Service4Item2',
                  'partySection3Service4Item3',
                  'partySection3Service4Item4'
                ],
                color: 'from-rose-500 to-red-500'
              },
              {
                categoryKey: 'partySection3Service5Category',
                icon: '📋',
                itemKeys: [
                  'partySection3Service5Item1',
                  'partySection3Service5Item2',
                  'partySection3Service5Item3',
                  'partySection3Service5Item4'
                ],
                color: 'from-pink-500 to-fuchsia-500'
              },
              {
                categoryKey: 'partySection3Service6Category',
                icon: '📸',
                itemKeys: [
                  'partySection3Service6Item1',
                  'partySection3Service6Item2',
                  'partySection3Service6Item3',
                  'partySection3Service6Item4'
                ],
                color: 'from-violet-500 to-purple-500'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover-lift group">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {getTranslation(selectedLanguage, service.categoryKey)}
                </h3>
                <ul className="space-y-3">
                  {service.itemKeys.map((itemKey, i) => (
                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                      <span className="text-pink-600 mr-2 mt-1">→</span>
                      <span>{getTranslation(selectedLanguage, itemKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Add-on Services */}
          <div className="mt-12 bg-gradient-to-r from-pink-600 to-fuchsia-600 dark:from-pink-800 dark:to-fuchsia-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-6">
              {getTranslation(selectedLanguage, 'partySection3AddonsTitle')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { nameKey: 'partySection3Addon1', icon: '🎁' },
                { nameKey: 'partySection3Addon2', icon: '🎆' },
                { nameKey: 'partySection3Addon3', icon: '🪧' },
                { nameKey: 'partySection3Addon4', icon: '📱' }
              ].map((addon, index) => (
                <div key={index} className="text-center bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-4xl mb-2">{addon.icon}</div>
                  <p className="font-semibold">{getTranslation(selectedLanguage, addon.nameKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing & Packages */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">
              {getTranslation(selectedLanguage, 'partySection4Label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'partySection4Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'partySection4Subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                nameKey: 'partySection4Package1Name',
                priceKey: 'partySection4Package1Price',
                guestsKey: 'partySection4Package1Guests',
                durationKey: 'partySection4Package1Duration',
                popular: false,
                featureKeys: [
                  'partySection4Package1Feature1',
                  'partySection4Package1Feature2',
                  'partySection4Package1Feature3',
                  'partySection4Package1Feature4',
                  'partySection4Package1Feature5',
                  'partySection4Package1Feature6'
                ],
                color: 'from-pink-100 to-rose-100',
                textColor: 'text-pink-600'
              },
              {
                nameKey: 'partySection4Package2Name',
                priceKey: 'partySection4Package2Price',
                guestsKey: 'partySection4Package2Guests',
                durationKey: 'partySection4Package2Duration',
                popular: true,
                featureKeys: [
                  'partySection4Package2Feature1',
                  'partySection4Package2Feature2',
                  'partySection4Package2Feature3',
                  'partySection4Package2Feature4',
                  'partySection4Package2Feature5',
                  'partySection4Package2Feature6',
                  'partySection4Package2Feature7',
                  'partySection4Package2Feature8'
                ],
                color: 'from-pink-500 to-fuchsia-500',
                textColor: 'text-white'
              },
              {
                nameKey: 'partySection4Package3Name',
                priceKey: 'partySection4Package3Price',
                guestsKey: 'partySection4Package3Guests',
                durationKey: 'partySection4Package3Duration',
                popular: false,
                featureKeys: [
                  'partySection4Package3Feature1',
                  'partySection4Package3Feature2',
                  'partySection4Package3Feature3',
                  'partySection4Package3Feature4',
                  'partySection4Package3Feature5',
                  'partySection4Package3Feature6',
                  'partySection4Package3Feature7',
                  'partySection4Package3Feature8',
                  'partySection4Package3Feature9'
                ],
                color: 'from-purple-100 to-pink-100',
                textColor: 'text-purple-600'
              }
            ].map((pkg, index) => (
              <div key={index} className={`relative rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all ${pkg.popular ? 'ring-4 ring-pink-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm">
                    {getTranslation(selectedLanguage, 'partySection4MostPopular')}
                  </div>
                )}
                <div className={`bg-gradient-to-br ${pkg.color} p-8 ${pkg.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  <h3 className="text-2xl font-bold mb-2">{getTranslation(selectedLanguage, pkg.nameKey)}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold">{getTranslation(selectedLanguage, pkg.priceKey)}</span>
                    <span className="ml-2 opacity-75">{getTranslation(selectedLanguage, 'partySection4PerEvent')}</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <p className="flex items-center">
                      <span className="mr-2">👥</span>
                      {getTranslation(selectedLanguage, pkg.guestsKey)}
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">⏱️</span>
                      {getTranslation(selectedLanguage, pkg.durationKey)}
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-8">
                  <ul className="space-y-3 mb-8">
                    {pkg.featureKeys.map((featureKey, i) => (
                      <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                        <svg className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{getTranslation(selectedLanguage, featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className={`block text-center py-4 rounded-full font-bold transition-all ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white hover:shadow-lg' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {getTranslation(selectedLanguage, 'partySection4ChooseButton')} {getTranslation(selectedLanguage, pkg.nameKey)}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Package Option */}
          <div className="bg-gradient-to-br from-pink-50 to-fuchsia-50 dark:from-pink-900/10 dark:to-fuchsia-900/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'partySection4CustomTitle')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {getTranslation(selectedLanguage, 'partySection4CustomDesc')}
            </p>
            <Link to="/contact" className="inline-block bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all">
              {getTranslation(selectedLanguage, 'partySection4CustomButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Themed Party Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50 dark:from-gray-900 dark:to-pink-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">
              {getTranslation(selectedLanguage, 'partySection5Label')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {getTranslation(selectedLanguage, 'partySection5Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'partySection5Subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                themeKey: 'partySection5Theme1Name',
                descriptionKey: 'partySection5Theme1Desc',
                image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
                tagKeys: ['partySection5Theme1Tag1', 'partySection5Theme1Tag2', 'partySection5Theme1Tag3']
              },
              {
                themeKey: 'partySection5Theme2Name',
                descriptionKey: 'partySection5Theme2Desc',
                image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
                tagKeys: ['partySection5Theme2Tag1', 'partySection5Theme2Tag2', 'partySection5Theme2Tag3']
              },
              {
                themeKey: 'partySection5Theme3Name',
                descriptionKey: 'partySection5Theme3Desc',
                image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop',
                tagKeys: ['partySection5Theme3Tag1', 'partySection5Theme3Tag2', 'partySection5Theme3Tag3']
              },
              {
                themeKey: 'partySection5Theme4Name',
                descriptionKey: 'partySection5Theme4Desc',
                image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
                tagKeys: ['partySection5Theme4Tag1', 'partySection5Theme4Tag2', 'partySection5Theme4Tag3']
              },
              {
                themeKey: 'partySection5Theme5Name',
                descriptionKey: 'partySection5Theme5Desc',
                image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=600&h=400&fit=crop',
                tagKeys: ['partySection5Theme5Tag1', 'partySection5Theme5Tag2', 'partySection5Theme5Tag3']
              },
              {
                themeKey: 'partySection5Theme6Name',
                descriptionKey: 'partySection5Theme6Desc',
                image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop',
                tagKeys: ['partySection5Theme6Tag1', 'partySection5Theme6Tag2', 'partySection5Theme6Tag3']
              }
            ].map((party, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover-lift">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={party.image}
                    alt={getTranslation(selectedLanguage, party.themeKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {getTranslation(selectedLanguage, party.themeKey)}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {getTranslation(selectedLanguage, party.descriptionKey)}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {party.tagKeys.map((tagKey, i) => (
                      <span key={i} className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-3 py-1 rounded-full text-xs font-semibold">
                        {getTranslation(selectedLanguage, tagKey)}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 w-full bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                    {getTranslation(selectedLanguage, 'partySection5ChooseTheme')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Client Testimonials */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              {getTranslation(selectedLanguage, 'partySection5TestimonialsTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  nameKey: 'partySection5Testimonial1Name',
                  eventKey: 'partySection5Testimonial1Event',
                  rating: 5,
                  photo: 'https://randomuser.me/api/portraits/women/65.jpg',
                  quoteKey: 'partySection5Testimonial1Quote'
                },
                {
                  nameKey: 'partySection5Testimonial2Name',
                  eventKey: 'partySection5Testimonial2Event',
                  rating: 5,
                  photo: 'https://randomuser.me/api/portraits/men/75.jpg',
                  quoteKey: 'partySection5Testimonial2Quote'
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-fuchsia-50 dark:from-pink-900/10 dark:to-fuchsia-900/10 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.photo}
                      alt={getTranslation(selectedLanguage, testimonial.nameKey)}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, testimonial.nameKey)}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {getTranslation(selectedLanguage, testimonial.eventKey)}
                      </p>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "{getTranslation(selectedLanguage, testimonial.quoteKey)}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Booking Process & CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* How It Works */}
          <div className="mb-20">
            <div className="text-center mb-16 animate-fadeIn">
              <span className="text-pink-600 font-semibold text-sm uppercase tracking-wider">
                {getTranslation(selectedLanguage, 'partySection6Badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                {getTranslation(selectedLanguage, 'partySection6Title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {getTranslation(selectedLanguage, 'partySection6Subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-500" style={{zIndex: 0}}></div>

              {[
                {
                  step: 1,
                  titleKey: 'partySection6Step1Title',
                  descriptionKey: 'partySection6Step1Description',
                  icon: '💭',
                  color: 'from-pink-500 to-rose-500'
                },
                {
                  step: 2,
                  titleKey: 'partySection6Step2Title',
                  descriptionKey: 'partySection6Step2Description',
                  icon: '📝',
                  color: 'from-fuchsia-500 to-pink-500'
                },
                {
                  step: 3,
                  titleKey: 'partySection6Step3Title',
                  descriptionKey: 'partySection6Step3Description',
                  icon: '✅',
                  color: 'from-purple-500 to-fuchsia-500'
                },
                {
                  step: 4,
                  titleKey: 'partySection6Step4Title',
                  descriptionKey: 'partySection6Step4Description',
                  icon: '🎉',
                  color: 'from-pink-600 to-purple-600'
                }
              ].map((item, index) => (
                <div key={index} className="relative z-10">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-4xl`}>
                      {item.icon}
                    </div>
                    <div className="mb-2">
                      <span className="inline-block bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mx-auto">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {getTranslation(selectedLanguage, item.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {getTranslation(selectedLanguage, item.descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-600 dark:from-pink-900 dark:via-fuchsia-900 dark:to-purple-950 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left - CTA Content */}
              <div className="p-12 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {getTranslation(selectedLanguage, 'partySection6CTATitle')}
                </h2>
                <p className="text-xl mb-8 opacity-90 dark:opacity-80">
                  {getTranslation(selectedLanguage, 'partySection6CTASubtitle')}
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'partySection6CTABenefit1',
                    'partySection6CTABenefit2',
                    'partySection6CTABenefit3',
                    'partySection6CTABenefit4'
                  ].map((benefitKey, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <span className="text-lg">{getTranslation(selectedLanguage, benefitKey)}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="bg-white text-pink-600 dark:bg-gray-200 dark:text-pink-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all shadow-xl text-center">
                    {getTranslation(selectedLanguage, 'partySection6CTAButton1')}
                  </Link>
                  <button className="bg-transparent border-2 border-white dark:border-gray-200 text-white dark:text-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-white dark:hover:bg-gray-200 hover:text-pink-600 dark:hover:text-pink-700 transform hover:scale-105 transition-all">
                    {getTranslation(selectedLanguage, 'partySection6CTAButton2')}
                  </button>
                </div>
              </div>

              {/* Right - Contact Quick Info */}
              <div className="bg-white dark:bg-gray-800 p-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {getTranslation(selectedLanguage, 'partySection6ContactTitle')}
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, 'partySection6ContactPhone')}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {getTranslation(selectedLanguage, 'partySection6ContactPhoneNumber')}
                      </p>
                      <p className="text-sm text-pink-600">
                        {getTranslation(selectedLanguage, 'partySection6ContactPhoneAvailability')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, 'partySection6ContactEmail')}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {getTranslation(selectedLanguage, 'partySection6ContactEmailAddress')}
                      </p>
                      <p className="text-sm text-pink-600">
                        {getTranslation(selectedLanguage, 'partySection6ContactEmailResponse')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, 'partySection6ContactChat')}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {getTranslation(selectedLanguage, 'partySection6ContactChatDescription')}
                      </p>
                      <p className="text-sm text-pink-600">
                        {getTranslation(selectedLanguage, 'partySection6ContactChatAction')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <p className="font-semibold text-gray-900 dark:text-white mb-3">
                    {getTranslation(selectedLanguage, 'partySection6SocialTitle')}
                  </p>
                  <div className="flex gap-3">
                    {['Instagram', 'Facebook', 'Pinterest', 'TikTok'].map((social, index) => (
                      <button key={index} className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg hover:bg-pink-500 hover:text-white transition-colors flex items-center justify-center text-gray-700 dark:text-gray-300 font-bold">
                        {social[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Offer */}
                <div className="mt-6 bg-gradient-to-r from-pink-50 to-fuchsia-50 dark:from-pink-900/20 dark:to-fuchsia-900/20 rounded-xl p-4 border-2 border-pink-200 dark:border-pink-800">
                  <p className="text-pink-600 dark:text-pink-400 font-bold mb-1">
                    {getTranslation(selectedLanguage, 'partySection6OfferBadge')}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {getTranslation(selectedLanguage, 'partySection6OfferText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartyCelebrations;
