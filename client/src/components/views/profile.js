import React, { Component } from 'react'
import proimg from '../imgs/profile.png'
export default class profile extends Component {
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

                <div className='container'>
                    <div className='section'>
                        <div className='col s4'>
                            <img src={proimg}></img>
                        </div>
                        <div className='col s8'>
                            <h1>Nate B</h1>
                            <p>
                                Guitarest with a passion for all
                                music!
                    </p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
