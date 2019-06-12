let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

let squares = document.querySelectorAll(".square");
var pickColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let message = document.getElementById("message");
colorDisplay.textContent = pickColor;

for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickColor){
            message.textContent = "Correct";
            changedColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    });
}

const changedColors = (color) => {
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor () {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}