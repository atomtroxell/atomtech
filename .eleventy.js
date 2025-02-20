import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import CleanCSS from 'clean-css';
import { EleventyRenderPlugin } from "@11ty/eleventy";

export default function configureEleventy(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false); // Disable cache from .gitignore files
  eleventyConfig.setWatchJavaScriptDependencies(false); // Disable JavaScript dependency caching
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`); // Year shortcode

  // Copy static assets (like images) directly
  eleventyConfig.addPassthroughCopy("src/images");
  // Put robots.txt in root
  eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/dist/robots.txt' });

  // Configure PostCSS with Tailwind and Autoprefixer
  eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
    postcss([tailwindcss(), autoprefixer()])
      .process(cssCode)
      .then(
        (r) => done(null, r.css),
        (e) => done(e, null)
      );
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget('src/styles/**/*.css');

  // Add Eleventy Render Plugin
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
}
