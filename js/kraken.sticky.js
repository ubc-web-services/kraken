/******/ (function() { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/js/kraken.sticky.js ***!
  \*********************************/
/*!
 * File: sticky.js
 *
 * Desc: js for adding intersection observer to the nav to make it sticky when the direct DOM sibling leaves the viewport (#ubc7-unit).
 *
 */
(function (Drupal) {
  Drupal.behaviors.krakenSticky = {
    attach(context, settings) {
      var body = document.querySelector("body");
      var unitarea = document.querySelector("#clf7__header");
      var menu = document.querySelector("#ubc7-unit-menu");
      var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio <= 0) {
            body.classList.add("nav--is-pinned");
            menu.classList.add("stickynav--pinned");
          } else {
            body.classList.remove("nav--is-pinned");
            menu.classList.remove("stickynav--pinned");
          }
        });
      });
      observer.observe(unitarea);
    }
  };
})(Drupal);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLnN0aWNreS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxVQUFTQSxNQUFNLEVBQUU7RUFDaEJBLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxZQUFZLEdBQUc7SUFDOUJDLE1BQU1BLENBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO01BQ3hCLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO01BQzNDLElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO01BQ3hELElBQU1FLElBQUksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7TUFDdEQsSUFBTUcsUUFBUSxHQUFHLElBQUlDLG9CQUFvQixDQUFDQyxPQUFPLElBQUk7UUFDbkRBLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLLElBQUk7VUFDdkIsSUFBSUEsS0FBSyxDQUFDQyxpQkFBaUIsSUFBSSxDQUFDLEVBQUU7WUFDaENWLElBQUksQ0FBQ1csU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7WUFDcENSLElBQUksQ0FBQ08sU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7VUFDekMsQ0FBQyxNQUFNO1lBQ0xaLElBQUksQ0FBQ1csU0FBUyxDQUFDRSxNQUFNLENBQUMsZ0JBQWdCLENBQUM7WUFDdkNULElBQUksQ0FBQ08sU0FBUyxDQUFDRSxNQUFNLENBQUMsbUJBQW1CLENBQUM7VUFDNUM7UUFDRixDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7TUFDRlIsUUFBUSxDQUFDUyxPQUFPLENBQUNYLFFBQVEsQ0FBQztJQUM1QjtFQUNGLENBQUM7QUFDSCxDQUFDLEVBQUVULE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3Jha2VuLy4vc3JjL2pzL2tyYWtlbi5zdGlja3kuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBGaWxlOiBzdGlja3kuanNcbiAqXG4gKiBEZXNjOiBqcyBmb3IgYWRkaW5nIGludGVyc2VjdGlvbiBvYnNlcnZlciB0byB0aGUgbmF2IHRvIG1ha2UgaXQgc3RpY2t5IHdoZW4gdGhlIGRpcmVjdCBET00gc2libGluZyBsZWF2ZXMgdGhlIHZpZXdwb3J0ICgjdWJjNy11bml0KS5cbiAqXG4gKi9cbihmdW5jdGlvbihEcnVwYWwpIHtcbiAgRHJ1cGFsLmJlaGF2aW9ycy5rcmFrZW5TdGlja3kgPSB7XG4gICAgYXR0YWNoKGNvbnRleHQsIHNldHRpbmdzKSB7XG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICBjb25zdCB1bml0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xmN19faGVhZGVyXCIpO1xuICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdWJjNy11bml0LW1lbnVcIik7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPD0gMCkge1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibmF2LS1pcy1waW5uZWRcIik7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJzdGlja3luYXYtLXBpbm5lZFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LS1pcy1waW5uZWRcIik7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3luYXYtLXBpbm5lZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHVuaXRhcmVhKTtcbiAgICB9XG4gIH07XG59KShEcnVwYWwpO1xuIl0sIm5hbWVzIjpbIkRydXBhbCIsImJlaGF2aW9ycyIsImtyYWtlblN0aWNreSIsImF0dGFjaCIsImNvbnRleHQiLCJzZXR0aW5ncyIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bml0YXJlYSIsIm1lbnUiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImludGVyc2VjdGlvblJhdGlvIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib2JzZXJ2ZSJdLCJzb3VyY2VSb290IjoiIn0=