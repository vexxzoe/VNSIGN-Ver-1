import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

type Language = 'vi' | 'en';

interface LangContextType {
  t: typeof translations.vi;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LangContext = createContext<LangContextType>({
  t: translations.vi,
  language: 'vi',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('lang');
    return (savedLang === 'en' || savedLang === 'vi') ? savedLang as Language : 'vi';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
  };

  const t = translations[language];

  return (
    <LangContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLanguage = () => useContext(LangContext);
