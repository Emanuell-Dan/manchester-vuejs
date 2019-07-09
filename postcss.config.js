const join = require('path').join;
const tailwindJS = join(__dirname, 'tailwind.js');
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in the project 
  content: [
    './layouts/*.vue',
    './components/*.vue',
    './pages/*.vue'
  ],

  // Include any special characters used in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require('tailwindcss')(tailwindJS),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  ]
};
