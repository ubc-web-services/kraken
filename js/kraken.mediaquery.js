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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLm1lZGlhcXVlcnkuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBVUEsTUFBTSxFQUFFO0VBQ2pCQSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsZ0JBQWdCLEdBQUc7SUFDbENDLE1BQU1BLENBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO01BQ3hCLElBQUlDLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7UUFDakRDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO01BQ3ZDLFNBQVNDLEtBQUtBLENBQUNOLEtBQUssRUFBRTtRQUNwQkEsS0FBSyxDQUFDTyxPQUFPLEdBQ1RKLElBQUksQ0FBQ0ssWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FDdENMLElBQUksQ0FBQ0ssWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7TUFDNUM7TUFDQUYsS0FBSyxDQUFDTixLQUFLLENBQUMsRUFBRUEsS0FBSyxDQUFDUyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVILEtBQUssQ0FBQztJQUN2RDtFQUNGLENBQUM7QUFDSCxDQUFDLEVBQUVaLE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va3Jha2VuLy4vc3JjL2pzL2tyYWtlbi5tZWRpYXF1ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBGaWxlOiBtZWRpYXF1ZXJ5LmpzXG4gKlxuICogRGVzYzoganMgZm9yIGFkZGluZyBhIG1lZGlhcXVlcnkgY2xhc3MgdG8gdGhlIGJvZHlcbiAqXG4gKi9cbihmdW5jdGlvbiAoRHJ1cGFsKSB7XG4gIERydXBhbC5iZWhhdmlvcnMua3Jha2VuTWVkaWFRdWVyeSA9IHtcbiAgICBhdHRhY2goY29udGV4dCwgc2V0dGluZ3MpIHtcbiAgICAgIHZhciBxdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTc5cHgpXCIpLFxuICAgICAgICBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICBmdW5jdGlvbiB3YXRjaChxdWVyeSkge1xuICAgICAgICBxdWVyeS5tYXRjaGVzXG4gICAgICAgICAgPyBib2R5LnNldEF0dHJpYnV0ZShcImRhdGEtc2NyZWVuXCIsIFwic21cIilcbiAgICAgICAgICA6IGJvZHkuc2V0QXR0cmlidXRlKFwiZGF0YS1zY3JlZW5cIiwgXCJsZ1wiKTtcbiAgICAgIH1cbiAgICAgIHdhdGNoKHF1ZXJ5KSwgcXVlcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB3YXRjaCk7XG4gICAgfSxcbiAgfTtcbn0pKERydXBhbCk7XG4iXSwibmFtZXMiOlsiRHJ1cGFsIiwiYmVoYXZpb3JzIiwia3Jha2VuTWVkaWFRdWVyeSIsImF0dGFjaCIsImNvbnRleHQiLCJzZXR0aW5ncyIsInF1ZXJ5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3YXRjaCIsIm1hdGNoZXMiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==