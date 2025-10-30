import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';

const BlogPost2 = () => {
  const { selectedLanguage } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    {
      id: 1,
      category: 'immersive',
      icon: '🥽',
      titleKey: 'blogPost2Tech1Title',
      taglineKey: 'blogPost2Tech1Tagline',
      gradient: 'from-purple-600 via-pink-600 to-red-600',
      descriptionKey: 'blogPost2Tech1Description',
      featureKeys: ['blogPost2Tech1Feature1', 'blogPost2Tech1Feature2', 'blogPost2Tech1Feature3', 'blogPost2Tech1Feature4'],
      stats: { adoption: '340%', satisfaction: '94%' },
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&h=800&fit=crop&q=90'
    },
    {
      id: 2,
      category: 'intelligence',
      icon: '🤖',
      titleKey: 'blogPost2Tech2Title',
      taglineKey: 'blogPost2Tech2Tagline',
      gradient: 'from-blue-600 via-cyan-600 to-teal-600',
      descriptionKey: 'blogPost2Tech2Description',
      featureKeys: ['blogPost2Tech2Feature1', 'blogPost2Tech2Feature2', 'blogPost2Tech2Feature3', 'blogPost2Tech2Feature4'],
      stats: { connections: '5x more', efficiency: '87%' },
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop&q=90'
    },
    {
      id: 3,
      category: 'mobile',
      icon: '📱',
      titleKey: 'blogPost2Tech3Title',
      taglineKey: 'blogPost2Tech3Tagline',
      gradient: 'from-green-600 via-emerald-600 to-teal-600',
      descriptionKey: 'blogPost2Tech3Description',
      featureKeys: ['blogPost2Tech3Feature1', 'blogPost2Tech3Feature2', 'blogPost2Tech3Feature3', 'blogPost2Tech3Feature4'],
      stats: { engagement: '92%', downloads: '98%' },
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop&q=90'
    },
    {
      id: 4,
      category: 'streaming',
      icon: '📡',
      titleKey: 'blogPost2Tech4Title',
      taglineKey: 'blogPost2Tech4Tagline',
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      descriptionKey: 'blogPost2Tech4Description',
      featureKeys: ['blogPost2Tech4Feature1', 'blogPost2Tech4Feature2', 'blogPost2Tech4Feature3', 'blogPost2Tech4Feature4'],
      stats: { reach: '10x larger', cost: '60% less' },
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&h=800&fit=crop&q=90'
    },
    {
      id: 5,
      category: 'intelligence',
      icon: '📊',
      titleKey: 'blogPost2Tech5Title',
      taglineKey: 'blogPost2Tech5Tagline',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      descriptionKey: 'blogPost2Tech5Description',
      featureKeys: ['blogPost2Tech5Feature1', 'blogPost2Tech5Feature2', 'blogPost2Tech5Feature3', 'blogPost2Tech5Feature4'],
      stats: { insights: '250+', accuracy: '99%' },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=90'
    },
    {
      id: 6,
      category: 'immersive',
      icon: '👤',
      titleKey: 'blogPost2Tech6Title',
      taglineKey: 'blogPost2Tech6Tagline',
      gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
      descriptionKey: 'blogPost2Tech6Description',
      featureKeys: ['blogPost2Tech6Feature1', 'blogPost2Tech6Feature2', 'blogPost2Tech6Feature3', 'blogPost2Tech6Feature4'],
      stats: { impact: '500%', memorability: '96%' },
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=800&fit=crop&q=90'
    }
  ];

  const categories = [
    { id: 'all', labelKey: 'blogPost2CategoryAll', icon: '🚀', count: 6 },
    { id: 'immersive', labelKey: 'blogPost2CategoryImmersive', icon: '🥽', count: 2 },
    { id: 'intelligence', labelKey: 'blogPost2CategoryIntelligence', icon: '🤖', count: 2 },
    { id: 'mobile', labelKey: 'blogPost2CategoryMobile', icon: '📱', count: 1 },
    { id: 'streaming', labelKey: 'blogPost2CategoryStreaming', icon: '📡', count: 1 }
  ];

  const filteredTech = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
      {/* Section 1: Futuristic Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Tech Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20 dark:opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-indigo-500 dark:bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-white/60 dark:text-white/50 text-sm mb-8">
            <Link to="/" className="hover:text-white transition">{getTranslation(selectedLanguage, 'blogPost2Breadcrumb1')}</Link>
            <span>→</span>
            <Link to="/blog" className="hover:text-white transition">{getTranslation(selectedLanguage, 'blogPost2Breadcrumb2')}</Link>
            <span>→</span>
            <span className="text-white font-semibold">{getTranslation(selectedLanguage, 'blogPost2Breadcrumb3')}</span>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              {getTranslation(selectedLanguage, 'blogPost2Badge1')}
            </span>
            <span className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold">
              {getTranslation(selectedLanguage, 'blogPost2Badge2')}
            </span>
            <span className="bg-green-500/20 dark:bg-green-500/30 border border-green-400/30 dark:border-green-400/40 text-green-200 dark:text-green-100 px-5 py-2 rounded-full text-sm font-semibold">
              {getTranslation(selectedLanguage, 'blogPost2Badge3')}
            </span>
          </div>

          {/* Main Title with Glitch Effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            {getTranslation(selectedLanguage, 'blogPost2Title1')}
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 dark:from-cyan-300 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent mt-2">
              {getTranslation(selectedLanguage, 'blogPost2Title2')}
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl mt-4">{getTranslation(selectedLanguage, 'blogPost2Title3')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 dark:text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            {getTranslation(selectedLanguage, 'blogPost2Subtitle')}
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { valueKey: 'blogPost2Stat1Value', labelKey: 'blogPost2Stat1Label' },
              { valueKey: 'blogPost2Stat2Value', labelKey: 'blogPost2Stat2Label' },
              { valueKey: 'blogPost2Stat3Value', labelKey: 'blogPost2Stat3Label' },
              { valueKey: 'blogPost2Stat4Value', labelKey: 'blogPost2Stat4Label' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-4">
                <div className="text-3xl font-black text-white mb-1">{getTranslation(selectedLanguage, stat.valueKey)}</div>
                <div className="text-xs text-white/70 dark:text-white/60">{getTranslation(selectedLanguage, stat.labelKey)}</div>
              </div>
            ))}
          </div>

          {/* Author Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-4 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full px-6 py-3">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt={getTranslation(selectedLanguage, 'blogPost2Author')}
                className="w-14 h-14 rounded-full border-3 border-white shadow-lg"
              />
              <div className="text-left">
                <p className="font-bold text-white text-lg">{getTranslation(selectedLanguage, 'blogPost2Author')}</p>
                <p className="text-sm text-white/80 dark:text-white/70">{getTranslation(selectedLanguage, 'blogPost2AuthorTitle')}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-white/80 dark:text-white/70">
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span className="text-sm">{getTranslation(selectedLanguage, 'blogPost2Date')}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <span>⏱️</span>
                <span className="text-sm">{getTranslation(selectedLanguage, 'blogPost2ReadTime')}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <span>👁️</span>
                <span className="text-sm">{getTranslation(selectedLanguage, 'blogPost2Views')}</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('tech-section').scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              {getTranslation(selectedLanguage, 'blogPost2ExploreButton')}
              <span className="inline-block ml-2 group-hover:translate-x-1 transition">→</span>
            </button>
            <button className="bg-white/10 dark:bg-white/5 backdrop-blur-md border-2 border-white/30 dark:border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 dark:hover:bg-white/10 transition">
              <span className="mr-2">📥</span>
              {getTranslation(selectedLanguage, 'blogPost2DownloadButton')}
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-white/50 dark:text-white/40">
              <span className="text-xs font-semibold">{getTranslation(selectedLanguage, 'blogPost2ScrollText')}</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Introduction & Tech Landscape */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-bold mb-6">
                {getTranslation(selectedLanguage, 'blogPost2Section2Badge')}
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                {getTranslation(selectedLanguage, 'blogPost2Section2Title1')}
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {getTranslation(selectedLanguage, 'blogPost2Section2Title2')}
                </span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed">
                  {getTranslation(selectedLanguage, 'blogPost2Section2Intro1')}
                </p>
                
                <p className="leading-relaxed">
                  {getTranslation(selectedLanguage, 'blogPost2Section2Intro2')}
                </p>

                <p className="leading-relaxed">
                  {getTranslation(selectedLanguage, 'blogPost2Section2Intro3')} <strong className="text-indigo-600 dark:text-indigo-400">{getTranslation(selectedLanguage, 'blogPost2Section2Highlight1')}</strong> {getTranslation(selectedLanguage, 'blogPost2Section2Intro4')} <strong className="text-indigo-600 dark:text-indigo-400">{getTranslation(selectedLanguage, 'blogPost2Section2Highlight2')}</strong> {getTranslation(selectedLanguage, 'blogPost2Section2Intro5')}
                </p>
              </div>

              {/* Quick Facts */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-2xl font-black text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'blogPost2Section2Fact1Value')}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'blogPost2Section2Fact1Label')}</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl">
                  <div className="text-4xl mb-2">💡</div>
                  <div className="text-2xl font-black text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'blogPost2Section2Fact2Value')}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'blogPost2Section2Fact2Label')}</div>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=1200&fit=crop&q=95"
                  alt="Conference Technology"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div>
                    <div className="font-black text-2xl text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'blogPost2Section2Card1Value')}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'blogPost2Section2Card1Label')}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {getTranslation(selectedLanguage, 'blogPost2Section2Card1Text')}
                </p>
              </div>

              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 shadow-2xl text-white max-w-xs">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-bold text-lg mb-1">{getTranslation(selectedLanguage, 'blogPost2Section2Card2Title')}</div>
                <div className="text-sm opacity-90">{getTranslation(selectedLanguage, 'blogPost2Section2Card2Text')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Technology Categories Showcase */}
      <section id="tech-section" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-purple-900/20 dark:to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              {getTranslation(selectedLanguage, 'blogPost2Section3Title1')}
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {getTranslation(selectedLanguage, 'blogPost2Section3Title2')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'blogPost2Section3Subtitle')}
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-bold transition transform hover:scale-105 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-lg'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {getTranslation(selectedLanguage, cat.labelKey)}
                <span className="ml-2 text-xs opacity-75">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTech.map((tech) => (
              <div
                key={tech.id}
                onMouseEnter={() => setHoveredTech(tech.id)}
                onMouseLeave={() => setHoveredTech(null)}
                className="group cursor-pointer"
              >
                <div className={`bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                  hoveredTech === tech.id ? 'ring-4 ring-purple-500' : ''
                }`}>
                  {/* Card Header */}
                  <div className="relative h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-90`}></div>
                    <img 
                      src={tech.image}
                      alt={getTranslation(selectedLanguage, tech.titleKey)}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/95 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-xl transform group-hover:scale-110 transition">
                        {tech.icon}
                      </div>
                    </div>

                    {/* Stats Badges */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      {Object.entries(tech.stats).map(([key, value]) => (
                        <div key={key} className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                          <div className="text-xs font-bold text-gray-900">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-2 uppercase tracking-wide">
                      {getTranslation(selectedLanguage, tech.taglineKey)}
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                      {getTranslation(selectedLanguage, tech.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {getTranslation(selectedLanguage, tech.descriptionKey)}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      <div className="font-bold text-sm text-gray-900 dark:text-white mb-2">
                        {getTranslation(selectedLanguage, 'blogPost2TechKeyFeatures')}
                      </div>
                      {tech.featureKeys.map((featureKey, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                          <div className={`bg-gradient-to-r ${tech.gradient} w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0`}></div>
                          <span>{getTranslation(selectedLanguage, featureKey)}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More */}
                    <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg transition transform group-hover:scale-105">
                      {getTranslation(selectedLanguage, 'blogPost2TechExploreButton')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Case Studies & Real Results */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'blogPost2Section4Title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {getTranslation(selectedLanguage, 'blogPost2Section4Subtitle')}
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-12">
            {/* Case Study 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-bold mb-4">
                  {getTranslation(selectedLanguage, 'blogPost2Case1Badge')}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                  {getTranslation(selectedLanguage, 'blogPost2Case1Title')}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {getTranslation(selectedLanguage, 'blogPost2Case1Description')}
                </p>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">{getTranslation(selectedLanguage, 'blogPost2Case1Stat1Value')}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'blogPost2Case1Stat1Label')}</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-purple-600 dark:text-purple-400 mb-2">{getTranslation(selectedLanguage, 'blogPost2Case1Stat2Value')}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'blogPost2Case1Stat2Label')}</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-green-600 dark:text-green-400 mb-2">{getTranslation(selectedLanguage, 'blogPost2Case1Stat3Value')}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'blogPost2Case1Stat3Label')}</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-orange-600 dark:text-orange-400 mb-2">{getTranslation(selectedLanguage, 'blogPost2Case1Stat4Value')}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'blogPost2Case1Stat4Label')}</div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 dark:text-gray-300">
                  {getTranslation(selectedLanguage, 'blogPost2Case1Quote')}
                  <footer className="text-sm text-gray-500 dark:text-gray-400 mt-2">{getTranslation(selectedLanguage, 'blogPost2Case1QuoteAuthor')}</footer>
                </blockquote>
              </div>

              <div className="order-2 lg:order-1">
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=900&fit=crop&q=95"
                    alt="TechCon 2024"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=900&fit=crop&q=95"
                    alt="Global Summit"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-sm font-bold mb-4">
                  {getTranslation(selectedLanguage, 'blogPost2Case2Badge')}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
                  {getTranslation(selectedLanguage, 'blogPost2Case2Title')}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {getTranslation(selectedLanguage, 'blogPost2Case2Description')}
                </p>

                {/* Results */}
                <div className="space-y-4 mb-6">
                  {[
                    { labelKey: 'blogPost2Case2Item1Label', valueKey: 'blogPost2Case2Item1Value', icon: '👥', color: 'from-blue-500 to-cyan-500' },
                    { labelKey: 'blogPost2Case2Item2Label', valueKey: 'blogPost2Case2Item2Value', icon: '💻', color: 'from-purple-500 to-pink-500' },
                    { labelKey: 'blogPost2Case2Item3Label', valueKey: 'blogPost2Case2Item3Value', icon: '🌍', color: 'from-green-500 to-emerald-500' },
                    { labelKey: 'blogPost2Case2Item4Label', valueKey: 'blogPost2Case2Item4Value', icon: '💰', color: 'from-orange-500 to-red-500' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
                      <div className={`bg-gradient-to-r ${item.color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, item.labelKey)}</div>
                        <div className="text-2xl font-black text-gray-900 dark:text-white">{getTranslation(selectedLanguage, item.valueKey)}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-purple-600 pl-6 italic text-gray-700 dark:text-gray-300">
                  {getTranslation(selectedLanguage, 'blogPost2Case2Quote')}
                  <footer className="text-sm text-gray-500 dark:text-gray-400 mt-2">{getTranslation(selectedLanguage, 'blogPost2Case2QuoteAuthor')}</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Implementation Roadmap */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              {getTranslation(selectedLanguage, 'blogPost2Section5Title1')}
              <span className="block bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
                {getTranslation(selectedLanguage, 'blogPost2Section5Title2')}
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {getTranslation(selectedLanguage, 'blogPost2Section5Subtitle')}
            </p>
          </div>

          {/* Implementation Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                stepKey: 'blogPost2Step1Number',
                titleKey: 'blogPost2Step1Title',
                descriptionKey: 'blogPost2Step1Description',
                icon: '🎯',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                stepKey: 'blogPost2Step2Number',
                titleKey: 'blogPost2Step2Title',
                descriptionKey: 'blogPost2Step2Description',
                icon: '💰',
                color: 'from-purple-500 to-pink-500'
              },
              {
                stepKey: 'blogPost2Step3Number',
                titleKey: 'blogPost2Step3Title',
                descriptionKey: 'blogPost2Step3Description',
                icon: '🤝',
                color: 'from-green-500 to-emerald-500'
              },
              {
                stepKey: 'blogPost2Step4Number',
                titleKey: 'blogPost2Step4Title',
                descriptionKey: 'blogPost2Step4Description',
                icon: '✅',
                color: 'from-orange-500 to-red-500'
              },
              {
                stepKey: 'blogPost2Step5Number',
                titleKey: 'blogPost2Step5Title',
                descriptionKey: 'blogPost2Step5Description',
                icon: '📊',
                color: 'from-pink-500 to-rose-500'
              }
            ].map((item, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="relative mb-6">
                  <div className={`bg-gradient-to-br ${item.color} w-20 h-20 rounded-2xl mx-auto flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition duration-300 shadow-2xl`}>
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shadow-lg">
                    {getTranslation(selectedLanguage, item.stepKey)}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3 group-hover:text-cyan-300 transition">{getTranslation(selectedLanguage, item.titleKey)}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{getTranslation(selectedLanguage, item.descriptionKey)}</p>
                
                {/* Arrow (except last item) */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-10 left-full w-8 text-white/30 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link 
              to="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105"
            >
              {getTranslation(selectedLanguage, 'blogPost2Section5CTAButton')}
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Author Bio & Related Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Author Section */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 text-center lg:text-left">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt={getTranslation(selectedLanguage, 'blogPost2Section6AuthorName')}
                  className="w-32 h-32 rounded-2xl border-4 border-white dark:border-gray-800 shadow-xl mx-auto lg:mx-0 mb-4"
                />
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'blogPost2Section6AuthorName')}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-4">{getTranslation(selectedLanguage, 'blogPost2Section6AuthorTitle')}</p>
                <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                  <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-bold text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'blogPost2Section6AuthorBadge1')}</span>
                  <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-bold text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'blogPost2Section6AuthorBadge2')}</span>
                  <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-bold text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'blogPost2Section6AuthorBadge3')}</span>
                </div>
              </div>

              <div className="lg:col-span-2">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {getTranslation(selectedLanguage, 'blogPost2Section6AuthorBio')}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition">
                    {getTranslation(selectedLanguage, 'blogPost2Section6FollowButton')}
                  </button>
                  <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition">
                    {getTranslation(selectedLanguage, 'blogPost2Section6ArticlesButton')}
                  </button>
                  <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition">
                    {getTranslation(selectedLanguage, 'blogPost2Section6ConsultButton')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-8 text-center">
              {getTranslation(selectedLanguage, 'blogPost2Section6RelatedTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  titleKey: 'blogPost2Section6Post1Title',
                  categoryKey: 'blogPost2Section6Post1Category',
                  image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop&q=90',
                  link: '/blog/post1',
                  gradient: 'from-blue-500 to-cyan-500',
                  readTimeKey: 'blogPost2Section6Post1ReadTime'
                },
                {
                  titleKey: 'blogPost2Section6Post2Title',
                  categoryKey: 'blogPost2Section6Post2Category',
                  image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop&q=90',
                  link: '/blog/post3',
                  gradient: 'from-pink-500 to-rose-500',
                  readTimeKey: 'blogPost2Section6Post2ReadTime'
                },
                {
                  titleKey: 'blogPost2Section6Post3Title',
                  categoryKey: 'blogPost2Section6Post3Category',
                  image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop&q=90',
                  link: '/blog',
                  gradient: 'from-purple-500 to-indigo-500',
                  readTimeKey: 'blogPost2Section6Post3ReadTime'
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
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition mb-4 line-clamp-2">
                      {getTranslation(selectedLanguage, post.titleKey)}
                    </h4>
                    <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                      {getTranslation(selectedLanguage, 'blogPost2Section6ReadMore')}
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 dark:opacity-30">
              <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400 dark:bg-cyan-600 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-400 dark:bg-pink-600 rounded-full filter blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                {getTranslation(selectedLanguage, 'blogPost2Section6FinalCTATitle')}
              </h3>
              <p className="text-xl mb-8 opacity-90 dark:opacity-80 max-w-2xl mx-auto">
                {getTranslation(selectedLanguage, 'blogPost2Section6FinalCTASubtitle')}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link 
                  to="/contact"
                  className="bg-white text-indigo-600 dark:bg-gray-200 dark:text-indigo-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 dark:hover:bg-gray-300 transition transform hover:scale-105 shadow-2xl"
                >
                  {getTranslation(selectedLanguage, 'blogPost2Section6FinalCTAButton1')}
                </Link>
                <Link 
                  to="/services"
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-md border-2 border-white/30 dark:border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 dark:hover:bg-white/10 transition"
                >
                  {getTranslation(selectedLanguage, 'blogPost2Section6FinalCTAButton2')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogPost2;
