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
			  primary: '#22fa20', 
			  secondary: "#0051b5", 
			  terciary: '#fbf9f8'
			
			},
		  },
	},
	plugins: [],
}
