window.onload = function () {
    resize()
};
window.onresize = function () {
    resize()
};

function resize() {
    var bg = document.getElementById("home");
    bg.style.height = Math.round(bg.clientWidth * 1.67) + "px";
}
var fn = 1;
document.getElementById("nav").addEventListener("click", myFunction, true);
var a = 1;
var original = window.scrollY;

function myFunction(e) {
    if (e.target.nodeName == "A") {
        var nabm = e.target.parentElement.parentElement.children;
        for (var b = 0; b < nabm.length; b++) {
            if (b > 1 && b < 6) {
                var lista = nabm[b].children[0];
                lista.href = " ";
                lista.parentElement.className = "";
                if (e.target.hash == "") {
                    e.target.href = "#nonono";
                    if (nabm[1].className != "active" && nabm[6].className != "active") {
                        e.target.parentElement.className = "active"
                    };
                };
            };
        };
        var oti = e.target.innerHTML
        var news = document.getElementById
        var linklist = ["About", "Φεστιβαλ", "Προγραμμα", "Kαλιτεχνες"];
        var linktar = ["elip", "services", "about", "team"];
        for (var i = 0; i < linklist.length; i++) {
            console.trace();
            if (oti == linklist[i]) {
                
                var hita = linktar[i];
                var x = document.getElementById(hita);

                x.classList.add("azzz");
                x.addEventListener("transitionend", function () {
                    if (x.classList.contains("azzz")) {
                        console.log(x);

                        x.classList.add("azzz2");
                        x.classList.remove("azzz");

                    };

                    // x.classList.add("azzz2");



                }, false);






            } else if (document.getElementById(linktar[i]).classList.contains("azzz2") || document.getElementById(linktar[i]).classList.contains("azzz")) {
                 document.getElementById(linktar[i]).classList.remove("azzz");
                


                document.getElementById(linktar[i]).classList.remove("azzz2");
            };
        };
        /*
                        if (hita !=undefined) {
                            var x = document.getElementById(hita).firstElementChild;
                            var list2 = ["nonono", "nonono2", "nonono3", "nonono4"];
                            for (var i = 0; i < list2.length; i++) {
                               // var other = document.getElementById(list2[i]).firstElementChild;
                                if (other != x && other.classList.contains("azzz")) {
                                    other.classList.remove("azzz");
                                };
                            };
                            x.classList.add("azzz");
                            if (fn != 1) {
                            }
                            fn++;
                        };
                */
    };
};
document.getElementById("logo").onclick = function(){document.getElementById(1).click();};
document.getElementsByClassName("btn-xl")[0].onclick = function(){document.getElementById(2).click();};
console.dir(window);

