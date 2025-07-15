const increment = document.getElementById("increase");
const decrement = document.getElementById("decrease");
const count = document.getElementById("countLabel");
const reset = document.getElementById("reset");

let counter = 0;

increment.onclick = function() {
    counter++;
    count.textContent = counter;
}
decrement.onclick = function() {
    if(counter > 0){
        counter -= 1;
    }
    count.textContent = counter;
}
reset.onclick = function() {
    counter = 0;
    count.textContent = counter;
}