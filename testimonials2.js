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
