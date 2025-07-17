// This is a simple if-else statement in JavaScript.
// let age = 15;                   
// let isLicense = false;          

// if(age >= 16){
//     console.log("You are eligible to drive.");

//     if(isLicense){
//         console.log("You have a valid driver's license.");
//     }
//     else{
//         console.log("You do not have a valid driver's license.");
//     }
// }
// else{
//     console.log("You are not eligible to drive.");
// }


//cleaner version of the code using if-else-if statement
const myage = document.getElementById("inputage")
const submitButton = document.getElementById("submitBtn")
const result = document.getElementById("resultText")



let age;                   
let isLicense = false;   

submitButton.onclick = function(){
    age = myage.value;
    age = Number(age)
    
    if(age < 16){
    console.log("You are not eligible to drive.");
    result.textContent = "You are not eligible to drive.";
}
else if(!isLicense){
    console.log("You are eligible to drive, but you do not have a valid driver's license.");
    result.textContent = "You are eligible to drive, but you do not have a valid driver's license.";;
}
else{
    console.log("You are eligible to drive and you have a valid driver's license.");
    result.textContent = "You are eligible to drive and you have a valid driver's license.";
}
}


//Used better in react
// function DrivingStatus({ age, isLicense }) {
//   if (age < 16) return <p>You are not eligible to drive.</p>;
//   if (isLicense) return <p>You are eligible to drive, but you do not have a valid driver's license.</p>;
//   return <p>You are eligible to drive and have a valid driver's license.</p>;
// }