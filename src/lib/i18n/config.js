export const i18n = {
  defaultLocale: 'tr',
  locales: ['tr', 'en'],
  localeNames: {
    tr: 'Türkçe',
    en: 'English'
  }
};

export function getLocale() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('locale') || i18n.defaultLocale;
  }
  return i18n.defaultLocale;
}

export function setLocale(locale) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale);
  }
}

export function getTranslations(locale) {
  try {
    return require(`./locales/${locale}.json`);
  } catch (error) {
    console.warn(`Translation file for locale '${locale}' not found, falling back to default`);
    return require(`./locales/${i18n.defaultLocale}.json`);
  }
}

export function t(key, locale = getLocale(), params = {}) {
  const translations = getTranslations(locale);
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key '${key}' not found for locale '${locale}'`);
      return key;
    }
  }
  
  if (typeof value === 'string') {
    // Replace parameters like {{count}} with actual values
    return value.replace(/\{\{(\w+)\}\}/g, (match, param) => {
      return params[param] !== undefined ? params[param] : match;
    });
  }
  
  return value;
} 