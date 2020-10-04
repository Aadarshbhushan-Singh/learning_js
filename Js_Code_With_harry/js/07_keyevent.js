console.log("Learning KeyEvents in js");
console.log(`There are three types of keyevents:
1) KeyDown : triggered when the button in the keyboard is pressed down
2) KeyUp : triggered when the button on the keyboard is released
3) Keypress : triggered when we press a button which has a key character`)

//Keydown

//Check if the letter "a" is pressed
// window.addEventListener("keydown", checkKeyPress, false);
// function checkKeyPress(key){
//     //A or a
//     if (key.keyCode=="65"){
//         alert(`A is pressed.`);
//     }else if (key.keyCode=="81"){
//         alert("Q is pressed.");
//     }else if (key.keycode=="69"){
//         alert("E is pressed.")
//     }
// }

// KeyPress

// window.addEventListener("keypress", identifyKey, false);
// function identifyKey(key){
//     if (key.keyCode=="65"){
//         alert("Upper case A is pressed.");
//     }else if(key.keyCode="97"){
//         alert("Lower case a is pressed.");
//     }
// };


//Keyup

window.addEventListener("keyup", identify, false);
function identify(key){
    if (key.keyCode=="65"){
        alert("A is released.");
    }
}
