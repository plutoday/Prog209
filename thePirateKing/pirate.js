/*
"use strict";

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
let currentScene = scene_start;
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



setup();

$('#load').click(function(){

	if(typeof(Storage)!=="undefined"){
	
		currentSceneJson=localStorage.getItem("sceneJson");
		let index = parseInt(JSON.parse(currentSceneJson));
		currentScene = scenes[index];
		console.log(currentScene);
		render();
		}
		
		else{
		//old bowser
		errorMessage.innerHTML ="your browser does not support local storage";	
		}

});

$('#save').click(function(){
	let indexOfCurrentScene = scenes.indexOf(currentScene);
	sceneJSON = JSON.stringify(indexOfCurrentScene);	
	localStorage.setItem("sceneJson",sceneJSON);

});

$('#inputButton').click(takeAction);

let keydownHandler = (event) => {
	// handle user keyboard input

	if (event.keyCode == 13) {
		takeAction();
	}

}
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
			currentScene = currentScene[input];
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


function checkComand(input){
let inputItem = input.split(" ")[1];

for (let i = 0; i<bag.length;i++){
	if(inputItem==bag[i]){
		return i;
	}
}
    return false;

}

function checkEmpty(input){
	for (let i = 0; i<bag.length;i++){
		if(bag[i]=="empty"){
			return i;
		}
	}
		return false;
}

$('#startover').click(function(){
	currentScene = scene_start;
    render();
});


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