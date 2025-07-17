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
let age = 17;                   
let isLicense = false;          

if(age < 16){
    console.log("You are not eligible to drive.");
}
else if(!isLicense){
    console.log("You are eligible to drive, but you do not have a valid driver's license.");
}
else{
    console.log("You are eligible to drive and you have a valid driver's license.");
}