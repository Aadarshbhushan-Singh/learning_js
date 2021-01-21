//This runs the file which is called in the require method.
const x=require('./01_introduction.js');
//give the const which is being exported a name;
//num1 is given name to x which is imported from tutorial_01.js using large number
const num1=x.largenumber;
const num2=20;
console.log("Sum of number from indroduction file and importing file: ",num1+num2);