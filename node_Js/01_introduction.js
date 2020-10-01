const a=4;
const b=10;
console.log(a+b);

// setTimeout executes the code only after the given time irrespective of next line of code
setTimeout(() => {
    console.log(b-1);
}, 2000);

//this prints the directory name
console.log(__dirname);

//In this way a value can be made ready to export.
//If this file is called in another file, this exported value can be used.
const largenumber=100;
module.exports={
    largenumber: largenumber
}