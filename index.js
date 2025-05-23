var now = new Date()
var hrs = document.getElementById("hr")
var mint= document.getElementById("min")
var sect= document.getElementById("sec")
var dt = document.getElementById("date")
function timee(){
        var now = new Date()
        hrs.textContent= now.getHours();
        mint.textContent = now.getMinutes();
        sect.textContent= now.getSeconds();
        dt.textContent= now.getDate() +":" + (now.getMonth() + 1) + ":" + now.getFullYear();
}
setInterval(timee,1000);
timee();