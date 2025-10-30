import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';
import './home.css';

const AnimatedCounter = ({ end, duration = 2000, suffix = '', color = 'text-gray-900 dark:text-white' }) => {
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
    <div ref={counterRef} className={`text-3xl font-bold mb-0 ${color}`}>
      {count}{suffix}
    </div>
  );
};

const ConferenceManagement = () => {
  const { selectedLanguage } = useLanguage();
  
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Section 1: Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20 dark:opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <div className="inline-block bg-white/10 dark:bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {getTranslation(selectedLanguage, 'conferenceSection1Badge')}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideInLeft">
                {getTranslation(selectedLanguage, 'conferenceSection1Title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-200 mb-8 animate-slideInLeft" style={{animationDelay: '0.2s'}}>
                {getTranslation(selectedLanguage, 'conferenceSection1Subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slideInLeft" style={{animationDelay: '0.4s'}}>
                <Link to="/contact" className="bg-white text-indigo-600 dark:bg-gray-200 dark:text-indigo-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all shadow-xl">
                  {getTranslation(selectedLanguage, 'conferenceSection1Button1')}
                </Link>
                <button className="border-2 border-white dark:border-gray-200 text-white dark:text-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 dark:hover:bg-white/5 transform hover:scale-105 transition-all">
                  {getTranslation(selectedLanguage, 'conferenceSection1Button2')}
                </button>
              </div>
            </div>

            <div className="relative animate-scaleIn">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop" 
                alt="Conference" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl hover-lift">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <span className="text-3xl">🎤</span>
                  </div>
                  <div>
                    <AnimatedCounter end={500} suffix="+" duration={2500} color="text-gray-900 dark:text-white" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {getTranslation(selectedLanguage, 'conferenceSection1StatNumber')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Conference Services */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'conferenceSection2Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'conferenceSection2Subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                titleKey: 'conferenceSection2Service1Title',
                descriptionKey: 'conferenceSection2Service1Description',
                color: 'from-purple-500 to-indigo-500'
              },
              {
                icon: '🏢',
                titleKey: 'conferenceSection2Service2Title',
                descriptionKey: 'conferenceSection2Service2Description',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🎤',
                titleKey: 'conferenceSection2Service3Title',
                descriptionKey: 'conferenceSection2Service3Description',
                color: 'from-indigo-500 to-purple-500'
              },
              {
                icon: '💻',
                titleKey: 'conferenceSection2Service4Title',
                descriptionKey: 'conferenceSection2Service4Description',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: '📱',
                titleKey: 'conferenceSection2Service5Title',
                descriptionKey: 'conferenceSection2Service5Description',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: '🎨',
                titleKey: 'conferenceSection2Service6Title',
                descriptionKey: 'conferenceSection2Service6Description',
                color: 'from-pink-500 to-red-500'
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-2xl hover-lift h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {getTranslation(selectedLanguage, service.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {getTranslation(selectedLanguage, service.descriptionKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Conference Types */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'conferenceSection3Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {getTranslation(selectedLanguage, 'conferenceSection3Subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                titleKey: 'conferenceSection3Type1Title',
                descriptionKey: 'conferenceSection3Type1Description',
                image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop',
                attendeesKey: 'conferenceSection3Type1Attendees',
                durationKey: 'conferenceSection3Type1Duration'
              },
              {
                titleKey: 'conferenceSection3Type2Title',
                descriptionKey: 'conferenceSection3Type2Description',
                image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop',
                attendeesKey: 'conferenceSection3Type2Attendees',
                durationKey: 'conferenceSection3Type2Duration'
              },
              {
                titleKey: 'conferenceSection3Type3Title',
                descriptionKey: 'conferenceSection3Type3Description',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
                attendeesKey: 'conferenceSection3Type3Attendees',
                durationKey: 'conferenceSection3Type3Duration'
              },
              {
                titleKey: 'conferenceSection3Type4Title',
                descriptionKey: 'conferenceSection3Type4Description',
                image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop',
                attendeesKey: 'conferenceSection3Type4Attendees',
                durationKey: 'conferenceSection3Type4Duration'
              }
            ].map((type, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl hover-lift">
                <div className="relative h-80">
                  <img 
                    src={type.image} 
                    alt={getTranslation(selectedLanguage, type.titleKey)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-3">
                      {getTranslation(selectedLanguage, type.titleKey)}
                    </h3>
                    <p className="text-gray-200 mb-4">
                      {getTranslation(selectedLanguage, type.descriptionKey)}
                    </p>
                    <div className="flex gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{getTranslation(selectedLanguage, type.attendeesKey)} {getTranslation(selectedLanguage, 'conferenceSection3AttendeesLabel')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{getTranslation(selectedLanguage, type.durationKey)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {getTranslation(selectedLanguage, 'conferenceSection4Title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {getTranslation(selectedLanguage, 'conferenceSection4Subtitle')}
              </p>

              <div className="space-y-6">
                {[
                  {
                    titleKey: 'conferenceSection4Reason1Title',
                    descriptionKey: 'conferenceSection4Reason1Description',
                    icon: '✅'
                  },
                  {
                    titleKey: 'conferenceSection4Reason2Title',
                    descriptionKey: 'conferenceSection4Reason2Description',
                    icon: '🌍'
                  },
                  {
                    titleKey: 'conferenceSection4Reason3Title',
                    descriptionKey: 'conferenceSection4Reason3Description',
                    icon: '💻'
                  },
                  {
                    titleKey: 'conferenceSection4Reason4Title',
                    descriptionKey: 'conferenceSection4Reason4Description',
                    icon: '🤝'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 group hover-lift cursor-pointer">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {getTranslation(selectedLanguage, item.titleKey)}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {getTranslation(selectedLanguage, item.descriptionKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop" 
                alt="Conference Success" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-8 -right-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl hover-lift">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {getTranslation(selectedLanguage, 'conferenceSection4StatNumber')}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {getTranslation(selectedLanguage, 'conferenceSection4StatLabel')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'conferenceSection5Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {getTranslation(selectedLanguage, 'conferenceSection5Subtitle')}
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-500"></div>

            <div className="space-y-12">
              {[
                {
                  step: '01',
                  titleKey: 'conferenceSection5Step1Title',
                  descriptionKey: 'conferenceSection5Step1Description',
                  icon: '🎯',
                  position: 'left'
                },
                {
                  step: '02',
                  titleKey: 'conferenceSection5Step2Title',
                  descriptionKey: 'conferenceSection5Step2Description',
                  icon: '🏢',
                  position: 'right'
                },
                {
                  step: '03',
                  titleKey: 'conferenceSection5Step3Title',
                  descriptionKey: 'conferenceSection5Step3Description',
                  icon: '🎤',
                  position: 'left'
                },
                {
                  step: '04',
                  titleKey: 'conferenceSection5Step4Title',
                  descriptionKey: 'conferenceSection5Step4Description',
                  icon: '📱',
                  position: 'right'
                },
                {
                  step: '05',
                  titleKey: 'conferenceSection5Step5Title',
                  descriptionKey: 'conferenceSection5Step5Description',
                  icon: '⚡',
                  position: 'left'
                },
                {
                  step: '06',
                  titleKey: 'conferenceSection5Step6Title',
                  descriptionKey: 'conferenceSection5Step6Description',
                  icon: '📊',
                  position: 'right'
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center gap-8 ${item.position === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${item.position === 'right' ? 'lg:text-right' : ''}`}>
                    <div className="glass p-8 rounded-2xl hover-lift">
                      <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {getTranslation(selectedLanguage, item.titleKey)}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {getTranslation(selectedLanguage, item.descriptionKey)}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:block w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-3xl z-10 shadow-xl">
                    <span>{item.icon}</span>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 dark:opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {getTranslation(selectedLanguage, 'conferenceSection6Title')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-100 dark:text-gray-200">
            {getTranslation(selectedLanguage, 'conferenceSection6Subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-indigo-600 dark:bg-gray-200 dark:text-indigo-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all shadow-xl inline-flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {getTranslation(selectedLanguage, 'conferenceSection6Button1')}
            </Link>

            <button className="border-2 border-white dark:border-gray-200 text-white dark:text-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 dark:hover:bg-white/5 transform hover:scale-105 transition-all inline-flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {getTranslation(selectedLanguage, 'conferenceSection6Button2')}
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-2">
                <AnimatedCounter end={500} suffix="+" duration={2500} color="text-white font-bold" />
              </div>
              <div className="text-gray-200 dark:text-gray-300">
                {getTranslation(selectedLanguage, 'conferenceSection6Stat1Number')}
              </div>
            </div>
            <div>
              <div className="text-4xl mb-2">
                <AnimatedCounter end={50} suffix="K+" duration={2500} color="text-white font-bold" />
              </div>
              <div className="text-gray-200 dark:text-gray-300">
                {getTranslation(selectedLanguage, 'conferenceSection6Stat2Number')}
              </div>
            </div>
            <div>
              <div className="text-4xl mb-2">
                <AnimatedCounter end={30} suffix="+" duration={2000} color="text-white font-bold" />
              </div>
              <div className="text-gray-200 dark:text-gray-300">
                {getTranslation(selectedLanguage, 'conferenceSection6Stat3Number')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConferenceManagement;
