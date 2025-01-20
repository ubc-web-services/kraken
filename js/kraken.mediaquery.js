/******/ (function() { // webpackBootstrap
/*!*************************************!*\
  !*** ./src/js/kraken.mediaquery.js ***!
  \*************************************/
/*
 * File: mediaquery.js
 *
 * Desc: js for adding a mediaquery class to the body
 *
 */
(function (Drupal) {
  Drupal.behaviors.krakenMediaQuery = {
    attach(context, settings) {
      var query = window.matchMedia("(max-width: 979px)"),
        body = document.querySelector("body");
      function watch(query) {
        query.matches ? body.setAttribute("data-screen", "sm") : body.setAttribute("data-screen", "lg");
      }
      watch(query), query.addEventListener("change", watch);
    }
  };
})(Drupal);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLm1lZGlhcXVlcnkuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBU0EsTUFBTSxFQUFFO0VBQ2RBLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxnQkFBZ0IsR0FBRztJQUNoQ0MsTUFBTUEsQ0FBQ0MsT0FBTyxFQUFFQyxRQUFRLEVBQUU7TUFDdEIsSUFBSUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNuREMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7TUFDckMsU0FBU0MsS0FBS0EsQ0FBQ04sS0FBSyxFQUFFO1FBQ2xCQSxLQUFLLENBQUNPLE9BQU8sR0FBR0osSUFBSSxDQUFDSyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxHQUFHTCxJQUFJLENBQUNLLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO01BQ25HO01BQ0FGLEtBQUssQ0FBQ04sS0FBSyxDQUFDLEVBQ1pBLEtBQUssQ0FBQ1MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFSCxLQUFLLENBQUM7SUFDM0M7RUFDSixDQUFDO0FBQ0wsQ0FBQyxFQUFFWixNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tyYWtlbi8uL3NyYy9qcy9rcmFrZW4ubWVkaWFxdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogRmlsZTogbWVkaWFxdWVyeS5qc1xuICpcbiAqIERlc2M6IGpzIGZvciBhZGRpbmcgYSBtZWRpYXF1ZXJ5IGNsYXNzIHRvIHRoZSBib2R5XG4gKlxuICovXG4oZnVuY3Rpb24oRHJ1cGFsKSB7XG4gICAgRHJ1cGFsLmJlaGF2aW9ycy5rcmFrZW5NZWRpYVF1ZXJ5ID0ge1xuICAgICAgICBhdHRhY2goY29udGV4dCwgc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTc5cHgpXCIpLFxuICAgICAgICAgICAgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICAgICAgZnVuY3Rpb24gd2F0Y2gocXVlcnkpIHtcbiAgICAgICAgICAgICAgICBxdWVyeS5tYXRjaGVzID8gYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNjcmVlblwiLCBcInNtXCIpIDogYm9keS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNjcmVlblwiLCBcImxnXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3YXRjaChxdWVyeSksXG4gICAgICAgICAgICBxdWVyeS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHdhdGNoKVxuICAgICAgICB9XG4gICAgfTtcbn0pKERydXBhbCk7XG4iXSwibmFtZXMiOlsiRHJ1cGFsIiwiYmVoYXZpb3JzIiwia3Jha2VuTWVkaWFRdWVyeSIsImF0dGFjaCIsImNvbnRleHQiLCJzZXR0aW5ncyIsInF1ZXJ5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3YXRjaCIsIm1hdGNoZXMiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==