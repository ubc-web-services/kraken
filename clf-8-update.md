# tasks to update a theme to use CLF version 8

1. Update theme-settings.php (all clf_8 options)
2. Update config/schema/kraken.schema.yml (all clf_8 options)
3. Update config/install/kraken.settings.yml (all clf_8 options)
4. Update kraken.theme (kraken_preprocess_html, kraken_preprocess_page)
5. Update kraken.libraries.yml (add clf-8, clf-8-extended, clf-8-extended-plus)
6. Update src/js/bootstrap.js (window.bootstrap = bootstrap;)
7. Add kraken.clf8.js
8. Update webpack.common.js (kraken.clf8.js)
9. Update clf.8.css
10. Update tailwind.config media queries
11. Add clf.8.extended.css, clf.8.extended.plus.css
12. Update footer.html.twig, header.html.twig
13. Recompile (npm run css, npm run js)
