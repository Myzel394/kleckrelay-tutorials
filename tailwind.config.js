const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				...colors,
				github: {
					dark: "#0D1117",
				}
			}
		},
	},
	plugins: [],
};
