import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import en from './locales/en.json';
import de from './locales/de.json';
import it from './locales/it.json';
import es from './locales/es.json';
import sq from './locales/sq.json';

// Check if this is the first visit (no language set in localStorage)
const isFirstVisit = !localStorage.getItem('i18nextLng');

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: isFirstVisit ? 'en' : undefined, // Use English for first visit only
    fallbackLng: 'en',
    debug: false,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // Cache language selection
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: en },
      de: { translation: de },
      it: { translation: it },
      es: { translation: es },
      sq: { translation: sq },
    },
  });

// Set default language to English only on first visit
if (isFirstVisit) {
  i18n.changeLanguage('en');
}

export default i18n;