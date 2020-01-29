var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarOne", "navbarone").style.top = "0";
    document.getElementById("navbarTwo", "navbarone").style.top = "0";
  } else {
    document.getElementById("navbarOne", "navbarone").style.top = "-50px";
    document.getElementById("navbarTwo", "navbarone").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;

}

// $(document).ready(function(){
//   $("#menu").click(function(e) {
//     e.preventDefault();
//     $('html, body').animate({
//       scrollTop: $($.attr(this, 'href')).offset().top
//     }, 2000);
//   });
// });

// Fade In & Fade out

// var animateHTML = function() {
//   var elems;
//   var windowHeight;
//   function init() {
//     elems = document.querySelectorAll('.hidden');
//     windowHeight = window.innerHeight;
//     addEventHandlers();
//     checkPosition();
//   }
//   function addEventHandlers() {
//     window.addEventListener('scroll', checkPosition);
//     window.addEventListener('resize', init);
//   }
//   function checkPosition() {
//     for (var i = 0; i < elems.length; i++) {
//       var positionFromTop = elems[i].getBoundingClientRect().top;
//       if (positionFromTop - windowHeight <= 0) {
//         elems[i].className = elems[i].className.replace(
//           'hidden',
//           'fade-in-element'
//         );
//       }
//       if ((positionFromTop - windowHeight > 1) || (positionFromTop < 0)) {
// elems[i].className = elems[i].className.replace(
// 'fade-in-element',
// 'hidden'
// );
// }
//     }
//   }
//   return {
//     init: init
//   };
// };
// animateHTML().init();
