import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';

const BlogPost3 = () => {
  const { selectedLanguage } = useLanguage();
  const [activePhase, setActivePhase] = useState('all');
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const timelinePhases = [
    {
      id: 'phase1',
      phaseKey: 'blogPost3Section3Phase1Name',
      titleKey: 'blogPost3Section3Phase1Title',
      icon: '💭',
      gradient: 'from-pink-500 to-rose-500',
      tasks: [
        { id: 't1', taskKey: 'blogPost3Section3Task1', priority: 'high' },
        { id: 't2', taskKey: 'blogPost3Section3Task2', priority: 'high' },
        { id: 't3', taskKey: 'blogPost3Section3Task3', priority: 'high' },
        { id: 't4', taskKey: 'blogPost3Section3Task4', priority: 'medium' },
        { id: 't5', taskKey: 'blogPost3Section3Task5', priority: 'low' },
        { id: 't6', taskKey: 'blogPost3Section3Task6', priority: 'medium' }
      ],
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop&q=95'
    },
    {
      id: 'phase2',
      phaseKey: 'blogPost3Section3Phase2Name',
      titleKey: 'blogPost3Section3Phase2Title',
      icon: '📍',
      gradient: 'from-purple-500 to-pink-500',
      tasks: [
        { id: 't7', taskKey: 'blogPost3Section3Task7', priority: 'high' },
        { id: 't8', taskKey: 'blogPost3Section3Task8', priority: 'high' },
        { id: 't9', taskKey: 'blogPost3Section3Task9', priority: 'high' },
        { id: 't10', taskKey: 'blogPost3Section3Task10', priority: 'high' },
        { id: 't11', taskKey: 'blogPost3Section3Task11', priority: 'medium' },
        { id: 't12', taskKey: 'blogPost3Section3Task12', priority: 'high' }
      ],
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop&q=95'
    },
    {
      id: 'phase3',
      phaseKey: 'blogPost3Section3Phase3Name',
      titleKey: 'blogPost3Section3Phase3Title',
      icon: '🎨',
      gradient: 'from-indigo-500 to-purple-500',
      tasks: [
        { id: 't13', taskKey: 'blogPost3Section3Task13', priority: 'high' },
        { id: 't14', taskKey: 'blogPost3Section3Task14', priority: 'high' },
        { id: 't15', taskKey: 'blogPost3Section3Task15', priority: 'medium' },
        { id: 't16', taskKey: 'blogPost3Section3Task16', priority: 'medium' },
        { id: 't17', taskKey: 'blogPost3Section3Task17', priority: 'medium' },
        { id: 't18', taskKey: 'blogPost3Section3Task18', priority: 'low' }
      ],
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&h=800&fit=crop&q=95'
    },
    {
      id: 'phase4',
      phaseKey: 'blogPost3Section3Phase4Name',
      titleKey: 'blogPost3Section3Phase4Title',
      icon: '✅',
      gradient: 'from-blue-500 to-indigo-500',
      tasks: [
        { id: 't19', taskKey: 'blogPost3Section3Task19', priority: 'high' },
        { id: 't20', taskKey: 'blogPost3Section3Task20', priority: 'high' },
        { id: 't21', taskKey: 'blogPost3Section3Task21', priority: 'medium' },
        { id: 't22', taskKey: 'blogPost3Section3Task22', priority: 'medium' },
        { id: 't23', taskKey: 'blogPost3Section3Task23', priority: 'high' },
        { id: 't24', taskKey: 'blogPost3Section3Task24', priority: 'high' }
      ],
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop&q=95'
    },
    {
      id: 'phase5',
      phaseKey: 'blogPost3Section3Phase5Name',
      titleKey: 'blogPost3Section3Phase5Title',
      icon: '⏰',
      gradient: 'from-cyan-500 to-blue-500',
      tasks: [
        { id: 't25', taskKey: 'blogPost3Section3Task25', priority: 'high' },
        { id: 't26', taskKey: 'blogPost3Section3Task26', priority: 'high' },
        { id: 't27', taskKey: 'blogPost3Section3Task27', priority: 'high' },
        { id: 't28', taskKey: 'blogPost3Section3Task28', priority: 'high' },
        { id: 't29', taskKey: 'blogPost3Section3Task29', priority: 'high' },
        { id: 't30', taskKey: 'blogPost3Section3Task30', priority: 'medium' }
      ],
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop&q=95'
    },
    {
      id: 'phase6',
      phaseKey: 'blogPost3Section3Phase6Name',
      titleKey: 'blogPost3Section3Phase6Title',
      icon: '💒',
      gradient: 'from-rose-500 to-pink-500',
      tasks: [
        { id: 't31', taskKey: 'blogPost3Section3Task31', priority: 'high' },
        { id: 't32', taskKey: 'blogPost3Section3Task32', priority: 'medium' },
        { id: 't33', taskKey: 'blogPost3Section3Task33', priority: 'high' },
        { id: 't34', taskKey: 'blogPost3Section3Task34', priority: 'high' },
        { id: 't35', taskKey: 'blogPost3Section3Task35', priority: 'high' },
        { id: 't36', taskKey: 'blogPost3Section3Task36', priority: 'high' }
      ],
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=800&fit=crop&q=95'
    }
  ];

  const budgetCategories = [
    { category: 'Venue & Catering', percentage: 40, amount: 12000, icon: '🏛️', color: 'from-pink-500 to-rose-500' },
    { category: 'Photography & Video', percentage: 12, amount: 3600, icon: '📸', color: 'from-purple-500 to-pink-500' },
    { category: 'Attire & Beauty', percentage: 10, amount: 3000, icon: '👗', color: 'from-indigo-500 to-purple-500' },
    { category: 'Flowers & Decor', percentage: 10, amount: 3000, icon: '💐', color: 'from-blue-500 to-indigo-500' },
    { category: 'Music & Entertainment', percentage: 10, amount: 3000, icon: '🎵', color: 'from-cyan-500 to-blue-500' },
    { category: 'Invitations & Stationery', percentage: 3, amount: 900, icon: '💌', color: 'from-green-500 to-cyan-500' },
    { category: 'Wedding Cake', percentage: 5, amount: 1500, icon: '🎂', color: 'from-orange-500 to-pink-500' },
    { category: 'Miscellaneous & Buffer', percentage: 10, amount: 3000, icon: '🎁', color: 'from-rose-500 to-pink-500' }
  ];

  const expertTips = [
    {
      id: 1,
      titleKey: 'blogPost3Section5Tip1Title',
      tipKey: 'blogPost3Section5Tip1Content',
      impactKey: 'blogPost3Section5Tip1Impact',
      icon: '🎯',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      titleKey: 'blogPost3Section5Tip2Title',
      tipKey: 'blogPost3Section5Tip2Content',
      impactKey: 'blogPost3Section5Tip2Impact',
      icon: '📋',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      titleKey: 'blogPost3Section5Tip3Title',
      tipKey: 'blogPost3Section5Tip3Content',
      impactKey: 'blogPost3Section5Tip3Impact',
      icon: '☔',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 4,
      titleKey: 'blogPost3Section5Tip4Title',
      tipKey: 'blogPost3Section5Tip4Content',
      impactKey: 'blogPost3Section5Tip4Impact',
      icon: '🤝',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      id: 5,
      titleKey: 'blogPost3Section5Tip5Title',
      tipKey: 'blogPost3Section5Tip5Content',
      impactKey: 'blogPost3Section5Tip5Impact',
      icon: '💑',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 6,
      titleKey: 'blogPost3Section5Tip6Title',
      tipKey: 'blogPost3Section5Tip6Content',
      impactKey: 'blogPost3Section5Tip6Impact',
      icon: '✨',
      gradient: 'from-rose-500 to-pink-500'
    }
  ];

  const filteredPhases = activePhase === 'all' 
    ? timelinePhases 
    : timelinePhases.filter(p => p.id === activePhase);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
      {/* Section 1: Romantic Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with floating hearts animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-700 dark:from-rose-900 dark:via-pink-900 dark:to-purple-950"></div>
          
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
            <source src="/videos/marraige checklist-bg.mp4" type="video/mp4" />
          </video>
          
          {/* Floating elements */}
          <div className="absolute inset-0 opacity-20 dark:opacity-30" style={{ zIndex: 2 }}>
            <div className="absolute top-20 left-20 text-6xl animate-pulse">💕</div>
            <div className="absolute top-40 right-32 text-4xl animate-pulse" style={{animationDelay: '1s'}}>💐</div>
            <div className="absolute bottom-32 left-40 text-5xl animate-pulse" style={{animationDelay: '2s'}}>💍</div>
            <div className="absolute bottom-20 right-20 text-4xl animate-pulse" style={{animationDelay: '1.5s'}}>✨</div>
          </div>

          {/* Gradient orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-30 animate-pulse" style={{ zIndex: 2 }}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-400 dark:bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-30 animate-pulse" style={{animationDelay: '2s', zIndex: 2}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-30 animate-pulse" style={{animationDelay: '4s', zIndex: 2}}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-white/70 dark:text-white/60 text-sm mb-8">
            <Link to="/" className="hover:text-white transition">{getTranslation(selectedLanguage, 'blogPost3Breadcrumb1')}</Link>
            <span>→</span>
            <Link to="/blog" className="hover:text-white transition">{getTranslation(selectedLanguage, 'blogPost3Breadcrumb2')}</Link>
            <span>→</span>
            <span className="text-white font-semibold">{getTranslation(selectedLanguage, 'blogPost3Breadcrumb3')}</span>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 dark:from-pink-600 dark:to-rose-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              {getTranslation(selectedLanguage, 'blogPost3CategoryBadge')}
            </span>
            <span className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold">
              {getTranslation(selectedLanguage, 'blogPost3PopularBadge')}
            </span>
            <span className="bg-rose-500/20 dark:bg-rose-500/30 border border-rose-400/30 dark:border-rose-400/40 text-rose-100 px-5 py-2 rounded-full text-sm font-semibold">
              {getTranslation(selectedLanguage, 'blogPost3GuideBadge')}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            {getTranslation(selectedLanguage, 'blogPost3Title1')}
            <span className="block bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 dark:from-pink-300 dark:via-rose-300 dark:to-purple-300 bg-clip-text text-transparent mt-2">
              {getTranslation(selectedLanguage, 'blogPost3Title2')}
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-4">{getTranslation(selectedLanguage, 'blogPost3Title3')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 dark:text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            {getTranslation(selectedLanguage, 'blogPost3Subtitle')}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { icon: getTranslation(selectedLanguage, 'blogPost3Stat1Icon'), value: getTranslation(selectedLanguage, 'blogPost3Stat1Value'), label: getTranslation(selectedLanguage, 'blogPost3Stat1Label') },
              { icon: getTranslation(selectedLanguage, 'blogPost3Stat2Icon'), value: getTranslation(selectedLanguage, 'blogPost3Stat2Value'), label: getTranslation(selectedLanguage, 'blogPost3Stat2Label') },
              { icon: getTranslation(selectedLanguage, 'blogPost3Stat3Icon'), value: getTranslation(selectedLanguage, 'blogPost3Stat3Value'), label: getTranslation(selectedLanguage, 'blogPost3Stat3Label') },
              { icon: getTranslation(selectedLanguage, 'blogPost3Stat4Icon'), value: getTranslation(selectedLanguage, 'blogPost3Stat4Value'), label: getTranslation(selectedLanguage, 'blogPost3Stat4Label') }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-4">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-white/70 dark:text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Author Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full px-6 py-3">
              <img 
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt={getTranslation(selectedLanguage, 'blogPost3Author')}
                className="w-14 h-14 rounded-full border-3 border-white shadow-lg"
              />
              <div className="text-left">
                <p className="font-bold text-white text-lg">{getTranslation(selectedLanguage, 'blogPost3Author')}</p>
                <p className="text-sm text-white/80 dark:text-white/70">{getTranslation(selectedLanguage, 'blogPost3AuthorTitle')}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-white/80 dark:text-white/70">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span className="text-sm">{getTranslation(selectedLanguage, 'blogPost3Date')}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <span>⏱️</span>
                <span className="text-sm">{getTranslation(selectedLanguage, 'blogPost3ReadTime')}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <span>👁️</span>
                <span className="text-sm">{getTranslation(selectedLanguage, 'blogPost3Views')}</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('checklist-section').scrollIntoView({ behavior: 'smooth' })}
              className="group bg-white text-rose-600 dark:bg-gray-200 dark:text-rose-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 dark:hover:bg-gray-300 transition transform hover:scale-105 shadow-2xl"
            >
              {getTranslation(selectedLanguage, 'blogPost3ViewChecklistButton')}
              <span className="inline-block ml-2 group-hover:translate-x-1 transition">→</span>
            </button>
            <button className="bg-white/10 dark:bg-white/5 backdrop-blur-md border-2 border-white/30 dark:border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 dark:hover:bg-white/10 transition">
              <span className="mr-2">📥</span>
              {getTranslation(selectedLanguage, 'blogPost3DownloadButton')}
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-white/50 dark:text-white/40">
              <span className="text-xs font-semibold">{getTranslation(selectedLanguage, 'blogPost3ScrollText')}</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Introduction & Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Featured Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=1200&fit=crop&q=95"
                    alt="Wedding Planning"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                {/* Floating Quote Card */}
                <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-rose-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      💝
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 italic">
                        {getTranslation(selectedLanguage, 'blogPost3Section2Quote')}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{getTranslation(selectedLanguage, 'blogPost3Section2QuoteAuthor')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-bold mb-6">
                {getTranslation(selectedLanguage, 'blogPost3Section2Badge')}
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                {getTranslation(selectedLanguage, 'blogPost3Section2Title1')}
                <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  {getTranslation(selectedLanguage, 'blogPost3Section2Title2')}
                </span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed">
                  {getTranslation(selectedLanguage, 'blogPost3Section2Intro1')}
                </p>
                
                <p className="leading-relaxed">
                  {getTranslation(selectedLanguage, 'blogPost3Section2Intro2')}
                </p>

                <p className="leading-relaxed">
                  <strong className="text-rose-600 dark:text-rose-400">{getTranslation(selectedLanguage, 'blogPost3Section2ProTip')}</strong> {getTranslation(selectedLanguage, 'blogPost3Section2Intro3')}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-2xl">
                  <div className="text-4xl mb-2">📋</div>
                  <div className="text-xl font-black text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'blogPost3Section2Benefit1Value')}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'blogPost3Section2Benefit1Label')}</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl">
                  <div className="text-4xl mb-2">⏰</div>
                  <div className="text-xl font-black text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'blogPost3Section2Benefit2Value')}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'blogPost3Section2Benefit2Label')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Timeline Checklist */}
      <section id="checklist-section" className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 dark:from-pink-900/10 dark:via-rose-900/10 dark:to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              {getTranslation(selectedLanguage, 'blogPost3Section3Title1')}
              <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                {getTranslation(selectedLanguage, 'blogPost3Section3Title2')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'blogPost3Section3Subtitle')}
            </p>
          </div>

          {/* Phase Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={() => setActivePhase('all')}
              className={`px-6 py-3 rounded-full font-bold transition transform hover:scale-105 ${
                activePhase === 'all'
                  ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-xl'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-lg'
              }`}
            >
              {getTranslation(selectedLanguage, 'blogPost3Section3AllPhases')}
            </button>
            {timelinePhases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition transform hover:scale-105 ${
                  activePhase === phase.id
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-xl'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                }`}
              >
                <span className="mr-1">{phase.icon}</span>
                {getTranslation(selectedLanguage, phase.phaseKey)}
              </button>
            ))}
          </div>

          {/* Timeline Cards */}
          <div className="space-y-8">
            {filteredPhases.map((phase, phaseIndex) => (
              <div key={phase.id} className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Phase Header with Image */}
                  <div className="relative lg:col-span-1 h-64 lg:h-auto">
                    <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-80`}></div>
                    <img 
                      src={phase.image}
                      alt={getTranslation(selectedLanguage, phase.titleKey)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                      <div className="text-6xl mb-4">{phase.icon}</div>
                      <div className="text-sm font-bold opacity-90 mb-2">{getTranslation(selectedLanguage, phase.phaseKey)}</div>
                      <h3 className="text-3xl font-black">{getTranslation(selectedLanguage, phase.titleKey)}</h3>
                      <div className="mt-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                        {phase.tasks.length} {getTranslation(selectedLanguage, 'blogPost3Section3TasksLabel')}
                      </div>
                    </div>
                  </div>

                  {/* Tasks List */}
                  <div className="lg:col-span-2 p-8">
                    <div className="space-y-3">
                      {phase.tasks.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => toggleCheck(item.id)}
                          className={`group flex items-center gap-4 p-4 rounded-xl cursor-pointer transition ${
                            checkedItems[item.id]
                              ? 'bg-green-50 dark:bg-green-900/20'
                              : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                          }`}
                        >
                          {/* Checkbox */}
                          <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition ${
                            checkedItems[item.id]
                              ? 'bg-green-500 border-green-500'
                              : 'border-gray-300 dark:border-gray-600 group-hover:border-rose-500'
                          }`}>
                            {checkedItems[item.id] && (
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>

                          {/* Task Text */}
                          <div className="flex-1">
                            <p className={`font-semibold ${
                              checkedItems[item.id]
                                ? 'text-gray-500 dark:text-gray-400 line-through'
                                : 'text-gray-900 dark:text-white'
                            }`}>
                              {getTranslation(selectedLanguage, item.taskKey)}
                            </p>
                          </div>

                          {/* Priority Badge */}
                          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                            item.priority === 'high'
                              ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                              : item.priority === 'medium'
                              ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}>
                            {item.priority === 'high' ? getTranslation(selectedLanguage, 'blogPost3Section3PriorityHigh') : item.priority === 'medium' ? getTranslation(selectedLanguage, 'blogPost3Section3PriorityMedium') : getTranslation(selectedLanguage, 'blogPost3Section3PriorityLow')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Budget Breakdown */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'blogPost3Section4Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
              {getTranslation(selectedLanguage, 'blogPost3Section4Subtitle1')} <span className="font-bold text-rose-600 dark:text-rose-400">{getTranslation(selectedLanguage, 'blogPost3Section4Subtitle2')}</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {getTranslation(selectedLanguage, 'blogPost3Section4Subtitle3')}
            </p>
          </div>

          {/* Budget Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {budgetCategories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${category.color} dark:opacity-90 rounded-3xl p-6 text-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2`}>
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{getTranslation(selectedLanguage, `blogPost3Section4Category${index + 1}`)}</h3>
                  <div className="flex items-end justify-between mb-3">
                    <div className="text-4xl font-black">{category.percentage}%</div>
                    <div className="text-xl font-bold opacity-90">${category.amount.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/20 dark:bg-white/30 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-white h-full rounded-full transition-all duration-1000"
                      style={{width: `${category.percentage * 2}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Budget Tips */}
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-3xl p-8">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              {getTranslation(selectedLanguage, 'blogPost3Section4TipsTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { tipKey: 'blogPost3Section4Tip1', icon: '🎯' },
                { tipKey: 'blogPost3Section4Tip2', icon: '💝' },
                { tipKey: 'blogPost3Section4Tip3', icon: '📅' },
                { tipKey: 'blogPost3Section4Tip4', icon: '💰' },
                { tipKey: 'blogPost3Section4Tip5', icon: '✨' },
                { tipKey: 'blogPost3Section4Tip6', icon: '📱' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{getTranslation(selectedLanguage, item.tipKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Expert Tips Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50 dark:from-gray-800 dark:to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'blogPost3Section5Title1')}
              <span className="block bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                {getTranslation(selectedLanguage, 'blogPost3Section5Title2')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {getTranslation(selectedLanguage, 'blogPost3Section5Subtitle')}
            </p>
          </div>

          {/* Tips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertTips.map((tip) => (
              <div key={tip.id} className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3">
                  {/* Card Header */}
                  <div className={`bg-gradient-to-br ${tip.gradient} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-5xl">{tip.icon}</div>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                        {getTranslation(selectedLanguage, tip.impactKey)}
                      </div>
                    </div>
                    <h3 className="text-2xl font-black">{getTranslation(selectedLanguage, tip.titleKey)}</h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {getTranslation(selectedLanguage, tip.tipKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Download CTA & Related Resources */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main CTA */}
          <div className="bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 dark:from-rose-900 dark:via-pink-900 dark:to-purple-900 rounded-3xl p-12 md:p-16 text-center mb-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 dark:opacity-30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 dark:bg-pink-600 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300 dark:bg-purple-600 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-6">📥</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                {getTranslation(selectedLanguage, 'blogPost3Section6CTATitle')}
              </h2>
              <p className="text-xl text-white/90 dark:text-white/80 mb-8 max-w-2xl mx-auto">
                {getTranslation(selectedLanguage, 'blogPost3Section6CTASubtitle')}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button className="bg-white text-rose-600 dark:bg-gray-200 dark:text-rose-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 dark:hover:bg-gray-300 transition transform hover:scale-105 shadow-2xl">
                  <span className="mr-2">📄</span>
                  {getTranslation(selectedLanguage, 'blogPost3Section6CTAButton1')}
                </button>
                <button className="bg-white/10 dark:bg-white/5 backdrop-blur-md border-2 border-white/30 dark:border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 dark:hover:bg-white/10 transition">
                  <span className="mr-2">✉️</span>
                  {getTranslation(selectedLanguage, 'blogPost3Section6CTAButton2')}
                </button>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-3xl p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <img 
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt={getTranslation(selectedLanguage, 'blogPost3Section6AuthorName')}
                  className="w-32 h-32 rounded-2xl border-4 border-white dark:border-gray-800 shadow-xl mx-auto lg:mx-0 mb-4"
                />
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'blogPost3Section6AuthorName')}</h3>
                <p className="text-rose-600 dark:text-rose-400 font-semibold mb-4">{getTranslation(selectedLanguage, 'blogPost3Section6AuthorTitle')}</p>
                <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                  <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-bold">{getTranslation(selectedLanguage, 'blogPost3Section6AuthorBadge1')}</span>
                  <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-bold">{getTranslation(selectedLanguage, 'blogPost3Section6AuthorBadge2')}</span>
                  <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-bold">{getTranslation(selectedLanguage, 'blogPost3Section6AuthorBadge3')}</span>
                </div>
              </div>

              <div className="lg:col-span-2">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {getTranslation(selectedLanguage, 'blogPost3Section6AuthorBio')}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    to="/services/wedding-planning"
                    className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition"
                  >
                    {getTranslation(selectedLanguage, 'blogPost3Section6Button1')}
                  </Link>
                  <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition">
                    {getTranslation(selectedLanguage, 'blogPost3Section6Button2')}
                  </button>
                  <Link 
                    to="/contact"
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition"
                  >
                    {getTranslation(selectedLanguage, 'blogPost3Section6Button3')}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 text-center">
              {getTranslation(selectedLanguage, 'blogPost3Section6RelatedTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  titleKey: 'blogPost3Section6Post1Title',
                  categoryKey: 'blogPost3Section6Post1Category',
                  readTimeKey: 'blogPost3Section6Post1ReadTime',
                  image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop&q=90',
                  link: '/blog/post1',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  titleKey: 'blogPost3Section6Post2Title',
                  categoryKey: 'blogPost3Section6Post2Category',
                  readTimeKey: 'blogPost3Section6Post2ReadTime',
                  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop&q=90',
                  link: '/blog/post2',
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  titleKey: 'blogPost3Section6Post3Title',
                  categoryKey: 'blogPost3Section6Post3Category',
                  readTimeKey: 'blogPost3Section6Post3ReadTime',
                  image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&h=800&fit=crop&q=90',
                  link: '/blog',
                  gradient: 'from-orange-500 to-red-500'
                }
              ].map((post, index) => (
                <Link 
                  key={index}
                  to={post.link}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={getTranslation(selectedLanguage, post.titleKey)}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-50`}></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-900 dark:text-white px-3 py-1.5 rounded-full text-xs font-bold">
                        {getTranslation(selectedLanguage, post.categoryKey)}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-black/50 dark:bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                        ⏱️ {getTranslation(selectedLanguage, post.readTimeKey)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition mb-4 line-clamp-2">
                      {getTranslation(selectedLanguage, post.titleKey)}
                    </h4>
                    <div className="flex items-center text-rose-600 dark:text-rose-400 font-bold text-sm">
                      {getTranslation(selectedLanguage, 'blogPost3Section6ReadArticle')}
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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

export default BlogPost3;
