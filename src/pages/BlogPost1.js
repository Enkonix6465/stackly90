import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';

const BlogPost1 = () => {
  const { selectedLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedTip, setSelectedTip] = useState(null);

  const tips = [
    {
      id: 1,
      icon: '🎯',
      titleKey: 'blogPost1Tip1Title',
      descKey: 'blogPost1Tip1Desc',
      category: 'planning',
      gradient: 'from-blue-500 to-cyan-500',
      detailKeys: ['blogPost1Tip1Detail1', 'blogPost1Tip1Detail2', 'blogPost1Tip1Detail3', 'blogPost1Tip1Detail4'],
      statKey: 'blogPost1Tip1Stat',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'
    },
    {
      id: 2,
      icon: '💰',
      titleKey: 'blogPost1Tip2Title',
      descKey: 'blogPost1Tip2Desc',
      category: 'planning',
      gradient: 'from-green-500 to-emerald-500',
      detailKeys: ['blogPost1Tip2Detail1', 'blogPost1Tip2Detail2', 'blogPost1Tip2Detail3', 'blogPost1Tip2Detail4'],
      statKey: 'blogPost1Tip2Stat',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800'
    },
    {
      id: 3,
      icon: '📍',
      titleKey: 'blogPost1Tip3Title',
      descKey: 'blogPost1Tip3Desc',
      category: 'execution',
      gradient: 'from-purple-500 to-pink-500',
      detailKeys: ['blogPost1Tip3Detail1', 'blogPost1Tip3Detail2', 'blogPost1Tip3Detail3', 'blogPost1Tip3Detail4'],
      statKey: 'blogPost1Tip3Stat',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800'
    },
    {
      id: 4,
      icon: '🎨',
      titleKey: 'blogPost1Tip4Title',
      descKey: 'blogPost1Tip4Desc',
      category: 'execution',
      gradient: 'from-orange-500 to-red-500',
      detailKeys: ['blogPost1Tip4Detail1', 'blogPost1Tip4Detail2', 'blogPost1Tip4Detail3', 'blogPost1Tip4Detail4'],
      statKey: 'blogPost1Tip4Stat',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800'
    },
    {
      id: 5,
      icon: '📱',
      titleKey: 'blogPost1Tip5Title',
      descKey: 'blogPost1Tip5Desc',
      category: 'technology',
      gradient: 'from-indigo-500 to-purple-500',
      detailKeys: ['blogPost1Tip5Detail1', 'blogPost1Tip5Detail2', 'blogPost1Tip5Detail3', 'blogPost1Tip5Detail4'],
      statKey: 'blogPost1Tip5Stat',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800'
    },
    {
      id: 6,
      icon: '📢',
      titleKey: 'blogPost1Tip6Title',
      descKey: 'blogPost1Tip6Desc',
      category: 'marketing',
      gradient: 'from-pink-500 to-rose-500',
      detailKeys: ['blogPost1Tip6Detail1', 'blogPost1Tip6Detail2', 'blogPost1Tip6Detail3', 'blogPost1Tip6Detail4'],
      statKey: 'blogPost1Tip6Stat',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800'
    },
    {
      id: 7,
      icon: '🤝',
      titleKey: 'blogPost1Tip7Title',
      descKey: 'blogPost1Tip7Desc',
      category: 'marketing',
      gradient: 'from-cyan-500 to-blue-500',
      detailKeys: ['blogPost1Tip7Detail1', 'blogPost1Tip7Detail2', 'blogPost1Tip7Detail3', 'blogPost1Tip7Detail4'],
      statKey: 'blogPost1Tip7Stat',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800'
    },
    {
      id: 8,
      icon: '✅',
      titleKey: 'blogPost1Tip8Title',
      descKey: 'blogPost1Tip8Desc',
      category: 'execution',
      gradient: 'from-teal-500 to-green-500',
      detailKeys: ['blogPost1Tip8Detail1', 'blogPost1Tip8Detail2', 'blogPost1Tip8Detail3', 'blogPost1Tip8Detail4'],
      statKey: 'blogPost1Tip8Stat',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800'
    },
    {
      id: 9,
      icon: '🌟',
      titleKey: 'blogPost1Tip9Title',
      descKey: 'blogPost1Tip9Desc',
      category: 'execution',
      gradient: 'from-violet-500 to-purple-500',
      detailKeys: ['blogPost1Tip9Detail1', 'blogPost1Tip9Detail2', 'blogPost1Tip9Detail3', 'blogPost1Tip9Detail4'],
      statKey: 'blogPost1Tip9Stat',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800'
    },
    {
      id: 10,
      icon: '📊',
      titleKey: 'blogPost1Tip10Title',
      descKey: 'blogPost1Tip10Desc',
      category: 'technology',
      gradient: 'from-amber-500 to-orange-500',
      detailKeys: ['blogPost1Tip10Detail1', 'blogPost1Tip10Detail2', 'blogPost1Tip10Detail3', 'blogPost1Tip10Detail4'],
      statKey: 'blogPost1Tip10Stat',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
    }
  ];

  const categories = [
    { id: 'all', labelKey: 'blogPost1CategoryAll', icon: '🎯', count: 10 },
    { id: 'planning', labelKey: 'blogPost1CategoryPlanning', icon: '📋', count: 2 },
    { id: 'execution', labelKey: 'blogPost1CategoryExecution', icon: '⚡', count: 4 },
    { id: 'technology', labelKey: 'blogPost1CategoryTechnology', icon: '💻', count: 2 },
    { id: 'marketing', labelKey: 'blogPost1CategoryMarketing', icon: '📢', count: 2 }
  ];

  const filteredTips = activeTab === 'all' ? tips : tips.filter(tip => tip.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
      {/* Section 1: Immersive Hero with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-950"></div>
          
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.8, zIndex: 1 }}
            onError={(e) => {
              console.error('Video failed to load');
              e.target.style.display = 'none';
            }}
          >
            <source src="/videos/EventHandling-bg.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{ zIndex: 2 }}>
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-white/70 dark:text-white/60 text-sm mb-8">
            <Link to="/" className="hover:text-white transition">{getTranslation(selectedLanguage, 'blogPost1Breadcrumb1')}</Link>
            <span>→</span>
            <Link to="/blog" className="hover:text-white transition">{getTranslation(selectedLanguage, 'blogPost1Breadcrumb2')}</Link>
            <span>→</span>
            <span className="text-white font-semibold">{getTranslation(selectedLanguage, 'blogPost1Breadcrumb3')}</span>
          </nav>

          {/* Category Badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
              {getTranslation(selectedLanguage, 'blogPost1CategoryBadge')}
            </span>
            <span className="bg-green-500/20 dark:bg-green-500/30 backdrop-blur-md border border-green-400/30 dark:border-green-400/40 text-green-100 px-4 py-2 rounded-full text-sm font-semibold">
              {getTranslation(selectedLanguage, 'blogPost1TrendingBadge')}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            {getTranslation(selectedLanguage, 'blogPost1Title1')}
            <span className="block bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-300 dark:from-cyan-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent mt-2">
              {getTranslation(selectedLanguage, 'blogPost1Title2')}
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-4">{getTranslation(selectedLanguage, 'blogPost1Title3')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 dark:text-white/80 mb-10 max-w-3xl mx-auto">
            {getTranslation(selectedLanguage, 'blogPost1Subtitle')}
          </p>

          {/* Author & Meta Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full px-6 py-3">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt={getTranslation(selectedLanguage, 'blogPost1Author')}
                className="w-12 h-12 rounded-full border-3 border-white shadow-lg"
              />
              <div className="text-left">
                <p className="font-bold text-white">{getTranslation(selectedLanguage, 'blogPost1Author')}</p>
                <p className="text-sm text-white/80 dark:text-white/70">{getTranslation(selectedLanguage, 'blogPost1AuthorTitle')}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-white/90 dark:text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📅</span>
                <span className="text-sm font-medium">{getTranslation(selectedLanguage, 'blogPost1Date')}</span>
              </div>
              <span className="text-white/50 dark:text-white/40">•</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                <span className="text-sm font-medium">{getTranslation(selectedLanguage, 'blogPost1ReadTime')}</span>
              </div>
              <span className="text-white/50 dark:text-white/40">•</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">👁️</span>
                <span className="text-sm font-medium">{getTranslation(selectedLanguage, 'blogPost1Views')}</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('tips-section').scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white text-indigo-600 dark:bg-gray-200 dark:text-indigo-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition transform hover:scale-105 shadow-2xl"
            >
              {getTranslation(selectedLanguage, 'blogPost1StartButton')}
              <span className="inline-block ml-2 group-hover:translate-x-1 transition">→</span>
            </button>
            <button className="bg-white/10 dark:bg-white/5 backdrop-blur-md border-2 border-white/30 dark:border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 dark:hover:bg-white/10 transition transform hover:scale-105">
              <span className="mr-2">⬇️</span>
              {getTranslation(selectedLanguage, 'blogPost1DownloadButton')}
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Introduction & Key Stats */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Introduction Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {getTranslation(selectedLanguage, 'blogPost1Section2Title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {getTranslation(selectedLanguage, 'blogPost1Section2Intro1')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {getTranslation(selectedLanguage, 'blogPost1Section2Intro2')}
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-6 rounded-2xl text-white">
                  <div className="text-4xl font-black mb-2">{getTranslation(selectedLanguage, 'blogPost1Stat1Value')}</div>
                  <div className="text-sm opacity-90">{getTranslation(selectedLanguage, 'blogPost1Stat1Label')}</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl text-white">
                  <div className="text-4xl font-black mb-2">{getTranslation(selectedLanguage, 'blogPost1Stat2Value')}</div>
                  <div className="text-sm opacity-90">{getTranslation(selectedLanguage, 'blogPost1Stat2Label')}</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-2xl text-white">
                  <div className="text-4xl font-black mb-2">{getTranslation(selectedLanguage, 'blogPost1Stat3Value')}</div>
                  <div className="text-sm opacity-90">{getTranslation(selectedLanguage, 'blogPost1Stat3Label')}</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-2xl text-white">
                  <div className="text-4xl font-black mb-2">{getTranslation(selectedLanguage, 'blogPost1Stat4Value')}</div>
                  <div className="text-sm opacity-90">{getTranslation(selectedLanguage, 'blogPost1Stat4Label')}</div>
                </div>
              </div>
            </div>

            {/* Featured Image with Overlay */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=1000&fit=crop"
                  alt="Event Planning"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                    <div>
                      <div className="text-2xl font-black text-gray-900">{getTranslation(selectedLanguage, 'blogPost1Rating')}</div>
                      <div className="text-xs text-gray-600">{getTranslation(selectedLanguage, 'blogPost1RatingLabel')}</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Quote */}
                <div className="absolute bottom-6 left-6 right-6">
                  <blockquote className="text-white">
                    <p className="text-lg font-semibold mb-2">{getTranslation(selectedLanguage, 'blogPost1Quote')}</p>
                    <footer className="text-sm text-white/80">{getTranslation(selectedLanguage, 'blogPost1QuoteAuthor')}</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Tips Navigator */}
      <section id="tips-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-indigo-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'blogPost1Section3Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'blogPost1Section3Subtitle')}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition transform hover:scale-105 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {getTranslation(selectedLanguage, category.labelKey)}
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">{category.count}</span>
              </button>
            ))}
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTips.map((tip, index) => (
              <div
                key={tip.id}
                className="group cursor-pointer"
                onClick={() => setSelectedTip(tip.id === selectedTip ? null : tip.id)}
              >
                <div className={`bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 ${
                  selectedTip === tip.id ? 'ring-4 ring-indigo-500' : ''
                }`}>
                  {/* Card Header with Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tip.gradient} opacity-90`}></div>
                    <img 
                      src={tip.image}
                      alt={getTranslation(selectedLanguage, tip.titleKey)}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    
                    {/* Icon & Number Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-3">
                      <div className="bg-white/95 backdrop-blur-sm w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                        {tip.icon}
                      </div>
                      <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                        {getTranslation(selectedLanguage, 'blogPost1TipNumber')}{tip.id}
                      </div>
                    </div>

                    {/* Stat Badge */}
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                      <div className="text-xs font-bold text-gray-900">{getTranslation(selectedLanguage, tip.statKey)}</div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                      {getTranslation(selectedLanguage, tip.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {getTranslation(selectedLanguage, tip.descKey)}
                    </p>

                    {/* Expandable Details */}
                    <div className={`transition-all duration-300 ${
                      selectedTip === tip.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      <div className={`border-t border-gray-200 dark:border-gray-700 pt-4 mt-4`}>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <span className="text-indigo-600">✓</span>
                          {getTranslation(selectedLanguage, 'blogPost1KeyActions')}
                        </h4>
                        <ul className="space-y-2">
                          {tip.detailKeys.map((detailKey, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                              <span className={`bg-gradient-to-r ${tip.gradient} w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0`}></span>
                              <span>{getTranslation(selectedLanguage, detailKey)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Expand Button */}
                    <button className="mt-4 w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-xl font-semibold text-sm transition">
                      {selectedTip === tip.id ? getTranslation(selectedLanguage, 'blogPost1ShowLess') : getTranslation(selectedLanguage, 'blogPost1LearnMore')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Timeline & Process Flow */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'blogPost1Section4Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {getTranslation(selectedLanguage, 'blogPost1Section4Subtitle')}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  phaseKey: 'blogPost1Timeline1Phase',
                  titleKey: 'blogPost1Timeline1Title',
                  icon: '🎯',
                  color: 'from-blue-500 to-cyan-500',
                  taskKeys: ['blogPost1Timeline1Task1', 'blogPost1Timeline1Task2', 'blogPost1Timeline1Task3', 'blogPost1Timeline1Task4']
                },
                {
                  phaseKey: 'blogPost1Timeline2Phase',
                  titleKey: 'blogPost1Timeline2Title',
                  icon: '📋',
                  color: 'from-purple-500 to-pink-500',
                  taskKeys: ['blogPost1Timeline2Task1', 'blogPost1Timeline2Task2', 'blogPost1Timeline2Task3', 'blogPost1Timeline2Task4']
                },
                {
                  phaseKey: 'blogPost1Timeline3Phase',
                  titleKey: 'blogPost1Timeline3Title',
                  icon: '⚡',
                  color: 'from-green-500 to-emerald-500',
                  taskKeys: ['blogPost1Timeline3Task1', 'blogPost1Timeline3Task2', 'blogPost1Timeline3Task3', 'blogPost1Timeline3Task4']
                },
                {
                  phaseKey: 'blogPost1Timeline4Phase',
                  titleKey: 'blogPost1Timeline4Title',
                  icon: '✨',
                  color: 'from-orange-500 to-red-500',
                  taskKeys: ['blogPost1Timeline4Task1', 'blogPost1Timeline4Task2', 'blogPost1Timeline4Task3', 'blogPost1Timeline4Task4']
                },
                {
                  phaseKey: 'blogPost1Timeline5Phase',
                  titleKey: 'blogPost1Timeline5Title',
                  icon: '🎉',
                  color: 'from-pink-500 to-rose-500',
                  taskKeys: ['blogPost1Timeline5Task1', 'blogPost1Timeline5Task2', 'blogPost1Timeline5Task3', 'blogPost1Timeline5Task4']
                },
                {
                  phaseKey: 'blogPost1Timeline6Phase',
                  titleKey: 'blogPost1Timeline6Title',
                  icon: '📊',
                  color: 'from-indigo-500 to-purple-500',
                  taskKeys: ['blogPost1Timeline6Task1', 'blogPost1Timeline6Task2', 'blogPost1Timeline6Task3', 'blogPost1Timeline6Task4']
                }
              ].map((item, index) => (
                <div key={index} className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                    <div className={`bg-gradient-to-br ${item.color} dark:opacity-90 p-8 rounded-3xl text-white shadow-xl transform hover:scale-105 transition duration-300`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-5xl">{item.icon}</div>
                        <div className={index % 2 === 0 ? 'text-left lg:text-right' : 'text-left'}>
                          <div className="text-sm font-semibold opacity-90">{getTranslation(selectedLanguage, item.phaseKey)}</div>
                          <h3 className="text-2xl font-black">{getTranslation(selectedLanguage, item.titleKey)}</h3>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {item.taskKeys.map((taskKey, idx) => (
                          <li key={idx} className={`flex items-center gap-3 ${
                            index % 2 === 0 ? 'lg:flex-row-reverse lg:justify-end' : ''
                          }`}>
                            <span className="bg-white/20 w-2 h-2 rounded-full"></span>
                            <span className="text-sm">{getTranslation(selectedLanguage, taskKey)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`bg-gradient-to-br ${item.color} w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 shadow-lg`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Expert Insights & Resources */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-15">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Author Bio */}
            <div>
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl p-8">
                <div className="flex items-center gap-6 mb-6">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt={getTranslation(selectedLanguage, 'blogPost1Section5AuthorName')}
                    className="w-24 h-24 rounded-2xl border-4 border-white shadow-xl"
                  />
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{getTranslation(selectedLanguage, 'blogPost1Section5AuthorName')}</h3>
                    <p className="text-white/80 dark:text-white/70 mb-2">{getTranslation(selectedLanguage, 'blogPost1Section5AuthorTitle')}</p>
                    <div className="flex items-center gap-2">
                      <span className="bg-white/20 dark:bg-white/10 px-3 py-1 rounded-full text-xs font-semibold">{getTranslation(selectedLanguage, 'blogPost1Section5AuthorBadge1')}</span>
                      <span className="bg-white/20 dark:bg-white/10 px-3 py-1 rounded-full text-xs font-semibold">{getTranslation(selectedLanguage, 'blogPost1Section5AuthorBadge2')}</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/90 dark:text-white/80 mb-6 leading-relaxed">
                  {getTranslation(selectedLanguage, 'blogPost1Section5AuthorBio')}
                </p>
                <div className="flex gap-3">
                  <button className="bg-white text-indigo-600 dark:bg-gray-200 dark:text-indigo-700 px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition">
                    {getTranslation(selectedLanguage, 'blogPost1Section5FollowButton')}
                  </button>
                  <button className="bg-white/10 dark:bg-white/5 border-2 border-white/30 dark:border-white/20 px-6 py-3 rounded-xl font-bold hover:bg-white/20 dark:hover:bg-white/10 transition">
                    {getTranslation(selectedLanguage, 'blogPost1Section5ArticlesButton')}
                  </button>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-3xl font-black mb-8">{getTranslation(selectedLanguage, 'blogPost1Section5ResourcesTitle')}</h3>
              <div className="space-y-4">
                {[
                  { titleKey: 'blogPost1Section5Resource1Title', icon: '📋', typeKey: 'blogPost1Section5Resource1Type' },
                  { titleKey: 'blogPost1Section5Resource2Title', icon: '💰', typeKey: 'blogPost1Section5Resource2Type' },
                  { titleKey: 'blogPost1Section5Resource3Title', icon: '📄', typeKey: 'blogPost1Section5Resource3Type' },
                  { titleKey: 'blogPost1Section5Resource4Title', icon: '📊', typeKey: 'blogPost1Section5Resource4Type' }
                ].map((resource, index) => (
                  <div key={index} className="bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-2xl p-6 hover:bg-white/20 dark:hover:bg-white/10 transition cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{resource.icon}</div>
                        <div>
                          <h4 className="font-bold text-lg group-hover:text-cyan-300 dark:group-hover:text-cyan-400 transition">{getTranslation(selectedLanguage, resource.titleKey)}</h4>
                          <p className="text-sm text-white/70 dark:text-white/60">{getTranslation(selectedLanguage, resource.typeKey)}</p>
                        </div>
                      </div>
                      <svg className="w-6 h-6 text-white/50 dark:text-white/40 group-hover:text-white group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA & Related Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main CTA */}
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 rounded-3xl p-12 md:p-16 text-center mb-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 dark:opacity-30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-400 dark:bg-pink-600 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 dark:bg-cyan-600 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                {getTranslation(selectedLanguage, 'blogPost1Section6CTATitle')}
              </h2>
              <p className="text-xl text-white/90 dark:text-white/80 mb-8 max-w-2xl mx-auto">
                {getTranslation(selectedLanguage, 'blogPost1Section6CTASubtitle')}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link 
                  to="/contact"
                  className="bg-white text-indigo-600 dark:bg-gray-200 dark:text-indigo-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 dark:hover:bg-gray-300 transition transform hover:scale-105 shadow-2xl"
                >
                  {getTranslation(selectedLanguage, 'blogPost1Section6CTAButton1')}
                </Link>
                <Link 
                  to="/services"
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-md border-2 border-white/30 dark:border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 dark:hover:bg-white/10 transition transform hover:scale-105"
                >
                  {getTranslation(selectedLanguage, 'blogPost1Section6CTAButton2')}
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div>
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-8">{getTranslation(selectedLanguage, 'blogPost1Section6RelatedTitle')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  titleKey: 'blogPost1Section6Post1Title',
                  categoryKey: 'blogPost1Section6Post1Category',
                  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
                  link: '/blog/post2',
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  titleKey: 'blogPost1Section6Post2Title',
                  categoryKey: 'blogPost1Section6Post2Category',
                  image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
                  link: '/blog/post3',
                  gradient: 'from-pink-500 to-rose-500'
                },
                {
                  titleKey: 'blogPost1Section6Post3Title',
                  categoryKey: 'blogPost1Section6Post3Category',
                  image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600',
                  link: '/blog',
                  gradient: 'from-green-500 to-emerald-500'
                }
              ].map((post, index) => (
                <Link 
                  key={index}
                  to={post.link}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={getTranslation(selectedLanguage, post.titleKey)}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-40`}></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                        {getTranslation(selectedLanguage, post.categoryKey)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition mb-3">
                      {getTranslation(selectedLanguage, post.titleKey)}
                    </h4>
                    <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                      {getTranslation(selectedLanguage, 'blogPost1Section6ReadArticle')}
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogPost1;
