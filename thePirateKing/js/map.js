const ctx1 = document.querySelector("#myCanvas1").getContext("2d");
const ctx2 = document.querySelector("#myCanvas2").getContext("2d");
const ctx3 = document.querySelector("#myCanvas3").getContext("2d");

ctx1.strokeStyle = "green";
ctx1.fillStyle = "green";
ctx1.beginPath();
canvas_arrow(ctx1, 125, 300, 125, 390);
canvas_arrow(ctx1, 125, 390, 125, 300);
canvas_arrow(ctx1, 155, 270, 315, 270);
canvas_arrow(ctx1, 315, 270, 155, 270);
canvas_arrow(ctx1, 125, 150, 125, 240);
canvas_arrow(ctx1, 125, 240, 125, 150);
canvas_arrow(ctx1, 155, 130, 315, 130);
canvas_arrow(ctx1, 315, 130, 155, 130);
canvas_arrow(ctx1, 155, 410, 315, 410);
canvas_arrow(ctx1, 315, 410, 155, 410);
canvas_arrow(ctx1, 340, 300, 340, 390);
canvas_arrow(ctx1, 340, 390, 340, 300);
canvas_arrow(ctx1, 340, 150, 340, 240);
canvas_arrow(ctx1, 340, 240, 340, 150);
canvas_arrow(ctx1, 125, 440, 125, 550);
canvas_arrow(ctx1, 125, 550, 125, 440);
canvas_arrow(ctx1, 340, 440, 340, 550);
canvas_arrow(ctx1, 340, 550, 340, 440);
canvas_arrow(ctx1, 155, 580, 315, 580);
canvas_arrow(ctx1, 315, 580, 155, 580);
ctx1.stroke();


ctx2.strokeStyle = "green";
ctx2.fillStyle = "green";
ctx2.beginPath();
canvas_arrow(ctx2, 25, 270, 220, 270);
canvas_arrow(ctx2, 220, 270, 25, 270);
canvas_arrow(ctx2, 25, 130, 220, 130);
canvas_arrow(ctx2, 220, 130, 25, 130);
canvas_arrow(ctx2, 25, 410, 220, 410);
canvas_arrow(ctx2, 220, 410, 25, 410);
canvas_arrow(ctx2, 250, 300, 250, 390);
canvas_arrow(ctx2, 250, 390, 250, 300);
canvas_arrow(ctx2, 250, 150, 250, 240);
canvas_arrow(ctx2, 250, 240, 250, 150);
canvas_arrow(ctx2, 25, 580, 220, 580);
canvas_arrow(ctx2, 220, 580, 25, 580);
canvas_arrow(ctx2, 250, 440, 250, 550);
canvas_arrow(ctx2, 250, 550, 250, 440);
ctx2.stroke();

ctx3.strokeStyle = "green";
ctx3.fillStyle = "green";
ctx3.beginPath();
canvas_arrow(ctx3, 25, 270, 160, 270);
canvas_arrow(ctx3, 160, 270, 25, 270);
canvas_arrow(ctx3, 25, 130, 170, 130);
canvas_arrow(ctx3, 160, 130, 25, 130);
canvas_arrow(ctx3, 25, 410, 160, 410);
canvas_arrow(ctx3, 160, 410, 25, 410);
canvas_arrow(ctx3, 180, 300, 180, 390);
canvas_arrow(ctx3, 180, 390, 180, 300);
canvas_arrow(ctx3, 180, 150, 180, 240);
canvas_arrow(ctx3, 180, 240, 180, 150);
canvas_arrow(ctx3, 200, 130, 350, 130);
canvas_arrow(ctx3, 25, 580, 160, 580);
canvas_arrow(ctx3, 160, 580, 25, 580);
canvas_arrow(ctx3, 180, 440, 180, 550);
canvas_arrow(ctx3, 180, 550, 180, 440);
ctx3.stroke();

function canvas_arrow(context, fromx, fromy, tox, toy){
    var headlen = 10;   // length of head in pixels
    var angle = Math.atan2(toy-fromy,tox-fromx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),
    toy-headlen*Math.sin(angle-Math.PI/6));
    context.moveTo(tox, toy);
    context.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),
    toy-headlen*Math.sin(angle+Math.PI/6));
}