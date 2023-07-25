// getting the html elements 
const decrementBtn = document.getElementById("decrement-btn")
const incrementBtn =document.getElementById("increment-btn")
const resetBtn = document.getElementById("reset-btn")
const displayValue = document.getElementById("value")

// for decrement button click
decrementBtn.addEventListener("click", () =>{
    const value = Number(displayValue.innerText)
    if(value>0){
        displayValue.innerText=value-1
    }else{
        alert("Negative value not allowed")
    }
})

// for increment button click
 incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText)
    if(value>=10){
        alert("10+ values are not allowed")
    }else{
        displayValue.innerText = value+1
    }
 })

//for reset button click
resetBtn.addEventListener("click", ()=>{
    displayValue.innerText=0
})  