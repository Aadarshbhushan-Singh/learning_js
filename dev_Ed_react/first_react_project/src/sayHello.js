import React from 'react';
function hello(){
    const sayHello=()=>{
        console.log("Hello react printed!");
    }
    return(
        <div>
            <button onClick={sayHello}>Hello React</button>
        </div>
    );
}

export default hello;