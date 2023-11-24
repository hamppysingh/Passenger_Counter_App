document.getElementById("box").addEventListener("mouseenter", function() { //mouseover not working here
    document.getElementById("box").style.transition = "transform 0.3s ease-in-out";
});
var total=0;
document.getElementById("increment").addEventListener("click", function() {
    var a = parseInt(document.getElementById("inc").innerHTML);
    a += 1;
    document.getElementById("inc").innerHTML = a;
});
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("inc").innerHTML=0;
    document.getElementById("total").innerHTML="";
    total=0;
    document.getElementById("ans").innerHTML="";
});
document.getElementById("save").addEventListener("click", function() {
    var a = parseInt(document.getElementById("inc").innerHTML);
    document.getElementById("ans").innerHTML += a+" - ";
    document.getElementById("inc").innerHTML=0;
    total+=a;
    document.getElementById("total").innerHTML=total;
});