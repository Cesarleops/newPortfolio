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
			  primary: '#0079EB', 
			  secondary: '#001053', 
			  terciary: '#f7efee'
			
			},
		  },
	},
	plugins: [],
}
