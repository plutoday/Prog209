"use strict"
let sound = document.querySelector("#bomb");
let soundLong = document.querySelector("#bombLong");
let currentSound = null;

let tro = 10;
let pha = 15;
let ufoNum = 5;
// Arrow key codes
const UP = 38,
    DOWN = 40,
    RIGHT = 39,
	LEFT = 37,
	W = 87,
	Z = 90,
	S = 83;
// rocket object
let rocket = {
	img: document.querySelector("#rocket"),
	x: 490,
	y: 390,
	width: 100
};
let velocity = 5;

let ufo = {
	img : document.querySelector("#ufo"),
	x: 90,
	y: 200,
	width: 100
}

const torpedo = document.querySelector("#torpedo"),
	phaser = document.querySelector("#phaser"),
    startBtn = document.querySelector("#start"),
	fireBtn = document.querySelector("#fire"),
	restartBtn = document.querySelector("#restart");
// Initialize objects on the screen
render ( );

startBtn.addEventListener("click",startGameHandler,false);
fireBtn.addEventListener("click",fireTorpedoHandler,false);
restartBtn.addEventListener("click",restartGame,false);
window.addEventListener("keydown",keydownHandler,false);

function restartGame(){
	fuel = 1000;
	tro = 10;
	pha = 15;
	ufoNum = 5;
	document.getElementById("phaNum").innerHTML = "Phasers: "+pha +" (Press S)";
	document.getElementById("troNum").innerHTML = "Photon torpedoes: "+tro;
	document.getElementById("fuelNum").innerHTML = "Dilithium fuel: "+fuelPercent +"%";
	rocket.x = 490;
	rocket.y = Math.floor(Math.random()*300+70);
	newUfo();
	render();
}

function startGameHandler( ) {
	// Hide the intro screen, show the game screen
	introScreen.style.display = "none";
	gameScreen.style.display = "block";
	rocket.img.style.display = "block";
	ufo.img.style.display = "block";
}
function firePhaser(){
	if (pha>0){
		pha--;
		document.getElementById("phaNum").innerHTML = "Phasers: "+pha +" (Press S)";
		phaser.style.visibility = "visible";
		console.log(phaser.style.left);
		phaser.style.left = (rocket.x - 200)+ "px";
		console.log(phaser.style.left);
		currentSound = soundLong;
		currentSound.currentTime = 0;
		currentSound.play();
		currentSound = null;
		let distanceX = rocket.x-ufo.x;
		let distanceY = rocket.y-ufo.y;
		if (-40<= distanceY && distanceY<= 40 && 60<= distanceX && distanceX <= 260){
	
			setTimeout(hiddenUfo, 2300);
			if (ufoNum>0){
				setTimeout(newUfo, 2700);
			}else{
				setTimeout(win, 2700);
			}
		} else{
			setTimeout(hiddenPhaser, 2300);
		}
}
		
}
	function win(){
	alert("You win! Please retart the game.");
	}
	function newUfo(){
		ufo.img.style.visibility = "visible";
		ufo.x = 90;
		ufo.y = Math.floor(Math.random()*310+70);
		ufoNum--;
		render();
	}

function hiddenPhaser(){
	document.getElementById("phaser").style.visibility = "hidden";
	phaser.style.left = (rocket.x -10) + "px";

}

function fireTorpedoHandler( ) {
	// Fire the photon torpedo!
	// CSS animation occurs whenever torpedo
	// 'left' property changes value
	if (tro>0){
	tro--;
	document.getElementById("troNum").innerHTML = "Photon torpedoes: "+tro;
	torpedo.style.visibility = "visible";
	torpedo.style.left = (rocket.x - 150)+ "px";
	currentSound = sound;
	currentSound.currentTime = 0;
	currentSound.play();
	currentSound = null;
	let distanceX = rocket.x-ufo.x;
	let distanceY = rocket.y-ufo.y;
	if (-40<= distanceY && distanceY<= 40 && 60<= distanceX && distanceX <= 260){
		setTimeout(hiddenUfo, 1000);
		if (ufoNum>0){
			setTimeout(newUfo, 1400);
		}else{
			setTimeout(win, 1400);
		}
	} else{
		setTimeout(hiddenTorpedo, 1000);
	}
}

}

function hiddenUfo(){
	document.getElementById("ufo").style.visibility = "hidden";
	document.getElementById("torpedo").style.visibility = "hidden";
	document.getElementById("phaser").style.visibility = "hidden";
	torpedo.style.left = (rocket.x +10) + "px";
	phaser.style.left = (rocket.x -10) + "px";

}
function hiddenTorpedo(){
	document.getElementById("torpedo").style.visibility = "hidden";
	torpedo.style.left = (rocket.x +10) + "px";

}

function keydownHandler(event) {
	// handle user keyboard input
	if(fuel>0){

	if (event.keyCode == UP) {
		rocket.y -= velocity;
		burnFuel();
	}
	if (event.keyCode == LEFT) {
		rocket.x -= velocity;
		burnFuel();
	}
	if (event.keyCode === DOWN) {
		rocket.y += velocity;
		burnFuel();
	}
	if (event.keyCode == RIGHT) {
		rocket.x += velocity;
		burnFuel();
	}
	render( );

}
	if (event.keyCode === W) {
		ufo.y -= velocity*2.5;
	}
	if (event.keyCode == Z) {
		ufo.y += velocity*2.5;
	}
	if (event.keyCode == S) {
		firePhaser();
		}

}
let fuel = 1000;
let fuelPercent = 100;
function burnFuel(){
	fuel--;
	fuelPercent = fuel/10;
	document.getElementById("fuelNum").innerHTML = "Dilithium fuel: "+fuelPercent +"%";
}

function render( ) {
	// position objects on the screen
	rocket.img.style.left = rocket.x + "px";
	rocket.img.style.top = rocket.y + "px";
	ufo.img.style.left = ufo.x + "px";
	ufo.img.style.top = ufo.y + "px";
	torpedo.style.left = (rocket.x +10) + "px";
	torpedo.style.top = (rocket.y+8) + "px";
	torpedo.style.visibility = "hidden";
	phaser.style.left = (rocket.x -10) + "px";
	phaser.style.top = (rocket.y+8) + "px";
	phaser.style.visibility = "hidden";

}