var showButton = document.querySelector("#show");
showButton.addEventListener("click", showColorHandler, false);
var clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clear, false);

function showColorHandler(e){
    var r = document.getElementById("red").value - 0;
    var g = document.getElementById("green").value - 0;
    var b = document.getElementById("blue").value - 0;
    var max = Math.max(r,g,b);
    var min = Math.min(r,g,b);
    if (validator(max,min)){
        colorBar.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("hex").innerHTML = "#"+r.toString(16)+g.toString(16)+b.toString(16);
    } else {
        alert("Please input valid numbers whithin 0~255!");
        clear();
    }
}

function validator(max,min){
    if (max==undefined || isNaN(max) || max>255 || min<0){
        return false;        
} else{
        return true;
}
}

function clear(){
    colorBar.style.backgroundColor = "transparent";
    document.getElementById("red").value = "";
    document.getElementById("green").value = "";
    document.getElementById("blue").value = "";
    document.getElementById("hex").innerHTML ="";
}
