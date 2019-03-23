"use strict";
/*
================================================================
Coder: Xiaoxuan Li
Date : 03/22/2018

Description: Project 2 - An adventure game by using object, local storage
and dynamically adjusted CSS.
*/
/* connect scenes in the direction of east and west*/
function connectWestEast(scene1, scene2) {
	scene1.east = scene2;
	scene2.west = scene1;
}

/* connect scenes in the direction of north and south*/
function connectNorthSouth(scene1, scene2) {
	scene1.south = scene2;
	scene2.north = scene1;
}

/*
Setting up game scenes function by modeling scenes and connecting scenes 
of direction
*/
let getScenes = function() {

let scene_start = {
	url: "images/start.jpg",
	getScript: function() {
		return `Hello, Captain, this is where you start the trip.
		Let's go find the treasure! You can go north, south, 
		or east. Where do you wanna go?`;
	}
};

let scene_blank01 = {
	url: "images/blank01.jpg",
	getScript: function() {
		return `It seems nothing here! You can go south, or east.`;
	}
};

let scene_blank03 = {
	url: "images/blank03.jpg",
	getScript: function() {
		return `It seems nothing here! You can go north, or east.`;
	}
};

let scene_island01 = {
	url: "images/island01.jpg",
	itemUrl: "images/item/telescope.png",
	item: "telescope",
	getScript: function() { 
		if (this.item === undefined) {
		return `There is nothing here, You can go south, west, or east.`;
		}else {
		return `Wow, there is a ${this.item}, You can get it then go south, 
		west, or east.`;
		}
	}
};

let scene_pirate01 = {
	url: "images/pirate01.jpg",
	itemUrl: "images/item/gun.png",
	item: "pistol",
	getScript: function() {
		if (this.item === undefined) {
		return `There is nothing here, You can go north, south, west, or east.`;
		}else{
		return `Wow, there is a ${this.item}, You can get it then go north, 
		south, west, or east.`;
		}
	}
};

let scene_greatIsland01 = {
	url: "images/greatIsland01.jpg",
	itemUrl: "images/item/coin.png",
	item: "coin",
	getScript: function() {
		if (this.item === undefined) {
		return `There is nothing here, You can go north, south, west, or east.`;
		}else{
		return `Wow, there is a ${this.item}, You can get it then go north, 
		south, west, or east.`;
		}
	}
};
let scene_pirate02 = {
	url: "images/pirate02.jpg",
	itemUrl: "images/item/water.png",
	item:"water",
	getScript: function() {
		if (this.item === undefined) {
		return `There is nothing here, You can go north, west, or east.`;
		}else{
		return `Wow, there is a barrel of ${this.item}, You can get it 
		then go north, west, or east.`;
		}
	}
};


let scene_pirate03 = {
	url: "images/pirate03.jpg",
	itemUrl: "images/item/cloth.png",
	item:"cloth",
	getScript: function() {
		if (this.item === undefined) {
		return `There is nothing here, You can go south, west, or east.`;
		}else{
		return `Wow, there is a ${this.item}, You can get it then go 
		south, west, or east.`;
		}
	}
};
let scene_greatIsland02 = {
	url: "images/greatIsland02.jpg",
	itemUrl: "images/item/wooden-leg.png",
	item:"boots",
	getScript: function() {
		if (this.item === undefined) {
		return `There is nothing here, You can go north, south, west, or east.`;
		}else{
		return `The door is locked, You need a key to open it. You can get 
		it then go north, south, west, or east.`;
		}
	}
};
let scene_greatIsland03 = {
	url: "images/greatIsland03.jpg",
	itemUrl: "images/item/key.png",
	item: "key",
	getScript: function() {
		if (this.item === undefined) {
		return `There is nothing here, You can go north, south, west, or east.`;
		}else{
		return `Wow, there is a ${this.item}, You can get it then go north, 
		south, west, or east. Where do you wanna go?`;
		}
	}
};
let scene_island02 = {
	url: "images/island02.jpg",
	itemUrl: "images/item/map1.png",
	item:"map",
	getScript: function() {
		if (this.item === undefined) {
		return `There is nothing here, You can go north, west, or east.`;
		}else{
		return `Wow, there is a ${this.item}, You can get it then go north, 
		west, or east. Where do you wanna go?`;
		}
	}
};

let scene_greatIsland04 = {
	url: "images/greatIsland04.jpg",
	getScript: function() {
		return `It's cold here. Lucky you have cloth and boots or wine. 
		You can contine the journey, go east to find the treasure.`;
	}
};

let scene_greatIsland05 = {
	url: "images/greatIsland05.jpg",
	itemUrl: "images/item/wine-bottle.png",
	item : "wine",
	getScript: function() {
		if (this.item === undefined) {
		return `There is nothing here, You can go north, south, or west.`;
		}else{
		return `Wow, there is a bottle of ${this.item}, You can get 
		it then go north, south, or west.`;
		}
	}
};

let scene_greatIsland06 = {
	url: "images/greatIsland06.jpg",
	getScript: function() {
		return `It seems nothing here! You can go north, 
		south, or west.`;
	}
};

let scene_blank04 = {
	url: "images/blank04.jpg",
	getScript: function() {
		return `It seems nothing here! You can go north, or west.`;
	}
};

let scene_greatIslandWin = {
	url: "images/greatIslandWin.jpg",
	itemUrl: "images/item/treasure.png",
	item: "treasure",
	getScript: function() {
		if (this.item === undefined) {
		return `You got the treasure!`;
		}else{
		return `Congrats, Captain, you find the ${this.item}, go get it!`;
		}
	}
};

let scene_blank02 = {
	url: "images/blank02.jpg",
	getScript: function() {
		return `It seems nothing here! You can go north, south, or east.`;
	}
};

/* connect scenes*/
function setupScenes() {
	connectNorthSouth(scene_blank01, scene_start);
	connectNorthSouth(scene_start, scene_blank02);
	connectNorthSouth(scene_blank02, scene_blank03);

	connectNorthSouth(scene_island01, scene_pirate01);
	connectNorthSouth(scene_pirate01, scene_greatIsland01);
	connectNorthSouth(scene_greatIsland01, scene_pirate02);
	
	connectNorthSouth(scene_pirate03, scene_greatIsland02);
	connectNorthSouth(scene_greatIsland02, scene_greatIsland03);
	connectNorthSouth(scene_greatIsland03, scene_island02);

	connectNorthSouth(scene_greatIsland04, scene_greatIsland05);
	connectNorthSouth(scene_greatIsland05, scene_greatIsland06);
	connectNorthSouth(scene_greatIsland06, scene_blank04);


	connectWestEast(scene_blank01, scene_island01);
	connectWestEast(scene_island01, scene_pirate03);
	connectWestEast(scene_pirate03, scene_greatIsland04);
	connectWestEast(scene_greatIsland04, scene_greatIslandWin);

	connectWestEast(scene_start, scene_pirate01);
	connectWestEast(scene_pirate01, scene_greatIsland02);
	connectWestEast(scene_greatIsland02, scene_greatIsland05);

	connectWestEast(scene_blank02, scene_greatIsland01);
	connectWestEast(scene_greatIsland01, scene_greatIsland03);
	connectWestEast(scene_greatIsland03, scene_greatIsland06);

	connectWestEast(scene_blank03, scene_pirate02);
	connectWestEast(scene_pirate02, scene_island02);
	connectWestEast(scene_island02, scene_blank04);
}
	setupScenes();
	let gameScenes = [scene_start, scene_blank01, scene_blank03,
		scene_island01, scene_pirate01, scene_greatIsland01, scene_pirate02,
		scene_pirate03, scene_greatIsland02, scene_greatIsland03, scene_island02,
		scene_greatIsland04, scene_greatIsland05, scene_greatIsland06, 
		scene_blank04, scene_greatIslandWin, scene_blank02];
	return gameScenes;
};


let scenes = getScenes();
let currentScene;
let input;
let script;
let emptyId;
let currentSceneJson;
let sceneJSON;
let currentBagJson;
let bagJSON;
let errorMessage = $("#errorMessage");
let itemImage = $("#itemImage");
let itemP = $("#item");
let empty1 = $("#empty1");
let empty2 = $("#empty2");
let empty3 = $("#empty3");
let empty4 = $("#empty4");
let bagImage = [empty1, empty2, empty3, empty4];
let bag = ["empty", "empty", "empty", "empty"];
let textIndex = 0;
let finishText = false;

/* animation for start scene*/
$("#startText1").fadeIn(2000);
$("#bgs").show(2000);
$("#startText2").fadeIn(2000);


/* method to print welcome script when start game button is clicked*/
$("#start").click(function typeWriter(){
	const txt =`You are on board a pirate ship. 
	The captain and the other crew went on shore to secure supplies. 
	You were trusted to guard the ship. 
	You know there is a place lead to some vast fortune. 
	Now is your chance to get it all for yourself! 
	You steal the ship while they are away.
	Press enter to continue the trip~~~`;
	const speed = 40;
	$("#startSceen").css("display", "none");
	if (textIndex < txt.length) {
		$("#welcomeScript").css("display", "block");
		document.getElementById("welcomeScript").innerHTML += txt.charAt(textIndex);

		if (txt.charAt(textIndex)==="." || txt.charAt(textIndex)==="!" ){
			document.getElementById("welcomeScript").innerHTML += "<br>";
		}
		textIndex+=1;
		setTimeout(typeWriter, speed);
	} else{
	  finishText=true;
	}
});

/* take actions when enter key on keyborad pressed*/
window.addEventListener("keydown",keydownHandler,false);



/* take actions when enter key clicked*/
$("#inputButton").click(takeAction);


/* check if an item is in bag*/
function checkComand(input){
let inputItem = input.split(" ")[1];
let i;
for (i = 0; i<bag.length;i+=1){
	if(inputItem===bag[i]){
		return i;
	}
}
    return false;

}

/* show win scene to users*/
function winScene(){

	$("#endSceen").css("display", "inline-block");

}

/* get first index which is empty in bag or is full*/
function checkEmpty(input){
	let i;
	for (i = 0; i<bag.length;i+=1){
		if(bag[i]==="empty"){
			return i;
		}
	}
		return false;
}

/* render bag*/
function bagRender(){
let i;
for(i = 0; i<bag.length;i+=1){
switch(bag[i]){
	case "telescope":
	bagImage[i].attr("src", "images/item/telescope.png");
	scenes[3].item = undefined;
	break;
	case "pistol":
	bagImage[i].attr("src", "images/item/gun.png");
	scenes[4].item = undefined;
	break;
	case "coin":
	bagImage[i].attr("src", "images/item/coin.png");
	scenes[5].item = undefined;
	break;
	case "water":
	bagImage[i].attr("src", "images/item/water.png");
	scenes[6].item = undefined;
	break;
	case "cloth":
	bagImage[i].attr("src", "images/item/cloth.png");
	scenes[7].item = undefined;
	break;
	case "boots":
	bagImage[i].attr("src", "images/item/wooden-leg.png");
	scenes[8].item = undefined;
	break;
	case "key":
	bagImage[i].attr("src", "images/item/key.png");
	scenes[9].item = undefined;
	break;
	case "map":
	bagImage[i].attr("src", "images/item/map1.png");
	scenes[10].item =undefined;
	break;
	case "wine":
	bagImage[i].attr("src", "images/item/wine-bottle.png");
	scenes[12].item = undefined;
	break;
	case "treasure":
	bagImage[i].attr("src", "images/item/treasure.png");
	scenes[15].item = undefined;
	break;
	case "empty":
	bagImage[i].attr("src", "images/item/empty.png");
	break;
}
}
} 

/* render scene*/
function render(){
	bagRender();
	script = currentScene.getScript();
	if (currentScene === scenes[11]){
		if (bag.includes("wine") || (bag.includes("cloth") && bag.includes("boots"))){
			connectWestEast(scenes[11], scenes[15]);
			script = `It's so cold here. Lucky you have cloth and boots or wine. 
			Let's contine the journey, go east to find to treasure!`;
		} else {
			script = `It s cold here. You don't have cloth and 
			boots or wine to support you, 
			go back find them and continue your journey!`;
			currentScene.east = undefined;
		}
	}
	if (currentScene === scenes[8]){
		currentScene.item = undefined;
		if (bag.includes("key")){
			script = `The door is locked, use key to open it. You can go north, 
			south, west, and east.`;

		} else {
			script = `The door is locked, go to find the key. You can go north, 
			south, west, and east.`;
		}
	}
	$("#sceneImage").attr("src", currentScene.url);
	$("#output").html("<p>" + script + "</p>");
	
	if (currentScene.item===undefined){
		itemP.css("display", "none");
	}else{
		itemImage.attr("src", currentScene.itemUrl);
		itemP.css("display", "block");
	}	
}

/* restore current scene and bag from local storage*/
$("#load").click(function(){
	errorMessage.html("");	
	if(Storage!==undefined){
	
		if(sceneJSON === undefined){
	
			//don't have anything in local storage
			errorMessage.html("you haven't save any progress yet");	
		}	
		else{
		currentSceneJson = localStorage.getItem("sceneJson");
		let index = parseInt(JSON.parse(currentSceneJson));
		scenes = getScenes();
		currentScene = scenes[index];
		currentBagJson = localStorage.getItem("bagJson");
		bag = JSON.parse(currentBagJson);
		render();
		}
		}else{
		//old bowser
		errorMessage.html("your browser does not support local storage");	
		}
});

/* save current scene to local storage*/
$("#save").click(function(){
	errorMessage.html("");	
	let indexOfCurrentScene = scenes.indexOf(currentScene);
	sceneJSON = JSON.stringify(indexOfCurrentScene);	
	localStorage.setItem("sceneJson",sceneJSON);
	bagJSON = JSON.stringify(bag);	
	localStorage.setItem("bagJson",bagJSON);
});

/* start over the game*/
$("#startover").click(function(){
	errorMessage.html("");	
	scenes = getScenes();
	currentScene = scenes[0];
	bag = ["empty", "empty", "empty", "empty"];
	bagRender();
	render();
});


function takeAction(){
	errorMessage.html("");	
	input = $("#input").val().trim().toLowerCase();
    $("#input").val("");
	if(input === "south" || input === "north" || 
	input ==="west" || input ==="east"){

		if(currentScene[input]=== undefined){
			// The property DOESN'T exists
			errorMessage.html("you input the wrong direction");
		} else {
			// The property exists
			currentScene = currentScene[input];
			errorMessage.html("");
			render();
		}
	} else {
		if (input === "get " + currentScene.item) {
			if (bag.includes("empty")){
				emptyId =  checkEmpty(input);
				bag[emptyId] = currentScene.item;
				bagImage[emptyId].attr("src", currentScene.itemUrl);
				currentScene.item = undefined;
				render();
				if (bag[emptyId]==="treasure"){
					setTimeout(winScene, 1500);
				}
			} else {
				errorMessage.html(`your bag is full, you have to 
				drop one of the items`);

			}
	  	} else if (input === "drop " + bag[checkComand(input)]) {
			emptyId =  checkComand(input);
			bagImage[emptyId].attr("src", "images/item/empty.png");
			bag[emptyId]= "empty";
			render();
		} else if (input === "use key" && currentScene === scenes[8]){
			emptyId =  checkComand(input);
			console.log("use key");
			bagImage[emptyId].attr("src", "images/item/empty.png");
			bag[emptyId]= "empty";
			currentScene.item = "boots";
			script = `Wow, there is a pair of boots, You can get it 
			then go north, south, west, and east.`;
			$("#sceneImage").attr("src", currentScene.url);
			$("#output").html("<p>" + script + "</p>");
			itemImage.attr("src", currentScene.itemUrl);
			itemP.css("display", "block");
		}
		else {
			errorMessage.html("you input the wrong command");
		}
	}
}
// handle user keyboard input
function keydownHandler(event) {

	if (event.keyCode === 13) {
		if (currentScene === undefined && finishText===true) {
			$("#gameZone").css("display", "inline-block");
			$("#myBag").css("display", "inline-block");
			$("#welcomeScript").css("display", "none");
			currentScene = scenes[0];		
		}else{
			takeAction();
		}
	}
}
