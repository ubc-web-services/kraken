/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/js/kraken.scroll.js ***!
  \*********************************/
/*!
 * File: scroll.js
 *
 * Desc: js for adding intersection observer to the top top button, revealing it when the totop-mask is outside of the viewport
 *
 */
(function (Drupal) {
  Drupal.behaviors.krakenscroll = {
    attach(context, settings) {
      var topbtn = document.querySelector("#totop");
      var topcontainer = document.querySelector("#totop-mask");
      var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            topbtn.classList.remove("is-visible");
          } else {
            topbtn.classList.add("is-visible");
          }
        });
      });
      observer.observe(topcontainer);
      document.getElementById("totop").addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  };
})(Drupal);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3Jha2VuLnNjcm9sbC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxVQUFTQSxNQUFNLEVBQUU7RUFDaEJBLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxZQUFZLEdBQUc7SUFDOUJDLE1BQU1BLENBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO01BQ3hCLElBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO01BQy9DLElBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO01BQzFELElBQU1FLFFBQVEsR0FBRyxJQUFJQyxvQkFBb0IsQ0FBQ0MsT0FBTyxJQUFJO1FBQ25EQSxPQUFPLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxJQUFJO1VBQ3ZCLElBQUlBLEtBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO1lBQy9CVCxNQUFNLENBQUNVLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztVQUN2QyxDQUFDLE1BQU07WUFDTFgsTUFBTSxDQUFDVSxTQUFTLENBQUNFLEdBQUcsQ0FBQyxZQUFZLENBQUM7VUFDcEM7UUFDRixDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7TUFDRlIsUUFBUSxDQUFDUyxPQUFPLENBQUNWLFlBQVksQ0FBQztNQUM5QkYsUUFBUSxDQUFDYSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQy9EQyxNQUFNLENBQUNDLFFBQVEsQ0FBQztVQUNkQyxHQUFHLEVBQUUsQ0FBQztVQUNOQyxRQUFRLEVBQUU7UUFDWixDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7SUFDSjtFQUNGLENBQUM7QUFDSCxDQUFDLEVBQUV6QixNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tyYWtlbi8uL3NyYy9qcy9rcmFrZW4uc2Nyb2xsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogRmlsZTogc2Nyb2xsLmpzXG4gKlxuICogRGVzYzoganMgZm9yIGFkZGluZyBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXIgdG8gdGhlIHRvcCB0b3AgYnV0dG9uLCByZXZlYWxpbmcgaXQgd2hlbiB0aGUgdG90b3AtbWFzayBpcyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydFxuICpcbiAqL1xuKGZ1bmN0aW9uKERydXBhbCkge1xuICBEcnVwYWwuYmVoYXZpb3JzLmtyYWtlbnNjcm9sbCA9IHtcbiAgICBhdHRhY2goY29udGV4dCwgc2V0dGluZ3MpIHtcbiAgICAgIGNvbnN0IHRvcGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG90b3BcIik7XG4gICAgICBjb25zdCB0b3Bjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdG9wLW1hc2tcIik7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgICB0b3BidG4uY2xhc3NMaXN0LnJlbW92ZShcImlzLXZpc2libGVcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvcGJ0bi5jbGFzc0xpc3QuYWRkKFwiaXMtdmlzaWJsZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRvcGNvbnRhaW5lcik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdG9wXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSkoRHJ1cGFsKTtcbiJdLCJuYW1lcyI6WyJEcnVwYWwiLCJiZWhhdmlvcnMiLCJrcmFrZW5zY3JvbGwiLCJhdHRhY2giLCJjb250ZXh0Iiwic2V0dGluZ3MiLCJ0b3BidG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b3Bjb250YWluZXIiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImludGVyc2VjdGlvblJhdGlvIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiXSwic291cmNlUm9vdCI6IiJ9