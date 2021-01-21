import React, {Component} from 'react';
import './Hello.css';

//This can be represented by the function below.

// class Hello extends Component{
//     render(){
//         return (
//         <div className='f1 tc'>
//         <h1>Hello worldddd</h1>
//         <h2>Welcome to react.</h2>
//         <p>{this.props.greeting}</p>
//         </div>
//         )
//     }
// }

const Hello = (props) =>{
    return (
        <div className='f1 tc'>
            <h1>Hello Worlddd </h1>
            <h2>Welcome to react</h2>
        </div>
    )
}
export default Hello;