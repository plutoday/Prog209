/*
================================
Coder: Xiaoxuan Li
Date : 03/04/2018

Description: Exercise 7 - draw road sign by using html5 canvas object.

*/ 

var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");
var canvas2 = document.querySelector("#myCanvas2");
var ctx2 = canvas2.getContext("2d");

ctx.save();			// save previous display state
//  set drawing properties for the sign
ctx.lineWidth = 32;	       // nice wide line		
ctx.lineJoin = "round";	   // rounded corners
ctx.strokeStyle = "red";
ctx.fillStyle = "red";


// create octagon linear path
ctx.beginPath();
ctx.arc(300, 300, 200, 0, 2 * Math.PI);
ctx.stroke();

// fill the sign and draw wide red lines
ctx.fill();
ctx.stroke();	

// draw narrower white lines -- these will display on top of the wide red lines and make the red lines
// look like the outside edge -- a nice trick!
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.stroke();

ctx.lineWidth = 50;
ctx.beginPath();
ctx.moveTo(150, 300);
ctx.lineTo(450, 300);
ctx.stroke();

// draw STOP text
ctx.fillStyle  = "white";
ctx.font = "bold 70px Arial";
ctx.fillText( "DO NOT" ,160, 240);


ctx.fillStyle  = "white";
ctx.font = "bold 70px Arial";
ctx.fillText( "ENTER" ,180, 420);
ctx.restore();		// restore previous display state



ctx2.save();			// save previous display state
//  set drawing properties for the sign
ctx2.lineWidth = 15;	       // nice wide line		
ctx2.lineJoin = "round";	   // rounded corners
ctx2.strokeStyle = "black";
ctx2.fillStyle = "yellow";


ctx2.beginPath();
ctx2.moveTo(300, 100);
ctx2.lineTo(100, 300);
ctx2.lineTo(300, 500);
ctx2.lineTo(500, 300);


ctx2.closePath();
ctx2.fill();
ctx2.stroke();

ctx2.lineWidth = 80;
ctx2.beginPath();
ctx2.moveTo(300, 180);
ctx2.lineTo(300, 420);

ctx2.stroke();

ctx2.lineCap = "round";
ctx2.lineWidth = 60;
ctx2.strokeStyle = "red";

ctx2.beginPath();
ctx2.moveTo(300, 220);
ctx2.lineTo(300, 220);

ctx2.closePath();
ctx2.fill();
ctx2.stroke();

ctx2.lineCap = "round";
ctx2.lineWidth = 60;
ctx2.strokeStyle = "yellow";

ctx2.beginPath();
ctx2.moveTo(300, 300);
ctx2.lineTo(300, 300);

ctx2.closePath();
ctx2.fill();
ctx2.stroke();

ctx2.lineCap = "round";
ctx2.lineWidth = 60;
ctx2.strokeStyle = "green";

ctx2.beginPath();
ctx2.moveTo(300, 380);
ctx2.lineTo(300, 380);

ctx2.closePath();
ctx2.fill();
ctx2.stroke();
