// let randomNumber = Math.floor(Math.random() * 6) + 1
// const min = 5
// const max = 20
// let randomNumber = Math.floor(Math.random() * (max - min)) + min

// console.log(randomNumber)

const myButton = document.getElementById("myBtn")
const myLabel = document.getElementById("myLabel")
const min = 1
const max = 6
let randomNumber;

myButton.onclick = function() {
     randomNumber = Math.floor(Math.random() * max) + min
     console.log(randomNumber)
     myLabel.textContent = randomNumber
}

