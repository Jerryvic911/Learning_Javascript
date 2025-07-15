//Accept user input
//windows prompt method
let human;
//  human = window.prompt("What is your name?");
//  console.log(human);
//professional method
document.getElementById('submitBtn').onclick = function() {
    let human = document.getElementById("inputName").value;
    document.getElementById("head").textContent = `Hello ${human}`;
    console.log(human);
};