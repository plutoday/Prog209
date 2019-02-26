var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

context.lineWidth = 5;
context.beginPath();
context.moveTo(50, 100);
context.lineTo(200, 100);
context.stroke();