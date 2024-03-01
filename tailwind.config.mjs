import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			black: '#101010',
			gray: {
				100: '#D6D6D6'
			},
			white: '#F9F9F9',
			blue: {
				200: '#9290C3',
				400: '#535C91',
				600: '#1B1A55',
				800: '#070F2B'
			},
			lime: {
				200: '#D4E567',
				400: '#B6CA38'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
				display: ['Space Grotesk Variable, sans-serif']
			},
		},
	},
	plugins: [],
}
