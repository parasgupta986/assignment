// KEYPRESSED



let inputBox = document.getElementById("input-box") 
let display = document.getElementById('display')


// // adding a keypress event listener to the inputbox
inputBox.addEventListener("keypress", (m)=>{
    display.innerText ="you have Pressed " + m.key
})

