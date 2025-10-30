import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';

const WeddingPlanning = () => {
  const { selectedLanguage } = useLanguage();
  
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Section 1: Hero with Split Design */}
      <section className="relative py-32 bg-gradient-to-br from-pink-600 via-rose-600 to-red-600 dark:from-pink-900 dark:via-rose-900 dark:to-red-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20 dark:opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-400 dark:bg-rose-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block bg-white/10 dark:bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fadeIn">
            {getTranslation(selectedLanguage, 'weddingSection1Badge')}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slideInDown">
            {getTranslation(selectedLanguage, 'weddingSection1Title1')}
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 dark:from-yellow-200 dark:to-pink-200 bg-clip-text text-transparent">
              {getTranslation(selectedLanguage, 'weddingSection1Title2')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-200 max-w-3xl mx-auto mb-12 animate-slideInUp">
            {getTranslation(selectedLanguage, 'weddingSection1Subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-white text-rose-600 dark:bg-gray-200 dark:text-rose-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all shadow-xl">
              {getTranslation(selectedLanguage, 'weddingSection1Button')}
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Services */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">{getTranslation(selectedLanguage, 'weddingSection2Title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '💐', titleKey: 'weddingSection2Service1Title', descKey: 'weddingSection2Service1Desc' },
              { icon: '🎨', titleKey: 'weddingSection2Service2Title', descKey: 'weddingSection2Service2Desc' },
              { icon: '📸', titleKey: 'weddingSection2Service3Title', descKey: 'weddingSection2Service3Desc' },
              { icon: '🏰', titleKey: 'weddingSection2Service4Title', descKey: 'weddingSection2Service4Desc' },
              { icon: '👗', titleKey: 'weddingSection2Service5Title', descKey: 'weddingSection2Service5Desc' },
              { icon: '✨', titleKey: 'weddingSection2Service6Title', descKey: 'weddingSection2Service6Desc' }
            ].map((service, i) => (
              <div key={i} className="glass p-8 rounded-2xl hover-lift">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{getTranslation(selectedLanguage, service.titleKey)}</h3>
                <p className="text-gray-600 dark:text-gray-300">{getTranslation(selectedLanguage, service.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Packages */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'weddingSection3Title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                nameKey: 'weddingSection3Package1Name', 
                priceKey: 'weddingSection3Package1Price', 
                featureKeys: [
                  'weddingSection3Package1Feature1',
                  'weddingSection3Package1Feature2',
                  'weddingSection3Package1Feature3',
                  'weddingSection3Package1Feature4'
                ]
              },
              { 
                nameKey: 'weddingSection3Package2Name', 
                priceKey: 'weddingSection3Package2Price', 
                featureKeys: [
                  'weddingSection3Package2Feature1',
                  'weddingSection3Package2Feature2',
                  'weddingSection3Package2Feature3',
                  'weddingSection3Package2Feature4',
                  'weddingSection3Package2Feature5'
                ]
              },
              { 
                nameKey: 'weddingSection3Package3Name', 
                priceKey: 'weddingSection3Package3Price', 
                featureKeys: [
                  'weddingSection3Package3Feature1',
                  'weddingSection3Package3Feature2',
                  'weddingSection3Package3Feature3',
                  'weddingSection3Package3Feature4',
                  'weddingSection3Package3Feature5'
                ]
              }
            ].map((pkg, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover-lift">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{getTranslation(selectedLanguage, pkg.nameKey)}</h3>
                <div className="text-4xl font-bold text-rose-600 mb-6">{getTranslation(selectedLanguage, pkg.priceKey)}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.featureKeys.map((featureKey, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {getTranslation(selectedLanguage, featureKey)}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block text-center bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition">
                  {getTranslation(selectedLanguage, 'weddingSection3Button')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Gallery */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'weddingSection4Title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop'
            ].map((img, i) => (
              <div key={i} className="relative h-80 rounded-2xl overflow-hidden group hover-lift">
                <img src={img} alt={`${getTranslation(selectedLanguage, 'weddingSection4ImageAlt')} ${i + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">{getTranslation(selectedLanguage, 'weddingSection5Title')}</h2>
          <div className="space-y-8">
            {[
              { quoteKey: 'weddingSection5Testimonial1Quote', namesKey: 'weddingSection5Testimonial1Names', dateKey: 'weddingSection5Testimonial1Date' },
              { quoteKey: 'weddingSection5Testimonial2Quote', namesKey: 'weddingSection5Testimonial2Names', dateKey: 'weddingSection5Testimonial2Date' }
            ].map((test, i) => (
              <div key={i} className="glass p-8 rounded-2xl">
                <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-4">"{getTranslation(selectedLanguage, test.quoteKey)}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full"></div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{getTranslation(selectedLanguage, test.namesKey)}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, test.dateKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-rose-600 to-red-600 dark:from-pink-900 dark:via-rose-900 dark:to-red-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10 dark:opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{getTranslation(selectedLanguage, 'weddingSection6Title')}</h2>
          <p className="text-xl mb-12 text-gray-100 dark:text-gray-200">{getTranslation(selectedLanguage, 'weddingSection6Subtitle')}</p>
          <Link to="/contact" className="bg-white text-rose-600 dark:bg-gray-200 dark:text-rose-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-300 transform hover:scale-105 transition-all shadow-xl inline-block">
            {getTranslation(selectedLanguage, 'weddingSection6Button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WeddingPlanning;
