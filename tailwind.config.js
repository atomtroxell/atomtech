module.exports = {
  content: ['./src/**/*.{njk,md}'],
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],
  theme: {
    fontFamily: {
      'annie': '"Annie Use Your Telescope", Helvetica, Arial, sans-serif',
      'jakarta': '"Plus Jakarta Sans", Helvetica, Arial, sans-serif',
    },
    colors: {
      // 'brand-primary': '#dd4343', print color
      'brand-primary': '#B73D3D',
      'brand-white': '#ffffff',
    },
  },
  daisyui: {
    themes: ["light", "retro"],
  }
};
