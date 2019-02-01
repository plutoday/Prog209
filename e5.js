"use strict";
/*
This script is used to shuffle the user input array.
*/
const addButton = document.querySelector("#add");
addButton.addEventListener("click", add, false);
const shufflingButton = document.querySelector("#shuffling");
shufflingButton.addEventListener("click", shuffling, false);


function add(){
    const array = getArray();
    const arrayOutput = array.join(" ");
    document.getElementById("array").innerHTML = arrayOutput;
}

function shuffling(){
    const array = getArray();
    const shuffledArray = [];
    while(array.length>0){
        let ith = Math.floor(Math.random()*array.length);
        shuffledArray.push(array[ith]);
        array.splice(ith,1);
    }
    const shuffledArrayOutput = shuffledArray.join(" ");
    document.getElementById("array").innerHTML = shuffledArrayOutput;
}


function getArray(){
    const items = document.getElementById("items").value;
    const array = items.split(" ");
    return array;
}