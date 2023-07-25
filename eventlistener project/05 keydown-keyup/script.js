//keyDown and keyUp event

//keyDown
//the keyDown event is fired when a key is pressed 

//keyUp
//the keyUp event is fired when a key is released.

let container = document.getElementById("container")
let display = document.getElementById("display")

//adding a keydown event listener to the document

document.addEventListener("keydown",function(e){
    display.style.color="red"
    display.innerText=e.key +" is key Down"
})

document.addEventListener("keyup",function(e){
    display.style.color="green"
    display.innerText=e.key+ " is keyUp"
})