module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    "./input/assets/styles/dist/": "styles/",
    "./input/assets/images": "images/",
    "./input/assets/fonts": "fonts/",
  });

  return {
    dir: {
      input: "./input/pages/",
      output: "output",
      includes: "../_partials",
      layouts: "../_layout",
      data: "../_data",
    },
  };
};