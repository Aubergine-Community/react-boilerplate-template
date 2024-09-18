import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { translationEN } from '@assets';

const resources = {
  en: {
    translation: translationEN,
  },
  // You can other translation files here with language code
};

//* How to use translation in your project:https://react.i18next.com/guides/quick-start#using-the-hook

//  TODO: Please change <your-preferred-language>.
//* If you are not translating to any other language then remove the condition and default it to 'en'

void i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: import.meta.env.PROD ? '<your-preferred-language>' : 'en', // this is the default language, will override the language detector
    fallbackLng: 'en', // browser will fallback to this one if preferred translation is not present in destination file.
    debug: import.meta.env.DEV, // Turn the debugger on in dev mode
    interpolation: {
      escapeValue: false,
    },
  });

export const i18n = i18next;
