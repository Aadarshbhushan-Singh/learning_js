console.log("Functions in JavaScript");
//Functions in Javascript
let name="aadarsh";
console.log(`Happy birthday ${name}`);

function greet(name){
    console.log(`Happy Birthday ${name}`);
}

greet("Mohan");

let val=greet("Rakesh");

//Creating functions inside obj
const obj={
    name: 'Aadarsh',
    game: function(){
        return "PUBG"
    }
}
console.log(obj.game());
//Printing the element index and array using function
arr=["Chair", "Table", "Bench", "Sofa"];
arr.forEach(function(element, array, index){
    console.log(element, index, array);
});

/*
####   Important ###
The scope of let is only under the block but the scope of var is in whole program. So, try to use let most of the time to avoid error.
*/
var i=200;
console.log(i);
function functionName(name){
    var i=10;
    console.log(i);
    return `This is a name ${name}.`;
}
console.log(functionName("Rohan"));
console.log(i);