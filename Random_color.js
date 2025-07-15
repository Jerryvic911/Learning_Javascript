const randomColor = ["#1A2B3C", "#FF6347", "#12ABCD", "#89CFF0", "#FF33AA", "#0F0F0F"]

function getRandomColors() {
    return randomColor[Math.floor(Math.random() * randomColor.length)];
};

const randomButton = document.getElementById("changeBtn");
randomButton.onclick = function() {
    document.body.style.backgroundColor = getRandomColors();
}

console.log(randomButton)
console.log(getRandomColors());