/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {},
	  fontFamily: {
		logoFont: ['Agbalumo', 'system-ui'],
		heroName: ['Expletus Sans', 'sans-serif'],
		heroFont: ['Sansita Swashed', 'system-ui'],
	  }
	},
	plugins: [],
  }