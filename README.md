UBC CLF DRUPAL THEME (aka Kraken)
=======================================

A responsive UBC CLF (Common Look and Feel) theme for Drupal using Tailwind and Bootstrap. Created by the UBC IT Web Services Department.

Kraken is a theme for Drupal 10+, providing UBC-branded units with the basic structure of the UBC CLF ([Common Look and Feel](https://clf.ubc.ca)).

## Recommended use.
Include the theme in your project using `composer require ubc-web-services/kraken`

Then, use the theme as a starterkit to create your own:
`cd web`
`php core/scripts/drupal generate-theme [themename] --name "[themename]" --starterkit kraken --path themes/custom`

You should then alter the generated theme as needed and leave kraken untouched.

## Using the theme

To make changes to the theme CSS and Javascript, you are required to use the command-line tools.

### Requirements
Ensure that you have [node.js](https://nodejs.org/en/download/) installed, version 12 or higher. To confirm your version, navigate to the Kraken theme directory in your command-line and type `node -v`.

### Installation
From the theme root, install the theme dependencies:
```
npm install
```

This will install everything required to work with the CSS and Javascript:
- the [Tailwindcss](https://tailwindcss.com) utility-based CSS library
- packages such as [Webpack](https://webpack.js.org), [Babel](https://babeljs.io), [Postcss](https://postcss.org), and [Autoprefixer](https://www.npmjs.com/package/autoprefixer) that automate building and preparing the web assets.

### Running the commands
There are four main node.js commands defined in in [`/package.json`](https://github.com/ubc-web-services/product-boilerplate/blob/master/web/themes/custom/kraken/package.json#L24).

The two most common commands to run:
- `npm run dev`
    - compiles the CSS in the `/src/css` directory, excluding the subdirectories, and saves the minified files in `/css`. Settings in [`/postcss.config.js`](https://github.com/ubc-web-services/product-boilerplate/blob/master/web/themes/custom/kraken/postcss.config.js)
    - compiles the Javascript in the `/src/css` directory, excluding the subdirectories, and saves the unminified files in `/js`.  Settings in [`/webpack.common.js`](https://github.com/ubc-web-services/product-boilerplate/blob/master/web/themes/custom/kraken/webpack.common.js) and [`/webpack.dev.js`](https://github.com/ubc-web-services/product-boilerplate/blob/master/web/themes/custom/kraken/webpack.prod.js)

- `npm run prod`
    - compiles the CSS in the `src > css` directory, excluding the subdirectories, and saves the minified files in `/css`. Settings in [`/postcss.config.js`](https://github.com/ubc-web-services/product-boilerplate/blob/master/web/themes/custom/kraken/postcss.config.js)
    - compiles the Javascript in the `/src/css` directory, excluding the subdirectories, and saves the minified files in `/js` with a `.min.js` extension. Settings in [`/webpack.common.js`](https://github.com/ubc-web-services/product-boilerplate/blob/master/web/themes/custom/kraken/webpack.common.js) and [`/webpack.prod.js`](https://github.com/ubc-web-services/product-boilerplate/blob/master/web/themes/custom/kraken/webpack.prod.js)
    - saves an external sourcemap (`.map` file) to facilitate debugging. Settings in [`/webpack.prod.js`](https://github.com/ubc-web-services/product-boilerplate/blob/master/web/themes/custom/kraken/webpack.prod.js)

There are also additional commands for CSS property sorting:
- `npm run css-lint`
    - checks CSS in the `/src/css` directory for the order in which properties are declared and best practices.

- `npm run css-fix`
    - attempts to automatically fix the errors that are found with the `npm run css-lint` command.

----

## [Tailwindcss](https://tailwindcss.com)
The theme makes extensive use of utility classes provided by Tailwind.

All configuration for Tailwind utilities are set in [`/tailwind.config.js`](https://github.com/ubc-web-services/product-boilerplate/blob/master/web/themes/custom/kraken/tailwind.config.js). The configuration uses UBC default colours, fonts, regular spacing, etc. More details about this file can be found in the [Tailwind documentation](https://tailwindcss.com/docs/configuration).

Two very important places where it diverges fro the documentation:
- **Separators**: by default, Tailwind uses a colon to separate media query and state prefixes, whereas the config defines the prefix separator as a double dash. For example, `md:text-white hover:text-black` become `md--text-white hover--text-black`
- **Colour palette**: the config excludes Tailwind's default colurs and [replaces them](https://github.com/ubc-web-services/product-boilerplate/blob/master/web/themes/custom/kraken/tailwind.config.js#L12) with UBC colours and a few user-defined colours.

When running the production build script (`npm run prod`), PurgeCSS is used to scan all Twig and Javascript files and remove any Tailwind utilities that are not in use. This allows for us to deliver a considerably smaller set of CSS classes. Note that classes not provided by Tailwind are never purged.

Additionally, all vendor prefixes for supported browsers are added automatically with Autoprefixer, so there is no need to add these (e.g. `-webkit`).

I highly recommend installing [the Tailwind VS Code extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss). It provides code completion for Tailwind utility classes as defined in the `tailwind.config.js` file. Another useful utility is [the Headwind VS Code extension](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind), that sorts classes in your markup based on an opinionated order.

## Kraken theme settings

Once installed and set to default, you can adjust the following theme settings:

- switch between v.7 and v.8 of the CLF (note that v.7 of the CLF is not from the CDN and contains a subset of the full CLF).
- adjust the CSS and Javascript you load between development and production versions.
- set the theme colour options and have those same colours available using the `rgba(var(--color-primary), 1)`, `--color-secondary` and `--color-accent` CSS variables. These are also mapped to Tailwind classes.
- change the base font size and line heights to adjust the overall relative sizing and vertical spacing of the type.
- add a CWL login option to the login page.
- optionally load the CLF fonts from the Google Fonts service.
- add verification header tags for Google and Bing search services.
- opt into a set of svg icons that can be added to the site via the svg [`use`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) tag

### Planned settings (not yet feature complete)
- enable dark mode
