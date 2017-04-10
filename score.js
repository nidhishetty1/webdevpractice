var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numinput = document.querySelector("input");
var playTo = document.querySelector("#playTo");
var resetButton = document.querySelector("#p3")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore;

p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add("winner");
        }
    }
    console.log(p1Score);
    p1Display.textContent = p1Score;
})
p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add("winner");
        }
    }
    console.log(p2Score);
    p2Display.textContent = p2Score;
})

function reset() {
    p1Score=0;
    p2Score=0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p1Score;
    gameOver=false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}
resetButton.addEventListener("click", reset)
numinput.addEventListener("change", function () {
    playTo.textContent = this.value;
    winningScore = Number(this.value);
    reset();
})
