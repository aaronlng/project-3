import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chat from "./components/Chat"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import Band from "./components/Band"
import Member from "./components/Member"

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <Chat /> */}
//         <h1>test</h1>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/band/:id" component={Band}></Route>
          <Route exact path="/member/:id" component={Member}></Route>

        </Switch>
      </Router >
    );
  }
}

export default App;
