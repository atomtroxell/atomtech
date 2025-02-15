const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false); // Disable cache from .gitignore files
    eleventyConfig.setWatchJavaScriptDependencies(false); // Disable JavaScript dependency caching

  eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
    postcss([tailwindcss(require('./tailwind.config.js')), autoprefixer()])
      .process(cssCode)
      .then(
        (r) => done(null, r.css),
        (e) => done(e, null)
      );
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  eleventyConfig.addWatchTarget('styles/**/*.css');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
