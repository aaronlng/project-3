import React, { Component } from 'react'
import proimg from '../imgs/profile.png'
export default class  extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <img src={logo} a href="#" />
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>

                <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg"/>
            </div>
        <span class="card-title">We Jammin Bois</span>
        <div class="card-content">
          <p>
              The Most Down-to-Earth reggea you ever heard!
          </p>
        </div>
      </div>
    </div>
  </div>
            </div>
        )
    }
}
