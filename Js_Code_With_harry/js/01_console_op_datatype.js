//Learning Console Operatrions
console.log(4+34);
console.log(34);
console.log(true);
console.log([34, 45, 67, 12]);
console.log({aadarsh: "Singh", pranjal: "gupta"});
console.table({hello: "world", java: "script"});
//For warning 
console.warn("This is warning!.");
//celar the console
// console.clear();
//check the time to run the code
console.timeEnd('you code took');
console.assert(200<189, 'Age is not possible.');
console.assert(10>9, "This will not be printed!");
console.error("This is error.");

//Variable in JAVASCRIPT
// Keywords for Variables
// var, let, const
var name="Harry"; //string is denoted in black color
var channel;
var marks=90; //Number is denoted in blue color
console.log(name, channel);
channel='This is aadarsh!';
console.log(name, channel, marks);

const arr1=[10, 20, 30];
console.log(arr1);
arr1.push(40);
console.log("After pushing 40: ", arr1);
/*
Basic rule for naming the variable.
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase

*/

//Datatypes
//string
var name="Aadarsh";
console.log("My string is: " + name);
console.log("Type of datatype is: "+ (typeof(name)));

//Numbers
var number=90;
console.log("Dayatype of number is: "+ typeof(number));

//boolean
var bool=true;
console.log("Dataype of bool is: "+bool);
var bool2=false;
console.log("Dataype of bool2 is: ", bool2);

//Null
let nullVar=null;
console.log("Datatype of nullVar is: ", + (typeof(nullVar)));

//Undefined
let undef=undefined;
console.log("Datatype of undef is: "+ (typeof(undef)));

//array
let array1 = [10, 20, 30, 40, true, "Aadarsh"];
console.log("Datatype of array1 is: " + (typeof (array1)));

//Object Literals
let marks1={
    aadarsh: 80,
    pranjal: 10,
    sunny: 12,
    sashwat: 13
}
console.log(marks1);
console.log("Datatype of marks1(object literals) is: " + typeof(marks1));

//Funciton syntax
function functionName(){
    
};

console.log("Datatype of functionName: " + typeof(functionName));