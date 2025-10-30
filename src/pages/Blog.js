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
    <div ref={counterRef} className={`text-4xl md:text-5xl font-bold mb-2 ${color}`}>
      {count}{suffix}
    </div>
  );
};

const Blog = () => {
  const { selectedLanguage } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      titleKey: 'blogPost1Title',
      excerptKey: 'blogPost1Excerpt',
      categoryKey: 'blogPost1Category',
      authorKey: 'blogPost1Author',
      dateKey: 'blogPost1Date',
      readTimeKey: 'blogPost1ReadTime',
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop",
      link: "/blog/post1"
    },
    {
      id: 2,
      titleKey: 'blogPost2Title',
      excerptKey: 'blogPost2Excerpt',
      categoryKey: 'blogPost2Category',
      authorKey: 'blogPost2Author',
      dateKey: 'blogPost2Date',
      readTimeKey: 'blogPost2ReadTime',
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
      link: "/blog/post2"
    },
    {
      id: 3,
      titleKey: 'blogPost3Title',
      excerptKey: 'blogPost3Excerpt',
      categoryKey: 'blogPost3Category',
      authorKey: 'blogPost3Author',
      dateKey: 'blogPost3Date',
      readTimeKey: 'blogPost3ReadTime',
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop",
      link: "/blog/post3"
    },
    {
      id: 4,
      titleKey: 'blogPost4Title',
      excerptKey: 'blogPost4Excerpt',
      categoryKey: 'blogPost4Category',
      authorKey: 'blogPost4Author',
      dateKey: 'blogPost4Date',
      readTimeKey: 'blogPost4ReadTime',
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop",
      link: "/blog"
    },
    {
      id: 5,
      titleKey: 'blogPost5Title',
      excerptKey: 'blogPost5Excerpt',
      categoryKey: 'blogPost5Category',
      authorKey: 'blogPost5Author',
      dateKey: 'blogPost5Date',
      readTimeKey: 'blogPost5ReadTime',
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop",
      link: "/blog"
    },
    {
      id: 6,
      titleKey: 'blogPost6Title',
      excerptKey: 'blogPost6Excerpt',
      categoryKey: 'blogPost6Category',
      authorKey: 'blogPost6Author',
      dateKey: 'blogPost6Date',
      readTimeKey: 'blogPost6ReadTime',
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop",
      link: "/blog"
    }
  ];

  const categories = [
    { key: 'categoryAll', value: 'All' },
    { key: 'categoryEventPlanning', value: 'Event Planning' },
    { key: 'categoryTechnology', value: 'Technology' },
    { key: 'categoryWeddingPlanning', value: 'Wedding Planning' },
    { key: 'categorySustainability', value: 'Sustainability' },
    { key: 'categoryCorporateEvents', value: 'Corporate Events' },
    { key: 'categoryMarketing', value: 'Marketing' }
  ];

  const featuredPosts = blogPosts.slice(0, 3);
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => getTranslation(selectedLanguage, post.categoryKey) === selectedCategory);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Section 1: Hero Section with Search */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20 dark:opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideInDown">
              {getTranslation(selectedLanguage, 'blogHeroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-200 max-w-3xl mx-auto mb-8 animate-slideInUp">
              {getTranslation(selectedLanguage, 'blogHeroSubtitle')}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto animate-scaleIn">
              <div className="relative">
                <input
                  type="text"
                  placeholder={getTranslation(selectedLanguage, 'searchPlaceholder')}
                  className="w-full px-6 py-4 pr-12 rounded-full text-gray-900 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 text-lg focus:outline-none focus:ring-4 focus:ring-white/50 dark:focus:ring-gray-600 shadow-2xl"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white p-3 rounded-full transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center hover-lift">
              <AnimatedCounter end={200} suffix="+" duration={2500} color="text-white" />
              <div className="text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'articlesPublished')}</div>
            </div>
            <div className="text-center hover-lift">
              <AnimatedCounter end={50} suffix="K+" duration={2500} color="text-white" />
              <div className="text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'monthlyReaders')}</div>
            </div>
            <div className="text-center hover-lift">
              <AnimatedCounter end={15} suffix="+" duration={2000} color="text-white" />
              <div className="text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'expertWriters')}</div>
            </div>
            <div className="text-center hover-lift">
              <AnimatedCounter end={10} suffix="+" duration={2000} color="text-white" />
              <div className="text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'categoriesCount')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Featured Articles */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'featuredArticles')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getTranslation(selectedLanguage, 'featuredArticlesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Link to={post.link} key={post.id} className="group relative overflow-hidden rounded-2xl shadow-xl hover-lift">
                <div className="relative h-96">
                  <img 
                    src={post.image} 
                    alt={getTranslation(selectedLanguage, post.titleKey)}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {getTranslation(selectedLanguage, post.categoryKey)}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition">
                      {getTranslation(selectedLanguage, post.titleKey)}
                    </h3>
                    <p className="text-gray-200 mb-4 line-clamp-2">{getTranslation(selectedLanguage, post.excerptKey)}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img 
                          src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${20 + index}.jpg`}
                          alt={getTranslation(selectedLanguage, post.authorKey)}
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <div>
                          <p className="font-semibold text-sm">{getTranslation(selectedLanguage, post.authorKey)}</p>
                          <p className="text-xs text-gray-300">{getTranslation(selectedLanguage, post.readTimeKey)}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-300">{getTranslation(selectedLanguage, post.dateKey)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Categories Filter & Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              {getTranslation(selectedLanguage, 'browseByCategory')}
            </h2>
            
            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value === 'All' ? 'All' : getTranslation(selectedLanguage, category.key))}
                  className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                    selectedCategory === (category.value === 'All' ? 'All' : getTranslation(selectedLanguage, category.key))
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                  }`}
                >
                  {getTranslation(selectedLanguage, category.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover-lift">
                <div className="relative h-52">
                  <img 
                    src={post.image}
                    alt={getTranslation(selectedLanguage, post.titleKey)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {getTranslation(selectedLanguage, post.readTimeKey)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                      {getTranslation(selectedLanguage, post.categoryKey)}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, post.dateKey)}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition">
                    {getTranslation(selectedLanguage, post.titleKey)}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {getTranslation(selectedLanguage, post.excerptKey)}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <img 
                        src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${30 + index}.jpg`}
                        alt={getTranslation(selectedLanguage, post.authorKey)}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, post.authorKey)}</span>
                    </div>
                    <Link 
                      to={post.link}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-semibold text-sm"
                    >
                      {getTranslation(selectedLanguage, 'readMore')}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Latest News & Updates */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Latest Posts List */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                {getTranslation(selectedLanguage, 'latestUpdates')}
              </h2>
              
              <div className="space-y-6">
                {blogPosts.slice(0, 5).map((post, index) => (
                  <Link to={post.link} key={post.id} className="flex gap-4 group cursor-pointer">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={post.image}
                        alt={getTranslation(selectedLanguage, post.titleKey)}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{getTranslation(selectedLanguage, post.categoryKey)}</span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition line-clamp-2">
                        {getTranslation(selectedLanguage, post.titleKey)}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <span>{getTranslation(selectedLanguage, post.authorKey)}</span>
                        <span>•</span>
                        <span>{getTranslation(selectedLanguage, post.dateKey)}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                {getTranslation(selectedLanguage, 'trendingTopics')}
              </h2>
              
              <div className="space-y-4">
                {[
                  { topicKey: 'trendingTopic1', countKey: 'trendingTopic1Count', icon: '🎯', color: 'from-blue-500 to-cyan-500', darkColor: 'dark:from-blue-600 dark:to-cyan-600' },
                  { topicKey: 'trendingTopic2', countKey: 'trendingTopic2Count', icon: '💻', color: 'from-purple-500 to-pink-500', darkColor: 'dark:from-purple-600 dark:to-pink-600' },
                  { topicKey: 'trendingTopic3', countKey: 'trendingTopic3Count', icon: '🌱', color: 'from-green-500 to-emerald-500', darkColor: 'dark:from-green-600 dark:to-emerald-600' },
                  { topicKey: 'trendingTopic4', countKey: 'trendingTopic4Count', icon: '📈', color: 'from-orange-500 to-red-500', darkColor: 'dark:from-orange-600 dark:to-red-600' },
                  { topicKey: 'trendingTopic5', countKey: 'trendingTopic5Count', icon: '💍', color: 'from-pink-500 to-rose-500', darkColor: 'dark:from-pink-600 dark:to-rose-600' }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className={`bg-gradient-to-r ${item.color} ${item.darkColor} p-6 rounded-xl cursor-pointer transform hover:scale-105 transition duration-300`}>
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-4">
                          <span className="text-4xl">{item.icon}</span>
                          <div>
                            <h3 className="font-bold text-lg">{getTranslation(selectedLanguage, item.topicKey)}</h3>
                            <p className="text-sm text-white/80 dark:text-white/70">{getTranslation(selectedLanguage, item.countKey)}</p>
                          </div>
                        </div>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 dark:opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            {getTranslation(selectedLanguage, 'weeklyEventInsights')}
          </h2>
          <p className="text-xl mb-8 text-gray-100 dark:text-gray-200 animate-fadeIn">
            {getTranslation(selectedLanguage, 'newsletterSubtitle')}
          </p>

          <div className="max-w-md mx-auto mb-12 animate-scaleIn">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={getTranslation(selectedLanguage, 'enterEmailAddress')}
                className="flex-1 px-6 py-4 rounded-full text-gray-900 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/50 dark:focus:ring-gray-600"
              />
              <button className="bg-white text-purple-600 dark:bg-gray-200 dark:text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all shadow-lg whitespace-nowrap">
                {getTranslation(selectedLanguage, 'subscribeFree')}
              </button>
            </div>
            <p className="text-sm mt-4 text-gray-200 dark:text-gray-300">
              {getTranslation(selectedLanguage, 'noSpam')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hover-lift">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">{getTranslation(selectedLanguage, 'expertGuides')}</h3>
              <p className="text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'expertGuidesDesc')}</p>
            </div>
            <div className="hover-lift">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-2">{getTranslation(selectedLanguage, 'exclusiveContent')}</h3>
              <p className="text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'exclusiveContentDesc')}</p>
            </div>
            <div className="hover-lift">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">{getTranslation(selectedLanguage, 'industryTrends')}</h3>
              <p className="text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'industryTrendsDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Resources & Call to Action */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Free Resources */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {getTranslation(selectedLanguage, 'freeEventResources')}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                {getTranslation(selectedLanguage, 'freeResourcesDesc')}
              </p>

              <div className="space-y-4">
                {[
                  { titleKey: 'resource1Title', downloadsKey: 'resource1Downloads', icon: '📋', color: 'blue' },
                  { titleKey: 'resource2Title', downloadsKey: 'resource2Downloads', icon: '💰', color: 'green' },
                  { titleKey: 'resource3Title', downloadsKey: 'resource3Downloads', icon: '📊', color: 'purple' },
                  { titleKey: 'resource4Title', downloadsKey: 'resource4Downloads', icon: '📅', color: 'orange' }
                ].map((resource, index) => (
                  <div key={index} className="glass p-6 rounded-xl flex items-center justify-between hover-lift cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-${resource.color}-100 dark:bg-${resource.color}-900 rounded-lg flex items-center justify-center text-2xl`}>
                        {resource.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition">
                          {getTranslation(selectedLanguage, resource.titleKey)}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, resource.downloadsKey)} {getTranslation(selectedLanguage, 'downloads')}</p>
                      </div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition">
                      {getTranslation(selectedLanguage, 'download')}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative">
              <div className="glass p-10 rounded-3xl shadow-2xl hover-lift bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {getTranslation(selectedLanguage, 'needExpertHelp')}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    {getTranslation(selectedLanguage, 'expertHelpDesc')}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{getTranslation(selectedLanguage, 'freeConsultation')}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{getTranslation(selectedLanguage, 'customEventSolutions')}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{getTranslation(selectedLanguage, 'endToEndManagement')}</span>
                    </div>
                  </div>

                  <Link 
                    to="/contact"
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
                  >
                    {getTranslation(selectedLanguage, 'startYourProject')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
