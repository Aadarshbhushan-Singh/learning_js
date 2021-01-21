console.log("This is tutorial 07 from Code With Harry.");
let marks=[10,23,45,21,56];
const fruits=['orange', 'mango', 'guava'];
const mixed=[10, 30, 'hello', 'world'];
console.log("Printing array.");
console.log(marks);
console.log(fruits);
console.log(mixed);
console.log("Printing the length of array.");
console.log(marks.length,fruits.length, mixed.length);

//Create new array using Array keyword
console.log("Printing new aary made by Array keyword.");
const arr=new Array(23, 45, 67);
console.log(arr);
arr[0]='Aadarsh';
console.log(arr);
let a=10;
console.log(Array.isArray(fruits));
console.log(Array.isArray(a));

//Indesof
let value=arr.indexOf('Aadarsh');
console.log("The index of Aadarsh is: ", value);

//Mutating and modifying array
marks.push(1000); //Put element at last of array.
marks.unshift(2000); //Put element at starting.
marks.pop(); //Remove the element from the end.
marks.shift(); //Remove from begining of the list.
marks.splice(1,3); //start from 1 and remove 3 elements
let marks2=[100, 200];
marks=marks.concat(marks2); //concatination of array
console.log(marks);

let myobj={
    name: 'Aadarsh',
    sirName: 'Singh',
    branch: 'CSE',
    isActive: true,
    marks3: [90,91,92]
}

console.table(myobj);
console.log(myobj);
console.log(myobj.isActive);
console.log(myobj['name']); //Access the elements of the object
console.log(myobj.sirName); //Access the elements of the object



 