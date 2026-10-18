module.exports = {
  plugins: [
    require("postcss-import"),
    require("@tailwindcss/postcss"),
    require("postcss-prefix-selector")({
      prefix: ".ck-editor",
      exclude: ["body", "html", ":root", ".anchor-invisible"],
      includeFiles: "src/css/drupal.ckeditor.theme.styles.css",
    }),
  ]
};
