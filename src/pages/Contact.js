import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';
import './home.css';

const Contact = () => {
  const { selectedLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Section 1: Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-600 dark:from-teal-900 dark:via-blue-900 dark:to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20 dark:opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-teal-400 dark:bg-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideInDown">
              {getTranslation(selectedLanguage, 'contactHeroTitle1')}
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 dark:from-yellow-400 dark:to-pink-400 bg-clip-text text-transparent">
                {getTranslation(selectedLanguage, 'contactHeroTitle2')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-200 max-w-3xl mx-auto mb-12 animate-slideInUp">
              {getTranslation(selectedLanguage, 'contactHeroSubtitle')}
            </p>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-scaleIn">
              <a href="tel:+15551234567" className="glass p-6 rounded-xl hover-lift group">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-blue-400 dark:from-teal-500 dark:to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">{getTranslation(selectedLanguage, 'callUs')}</h3>
                <p className="text-gray-100 dark:text-gray-200 text-sm">+1 (555) 123-4567</p>
              </a>

              <a href="mailto:events@stackly.com" className="glass p-6 rounded-xl hover-lift group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">{getTranslation(selectedLanguage, 'emailUs')}</h3>
                <p className="text-gray-100 dark:text-gray-200 text-sm">events@stackly.com</p>
              </a>

              <div className="glass p-6 rounded-xl hover-lift group cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">{getTranslation(selectedLanguage, 'visitUs')}</h3>
                <p className="text-gray-100 dark:text-gray-200 text-sm">123 Event Plaza, NYC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {getTranslation(selectedLanguage, 'contactFormHeading')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {getTranslation(selectedLanguage, 'contactFormDescription')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {getTranslation(selectedLanguage, 'contactFormName')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                      placeholder={getTranslation(selectedLanguage, 'contactFormNamePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {getTranslation(selectedLanguage, 'contactFormEmail')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                      placeholder={getTranslation(selectedLanguage, 'contactFormEmailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {getTranslation(selectedLanguage, 'contactFormPhone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                      placeholder={getTranslation(selectedLanguage, 'contactFormPhonePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {getTranslation(selectedLanguage, 'contactFormEventType')} *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                    >
                      <option value="">{getTranslation(selectedLanguage, 'contactFormEventTypeSelect')}</option>
                      <option value="conference">{getTranslation(selectedLanguage, 'contactFormEventTypeConference')}</option>
                      <option value="wedding">{getTranslation(selectedLanguage, 'contactFormEventTypeWedding')}</option>
                      <option value="corporate">{getTranslation(selectedLanguage, 'contactFormEventTypeCorporate')}</option>
                      <option value="exhibition">{getTranslation(selectedLanguage, 'contactFormEventTypeExhibition')}</option>
                      <option value="birthday">{getTranslation(selectedLanguage, 'contactFormEventTypeBirthday')}</option>
                      <option value="concert">{getTranslation(selectedLanguage, 'contactFormEventTypeConcert')}</option>
                      <option value="other">{getTranslation(selectedLanguage, 'contactFormEventTypeOther')}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {getTranslation(selectedLanguage, 'contactFormEventDate')}
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {getTranslation(selectedLanguage, 'contactFormGuests')}
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                      placeholder={getTranslation(selectedLanguage, 'contactFormGuestsPlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {getTranslation(selectedLanguage, 'contactFormBudget')}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                    >
                      <option value="">{getTranslation(selectedLanguage, 'contactFormBudgetSelect')}</option>
                      <option value="under-5k">{getTranslation(selectedLanguage, 'contactFormBudget1')}</option>
                      <option value="5k-10k">{getTranslation(selectedLanguage, 'contactFormBudget2')}</option>
                      <option value="10k-25k">{getTranslation(selectedLanguage, 'contactFormBudget3')}</option>
                      <option value="25k-50k">{getTranslation(selectedLanguage, 'contactFormBudget4')}</option>
                      <option value="50k-plus">{getTranslation(selectedLanguage, 'contactFormBudget5')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {getTranslation(selectedLanguage, 'contactFormMessage')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition"
                    placeholder={getTranslation(selectedLanguage, 'contactFormMessagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-lg transform hover:scale-105 transition-all"
                >
                  {getTranslation(selectedLanguage, 'contactFormSubmit')}
                </button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  {getTranslation(selectedLanguage, 'contactFormPrivacy')}
                </p>
              </form>
            </div>

            {/* Contact Sidebar - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info Card */}
              <div className="glass p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {getTranslation(selectedLanguage, 'contactSidebarTitle')}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{getTranslation(selectedLanguage, 'contactSidebarPhoneLabel')}</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-1">{getTranslation(selectedLanguage, 'contactSidebarPhoneNumber')}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, 'contactSidebarPhoneHours')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{getTranslation(selectedLanguage, 'contactSidebarEmailLabel')}</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-1">{getTranslation(selectedLanguage, 'contactSidebarEmailAddress')}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, 'contactSidebarEmailResponse')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{getTranslation(selectedLanguage, 'contactSidebarOfficeLabel')}</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-1">{getTranslation(selectedLanguage, 'contactSidebarOfficeAddress1')}</p>
                      <p className="text-gray-700 dark:text-gray-300 mb-1">{getTranslation(selectedLanguage, 'contactSidebarOfficeAddress2')}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{getTranslation(selectedLanguage, 'contactSidebarOfficeNote')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {getTranslation(selectedLanguage, 'contactOfficeHoursTitle')}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'contactOfficeHoursMonFri')}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'contactOfficeHoursMonFriTime')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'contactOfficeHoursSat')}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'contactOfficeHoursSatTime')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'contactOfficeHoursSun')}</span>
                    <span className="font-semibold text-red-500">{getTranslation(selectedLanguage, 'contactOfficeHoursSunStatus')}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-300 dark:border-gray-600">
                    <span className="text-gray-700 dark:text-gray-300">{getTranslation(selectedLanguage, 'contactOfficeHoursEmergency')}</span>
                    <span className="font-semibold text-teal-600 dark:text-teal-400">{getTranslation(selectedLanguage, 'contactOfficeHoursEmergencyStatus')}</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="glass p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {getTranslation(selectedLanguage, 'contactSocialTitle')}
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition transform group">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center hover:scale-110 transition transform group">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center hover:scale-110 transition transform group">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition transform group">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'contactWhyTitle')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {getTranslation(selectedLanguage, 'contactWhySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎯',
                titleKey: 'contactWhyFeature1Title',
                descKey: 'contactWhyFeature1Desc',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '⚡',
                titleKey: 'contactWhyFeature2Title',
                descKey: 'contactWhyFeature2Desc',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: '💎',
                titleKey: 'contactWhyFeature3Title',
                descKey: 'contactWhyFeature3Desc',
                color: 'from-teal-500 to-green-500'
              },
              {
                icon: '🤝',
                titleKey: 'contactWhyFeature4Title',
                descKey: 'contactWhyFeature4Desc',
                color: 'from-orange-500 to-red-500'
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-lift h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {getTranslation(selectedLanguage, item.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {getTranslation(selectedLanguage, item.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'contactFaqTitle')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {getTranslation(selectedLanguage, 'contactFaqSubtitle')}
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                questionKey: 'contactFaq1Question',
                answerKey: 'contactFaq1Answer'
              },
              {
                questionKey: 'contactFaq2Question',
                answerKey: 'contactFaq2Answer'
              },
              {
                questionKey: 'contactFaq3Question',
                answerKey: 'contactFaq3Answer'
              },
              {
                questionKey: 'contactFaq4Question',
                answerKey: 'contactFaq4Answer'
              },
              {
                questionKey: 'contactFaq5Question',
                answerKey: 'contactFaq5Answer'
              },
              {
                questionKey: 'contactFaq6Question',
                answerKey: 'contactFaq6Answer'
              }
            ].map((faq, index) => (
              <div key={index} className="glass p-6 rounded-xl hover-lift">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-start gap-3">
                  <span className="text-blue-500 flex-shrink-0">Q:</span>
                  <span>{getTranslation(selectedLanguage, faq.questionKey)}</span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 ml-8">
                  <span className="text-teal-500 font-semibold">A:</span> {getTranslation(selectedLanguage, faq.answerKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Location & Map */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'contactLocationTitle')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {getTranslation(selectedLanguage, 'contactLocationSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Map */}
            <div className="relative h-96 lg:h-auto rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492346622!3d40.75889097138538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <div className="glass p-8 rounded-2xl hover-lift">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {getTranslation(selectedLanguage, 'contactLocationHow')}
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'contactLocationAddressLabel')}</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {getTranslation(selectedLanguage, 'contactLocationAddress1')}<br />
                        {getTranslation(selectedLanguage, 'contactLocationAddress2')}<br />
                        {getTranslation(selectedLanguage, 'contactLocationAddress3')}<br />
                        {getTranslation(selectedLanguage, 'contactLocationAddress4')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'contactLocationParkingLabel')}</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {getTranslation(selectedLanguage, 'contactLocationParking1')}<br />
                        {getTranslation(selectedLanguage, 'contactLocationParking2')}<br />
                        {getTranslation(selectedLanguage, 'contactLocationParking3')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2">{getTranslation(selectedLanguage, 'contactLocationVisitLabel')}</h4>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {getTranslation(selectedLanguage, 'contactLocationVisitDesc')}
                      </p>
                      <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition">
                        {getTranslation(selectedLanguage, 'contactLocationVisitButton')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-600 dark:from-teal-900 dark:via-blue-900 dark:to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 dark:opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 dark:bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              {getTranslation(selectedLanguage, 'contactCtaTitle')}
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-100 dark:text-gray-200 animate-fadeIn">
              {getTranslation(selectedLanguage, 'contactCtaSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scaleIn">
              <a 
                href="tel:+15551234567"
                className="bg-white text-blue-600 dark:bg-gray-200 dark:text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all shadow-xl inline-flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {getTranslation(selectedLanguage, 'contactCtaCallButton')}
              </a>

              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-500 dark:to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-500 dark:hover:from-yellow-600 dark:hover:to-orange-600 transform hover:scale-105 transition-all shadow-xl inline-flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {getTranslation(selectedLanguage, 'contactCtaBookButton')}
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="hover-lift">
                <div className="text-3xl mb-2">✅</div>
                <p className="font-semibold">{getTranslation(selectedLanguage, 'contactCtaFeature1Title')}</p>
                <p className="text-sm text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'contactCtaFeature1Desc')}</p>
              </div>
              <div className="hover-lift">
                <div className="text-3xl mb-2">⚡</div>
                <p className="font-semibold">{getTranslation(selectedLanguage, 'contactCtaFeature2Title')}</p>
                <p className="text-sm text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'contactCtaFeature2Desc')}</p>
              </div>
              <div className="hover-lift">
                <div className="text-3xl mb-2">🎯</div>
                <p className="font-semibold">{getTranslation(selectedLanguage, 'contactCtaFeature3Title')}</p>
                <p className="text-sm text-gray-200 dark:text-gray-300">{getTranslation(selectedLanguage, 'contactCtaFeature3Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
