var numOfSquares = 6;
var colors =[];
var pickedColor = ;
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons eevent listeneres
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent=="Easy") {
                numOfSquares = 3;
            } else {
                numOfSquares = 6;
            }
            reset();
        });
    }

    for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        squares[i].style.background = colors[i];
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square and compare to picked color
            var clickedColor = this.style.background;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
    reset();
}

function reset() {
    //generate new colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random colors
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";
    //reset the h1 color
    h1.style.background = "steelblue";
    //reset the button text
    resetButton.textContent = "New Colors";
    //change colors of the squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.background = colors[i];
            square[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
}


resetButton.addEventListener("click", function() {
        //generate new colors
        colors = generateRandomColors(numOfSquares);
        //pick a new random colors
        pickedColor = pickColor();
        //change colorDisplay to match picked color
        colorDisplay.textContent = pickedColor;

        messageDisplay.textContent = "";
        //reset the h1 color
        h1.style.background = "steelblue";
        //reset the button text
        this.textContent = "New Colors";
        //change colors of the squares
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
        }
})

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    }
}

//function to pick a color
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//function to generate random colors
function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //random color and push into array
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor() {
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //green 0-255
    var g = Math.floor(Math.random() * 256);
    //blue 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; //see added spaces in rgb
}
