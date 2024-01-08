/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
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
  Drupal.behaviors.krakensticky = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLnN0aWNreS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBU0EsTUFBTSxFQUFFO0VBQ2hCQSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsWUFBWSxHQUFHO0lBQzlCQyxNQUFNQSxDQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtNQUN4QixJQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztNQUMzQyxJQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQztNQUN4RCxJQUFNRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO01BQ3RELElBQU1HLFFBQVEsR0FBRyxJQUFJQyxvQkFBb0IsQ0FBQ0MsT0FBTyxJQUFJO1FBQ25EQSxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxJQUFJO1VBQ3ZCLElBQUlBLEtBQUssQ0FBQ0MsaUJBQWlCLElBQUksQ0FBQyxFQUFFO1lBQ2hDVixJQUFJLENBQUNXLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1lBQ3BDUixJQUFJLENBQUNPLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1VBQ3pDLENBQUMsTUFBTTtZQUNMWixJQUFJLENBQUNXLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZDVCxJQUFJLENBQUNPLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1VBQzVDO1FBQ0YsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO01BQ0ZSLFFBQVEsQ0FBQ1MsT0FBTyxDQUFDWCxRQUFRLENBQUM7SUFDNUI7RUFDRixDQUFDO0FBQ0gsQ0FBQyxFQUFFVCxNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tyYWtlbi8uL3NyYy9qcy9rcmFrZW4uc3RpY2t5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogRmlsZTogc3RpY2t5LmpzXG4gKlxuICogRGVzYzoganMgZm9yIGFkZGluZyBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXIgdG8gdGhlIG5hdiB0byBtYWtlIGl0IHN0aWNreSB3aGVuIHRoZSBkaXJlY3QgRE9NIHNpYmxpbmcgbGVhdmVzIHRoZSB2aWV3cG9ydCAoI3ViYzctdW5pdCkuXG4gKlxuICovXG4oZnVuY3Rpb24oRHJ1cGFsKSB7XG4gIERydXBhbC5iZWhhdmlvcnMua3Jha2Vuc3RpY2t5ID0ge1xuICAgIGF0dGFjaChjb250ZXh0LCBzZXR0aW5ncykge1xuICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgY29uc3QgdW5pdGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsZjdfX2hlYWRlclwiKTtcbiAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ViYzctdW5pdC1tZW51XCIpO1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgaWYgKGVudHJ5LmludGVyc2VjdGlvblJhdGlvIDw9IDApIHtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcIm5hdi0taXMtcGlubmVkXCIpO1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5bmF2LS1waW5uZWRcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi0taXMtcGlubmVkXCIpO1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5bmF2LS1waW5uZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh1bml0YXJlYSk7XG4gICAgfVxuICB9O1xufSkoRHJ1cGFsKTtcbiJdLCJuYW1lcyI6WyJEcnVwYWwiLCJiZWhhdmlvcnMiLCJrcmFrZW5zdGlja3kiLCJhdHRhY2giLCJjb250ZXh0Iiwic2V0dGluZ3MiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5pdGFyZWEiLCJtZW51Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpbnRlcnNlY3Rpb25SYXRpbyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9ic2VydmUiXSwic291cmNlUm9vdCI6IiJ9