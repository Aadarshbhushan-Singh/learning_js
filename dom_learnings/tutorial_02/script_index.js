var line=document.getElementById('line');
var attribute=document.getElementById('attribute');

//Single single style can be set
// line.style.color="red";
// line.style.fontSize="30px";
// line.style.backgroundColor="yellow";
// line.style.border="2px solid blue";
// line.style.marginRight="20%";

//The above code can be replaced by this single line of code.
line.style.cssText= "color: red; font-size: 30px; background-color: yellow; border: 2px solid blue; margin-right: 20%;";

console.log(line.style);
console.log(window.getComputedStyle(line));

// const backgroundColor=document.querySelector(".backgroundColor");
// backgroundColor=addEventListener("click",function(){
//    document.querySelector("body").style.backgroundColor="red";
// });

var myDiv=document.getElementById("myDiv");
var myP=document.getElementById("myP");
var myDiv2=document.getElementById("myDiv2");
var myP2=document.getElementById("myP2");

myP.addEventListener("click", function(){
    myDiv.style.backgroundColor="yellow";
})
myP.addEventListener("click", changeText);
function changeText(){
    myP2.textContent="Contenet has been changed.";
};

myP2.addEventListener("mouseover", changeBackground);
function changeBackground(){
    myDiv.style.backgroundColor="purple";
};
// myP2.removeEventListener("mouseover", changeBackground);