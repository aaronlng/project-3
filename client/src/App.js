import React, { Component } from "react";
import "./App.css";
import M from "materialize-css";
import Home from "./components/Home";
import "materialize-css/dist/css/materialize.min.css";
import Member from "./components/views/Member";
import Profile from "./components/views/profile";
import Bands from "./components/views/bands";
import Signup from "./components/login/signup";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import Post from "./components/post.js";
import bandProfile from "./components/views/bandProfile";


import { SearchInput, SearchBtn, SearchSelect } from "./components/Search";

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
  test = () => console.log("1");

  state = {
    loggedIn: false,
    id: ""
  };

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            {/* <img src={logo} a href="/" /> */}
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/post">Posts</a>
              </li>
              <li>
                {this.state.loggedIn ? (
                  <a href="/profile/:id">Profile</a>
                ) : (
                  <a href="/signin">Login</a>
                )}
              </li>
            </ul>
          </div>
        </nav>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signup} />
            <Route exact path="/band/:id" component={Bands} />
            <Route exact path="/member/:id" component={Member} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/bandProfile/:id" component={bandProfile} />
            <Route exact path="/post" component={Post} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
