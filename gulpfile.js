// Example Gulpfile.js

const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');

// Paths
const jsFiles = [
    './assets/js/plugins/jquery-1.12.4.min.js',
    './assets/js/plugins/rrssb.min.js',
    './assets/js/slimmenu.js',
    './assets/js/main.js',
];

// Concatenate and minify JS
function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('compressed.js')) // Concatenate all files into compressed.js
        .pipe(terser()) // Minify the concatenated file
        .pipe(gulp.dest('_site/assets/js/')); // Output the file to the destination folder
}

// Watch files for changes
function watch() {
    gulp.watch('./assets/js/**/*.js', scripts);
}

exports.scripts = scripts;
exports.watch = watch;
exports.default = gulp.series(scripts, watch);
