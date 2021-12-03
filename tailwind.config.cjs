const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
      backgroundImage: {
        'search-section-bg': "url('/images/background.webp')",
      },
      fontFamily: {
        'cursive': ['Lobster']
      }
    }
	},

	plugins: []
};

module.exports = config;
