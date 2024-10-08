/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/js/kraken.video.js ***!
  \********************************/
/*
 * File: video.js
 *
 * Desc: js for video scripts in the theme
 *
 */
(function (Drupal, once) {
  Drupal.behaviors.krakenVideo = {
    attach(context) {
      once("js-video", ".media--type-remote-video", context).forEach(item => {
        item.addEventListener("click", () => {
          var video = item.querySelector(".field--name-field-media-oembed-video");
          var thumb = item.querySelector(".field--name-thumbnail");
          thumb.classList.add("hidden");
          video.removeAttribute("hidden");
        });
      });
    }
  };
})(Drupal, once);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLnZpZGVvLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVQSxNQUFNLEVBQUVDLElBQUksRUFBRTtFQUN2QkQsTUFBTSxDQUFDRSxTQUFTLENBQUNDLFdBQVcsR0FBRztJQUM3QkMsTUFBTUEsQ0FBQ0MsT0FBTyxFQUFFO01BQ2RKLElBQUksQ0FBQyxVQUFVLEVBQUUsMkJBQTJCLEVBQUVJLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLENBQUVDLElBQUksSUFBSztRQUN2RUEsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtVQUNuQyxJQUFNQyxLQUFLLEdBQUdGLElBQUksQ0FBQ0csYUFBYSxDQUM5Qix1Q0FDRixDQUFDO1VBQ0QsSUFBTUMsS0FBSyxHQUFHSixJQUFJLENBQUNHLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztVQUMxREMsS0FBSyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7VUFDN0JKLEtBQUssQ0FBQ0ssZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7SUFDSjtFQUNGLENBQUM7QUFDSCxDQUFDLEVBQUVkLE1BQU0sRUFBRUMsSUFBSSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rcmFrZW4vLi9zcmMvanMva3Jha2VuLnZpZGVvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBGaWxlOiB2aWRlby5qc1xuICpcbiAqIERlc2M6IGpzIGZvciB2aWRlbyBzY3JpcHRzIGluIHRoZSB0aGVtZVxuICpcbiAqL1xuKGZ1bmN0aW9uIChEcnVwYWwsIG9uY2UpIHtcbiAgRHJ1cGFsLmJlaGF2aW9ycy5rcmFrZW5WaWRlbyA9IHtcbiAgICBhdHRhY2goY29udGV4dCkge1xuICAgICAgb25jZShcImpzLXZpZGVvXCIsIFwiLm1lZGlhLS10eXBlLXJlbW90ZS12aWRlb1wiLCBjb250ZXh0KS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB2aWRlbyA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLmZpZWxkLS1uYW1lLWZpZWxkLW1lZGlhLW9lbWJlZC12aWRlb1wiLFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgdGh1bWIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZmllbGQtLW5hbWUtdGh1bWJuYWlsXCIpO1xuICAgICAgICAgIHRodW1iLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgdmlkZW8ucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG59KShEcnVwYWwsIG9uY2UpO1xuIl0sIm5hbWVzIjpbIkRydXBhbCIsIm9uY2UiLCJiZWhhdmlvcnMiLCJrcmFrZW5WaWRlbyIsImF0dGFjaCIsImNvbnRleHQiLCJmb3JFYWNoIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2aWRlbyIsInF1ZXJ5U2VsZWN0b3IiLCJ0aHVtYiIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=