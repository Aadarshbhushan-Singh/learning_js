const text=document.querySelector(".title");
const changeProperty=document.querySelector(".changeProperty");

//This is also a way to give style to html components.

// text.style.color = "red";
// text.style.marginLeft="10px";
// text.style.fontSize="100px";
// text.style.backgroundColor="orange";

//This is also a way to give style to html components. Make a class in css and call in js
// text.classList.add("change");

changeProperty.addEventListener("click", function(){
    // text.classList.add("change"); //This adds the property
    text.classList.toggle("change"); //This toggles when clicked on button
})

//querySelectorAll selects all the child in the specified class
const userList=document.querySelectorAll(".nameList li");
//This prints the clicked list in the console window. 
for (user of userList){
    user.addEventListener("click", function(){
        console.log(user);
    });
}

for (user of userList){
    user.addEventListener("click", function(){
        this.style.color="red";
    });
}

//For input
const listInput=document.querySelector(".listInput");
const printInput=document.querySelector(".printing_input");

printInput.addEventListener("click", function(){
    console.log(listInput.value);
});

//Freecodecamp
var div1=document.getElementById('div1');
var unicycle=document.getElementsByClassName('unicycle');
var paragraph=document.getElementsByTagName('p'); //This will select the paragraph in whole document.
var paragraph_specific=div1.getElementsByTagName('p'); //This will select the paragraph only in div1
//Query selector can also be used both act same

//Replace all the html with text
var replaceText= "<h1>Replace text</h1>";
div1.innerHTML = replaceText;
