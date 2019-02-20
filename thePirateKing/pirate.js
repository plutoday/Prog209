/*
"use strict";

*/
let scene_start, scene_blank01, scene_blank02, scene_blank03,
scene_island01, scene_pirate01, scene_greatIsland01, scene_pirate02,
scene_pirate03, scene_greatIsland02, scene_greatIsland03, scene_island02,
scene_greatIsland04, scene_greatIsland05, scene_greatIsland06, scene_blank04,
scene_greatIslandWin;

let input;
let currentSceneJson;
let sceneJSON;

console.log(sceneJSON);

let errorMessage = document.querySelector("#errorMessage");
$('#load').click(function(){

	   console.log(sceneJSON);
	if (sceneJSON !=undefined){
		currentSceneJson=localStorage.getItem("sceneJson");
		currentScene = JSON.parse(currentSceneJson);
	}
	render();
});

$('#save').click(function(){
	sceneJSON = JSON.stringify(currentScene);	
	localStorage.setItem("sceneJson",sceneJSON);

});

$('#inputButton').click(function(){
	input = document.querySelector("#input").value;
	console.log(input);
	if(typeof(currentScene[input])=== "undefined"){
		// The property DOESN'T exists
        errorMessage.innerHTML = "you input the wrong word";
	}else{
		// The property exists
		currentScene = currentScene[input];
		errorMessage.innerHTML = "";
		render();
	}
});



$('#startover').click(function(){
	currentScene = scene_start;
    render();
});


 scene_start = {
	url: "images/scene_start.jpg",
	script: "Hello, Captain, this is where you start the trip. You can go north, south, and east. Where do you wanna go?",
	north: scene_blank01,
	south: scene_blank02,
	east: scene_pirate01
};
 scene_blank01 = {
	url: "images/scene_blank01.jpg",
	script: "It seems nothing here! You can go south, and east. Where do you wanna go?",
	south: scene_start,
	east: scene_island01
};

 scene_blank03 = {
	url: "images/scene_blank03.jpg",
	script: "It seems nothing here! You can go north, and east. Where do you wanna go?",
	north: scene_blank02,
	east: scene_pirate02
};


 scene_island01 = {
	url: "images/scene_island01.jpg",
	script: "..............You can go south, west, and east. Where do you wanna go?",
	south: scene_pirate01,
	west: scene_blank01,
	east: scene_pirate03
};
 scene_pirate01 = {
	url: "images/scene_pirate01.jpg",
	script: "..............You can go north, south, west, and east. Where do you wanna go?",
	north: scene_island01,
	south: scene_greatIsland01,
	west: scene_start,
	east: scene_greatIsland02
};
 scene_greatIsland01 = {
	url: "images/scene_greatIsland01.jpg",
	script: "..............You can go north, south, west, and east. Where do you wanna go?",
	north: scene_pirate01,
	south: scene_pirate02,
	west: scene_blank02,
	east: scene_greatIsland03
};
 scene_pirate02 = {
	url: "images/scene_pirate02.jpg",
	script: "..............You can go north, west, and east. Where do you wanna go?",
	north: scene_greatIsland01,
	west: scene_blank03,
	east: scene_island02
};


 scene_pirate03 = {
	url: "images/scene_pirate03.jpg",
	script: "..............You can go south, west, and east. Where do you wanna go?",
	south: scene_greatIsland02,
	west: scene_island01,
	east: scene_greatIsland04
};
 scene_greatIsland02 = {
	url: "images/scene_greatIsland02.jpg",
	script: "..............You can go north, south, west, and east. Where do you wanna go?",
	north: scene_pirate03,
	south: scene_greatIsland03,
	west: scene_pirate01,
	east: scene_greatIsland05
};
 scene_greatIsland03 = {
	url: "images/scene_greatIsland03.jpg",
	script: "..............You can go north, south, west, and east. Where do you wanna go?",
	north: scene_greatIsland02,
	south: scene_island02,
	west: scene_greatIsland01,
	east: scene_greatIsland06
};
 scene_island02 = {
	url: "images/scene_island02.jpg",
	script: "..............You can go north, west, and east. Where do you wanna go?",
	north: scene_greatIsland03,
	west: scene_pirate02,
	east: scene_blank04
};


 scene_greatIsland04 = {
	url: "images/scene_greatIsland04.jpg",
	script: "..............You can go south, west, and east. Where do you wanna go?",
	south: scene_greatIsland05,
	west: scene_pirate03,
	east: scene_greatIslandWin
};
 scene_greatIsland05 = {
	url: "images/scene_greatIsland05.jpg",
	script: "..............You can go north, south, and west. Where do you wanna go?",
	north: scene_greatIsland04,
	south: scene_greatIsland06,
	west: scene_greatIsland02
};
 scene_greatIsland06 = {
	url: "images/scene_greatIsland06.jpg",
	script: "..............You can go north, south, and west. Where do you wanna go?",
	north: scene_greatIsland05,
	south: scene_blank04,
	west: scene_greatIsland03
};
 scene_blank04 = {
	url: "images/scene_blank04.jpg",
	script: "..............You can go north, and west. Where do you wanna go?",
	north: scene_greatIsland06,
	west: scene_island02
};


 scene_greatIslandWin = {
	url: "images/scene_greatIslandWin.jpg",
	script: "You win"
};
scene_blank02 = {
	url: "images/scene_blank02.jpg",
	script: "It seems nothing here! You can go north, south, and east. Where do you wanna go?",
	north: scene_start,
	south: scene_blank03,
	east: scene_pirate01
};
let currentScene = scene_blank02;
console.log(currentScene);



function render(){
    $('#sceneImage').attr('src', currentScene.url);
}