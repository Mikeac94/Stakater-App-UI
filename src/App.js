import logo from "./stakater.png";
import "./App.css";
import React, { Component } from "react";
var moment = require('moment'); 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/api")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

   getCurrentTime() {
    var currentdate = new Date();
    var datetime =
      " " +
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes(); 
  
    return datetime;
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
 {this.getCurrentTime()} {this.state.apiResponse}
              </p>
  
            </header>
          </div>
        );
  }
}



// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
