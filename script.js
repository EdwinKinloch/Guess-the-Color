const changedColors = (color) => {
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor () {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

const generateRandomColors = (num) =>{
    //make an array
    let arr = []
    //repeat num times
    for(let i =0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor())
    }
    return arr;
}

const randomColor = () => {
    //pick a "red" from 0 - 255
    let r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    let g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

let colors = generateRandomColors(6);
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

