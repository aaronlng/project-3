import React, { Component } from "react";
import "./App.css";
import 'materialize-css/dist/css/materialize.min.css'
import logo from './images/logo.png'
import M from 'materialize-css'
import Post from './components/post.js'
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
      </div>
    );
  }
}

export default App;
