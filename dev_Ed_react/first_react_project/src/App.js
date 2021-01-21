import React from 'react';
import hello from './sayHello';
import Tweet from './tweet';
import "./App.css";
// function App(){
//   // const sayHello = () =>{
//   //   console.log('Hello');
//   // };

//   // const counter = 0;

//   return(
//     <div>
//       {/* <h1>Hello react!</h1>
//       <button onClick={console.log("Button is clicked!")}>Hello Button</button> */}
//       {/* name of the button can be given in this way also using js */}
//       {/* <button>{counter}</button>  */}
//       <h1>This is the app component.</h1>
//       <hello />
//     </div>
//   )

// }

// export default App;

function App(){

  return (
    <div className="app">
      <h1>This is imported tweet!</h1>
      <Tweet />
    </div>

  );
}

export default App;