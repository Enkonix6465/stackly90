import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo1.png';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';

const AdminDashboard = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/');
  };

  const stats = [
    { name: getTranslation(selectedLanguage, 'adminDashboardStatTotalEvents'), value: '2,345', change: '+12.5%', icon: '📅', color: 'from-blue-500 to-cyan-500' },
    { name: getTranslation(selectedLanguage, 'adminDashboardStatActiveUsers'), value: '12,456', change: '+8.2%', icon: '👥', color: 'from-purple-500 to-pink-500' },
    { name: getTranslation(selectedLanguage, 'adminDashboardStatRevenue'), value: '$234.5K', change: '+23.1%', icon: '💰', color: 'from-green-500 to-emerald-500' },
    { name: getTranslation(selectedLanguage, 'adminDashboardStatBookings'), value: '1,893', change: '+15.3%', icon: '📝', color: 'from-orange-500 to-red-500' },
  ];

  const recentEvents = [
    { id: 1, name: 'Tech Conference 2025', date: 'Nov 15, 2025', status: 'Upcoming', attendees: 250 },
    { id: 2, name: 'Annual Wedding Expo', date: 'Nov 20, 2025', status: 'Upcoming', attendees: 500 },
    { id: 3, name: 'Corporate Summit', date: 'Oct 28, 2025', status: 'Active', attendees: 180 },
    { id: 4, name: 'Music Festival', date: 'Oct 25, 2025', status: 'Completed', attendees: 1200 },
    { id: 5, name: 'Food & Wine Tasting', date: 'Oct 22, 2025', status: 'Completed', attendees: 95 },
  ];

  // Chart data
  const monthlyRevenue = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 75 },
    { month: 'Mar', value: 82 },
    { month: 'Apr', value: 78 },
    { month: 'May', value: 88 },
    { month: 'Jun', value: 95 },
    { month: 'Jul', value: 92 },
    { month: 'Aug', value: 98 },
    { month: 'Sep', value: 89 },
    { month: 'Oct', value: 100 },
    { month: 'Nov', value: 85 },
    { month: 'Dec', value: 90 },
  ];

  const eventTypes = [
    { name: getTranslation(selectedLanguage, 'adminDashboardEventCorporate'), value: 35, color: 'bg-blue-500' },
    { name: getTranslation(selectedLanguage, 'adminDashboardEventWedding'), value: 25, color: 'bg-pink-500' },
    { name: getTranslation(selectedLanguage, 'adminDashboardEventConference'), value: 20, color: 'bg-purple-500' },
    { name: getTranslation(selectedLanguage, 'adminDashboardEventParty'), value: 12, color: 'bg-orange-500' },
    { name: getTranslation(selectedLanguage, 'adminDashboardEventOther'), value: 8, color: 'bg-gray-500' },
  ];

  const userGrowth = [
    { month: 'Jan', users: 120 },
    { month: 'Feb', users: 180 },
    { month: 'Mar', users: 240 },
    { month: 'Apr', users: 280 },
    { month: 'May', users: 350 },
    { month: 'Jun', users: 420 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700`}>
        <div className="h-full px-3 py-4 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center mb-8 px-3">
            <img src={logo} alt={getTranslation(selectedLanguage, 'adminDashboardLogoAlt')} className="h-10 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {getTranslation(selectedLanguage, 'adminDashboardNavDashboard')}
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {getTranslation(selectedLanguage, 'adminDashboardNavEvents')}
            </a>
            <Link to="/admin/users" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {getTranslation(selectedLanguage, 'adminDashboardNavUsers')}
            </Link>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {getTranslation(selectedLanguage, 'adminDashboardNavAnalytics')}
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {getTranslation(selectedLanguage, 'adminDashboardNavSettings')}
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Navigation */}
        <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="px-4 py-3 lg:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 mr-2 text-gray-600 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'adminDashboardTitle')}</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                
                {/* Language Selector */}
                <div className="relative">
                  <select
                    value={selectedLanguage}
                    onChange={(e) => changeLanguage(e.target.value)}
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
                  >
                    <option value="US">🇺🇸 English</option>
                    <option value="SA">🇸🇦 العربية</option>
                    <option value="IL">🇮🇱 עברית</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Admin</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, 'adminDashboardAdminEmail')}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-pink-600 rounded-lg hover:from-red-600 hover:to-pink-700 transition"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>{getTranslation(selectedLanguage, 'adminDashboardLogout')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="p-4 lg:p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${stat.color} p-4`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80 text-sm font-medium">{stat.name}</p>
                      <h3 className="text-white text-3xl font-bold mt-1">{stat.value}</h3>
                    </div>
                    <div className="text-4xl">{stat.icon}</div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700/50">
                  <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                    {stat.change} {getTranslation(selectedLanguage, 'adminDashboardFromLastMonth')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Analytics Section with 3 Beautiful Graphs */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'adminDashboardAnalyticsTitle')}</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    activeTab === 'overview'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {getTranslation(selectedLanguage, 'adminDashboardTabOverview')}
                </button>
                <button
                  onClick={() => setActiveTab('detailed')}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    activeTab === 'detailed'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {getTranslation(selectedLanguage, 'adminDashboardTabDetailed')}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Graph 1: Bar Chart - Monthly Revenue */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'adminDashboardMonthlyRevenue')}</h3>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-xs font-semibold">
                    2025
                  </span>
                </div>
                <div className="flex items-end justify-between h-64 space-x-2">
                  {monthlyRevenue.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-t-lg relative group">
                        <div
                          className="bg-gradient-to-t from-cyan-500 to-blue-600 rounded-t-lg transition-all duration-500 hover:from-cyan-600 hover:to-blue-700 relative"
                          style={{ height: `${data.value * 2.4}px` }}
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs px-2 py-1 rounded">
                            ${data.value}K
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graph 2: Donut Chart - Event Types Distribution */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'adminDashboardEventTypes')}</h3>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 rounded-full text-xs font-semibold">
                    {getTranslation(selectedLanguage, 'adminDashboardDistribution')}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  {/* Donut Chart */}
                  <div className="relative w-48 h-48 mb-6">
                    <svg className="transform -rotate-90" width="192" height="192" viewBox="0 0 192 192">
                      {eventTypes.reduce((acc, type, index) => {
                        const totalValue = eventTypes.reduce((sum, t) => sum + t.value, 0);
                        const previousValues = eventTypes.slice(0, index).reduce((sum, t) => sum + t.value, 0);
                        const circumference = 2 * Math.PI * 70;
                        const offset = (previousValues / totalValue) * circumference;
                        const dashArray = `${(type.value / totalValue) * circumference} ${circumference}`;
                        
                        const colors = {
                          'bg-blue-500': '#3b82f6',
                          'bg-pink-500': '#ec4899',
                          'bg-purple-500': '#a855f7',
                          'bg-orange-500': '#f97316',
                          'bg-gray-500': '#6b7280'
                        };

                        acc.push(
                          <circle
                            key={index}
                            cx="96"
                            cy="96"
                            r="70"
                            fill="none"
                            stroke={colors[type.color]}
                            strokeWidth="28"
                            strokeDasharray={dashArray}
                            strokeDashoffset={-offset}
                            className="transition-all duration-500 hover:opacity-80"
                          />
                        );
                        return acc;
                      }, [])}
                      {/* Center circle */}
                      <circle cx="96" cy="96" r="50" fill="currentColor" className="text-white dark:text-gray-800" />
                      <text x="96" y="90" textAnchor="middle" className="text-2xl font-bold fill-current text-gray-900 dark:text-white">100%</text>
                      <text x="96" y="108" textAnchor="middle" className="text-xs fill-current text-gray-600 dark:text-gray-400">Total</text>
                    </svg>
                  </div>
                  
                  {/* Legend */}
                  <div className="w-full space-y-2">
                    {eventTypes.map((type, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{type.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{type.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Graph 3: Line Chart - User Growth */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'adminDashboardUserGrowth')}</h3>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-xs font-semibold">
                    +23%
                  </span>
                </div>
                <div className="relative h-64">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>500</span>
                    <span>400</span>
                    <span>300</span>
                    <span>200</span>
                    <span>100</span>
                    <span>0</span>
                  </div>
                  
                  {/* Chart area */}
                  <div className="ml-8 h-full">
                    <svg className="w-full h-full" viewBox="0 0 300 240" preserveAspectRatio="none">
                      {/* Grid lines */}
                      <line x1="0" y1="0" x2="300" y2="0" stroke="currentColor" className="text-gray-200 dark:text-gray-700" strokeWidth="1" />
                      <line x1="0" y1="48" x2="300" y2="48" stroke="currentColor" className="text-gray-200 dark:text-gray-700" strokeWidth="1" />
                      <line x1="0" y1="96" x2="300" y2="96" stroke="currentColor" className="text-gray-200 dark:text-gray-700" strokeWidth="1" />
                      <line x1="0" y1="144" x2="300" y2="144" stroke="currentColor" className="text-gray-200 dark:text-gray-700" strokeWidth="1" />
                      <line x1="0" y1="192" x2="300" y2="192" stroke="currentColor" className="text-gray-200 dark:text-gray-700" strokeWidth="1" />
                      <line x1="0" y1="240" x2="300" y2="240" stroke="currentColor" className="text-gray-200 dark:text-gray-700" strokeWidth="1" />
                      
                      {/* Area fill */}
                      <path
                        d={`M 0,${240 - (userGrowth[0].users / 500) * 240} ${userGrowth.map((d, i) => `L ${(i / (userGrowth.length - 1)) * 300},${240 - (d.users / 500) * 240}`).join(' ')} L 300,240 L 0,240 Z`}
                        fill="url(#gradient)"
                        opacity="0.3"
                      />
                      
                      {/* Line */}
                      <path
                        d={`M 0,${240 - (userGrowth[0].users / 500) * 240} ${userGrowth.map((d, i) => `L ${(i / (userGrowth.length - 1)) * 300},${240 - (d.users / 500) * 240}`).join(' ')}`}
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className="drop-shadow-lg"
                      />
                      
                      {/* Data points */}
                      {userGrowth.map((data, index) => (
                        <g key={index}>
                          <circle
                            cx={(index / (userGrowth.length - 1)) * 300}
                            cy={240 - (data.users / 500) * 240}
                            r="5"
                            fill="white"
                            stroke="#10b981"
                            strokeWidth="3"
                            className="hover:r-7 transition-all cursor-pointer"
                          />
                        </g>
                      ))}
                      
                      {/* Gradient definitions */}
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
                        </linearGradient>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#059669" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* X-axis labels */}
                    <div className="flex justify-between mt-2 text-xs text-gray-600 dark:text-gray-400">
                      {userGrowth.map((data, index) => (
                        <span key={index}>{data.month}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts and Recent Events */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Events */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'adminDashboardRecentEvents')}</h2>
                <Link to="#" className="text-sm font-medium text-cyan-600 hover:text-cyan-500">
                  {getTranslation(selectedLanguage, 'adminDashboardViewAll')}
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'adminDashboardTableEventName')}</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'adminDashboardTableDate')}</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'adminDashboardTableAttendees')}</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'adminDashboardTableStatus')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentEvents.map((event) => (
                      <tr key={event.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="py-3 px-4 text-sm text-gray-900 dark:text-white font-medium">{event.name}</td>
                        <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{event.date}</td>
                        <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{event.attendees}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            event.status === 'Upcoming' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                            event.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                            'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400'
                          }`}>
                            {event.status === 'Upcoming' ? getTranslation(selectedLanguage, 'adminDashboardStatusUpcoming') :
                             event.status === 'Active' ? getTranslation(selectedLanguage, 'adminDashboardStatusActive') :
                             getTranslation(selectedLanguage, 'adminDashboardStatusCompleted')}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{getTranslation(selectedLanguage, 'adminDashboardQuickActions')}</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>{getTranslation(selectedLanguage, 'adminDashboardCreateEvent')}</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:from-purple-600 hover:to-pink-700 transition font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  <span>{getTranslation(selectedLanguage, 'adminDashboardAddUser')}</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{getTranslation(selectedLanguage, 'adminDashboardGenerateReport')}</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl hover:from-orange-600 hover:to-red-700 transition font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span>{getTranslation(selectedLanguage, 'adminDashboardSendNotification')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-900/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminDashboard;
