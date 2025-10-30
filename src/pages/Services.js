import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';

const Services = () => {
  const { selectedLanguage } = useLanguage();
  const services = [
    {
      id: 1,
      titleKey: 'servicesSection2Service1Title',
      descriptionKey: 'servicesSection2Service1Description',
      featureKeys: ['servicesSection2Service1Feature1', 'servicesSection2Service1Feature2', 'servicesSection2Service1Feature3', 'servicesSection2Service1Feature4'],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 2,
      titleKey: 'servicesSection2Service2Title',
      descriptionKey: 'servicesSection2Service2Description',
      featureKeys: ['servicesSection2Service2Feature1', 'servicesSection2Service2Feature2', 'servicesSection2Service2Feature3', 'servicesSection2Service2Feature4'],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-blue-400 to-purple-500'
    },
    {
      id: 3,
      titleKey: 'servicesSection2Service3Title',
      descriptionKey: 'servicesSection2Service3Description',
      featureKeys: ['servicesSection2Service3Feature1', 'servicesSection2Service3Feature2', 'servicesSection2Service3Feature3', 'servicesSection2Service3Feature4'],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-pink-400 to-red-500'
    },
    {
      id: 4,
      titleKey: 'servicesSection2Service4Title',
      descriptionKey: 'servicesSection2Service4Description',
      featureKeys: ['servicesSection2Service4Feature1', 'servicesSection2Service4Feature2', 'servicesSection2Service4Feature3', 'servicesSection2Service4Feature4'],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-green-400 to-teal-500'
    },
    {
      id: 5,
      titleKey: 'servicesSection2Service5Title',
      descriptionKey: 'servicesSection2Service5Description',
      featureKeys: ['servicesSection2Service5Feature1', 'servicesSection2Service5Feature2', 'servicesSection2Service5Feature3', 'servicesSection2Service5Feature4'],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-purple-400 to-indigo-500'
    },
    {
      id: 6,
      titleKey: 'servicesSection2Service6Title',
      descriptionKey: 'servicesSection2Service6Description',
      featureKeys: ['servicesSection2Service6Feature1', 'servicesSection2Service6Feature2', 'servicesSection2Service6Feature3', 'servicesSection2Service6Feature4'],
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-900 dark:to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {getTranslation(selectedLanguage, 'servicesSection1Title')}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 dark:opacity-80">
              {getTranslation(selectedLanguage, 'servicesSection1Subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'servicesSection2Title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {getTranslation(selectedLanguage, 'servicesSection2Subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {getTranslation(selectedLanguage, service.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {getTranslation(selectedLanguage, service.descriptionKey)}
                </p>
                <ul className="space-y-2">
                  {service.featureKeys.map((featureKey, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {getTranslation(selectedLanguage, featureKey)}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg transition duration-300">
                  {getTranslation(selectedLanguage, 'servicesSection2LearnMore')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(selectedLanguage, 'servicesSection3Title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {getTranslation(selectedLanguage, 'servicesSection3Subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {getTranslation(selectedLanguage, 'servicesSection3Step1Title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {getTranslation(selectedLanguage, 'servicesSection3Step1Description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {getTranslation(selectedLanguage, 'servicesSection3Step2Title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {getTranslation(selectedLanguage, 'servicesSection3Step2Description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {getTranslation(selectedLanguage, 'servicesSection3Step3Title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {getTranslation(selectedLanguage, 'servicesSection3Step3Description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {getTranslation(selectedLanguage, 'servicesSection3Step4Title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {getTranslation(selectedLanguage, 'servicesSection3Step4Description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {getTranslation(selectedLanguage, 'servicesSection4Title')}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {getTranslation(selectedLanguage, 'servicesSection4Reason1Title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {getTranslation(selectedLanguage, 'servicesSection4Reason1Description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {getTranslation(selectedLanguage, 'servicesSection4Reason2Title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {getTranslation(selectedLanguage, 'servicesSection4Reason2Description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {getTranslation(selectedLanguage, 'servicesSection4Reason3Title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {getTranslation(selectedLanguage, 'servicesSection4Reason3Description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {getTranslation(selectedLanguage, 'servicesSection4Reason4Title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {getTranslation(selectedLanguage, 'servicesSection4Reason4Description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-cyan-700 dark:to-blue-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                {getTranslation(selectedLanguage, 'servicesSection4CtaTitle')}
              </h3>
              <p className="text-lg opacity-90 dark:opacity-80 mb-6">
                {getTranslation(selectedLanguage, 'servicesSection4CtaDescription')}
              </p>
              <div className="space-y-4">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-gray-900 py-3 px-6 rounded-lg font-semibold transition duration-300">
                  {getTranslation(selectedLanguage, 'servicesSection4CtaButton1')}
                </button>
                <button className="w-full border-2 border-white hover:bg-white hover:text-cyan-600 dark:hover:text-cyan-700 py-3 px-6 rounded-lg font-semibold transition duration-300">
                  {getTranslation(selectedLanguage, 'servicesSection4CtaButton2')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {getTranslation(selectedLanguage, 'servicesSection5Title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 dark:opacity-80">
            {getTranslation(selectedLanguage, 'servicesSection5Subtitle')}
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300">
            {getTranslation(selectedLanguage, 'servicesSection5Button')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;