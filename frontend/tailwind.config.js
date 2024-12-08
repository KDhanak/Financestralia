/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,jsx,ts,tsx}",  // Ensures Tailwind picks up class names in your React/TS files
	],
	theme: {
	  extend: {
		colors: {
		  'primary_1': '#222831',
		  'primary_2': '#00ADB5',
		  'primary_3': '#EEEEEE',
		  'primary_4': '#393E46',
		  'primary_5': '#EC4D37',
		  'primary_6': '#D3D3D3',
		},
	  },
	},
	plugins: [],
  }
