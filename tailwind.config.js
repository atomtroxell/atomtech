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
      'brand-primary': '#dd4343',
    },
  },
  daisyui: {
    themes: ["light", "retro"],
  }
};
