"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { setLanguage as setTranslatorLanguage } from "../utils/localize";

export type Language = "pl" ; // dodaj inne języki, jeśli chcesz

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLang] = useState<Language>("pl");

  const setLanguage = (lang: Language) => {
    setTranslatorLanguage(lang);
    setLang(lang);
    localStorage.setItem("appLang", lang);
  };

  useEffect(() => {
    const stored = localStorage.getItem("appLang") as Language;
    if (stored) setLanguage(stored);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
