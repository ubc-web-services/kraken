module.exports = {
  plugins: [
    require("@tailwindcss/postcss"),
    require("postcss-prefix-selector")({
      prefix: ".ck-editor",
      exclude: ["body", "html", ":root", ".anchor-invisible"],
      includeFiles: "src/css/drupal.ckeditor.theme.styles.css",
    }),
    ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : [])
  ]
};
