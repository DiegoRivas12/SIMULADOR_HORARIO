import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from './locales/en.json'
import translationPT from './locales/pt.json'
import translationES from './locales/es.json'

const resources = {
	en: {
		translation: translationEN
	},
	pt: {
		translation: translationPT
	},
	es: {
		translation: translationES
	}
}

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources,
		lng: 'pt',
		fallbackLng: {
			'pt': ['pt'],
			'es': ['es'],
			'default': ['en']
		},
		supportedLngs: ['pt', 'en','es'],
		// keySeparator: false,

		interpolation: {
			// escapeValue: false
		},
		debug: false
	})

// To change the language use this code:
/*
i18next.changeLanguage('en').then(() => {
	i18next.options.lng = 'en'
})
*/

export default i18n