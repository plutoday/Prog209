"use strict";
/*

*/
const map = [];
const images = [];
const bloackedPath = [];
const hints = [];
const items = [];
const itemLocations = [];
const sounds = [];
let backpack = [];
const allMoves = [];
const allActions = [];

const enterButton = document.querySelector("#enter");
enterButton.addEventListener("click", calculateNewPosition, false);
const staroverButton = document.querySelector("#startover");
startoverButton.addEventListener("click", startover, false);
const saveButton = document.querySelector("#save");
saveButton.addEventListener("click", saveInfo, false);
const loadButton = document.querySelector("#load");
loadButton.addEventListener("click", display, false);

function saveInfo(){
	var command=document.getElementById("input").value;
    var flavor=document.getElementById("flavor").value;
    var quantity=document.getElementById("quantity").value;
	var extras=document.getElementById("extras").value;
	
	localStorage.setItem("donutName",name);
    localStorage.setItem("donutFlavor",flavor);
    localStorage.setItem("donutQuantity",quantity);
	localStorage.setItem("donutExtras",extras);
	
	
	display();
	
}

function display(){
	var rightBox=document.getElementById("useroutput");
	var theName=localStorage.getItem("donutName");
    var theFlavor=localStorage.getItem("donutFlavor");
    var theQuantity=localStorage.getItem("donutQuantity");
	var theExtras=localStorage.getItem("donutExtras");
	
	if(theExtras==undefined){
		document.getElementById("useroutput").innerHTML="Hello";
	}
	else{ document.getElementById("useroutput").innerHTML="OUTPUT  <hr /><br /><br />Donut Name: "+theName+"<br /><br />  Flavor: "+theFlavor+"<br /><br />  Quantity: "+theQuantity+"<br /><br /> Extras: "+theExtras;
	}
	
}