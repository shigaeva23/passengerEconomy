// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxt/fonts', '@nuxt/icon'],
	fonts: {
		defaults: {
			weights: [400, 700],
			styles: ['normal', 'italic'],
			subsets: ['cyrillic-ext', 'cyrillic', 'greek-ext', 'greek', 'vietnamese', 'latin-ext', 'latin'],
		},
	},
	ssr: true,
	app: {
		baseURL: '/passengerEconomy/',
		buildAssetsDir: 'assets',
	},
	nitro: {
		preset: 'github_pages',
	},
	runtimeConfig: {
		public: {
			baseURL: process.env.NODE_ENV === 'production' ? '/passengerEconomy/' : '/',
		},
	},
});