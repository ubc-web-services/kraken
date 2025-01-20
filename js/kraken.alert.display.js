/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./src/js/kraken.alert.display.js ***!
  \****************************************/
/*
 * File: alert.display.js
 *
 * Desc: js for alert cookies in the theme
 *
 */
(function (Drupal, once) {
  Drupal.behaviors.krakenAlertDisplay = {
    attach(context) {
      once("js-alert", ".content-item--type-alert-banner", context).forEach(item => {
        var {
          alertId
        } = item.dataset;
        var trigger = item.querySelector(".js-dismiss__trigger");
        var getStore = localStorage.getItem(alertId);
        trigger.addEventListener("click", () => {
          localStorage.setItem(alertId, "hide");
        });
        if (getStore == null) {
          // alert ID isn't in localstorage;
          item.removeAttribute("hidden");
        }
      });
    }
  };
})(Drupal, once);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLmFsZXJ0LmRpc3BsYXkuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsVUFBVUEsTUFBTSxFQUFFQyxJQUFJLEVBQUU7RUFDdkJELE1BQU0sQ0FBQ0UsU0FBUyxDQUFDQyxrQkFBa0IsR0FBRztJQUNwQ0MsTUFBTUEsQ0FBQ0MsT0FBTyxFQUFFO01BQ2RKLElBQUksQ0FBQyxVQUFVLEVBQUUsa0NBQWtDLEVBQUVJLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLENBQ2xFQyxJQUFJLElBQUs7UUFDUixJQUFNO1VBQUVDO1FBQVEsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLE9BQU87UUFDaEMsSUFBTUMsT0FBTyxHQUFHSCxJQUFJLENBQUNJLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztRQUMxRCxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDTixPQUFPLENBQUM7UUFFOUNFLE9BQU8sQ0FBQ0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07VUFDdENGLFlBQVksQ0FBQ0csT0FBTyxDQUFDUixPQUFPLEVBQUUsTUFBTSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQztRQUVGLElBQUlJLFFBQVEsSUFBSSxJQUFJLEVBQUU7VUFDcEI7VUFDQUwsSUFBSSxDQUFDVSxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ2hDO01BQ0YsQ0FDRixDQUFDO0lBQ0g7RUFDRixDQUFDO0FBQ0gsQ0FBQyxFQUFFakIsTUFBTSxFQUFFQyxJQUFJLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tyYWtlbi8uL3NyYy9qcy9rcmFrZW4uYWxlcnQuZGlzcGxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogRmlsZTogYWxlcnQuZGlzcGxheS5qc1xuICpcbiAqIERlc2M6IGpzIGZvciBhbGVydCBjb29raWVzIGluIHRoZSB0aGVtZVxuICpcbiAqL1xuKGZ1bmN0aW9uIChEcnVwYWwsIG9uY2UpIHtcbiAgRHJ1cGFsLmJlaGF2aW9ycy5rcmFrZW5BbGVydERpc3BsYXkgPSB7XG4gICAgYXR0YWNoKGNvbnRleHQpIHtcbiAgICAgIG9uY2UoXCJqcy1hbGVydFwiLCBcIi5jb250ZW50LWl0ZW0tLXR5cGUtYWxlcnQtYmFubmVyXCIsIGNvbnRleHQpLmZvckVhY2goXG4gICAgICAgIChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBhbGVydElkIH0gPSBpdGVtLmRhdGFzZXQ7XG4gICAgICAgICAgY29uc3QgdHJpZ2dlciA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1kaXNtaXNzX190cmlnZ2VyXCIpO1xuICAgICAgICAgIGNvbnN0IGdldFN0b3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYWxlcnRJZCk7XG5cbiAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShhbGVydElkLCBcImhpZGVcIik7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoZ2V0U3RvcmUgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gYWxlcnQgSUQgaXNuJ3QgaW4gbG9jYWxzdG9yYWdlO1xuICAgICAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9LFxuICB9O1xufSkoRHJ1cGFsLCBvbmNlKTtcbiJdLCJuYW1lcyI6WyJEcnVwYWwiLCJvbmNlIiwiYmVoYXZpb3JzIiwia3Jha2VuQWxlcnREaXNwbGF5IiwiYXR0YWNoIiwiY29udGV4dCIsImZvckVhY2giLCJpdGVtIiwiYWxlcnRJZCIsImRhdGFzZXQiLCJ0cmlnZ2VyIiwicXVlcnlTZWxlY3RvciIsImdldFN0b3JlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRJdGVtIiwicmVtb3ZlQXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==