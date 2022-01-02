console.clear();
//the game var
const inputE1 = document.querySelector("#input-el")
const checkBtn = document.querySelector("#check-btn")

//the modal variable 

//modal,the answer,X sign
const modal = document.querySelector("#mymodal")
const theAnswer = document.querySelector(".theAnswer")
const close = document.querySelector(".close")

//Answer: "correct, good work,", "incorrect, try again"
let answerOptions = ["Correct,good Work","Incorrect,try again"]

//check button function
checkBtn.addEventListener("click",function() {
    modal.style.display = "block";
    let userInput = parseInt(inputE1.value) //number conversion
    if(userInput === 2) {
        modal.style.background = "rgb(46, 204, 113)"
        theAnswer.textContent = answerOptions[0]
    } else {
        modal.style.background = "#e74c3c"
        theAnswer.textContent = answerOptions[1]
    }
})

closeBtn.addEventListener("click",function() {

modal.style.display = "none"
})