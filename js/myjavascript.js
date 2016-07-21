//window.onload  = initAll;

var headerS = document.getElementsByTagName("header");
var section1 = document.getElementById("header");
var windowh = window.innerHeight;

function initAll() {
    headerS[0].style.minHeight = windowh + "px";
    section1.style.minHeight = windowh + "px";
};
