import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo1.png';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../utils/translations';

const ForgotPassword = () => {
  const { selectedLanguage } = useLanguage();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: email, 2: new password
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleContinue = (e) => {
    e.preventDefault();
    setError('');
    
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(u => u.email === email);
    
    if (!userExists) {
      setError(getTranslation(selectedLanguage, 'forgotPasswordErrorNoAccount'));
      return;
    }
    
    setStep(2);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setError('');
    
    if (newPassword.length < 6) {
      setError(getTranslation(selectedLanguage, 'forgotPasswordErrorPasswordLength'));
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setError(getTranslation(selectedLanguage, 'forgotPasswordErrorPasswordMismatch'));
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === email);
    
    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      
      setSuccess(getTranslation(selectedLanguage, 'forgotPasswordSuccessMessage'));
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      setError(getTranslation(selectedLanguage, 'forgotPasswordErrorOccurred'));
    }
  };

  const handleBack = () => {
    setStep(1);
    setNewPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <div className="flex items-center justify-center">
              <img 
                src={logo} 
                alt={getTranslation(selectedLanguage, 'forgotPasswordLogoAlt')}
                className="h-12 w-auto object-contain hover:scale-105 transition-transform"
              />
            </div>
          </Link>
          
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
            {getTranslation(selectedLanguage, 'forgotPasswordTitle')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {step === 1 
              ? getTranslation(selectedLanguage, 'forgotPasswordSubtitle') 
              : getTranslation(selectedLanguage, 'forgotPasswordStep2Subtitle')}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
          {step === 1 ? (
            <>
              {/* Step 1: Email Form */}
              <form onSubmit={handleContinue} className="space-y-6">
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-3">
                    <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
                  </div>
                )}
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {getTranslation(selectedLanguage, 'forgotPasswordEmailLabel')}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      className="block w-full pl-12 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                      placeholder={getTranslation(selectedLanguage, 'forgotPasswordEmailPlaceholder')}
                    />
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 transition transform hover:scale-105 shadow-lg"
                >
                  {getTranslation(selectedLanguage, 'forgotPasswordContinueButton')}
                </button>
              </form>

              {/* Back to Sign In */}
              <div className="mt-6 text-center">
                <Link to="/login" className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  {getTranslation(selectedLanguage, 'forgotPasswordBackToSignIn')}
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Step 2: Reset Password Form */}
              <form onSubmit={handleResetPassword} className="space-y-6">
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl p-3">
                    <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
                  </div>
                )}
                {success && (
                  <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl p-4">
                    <p className="text-sm text-green-800 dark:text-green-300 font-semibold">{success}</p>
                  </div>
                )}
                
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
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                        if (error) setError('');
                      }}
                      className="block w-full pl-12 pr-12 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                      placeholder={getTranslation(selectedLanguage, 'resetPasswordNewPasswordPlaceholder')}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    >
                      {showNewPassword ? (
                        <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
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
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        if (error) setError('');
                      }}
                      className="block w-full pl-12 pr-12 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                      placeholder={getTranslation(selectedLanguage, 'resetPasswordConfirmPasswordPlaceholder')}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    >
                      {showConfirmPassword ? (
                        <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-4 rounded-xl transition"
                  >
                    {getTranslation(selectedLanguage, 'forgotPasswordBackButton')}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 transition transform hover:scale-105 shadow-lg"
                  >
                    {getTranslation(selectedLanguage, 'resetPasswordButton')}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Additional Help */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {getTranslation(selectedLanguage, 'forgotPasswordNeedHelp')}{' '}
            <a href="mailto:support@stackly.com" className="underline hover:text-cyan-600">
              support@stackly.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
