var css = document.querySelector("h3");
var color_01=document.querySelector(".color_01");
var color_02=document.querySelector(".color_02");
var body=document.getElementById("gradient");

console.log(css);
console.log(color_01);
console.log(color_02);
function setgradient(){
    body.style.background="linear-gradient(to right, "+color_01.value + ", "+ color_02.value+")";
}
color_01.addEventListener("input", setgradient);
color_02.addEventListener("input", setgradient);