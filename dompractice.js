var clicky = document.querySelector("button");
// var isPurple = false;
//
// function changeColor() {
//     if (isPurple) {
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "purple";
//     }
//     isPurple != isPurple;
// };
// clicky.addEventListener("click", changeColor);

//Option 2
// function toggleColor() {
//     document.body.classList.toggle("back");
// }
// clicky.addEventListener("click",toggleColor)

//Option 3
clicky.addEventListener("click",function() {
    document.body.classList.toggle("back");
});
