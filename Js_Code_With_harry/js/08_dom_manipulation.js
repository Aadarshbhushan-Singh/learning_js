console.log("This is turorial 11 and 12. Dom Manipulation starts form here.");

let a = document;
// a=document.all;
a=document.body;
a=document.forms;
a=document.links;
a=document.scripts;
a=document.images;
a=document.heading;

console.log(a);

//forms can be selected using forms[1], forms[2].
// console.log(typeof(a));

console.log("Tutorial 12 Starts from here.\n------------------------------ \n ");
/*
Element Selector are of two types.
1) Single Element selector
2) Multiple Element Selector
*/

//Single Element DOM Selector

let element= document.getElementById("first");
console.log(element);
console.log("Name of the class: ",element.className);
console.log(element.parentNode);
console.log(element.childNode); //undefined because it doesn't have any classes.
element.style.color="red";
element.style.backgroundColor="yellow";

element.innerHTML='<b>Hello world.</b>'; //changing the html property using innerHTML

console.log(element.innerText); //Printing the content using innerText

let sel=document.querySelector("#second");
console.log(sel);

let sel2=document.querySelector(".child");
console.log(sel2); //will get first element of class name using along with property

let sel3=document.querySelector("div");
console.log(sel3);  //will get first div element

sel3.style.color="green";

// Multiple Element Selector

let sel4=document.getElementsByClassName("child");
console.log(sel4);

console.log(sel4[0].getElementsByClassName("child"));

