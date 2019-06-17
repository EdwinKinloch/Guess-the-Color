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

const correctColor = () => {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

const changedColors = (color) => {
    //loop through all squares
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
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
let pickedColor = correctColor();
let colorDisplay = document.getElementById('colorDisplay');
let message = document.getElementById("message");
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');

// resetButton.addEventListener("click", function(){
//     //generate all new colors
//     let colors = generateRandomColors(6);
//     //pick a new random color from array
//     let pickedColor = correctColor();
//     console.log(colors, pickedColor)
//     //change colorDisplay to match picked color
//     colorDisplay.textContent = pickedColor;
//     //chang colors of squares
//     for(let i = 0; i < squares.length; i++){
//         squares[i].style.background = colors[i];
//     }
//     h1.style.backgroundColor = "#232323";
// })

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked squares
        let clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor)
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            message.textContent = "Correct";
            changedColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    });
}

