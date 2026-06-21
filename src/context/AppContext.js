import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';

// ၁။ Context ကို တည်ဆောက်ပါ
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const { t, i18n } = useTranslation();
  
  // State များ
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

  // Dark Mode toggle လုပ်မည့် function
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // ဘာသာစကား ပြောင်းမည့် function
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Color Palette သတ်မှတ်ခြင်း (optional)
  const colors = {
    background: isDarkMode ? '#121212' : '#FFFFFF',
    text: isDarkMode ? '#FFFFFF' : '#000000',
    primary: '#FF0000', // မင်းရဲ့ Emergency App အရောင်
  };

  // ၄။ Value တွေကို useMemo နဲ့ ပတ်ထားရင် Performance ပိုကောင်းပါတယ်
  const contextValue = useMemo(() => ({
    isDarkMode,
    toggleTheme,
    changeLanguage,
    language: i18n.language,
    t,
    colors
  }), [isDarkMode, i18n.language, t]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook: components တွေထဲမှာ လွယ်လွယ်ကူကူ ပြန်သုံးဖို့
export const useAppContext = () => {
  const context = useContext(AppContext);
  
  // AppProvider အပြင်ဘက်မှာ သုံးမိရင် error ပေးဖို့ safe check ထည့်ထားပါတယ်
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  
  return context;
};