'use client';

import { useState, useEffect } from 'react';
import { getLocale, setLocale, t } from '../../lib/i18n/config';

export function useLanguage() {
  const [currentLocale, setCurrentLocale] = useState(getLocale());

  useEffect(() => {
    setCurrentLocale(getLocale());
  }, []);

  const changeLanguage = (locale) => {
    setLocale(locale);
    setCurrentLocale(locale);
    window.location.reload();
  };

  const translate = (key, params = {}) => {
    return t(key, currentLocale, params);
  };

  return {
    locale: currentLocale,
    changeLanguage,
    t: translate
  };
} 