import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// +++++++ Rendering simple html varable +++++++++

//  const element = <h1>My name is Dhirendra </h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//  element
// );


//  +++++++++++ Rendering through component(App) ++++++++++

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



// function Car(){
//   return(
//   <>
//   <h1>I am Car</h1>
//   </>
//   )
// };

// function Garage(){
//   return(
//     <>
//     <h2>This is garage</h2>
//     <Car/>
//     </>
//   )

// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <Garage/>
// )
// +++++++++ classes +++++++++++++
class Bike extends React.Component {
  constructor() {
    super();
    this.state= {color: "red"};
  }
  render(){
    return <h2>I have a {this.state.color} Bike!</h2>

  }
  
}
function abc(a,b){
  return a+b;
}
var ab = abc(4,5);
console.log(ab);
const print = ReactDOM.createRoot(document.getElementById('root'));
print.render(
  <Bike/>
)

// ++++++++++ props ++++++++++


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
