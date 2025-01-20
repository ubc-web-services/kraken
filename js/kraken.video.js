/******/ (() => { // webpackBootstrap
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLnZpZGVvLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFVBQVVBLE1BQU0sRUFBRUMsSUFBSSxFQUFFO0VBQ3ZCRCxNQUFNLENBQUNFLFNBQVMsQ0FBQ0MsV0FBVyxHQUFHO0lBQzdCQyxNQUFNQSxDQUFDQyxPQUFPLEVBQUU7TUFDZEosSUFBSSxDQUFDLFVBQVUsRUFBRSwyQkFBMkIsRUFBRUksT0FBTyxDQUFDLENBQUNDLE9BQU8sQ0FBRUMsSUFBSSxJQUFLO1FBQ3ZFQSxJQUFJLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1VBQ25DLElBQU1DLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxhQUFhLENBQzlCLHVDQUNGLENBQUM7VUFDRCxJQUFNQyxLQUFLLEdBQUdKLElBQUksQ0FBQ0csYUFBYSxDQUFDLHdCQUF3QixDQUFDO1VBQzFEQyxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztVQUM3QkosS0FBSyxDQUFDSyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ2pDLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQztBQUNILENBQUMsRUFBRWQsTUFBTSxFQUFFQyxJQUFJLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tyYWtlbi8uL3NyYy9qcy9rcmFrZW4udmlkZW8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEZpbGU6IHZpZGVvLmpzXG4gKlxuICogRGVzYzoganMgZm9yIHZpZGVvIHNjcmlwdHMgaW4gdGhlIHRoZW1lXG4gKlxuICovXG4oZnVuY3Rpb24gKERydXBhbCwgb25jZSkge1xuICBEcnVwYWwuYmVoYXZpb3JzLmtyYWtlblZpZGVvID0ge1xuICAgIGF0dGFjaChjb250ZXh0KSB7XG4gICAgICBvbmNlKFwianMtdmlkZW9cIiwgXCIubWVkaWEtLXR5cGUtcmVtb3RlLXZpZGVvXCIsIGNvbnRleHQpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZpZGVvID0gaXRlbS5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuZmllbGQtLW5hbWUtZmllbGQtbWVkaWEtb2VtYmVkLXZpZGVvXCIsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCB0aHVtYiA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5maWVsZC0tbmFtZS10aHVtYm5haWxcIik7XG4gICAgICAgICAgdGh1bWIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICB2aWRlby5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcbn0pKERydXBhbCwgb25jZSk7XG4iXSwibmFtZXMiOlsiRHJ1cGFsIiwib25jZSIsImJlaGF2aW9ycyIsImtyYWtlblZpZGVvIiwiYXR0YWNoIiwiY29udGV4dCIsImZvckVhY2giLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZpZGVvIiwicXVlcnlTZWxlY3RvciIsInRodW1iIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlQXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==