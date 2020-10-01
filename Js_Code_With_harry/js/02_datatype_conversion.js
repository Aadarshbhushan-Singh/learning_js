console.log("This is from tutorial 05."); 

//type conversion

//convert to string
let myVar;
myVar=12;
console.log(myVar);
console.log(myVar, typeof(myVar));
myVar=String(myVar);
console.log(myVar, typeof(myVar));

let booleanVar=String(true);
console.log(booleanVar, typeof(booleanVar));

let date=new Date();
console.log(date, typeof(date));

date=String(date);
console.log(date, typeof(date));

let arr=[1,2,3,4,5];
console.log(arr.length, typeof(arr)); //array will count element only not comma
arr=String(arr);
console.log(arr.length, typeof(arr)); //string will count comma also.


// Convert into Numbers
let myVar2="345";
console.log(myVar2, typeof(myVar2));
myVar2=Number(myVar2);
console.log(myVar2, typeof(myVar2));

let myVar3="345d";
console.log(myVar3, typeof(myVar3));
myVar3=Number(myVar3);
console.log(myVar3, typeof(myVar3)); //This will return NaN i.e Not a number because myVar3 has a letter in it. 
let number=parseInt("34"); //parseInt will convert the data into integer.
console.log(number, typeof(number));

let floatNum=parseFloat('23.4'); //parseFloat will convert into floating point number thatswhy in console number will be displayed.
console.log(floatNum, typeof(floatNum)); 

let floatNum2=30.456322;
console.log(floatNum2.toFixed(3)); //this will fix the number upto 3 digit and works like %.3f (c++), .3f(Python).
