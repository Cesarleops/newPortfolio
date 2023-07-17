/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			noirpro: ['Noir Pro', 'sans-serif'],
			noirlight: ['Noir Pro Light', 'sans-serif']
		
		},
		extend: {
			colors: {
			  primary: '#A67B5B', 
			  secondary: '#67fa12', 
			  terciary: '#fff8e7'
			
			},
		  },
	},
	plugins: [],
}
