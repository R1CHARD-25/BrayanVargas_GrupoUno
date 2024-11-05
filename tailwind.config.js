/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'Mountain': "url('/public/fondo.jpeg')",
				animation: ['motion-reduce'],
			}
		},
	},
	plugins:[],
}