/*
 * File: ubcit.carousel.js
 *
 * Desc: js for misc scripts in the theme
 *
 */
(function (Drupal, once, $) {
    Drupal.behaviors.krakenCarousel = {
      attach(context) {
        once('js-carousel', '.bootstrap-carousel', context).forEach(function (element) {
            // make first slide active
            $('.carousel-item:first-child').addClass('active');
        });
      },
    };
  })(Drupal, once, jQuery);

