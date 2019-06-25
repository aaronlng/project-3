import React, { Component } from "react";
import "./App.css";
import Chat from "./components/Chat"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import Band from "./components/Band"
import Member from "./components/Member
import 'materialize-css/dist/css/materialize.min.css'
import logo from './images/logo.png'
import M from 'materialize-css'
import Post from './components/post.js'

import Member from "./components/Member"
import Profile from "./components/Profile"

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
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <img src={logo}a href="#"/>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
      
      
          </div>
        </nav>

  <div className="post">
    <Post />
  </div>
      
     <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/band/:id" component={Band}></Route>
          <Route exact path="/member/:id" component={Member}></Route>
          <Route exact path="/profile/:id" component={Profile}></Route>

        </Switch>
        <Chat></Chat>
      </Router >
  </div>
    );
  }
}

export default App;
