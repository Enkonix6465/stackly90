import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo1.png';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';

const ResetPassword = () => {
  const { selectedLanguage } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = getTranslation(selectedLanguage, 'resetPasswordErrorNewPasswordRequired');
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = getTranslation(selectedLanguage, 'resetPasswordErrorPasswordLength');
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = getTranslation(selectedLanguage, 'resetPasswordErrorConfirmPasswordRequired');
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = getTranslation(selectedLanguage, 'resetPasswordErrorPasswordsMatch');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Password reset successful');
      setIsSubmitted(true);
      // Add your password reset logic here
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-cyan-900/20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <div className="flex items-center justify-center">
              <img 
                src={logo} 
                alt={getTranslation(selectedLanguage, 'resetPasswordLogoAlt')}
                className="h-12 w-auto object-contain hover:scale-105 transition-transform"
              />
            </div>
          </Link>
          
          {!isSubmitted ? (
            <>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                {getTranslation(selectedLanguage, 'resetPasswordTitle')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {getTranslation(selectedLanguage, 'resetPasswordSubtitle')}
              </p>
            </>
          ) : (
            <>
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                {getTranslation(selectedLanguage, 'resetPasswordSuccessTitle')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {getTranslation(selectedLanguage, 'resetPasswordSuccessMessage')}
              </p>
            </>
          )}
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
          {!isSubmitted ? (
            <>
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* New Password Field */}
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {getTranslation(selectedLanguage, 'resetPasswordNewPasswordLabel')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      id="newPassword"
                      name="newPassword"
                      type={showNewPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      value={formData.newPassword}
                      onChange={handleChange}
                      className={`block w-full pl-12 pr-12 py-3 border-2 ${
                        errors.newPassword ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition`}
                      placeholder={getTranslation(selectedLanguage, 'resetPasswordNewPasswordPlaceholder')}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    >
                      {showNewPassword ? (
                        <svg className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                    {errors.newPassword && (
                      <p className="mt-2 text-xs text-red-500">{errors.newPassword}</p>
                    )}
                  </div>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    {getTranslation(selectedLanguage, 'resetPasswordHint')}
                  </p>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {getTranslation(selectedLanguage, 'resetPasswordConfirmPasswordLabel')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`block w-full pl-12 pr-12 py-3 border-2 ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      } rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition`}
                      placeholder={getTranslation(selectedLanguage, 'resetPasswordConfirmPasswordPlaceholder')}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    >
                      {showConfirmPassword ? (
                        <svg className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                    {errors.confirmPassword && (
                      <p className="mt-2 text-xs text-red-500">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-3 px-4 rounded-xl hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-800 transition transform hover:scale-105 shadow-lg"
                >
                  {getTranslation(selectedLanguage, 'resetPasswordButton')}
                </button>
              </form>

              {/* Back to Sign In */}
              <div className="mt-6 text-center">
                <Link to="/login" className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {getTranslation(selectedLanguage, 'resetPasswordBackToSignIn')}
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Success Message */}
              <div className="text-center space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-6">
                  <p className="text-green-800 dark:text-green-300">
                    <span className="font-semibold text-lg">{getTranslation(selectedLanguage, 'resetPasswordSuccessBanner')}</span><br />
                    <span className="text-sm">{getTranslation(selectedLanguage, 'resetPasswordSuccessBannerSub')}</span>
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-emerald-600"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{getTranslation(selectedLanguage, 'resetPasswordRedirecting')}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Security Note */}
        {!isSubmitted && (
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              {getTranslation(selectedLanguage, 'resetPasswordSecurityNote')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
