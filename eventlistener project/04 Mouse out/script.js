// mouseOut event 

const boxElement = document.getElementById("box")

// add a mouseOut event listener to the element

boxElement.addEventListener("mouseout", ()=>{
    alert("you left the safe zone 🥳 (mouse out working properly )")
})