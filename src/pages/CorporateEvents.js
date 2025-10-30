import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';
import './home.css';

const CorporateEvents = () => {
  const { selectedLanguage } = useLanguage();
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Counter animation function
  const animateCounter = (index, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = target;
          return newCounters;
        });
        clearInterval(timer);
      } else {
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }
    }, 16);
  };

  // Intersection Observer to trigger animation when stats are visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate each counter with their target values
            animateCounter(0, 1000, 2000); // 1000+ Corporate Events
            animateCounter(1, 250, 2000);  // 250+ Fortune 500 Clients
            animateCounter(2, 98, 2000);   // 98% Client Retention
            animateCounter(3, 45, 2000);   // 45+ Industries Served
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);
  
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Section 1: Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-900 dark:via-teal-900 dark:to-cyan-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20 dark:opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-400 dark:bg-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block bg-white/10 dark:bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fadeIn">
              {getTranslation(selectedLanguage, 'corporateSection1Badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideInDown">
              {getTranslation(selectedLanguage, 'corporateSection1Title1')}
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
                {getTranslation(selectedLanguage, 'corporateSection1Title2')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-200 max-w-4xl mx-auto mb-12 animate-slideInUp">
              {getTranslation(selectedLanguage, 'corporateSection1Subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scaleIn">
              <Link to="/contact" className="bg-white text-teal-600 dark:bg-gray-200 dark:text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all shadow-xl">
                {getTranslation(selectedLanguage, 'corporateSection1Button1')}
              </Link>
              <button className="border-2 border-white dark:border-gray-200 text-white dark:text-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 dark:hover:bg-white/5 transform hover:scale-105 transition-all">
                {getTranslation(selectedLanguage, 'corporateSection1Button2')}
              </button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {[
                { target: 1000, suffix: '+', labelKey: 'corporateSection1Stat1Label' },
                { target: 250, suffix: '+', labelKey: 'corporateSection1Stat2Label' },
                { target: 98, suffix: '%', labelKey: 'corporateSection1Stat3Label' },
                { target: 45, suffix: '+', labelKey: 'corporateSection1Stat4Label' }
              ].map((stat, index) => (
                <div key={index} className="glass p-6 rounded-xl hover-lift">
                  <div className="text-4xl font-bold mb-2">
                    {counters[index]}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-200">
                    {getTranslation(selectedLanguage, stat.labelKey)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Event Types */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'corporateSection2Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'corporateSection2Subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                titleKey: 'corporateSection2Event1Title',
                descriptionKey: 'corporateSection2Event1Description',
                featureKeys: ['corporateSection2Event1Feature1', 'corporateSection2Event1Feature2', 'corporateSection2Event1Feature3']
              },
              {
                icon: '🎓',
                titleKey: 'corporateSection2Event2Title',
                descriptionKey: 'corporateSection2Event2Description',
                featureKeys: ['corporateSection2Event2Feature1', 'corporateSection2Event2Feature2', 'corporateSection2Event2Feature3']
              },
              {
                icon: '🎉',
                titleKey: 'corporateSection2Event3Title',
                descriptionKey: 'corporateSection2Event3Description',
                featureKeys: ['corporateSection2Event3Feature1', 'corporateSection2Event3Feature2', 'corporateSection2Event3Feature3']
              },
              {
                icon: '🤝',
                titleKey: 'corporateSection2Event4Title',
                descriptionKey: 'corporateSection2Event4Description',
                featureKeys: ['corporateSection2Event4Feature1', 'corporateSection2Event4Feature2', 'corporateSection2Event4Feature3']
              },
              {
                icon: '📈',
                titleKey: 'corporateSection2Event5Title',
                descriptionKey: 'corporateSection2Event5Description',
                featureKeys: ['corporateSection2Event5Feature1', 'corporateSection2Event5Feature2', 'corporateSection2Event5Feature3']
              },
              {
                icon: '🎊',
                titleKey: 'corporateSection2Event6Title',
                descriptionKey: 'corporateSection2Event6Description',
                featureKeys: ['corporateSection2Event6Feature1', 'corporateSection2Event6Feature2', 'corporateSection2Event6Feature3']
              }
            ].map((event, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-teal-50 dark:from-gray-800 dark:to-teal-900/20 p-8 rounded-2xl hover-lift h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition transform">
                    {event.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {getTranslation(selectedLanguage, event.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {getTranslation(selectedLanguage, event.descriptionKey)}
                  </p>
                  <ul className="space-y-2">
                    {event.featureKeys.map((featureKey, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {getTranslation(selectedLanguage, featureKey)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Success Stories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-800 dark:to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'corporateSection3Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {getTranslation(selectedLanguage, 'corporateSection3Subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                companyKey: 'corporateSection3Story1Company',
                eventKey: 'corporateSection3Story1Event',
                resultKey: 'corporateSection3Story1Result',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
                quoteKey: 'corporateSection3Story1Quote',
                authorKey: 'corporateSection3Story1Author',
                positionKey: 'corporateSection3Story1Position'
              },
              {
                companyKey: 'corporateSection3Story2Company',
                eventKey: 'corporateSection3Story2Event',
                resultKey: 'corporateSection3Story2Result',
                image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop',
                quoteKey: 'corporateSection3Story2Quote',
                authorKey: 'corporateSection3Story2Author',
                positionKey: 'corporateSection3Story2Position'
              }
            ].map((story, index) => (
              <div key={index} className="glass rounded-2xl overflow-hidden hover-lift">
                <div className="relative h-64">
                  <img 
                    src={story.image} 
                    alt={getTranslation(selectedLanguage, story.eventKey)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-teal-600 font-bold text-sm">
                      {getTranslation(selectedLanguage, 'corporateSection3FeaturedBadge')}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {getTranslation(selectedLanguage, story.companyKey)}
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-semibold mb-4">
                    {getTranslation(selectedLanguage, story.eventKey)}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                    "{getTranslation(selectedLanguage, story.quoteKey)}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, story.authorKey)}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {getTranslation(selectedLanguage, story.positionKey)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-teal-600 dark:text-teal-400">
                        {getTranslation(selectedLanguage, story.resultKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Approach */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {getTranslation(selectedLanguage, 'corporateSection4Title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  {getTranslation(selectedLanguage, 'corporateSection4Subtitle')}
                </p>
              </div>

              {[
                {
                  step: '01',
                  titleKey: 'corporateSection4Step1Title',
                  descriptionKey: 'corporateSection4Step1Description'
                },
                {
                  step: '02',
                  titleKey: 'corporateSection4Step2Title',
                  descriptionKey: 'corporateSection4Step2Description'
                },
                {
                  step: '03',
                  titleKey: 'corporateSection4Step3Title',
                  descriptionKey: 'corporateSection4Step3Description'
                },
                {
                  step: '04',
                  titleKey: 'corporateSection4Step4Title',
                  descriptionKey: 'corporateSection4Step4Description'
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 group hover-lift cursor-pointer">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {getTranslation(selectedLanguage, item.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {getTranslation(selectedLanguage, item.descriptionKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="glass p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {getTranslation(selectedLanguage, 'corporateSection4BoxTitle')}
                </h3>
                <div className="space-y-4">
                  {[
                    'corporateSection4Feature1',
                    'corporateSection4Feature2',
                    'corporateSection4Feature3',
                    'corporateSection4Feature4',
                    'corporateSection4Feature5',
                    'corporateSection4Feature6'
                  ].map((featureKey, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg hover-lift">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {getTranslation(selectedLanguage, featureKey)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Industry Expertise */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'corporateSection5Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {getTranslation(selectedLanguage, 'corporateSection5Subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: '💻', nameKey: 'corporateSection5Industry1' },
              { icon: '🏦', nameKey: 'corporateSection5Industry2' },
              { icon: '🏥', nameKey: 'corporateSection5Industry3' },
              { icon: '🏭', nameKey: 'corporateSection5Industry4' },
              { icon: '🛒', nameKey: 'corporateSection5Industry5' },
              { icon: '⚡', nameKey: 'corporateSection5Industry6' },
              { icon: '✈️', nameKey: 'corporateSection5Industry7' },
              { icon: '🎓', nameKey: 'corporateSection5Industry8' },
              { icon: '🏗️', nameKey: 'corporateSection5Industry9' },
              { icon: '📱', nameKey: 'corporateSection5Industry10' }
            ].map((industry, index) => (
              <div key={index} className="glass p-6 rounded-xl text-center hover-lift group cursor-pointer">
                <div className="text-4xl mb-3 group-hover:scale-125 transition transform">
                  {industry.icon}
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {getTranslation(selectedLanguage, industry.nameKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-900 dark:via-teal-900 dark:to-cyan-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 dark:opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 dark:bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {getTranslation(selectedLanguage, 'corporateSection6Title')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 dark:text-gray-200">
            {getTranslation(selectedLanguage, 'corporateSection6Subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              to="/contact"
              className="bg-white text-teal-600 dark:bg-gray-200 dark:text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all shadow-xl inline-flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {getTranslation(selectedLanguage, 'corporateSection6Button1')}
            </Link>

            <button className="border-2 border-white dark:border-gray-200 text-white dark:text-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 dark:hover:bg-white/5 transform hover:scale-105 transition-all inline-flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {getTranslation(selectedLanguage, 'corporateSection6Button2')}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hover-lift">
              <div className="text-4xl mb-2">🏆</div>
              <p className="font-semibold">{getTranslation(selectedLanguage, 'corporateSection6Feature1Title')}</p>
            </div>
            <div className="hover-lift">
              <div className="text-4xl mb-2">💼</div>
              <p className="font-semibold">{getTranslation(selectedLanguage, 'corporateSection6Feature2Title')}</p>
            </div>
            <div className="hover-lift">
              <div className="text-4xl mb-2">🌍</div>
              <p className="font-semibold">{getTranslation(selectedLanguage, 'corporateSection6Feature3Title')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateEvents;
