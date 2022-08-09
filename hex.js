const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const backgroundColor = document.querySelector('.content-background-color');

btn.addEventListener('click', function (){
    let hexColor = "#";
    for (let j = 0; j < 6; j++) {
            hexColor += hex[getRandomNumber()];
        }
    color.textContent = hexColor;
    backgroundColor.style.backgroundColor = hexColor;
})
function getRandomNumber() {
    return Math.floor(Math.random()* hex.length);
}