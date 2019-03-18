
"use strict";


/*
================================
Coder: Xiaoxuan Li
Date : 02/25/2018

Description: Project 1 - model an pirate adventure game by using object, local storage
and dynamically adjusted CSS.

*/ 

let scene_start, scene_blank01, scene_blank02, scene_blank03,
scene_island01, scene_pirate01, scene_greatIsland01, scene_pirate02,
scene_pirate03, scene_greatIsland02, scene_greatIsland03, scene_island02,
scene_greatIsland04, scene_greatIsland05, scene_greatIsland06, scene_blank04,
scene_greatIslandWin;



scene_start = {
	url: "images/start.jpg",
	script: "Hello, Captain, this is where you start the trip. Let's go find the treasure! You can go north, south, and east. Where do you wanna go?",
};

 scene_blank01 = {
	url: "images/blank01.jpg",
	script: "It seems nothing here! You can go south, and east."
};

 scene_blank03 = {
	url: "images/blank03.jpg",
	script: "It seems nothing here! You can go north, and east."
};


 scene_island01 = {
	url: "images/island01.jpg",
	itemUrl: "images/item/telescope.png",
	item: "telescope",
	script: "Wow, there is a telescope, You can get it then go south, west, and east."

};
 scene_pirate01 = {
	url: "images/pirate01.jpg",
	itemUrl: "images/item/gun.png",
	item: "pistol",
	script: "Wow, there is a pistol, You can get it then go north, south, west, and east."
};
 scene_greatIsland01 = {
	url: "images/greatIsland01.jpg",
	itemUrl: "images/item/coin.png",
	item: "coin",
	script: "Wow, there is a coin, You can get it then go north, south, west, and east."
};
 scene_pirate02 = {
	url: "images/pirate02.jpg",
	itemUrl: "images/item/water.png",
	item:"water",
	script: "Wow, there is a barrel of water, You can get it then go north, west, and east."
};


 scene_pirate03 = {
	url: "images/pirate03.jpg",
	itemUrl: "images/item/cloth.png",
	item:"cloth",
	script: "Wow, there is a cloth, You can get it then go south, west, and east."
};
 scene_greatIsland02 = {
	url: "images/greatIsland02.jpg",
	itemUrl: "images/item/wooden-leg.png",
	item:"boots",
	script: "The door is locked, You need a key to open it. You can get it then go north, south, west, and east. "
};
 scene_greatIsland03 = {
	url: "images/greatIsland03.jpg",
	itemUrl: "images/item/key.png",
	item: "key",
	script: "Wow, there is a key, You can get it then go north, south, west, and east. Where do you wanna go?"
};
 scene_island02 = {
	url: "images/island02.jpg",
	itemUrl: "images/item/map1.png",
	item:"map",
	script: "Wow, there is a map, You can get it then go north, west, and east. Where do you wanna go?"
};


 scene_greatIsland04 = {
	url: "images/greatIsland04.jpg",
	script: "It's cold here. Lucky you have cloth and boots or wine. You can contine the journey, go east to find the treasure."
};
 scene_greatIsland05 = {
	url: "images/greatIsland05.jpg",
	itemUrl: "images/item/wine-bottle.png",
	item : "wine",
	script: "Wow, there is a bottle of wine, You can get it then go north, south, and west."
};
 scene_greatIsland06 = {
	url: "images/greatIsland06.jpg",
	script: "It seems nothing here! You can go north, south, and west."
};
 scene_blank04 = {
	url: "images/blank04.jpg",
	script: "It seems nothing here! You can go north, and west."
};


 scene_greatIslandWin = {
	url: "images/greatIslandWin.jpg",
	itemUrl: "images/item/treasure.png",
	item: "treasure",
	script: "Congrats, Captain, you find the treasure, go get it!"
};
scene_blank02 = {
	url: "images/blank02.jpg",
	script: "It seems nothing here! You can go north, south, and east."
};

/* connect scenes*/
function setup() {
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

function connectWestEast(scene1, scene2) {
	scene1['east'] = scene2;
	scene2['west'] = scene1;
}

function connectNorthSouth(scene1, scene2) {
	scene1['south'] = scene2;
	scene2['north'] = scene1;
}

let input;
let currentSceneJson;
let sceneJSON;
let currentBagJson;
let bagJSON;
let currentScene;
let errorMessage = document.querySelector("#errorMessage");
let itemImage = document.querySelector("#itemImage");
let empty1 = document.querySelector("#empty1");
let empty2 = document.querySelector("#empty2");
let empty3 = document.querySelector("#empty3");
let empty4 = document.querySelector("#empty4");
let bagImage = [empty1, empty2, empty3, empty4];
let scenes = [scene_start, scene_blank01, scene_blank02, scene_blank03,
	scene_island01, scene_pirate01, scene_greatIsland01, scene_pirate02,
	scene_pirate03, scene_greatIsland02, scene_greatIsland03, scene_island02,
	scene_greatIsland04, scene_greatIsland05, scene_greatIsland06, scene_blank04,
	scene_greatIslandWin];
let bag = ["empty", "empty", "empty", "empty"];
var i = 0;
var txt ="You are on board a pirate ship. The captain and the other crew went on shore to secure supplies. You were trusted to guard the ship. You know there is a treasure map and you just know it has to lead to some vast fortune. Now is your chance to get it all for yourself! You steal the ship while they are away.......Press enter to continue the trip......"
var speed = 50;
var finishText = false;




setup();
$('#start').click(function typeWriter(){
	document.getElementById("startSceen").style.display = "none";
	if (i < txt.length) {
		document.getElementById("welcomeScript").style.display = "block";
		document.getElementById("welcomeScript").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	} else{
	  finishText=true;
	}
});

/* restore current scene from local storage*/
$('#load').click(function(){

	if(typeof(Storage)!=="undefined"){
	
		currentSceneJson=localStorage.getItem("sceneJson");
		let index = parseInt(JSON.parse(currentSceneJson));
		currentScene = scenes[index];
		console.log(currentScene);
		currentBagJson = localStorage.getItem("bagJson");
		bag = JSON.parse(currentBagJson);
		console.log(bag);
		bagRender();
		render();

		}
		
		else{
		//old bowser
		errorMessage.innerHTML ="your browser does not support local storage";	
		}

});

/* save current scene to local storage*/
$('#save').click(function(){
	let indexOfCurrentScene = scenes.indexOf(currentScene);
	sceneJSON = JSON.stringify(indexOfCurrentScene);	
	localStorage.setItem("sceneJson",sceneJSON);
	bagJSON = JSON.stringify(bag);	
	localStorage.setItem("bagJson",bagJSON);

});

/* take actions when enter key clicked*/
$('#inputButton').click(takeAction);




let keydownHandler = (event) => {
	// handle user keyboard input

	if (event.keyCode == 13) {
		if (currentScene == undefined && finishText==true) {
			console.log(finishText);
			document.getElementById("gameZone").style.display = "inline-block";
			document.getElementById("myBag").style.display = "inline-block";
			document.getElementById("welcomeScript").style.display = "none";
			currentScene = scene_start;		
		}else 
			takeAction();
	}

}

/* take actions when enter key on keyborad pressed*/
window.addEventListener("keydown",keydownHandler,false);



function takeAction(){
	input = document.querySelector("#input").value.trim().toLowerCase();
    document.querySelector("#input").value = "";
	if(input == "south" || input == "north" || input =="west" || input =="east"){

		if(typeof(currentScene[input])=== "undefined"){
			// The property DOESN'T exists
			errorMessage.innerHTML = "you input the wrong direction";
		} else {
			// The property exists
			console.log("currentScene is " + currentScene.url + "before change");
			currentScene = currentScene[input];
			console.log("currentScene is " + currentScene.url + "after change");
			errorMessage.innerHTML = "";
			render();
		}
	} else {
		if (input == "get " + currentScene["item"]) {
			if (bag.includes("empty")){
				let emptyId =  checkEmpty(input);
				bag[emptyId] = currentScene["item"];
				console.log("emptyId=" + emptyId);
				bagImage[emptyId].src = currentScene["itemUrl"];
				currentScene.item = undefined;
				render();
				if (bag[emptyId]=="treasure"){
					setTimeout(winScene, 1500);
				}
			} else {
				errorMessage.innerHTML = "your bag is full, you have to drop one of the items";

			}
	  	} else if (input == "drop " + bag[checkComand(input)]) {
			let emptyId =  checkComand(input);
			console.log("emptyId=" + emptyId);
			bagImage[emptyId].src = "images/item/empty.png";
			bag[emptyId]= "empty";
			render();
		} else if (input == "use key" && currentScene == scene_greatIsland02){
			let emptyId =  checkComand(input);
			console.log("use key");
			bagImage[emptyId].src = "images/item/empty.png";
			bag[emptyId]= "empty";
			currentScene.item = "boots";
			currentScene.script = "Wow, there is a pair of boots, You can get it then go north, south, west, and east."
			$('#sceneImage').attr('src', currentScene.url);
			$('#output').html('<p>' + currentScene.script + '</p>');
			itemImage.src = currentScene.itemUrl;
			item.style.display = "block";
		}
		else {
			errorMessage.innerHTML = "you input the wrong command";
		}
	}
}

/* check if an item is in bag*/
function checkComand(input){
let inputItem = input.split(" ")[1];

for (let i = 0; i<bag.length;i++){
	if(inputItem==bag[i]){
		return i;
	}
}
    return false;

}
function winScene(){

	document.getElementById("endSceen").style.display = "inline-block";

}

/* get first index which is empty in bag or is full*/
function checkEmpty(input){
	for (let i = 0; i<bag.length;i++){
		if(bag[i]=="empty"){
			return i;
		}
	}
		return false;
}

/* start over the game*/

$('#startover').click(function(){
	currentScene = scene_start;
	bag = ["empty", "empty", "empty", "empty"];
	bagRender();
	render();
});

/* render scene*/

function render(){
	
	if (currentScene == scene_greatIsland04){
		if (bag.includes("wine") || (bag.includes("cloth") && bag.includes("boots"))){
			connectWestEast(scene_greatIsland04, scene_greatIslandWin);
			currentScene.script = "It's so cold here. Lucky you have cloth and boots or wine. Let's contine the journey, go east to find to treasure!"
		} else {
			currentScene.script = "It's cold here. You don't have cloth and boots or wine to support you, go back find them and continue your journey!"
			currentScene.east = undefined;
		}

	}
	if (currentScene == scene_greatIsland02){
		currentScene.item = undefined;
		if (bag.includes("key")){

			currentScene.script = "The door is locked, use key to open it. You can go north, south, west, and east."

		} else {
			currentScene.script = "The door is locked, go to find the key. You can go north, south, west, and east."
		}

	}

	$('#sceneImage').attr('src', currentScene.url);
	$('#output').html('<p>' + currentScene.script + '</p>');
	
	if (typeof(currentScene["item"])=== "undefined"){
		item.style.display = "none";
	}else{

		itemImage.src = currentScene.itemUrl;
		item.style.display = "block";
	}
	
}

function bagRender(){
for(let i = 0; i<bag.length;i++){
switch(bag[i]){
	case "telescope":
	bagImage[i].src = "images/item/telescope.png";
	scene_island01.item = undefined;
	break;
	case "pistol":
	bagImage[i].src = "images/item/gun.png";
	scene_pirate01.item = undefined;
	break;
	case "coin":
	bagImage[i].src = "images/item/coin.png";
	scene_greatIsland01.item = undefined;
	break;
	case "water":
	bagImage[i].src = "images/item/water.png";
	scene_pirate02.item = undefined;
	break;
	case "cloth":
	bagImage[i].src = "images/item/cloth.png";
	scene_pirate03.item = undefined;
	break;
	case "boots":
	bagImage[i].src = "images/item/wooden-leg.png";
	scene_greatIsland02.item = undefined;
	break;
	case "key":
	bagImage[i].src = "images/item/key.png";
	scene_greatIsland03.item = undefined;
	break;
	case "map":
	bagImage[i].src = "images/item/map1.png";
	scene_island02.item =undefined;
	break;
	case "wine":
	bagImage[i].src = "images/item/wine-bottle.png";
	scene_greatIsland05.item = undefined;
	break;
	case "treasure":
	bagImage[i].src = "images/item/treasure.png";
	scene_greatIslandWin.item = undefined;
	break;
	case "empty":
	bagImage[i].src = "images/item/empty.png";
	break;
}
}
} 