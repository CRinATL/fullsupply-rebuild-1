module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the build output.
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Rebuild the browser when CSS/JS change.
  eleventyConfig.addWatchTarget("src/assets/css");
  eleventyConfig.addWatchTarget("src/assets/js");

  // Current year, handy for the footer.
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    // Served from a GitHub Pages project subpath. The `url` filter and
    // page.url values are prefixed with this automatically.
    pathPrefix: "/fullsupply-rebuild-1/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
