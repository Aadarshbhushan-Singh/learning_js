console.log("This is tutorial 08.");
console.log("If else and switch statement.");

//If else syntax is exactly same as c and cpp
let age=91;
if (age==90){
    console.log("Age is 90");
}else if (age=91){
    console.log("Age is 91.");
}else {
    console.log("Age is 90 again.")
};

const drive=true;
if (drive==true){ // OR if (drive)
    console.log("Yes! He drives.");
}else{
    console.log("No! He doesnot drive");
}
//If else using ternary operator
const marks=90;
console.log(marks == 90? "Marks is 90":"Marks is not 90");

//Switch case
let day=4;
switch (day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    default:
        console.log("Other are not weekd day. Please select proper day");
}

//For loop
console.log("Looping starts here!");
for (let i=0; i<=10; i++){
    console.log(i);
}
// while loop
let j=0;
while (j<5){
    console.log(j);
    j++;
}

// Do while loop
let k=0;
do{
 console.log(k);
 k++;
}while (k<5);

let arr=[10, 20, 30, 40, 50];
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
};

//OR
arr.forEach(function(element){
    console.log(element);
})

//For dictionaries
let obj={
    name:'Aadarsh',
    age: 20,
    adress: 'Duhabi'
};
for (let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}


