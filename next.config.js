const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  {images: {
    disableStaticImages: true
  }},
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    }
  ]

  // your other plugins here
]);


