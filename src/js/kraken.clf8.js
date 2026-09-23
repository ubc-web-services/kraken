/*
 * File: clf8.js
 *
 * Desc: js for the clf web component
 *
 */
(function (Drupal, once) {
  Drupal.behaviors.krakenClf8 = {
    attach(context) {
      once('ubc-button-click', document.documentElement).forEach(() => {
        document.addEventListener('ubc-button-click', (event) => {
          const nav = document.querySelector('#ubc7-unit-navigation');
          if (!nav) {
            return;
          }
          // toggle: false stops the constructor from toggling the
          // element immediately on first instantiation.
          const collapse = bootstrap.Collapse.getOrCreateInstance(nav, {
            toggle: false,
          });
          collapse.toggle();
        });
      });
    },
  };
})(Drupal, once);
