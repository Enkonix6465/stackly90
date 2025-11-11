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
    <div ref={counterRef} className={`text-4xl font-bold mb-2 ${color}`}>
      {count}{suffix}
    </div>
  );
};

const About = () => {
  const { selectedLanguage } = useLanguage();

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Section 1: Hero with Timeline */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            opacity: 0.35
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/70 via-purple-600/70 to-pink-600/70 dark:from-indigo-900/85 dark:via-purple-900/85 dark:to-pink-900/85"></div>
        <div className="absolute inset-0 bg-black opacity-10 dark:opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideInDown">
              {getTranslation(selectedLanguage, 'ourJourney')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-200 max-w-3xl mx-auto animate-slideInUp">
              {getTranslation(selectedLanguage, 'journeySubtitle')}
            </p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center hover-lift">
              <div className="w-20 h-20 bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30 dark:border-white/20">
                <span className="text-3xl font-bold">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{getTranslation(selectedLanguage, 'timeline1999')}</h3>
              <p className="text-gray-100 dark:text-gray-200">{getTranslation(selectedLanguage, 'timeline1999Desc')}</p>
            </div>
            <div className="text-center hover-lift">
              <div className="w-20 h-20 bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30 dark:border-white/20">
                <span className="text-3xl font-bold">🚀</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{getTranslation(selectedLanguage, 'timeline2010')}</h3>
              <p className="text-gray-100 dark:text-gray-200">{getTranslation(selectedLanguage, 'timeline2010Desc')}</p>
            </div>
            <div className="text-center hover-lift">
              <div className="w-20 h-20 bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30 dark:border-white/20">
                <span className="text-3xl font-bold">🏆</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{getTranslation(selectedLanguage, 'timeline2018')}</h3>
              <p className="text-gray-100 dark:text-gray-200">{getTranslation(selectedLanguage, 'timeline2018Desc')}</p>
            </div>
            <div className="text-center hover-lift">
              <div className="w-20 h-20 bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30 dark:border-white/20">
                <span className="text-3xl font-bold">💎</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{getTranslation(selectedLanguage, 'timeline2025')}</h3>
              <p className="text-gray-100 dark:text-gray-200">{getTranslation(selectedLanguage, 'timeline2025Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Company Overview with Stats */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {getTranslation(selectedLanguage, 'whoWeAre')}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {getTranslation(selectedLanguage, 'whoWeAreDesc1')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {getTranslation(selectedLanguage, 'whoWeAreDesc2')}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-6 rounded-2xl">
                  <AnimatedCounter end={500} suffix="+" duration={6500} color="text-purple-600 dark:text-purple-300" />
                  <div className="text-gray-700 dark:text-gray-300 font-medium">{getTranslation(selectedLanguage, 'eventsDelivered')}</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 p-6 rounded-2xl">
                  <AnimatedCounter end={200} suffix="K+" duration={5500} color="text-blue-600 dark:text-blue-300" />
                  <div className="text-gray-700 dark:text-gray-300 font-medium">{getTranslation(selectedLanguage, 'happyAttendeesAbout')}</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 p-6 rounded-2xl">
                  <AnimatedCounter end={50} suffix="+" duration={5000} color="text-green-600 dark:text-green-300" />
                  <div className="text-gray-700 dark:text-gray-300 font-medium">{getTranslation(selectedLanguage, 'countriesServed')}</div>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 p-6 rounded-2xl">
                  <AnimatedCounter end={99} suffix="%" duration={5500} color="text-orange-600 dark:text-orange-300" />
                  <div className="text-gray-700 dark:text-gray-300 font-medium">{getTranslation(selectedLanguage, 'clientSatisfaction')}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass p-8 rounded-3xl shadow-2xl hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop" 
                  alt="Team Meeting" 
                  className="rounded-2xl w-full h-96 object-cover mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'premiumQuality')}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'premiumQualityDesc')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'fastExecution')}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'fastExecutionDesc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission & Vision Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'ourPurpose')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getTranslation(selectedLanguage, 'purposeSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{getTranslation(selectedLanguage, 'ourMission')}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {getTranslation(selectedLanguage, 'missionDesc')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'missionPoint1')}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'missionPoint2')}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'missionPoint3')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{getTranslation(selectedLanguage, 'ourVision')}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {getTranslation(selectedLanguage, 'visionDesc')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'visionPoint1')}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'visionPoint2')}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'visionPoint3')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Leadership Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'leadershipTeam')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getTranslation(selectedLanguage, 'leadershipTeamSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Leader 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/75.jpg" 
                  alt="David Miller" 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{getTranslation(selectedLanguage, 'leader1Name')}</h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{getTranslation(selectedLanguage, 'leader1Title')}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'leader1Desc')}</p>
            </div>

            {/* Leader 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/90.jpg" 
                  alt="Jennifer Adams" 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{getTranslation(selectedLanguage, 'leader2Name')}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{getTranslation(selectedLanguage, 'leader2Title')}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'leader2Desc')}</p>
            </div>

            {/* Leader 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/46.jpg" 
                  alt="Robert Chen" 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{getTranslation(selectedLanguage, 'leader3Name')}</h3>
              <p className="text-green-600 dark:text-green-400 font-medium mb-2">{getTranslation(selectedLanguage, 'leader3Title')}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'leader3Desc')}</p>
            </div>

            {/* Leader 4 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/65.jpg" 
                  alt="Maria Garcia" 
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/30 transition">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{getTranslation(selectedLanguage, 'leader4Name')}</h3>
              <p className="text-pink-600 dark:text-pink-400 font-medium mb-2">{getTranslation(selectedLanguage, 'leader4Title')}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'leader4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Awards & Recognition */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'awardsRecognition')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getTranslation(selectedLanguage, 'awardsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Award 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-lift text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'award1Title')}</h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">{getTranslation(selectedLanguage, 'award1Year')}</p>
              <p className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'award1Org')}</p>
            </div>

            {/* Award 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-lift text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'award2Title')}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{getTranslation(selectedLanguage, 'award2Year')}</p>
              <p className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'award2Org')}</p>
            </div>

            {/* Award 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-lift text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'award3Title')}</h3>
              <p className="text-green-600 dark:text-green-400 font-semibold mb-3">{getTranslation(selectedLanguage, 'award3Year')}</p>
              <p className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'award3Org')}</p>
            </div>

            {/* Award 4 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-lift text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'award4Title')}</h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">{getTranslation(selectedLanguage, 'award4Year')}</p>
              <p className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'award4Org')}</p>
            </div>

            {/* Award 5 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-lift text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">🎖️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'award5Title')}</h3>
              <p className="text-red-600 dark:text-red-400 font-semibold mb-3">{getTranslation(selectedLanguage, 'award5Year')}</p>
              <p className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'award5Org')}</p>
            </div>

            {/* Award 6 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-lift text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-5xl">🥇</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'award6Title')}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">{getTranslation(selectedLanguage, 'award6Year')}</p>
              <p className="text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'award6Org')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Call to Action with Contact Form Preview */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 dark:from-purple-900 dark:via-pink-900 dark:to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20 dark:opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                {getTranslation(selectedLanguage, 'ctaTitle')}
              </h2>
              <p className="text-xl mb-8 text-gray-100 dark:text-gray-200 leading-relaxed">
                {getTranslation(selectedLanguage, 'ctaDescription')}
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'callUs')}</p>
                    <p className="text-lg font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'emailUs')}</p>
                    <p className="text-lg font-semibold">info@stackly.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'visitUs')}</p>
                    <p className="text-lg font-semibold">123 Event Plaza, NY 10001</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="inline-block bg-white text-purple-600 dark:bg-gray-200 dark:text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all shadow-2xl"
              >
                {getTranslation(selectedLanguage, 'getInTouch')}
              </Link>
            </div>

            <div className="glass p-8 rounded-3xl shadow-2xl hover-lift">
              <h3 className="text-2xl font-bold mb-6">{getTranslation(selectedLanguage, 'quickInquiry')}</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder={getTranslation(selectedLanguage, 'yourName')}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 text-white placeholder-gray-300 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder={getTranslation(selectedLanguage, 'emailAddress')}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 text-white placeholder-gray-300 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder={getTranslation(selectedLanguage, 'eventType')} 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 text-white placeholder-gray-300 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <textarea 
                    rows="4" 
                    placeholder={getTranslation(selectedLanguage, 'tellUsAboutEvent')}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 text-white placeholder-gray-300 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-white text-purple-600 dark:bg-gray-200 dark:text-purple-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all"
                >
                  {getTranslation(selectedLanguage, 'sendMessage')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
