module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    "./input/assets/styles/dist/": "styles/",
    "./input/assets/images": "images/",
    "./input/assets/fonts": "fonts/",
  });

  const sliceFilter = (array, num1, num2) => {
    return array.slice(num1, num2);
  }

  eleventyConfig.addFilter('sliceFilter', sliceFilter)

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