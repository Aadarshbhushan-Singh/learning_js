console.log("This is tutorial 06.");

//Methods and template literals
const name="Aadarsh";
const sirName="Singh";
console.log("I am "+name+" "+sirName);

let myVar="Hello";
myVar=myVar.concat(" ");
myVar=myVar.concat("World!");
console.log(myVar);

//length
console.log(myVar.lenght);

//change to upper and lower case
console.log("Changing cases")
console.log(myVar.toLowerCase());
console.log(myVar.toUpperCase());

//returning the index
console.log("Returning the index.")

console.log(myVar[6]);

console.log(myVar.indexOf("W"));
console.log(myVar.indexOf("l")); //this will give the first index

//get the last index
console.log("Getting index from last.")

console.log(myVar.lastIndexOf("l"));
console.log(myVar.charAt(1));

//ends with
console.log("Ends with")

console.log(myVar.endsWith("ld!"));

console.log(myVar.endsWith("ld"));

//includes
console.log("Includes");

console.log(myVar.includes("ell"));
console.log(myVar.includes("helloworld"));

//substring
console.log(myVar.substring(1,4)); //1 in including and 4 is excluding

//slice
console.log("slicing");

console.log(myVar.slice(0,4)); //from 0 to 4

//split
console.log("Spliting and converting into array.");
console.log(myVar.split(" ")); //break the element form " ";
console.log(myVar.split("l")); //breaks the element from "l";

//replace
console.log("replacing the sring.");
console.log(myVar.replace("!","--"));

//Templates
console.log("Making template and adding to the html throught js.");
let fruit1="Apple";
let fruit2="Orange";

let myHtml=`Hello ${name}
    <h1>This is heading</h1>
    <p>I like ${fruit1} and ${fruit2}</p>`;

document.body.innerHTML=myHtml;