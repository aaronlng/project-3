import React, { Component } from 'react'
import img from '../images/download.png'
export default class post extends Component {
    render() {
        return (
            <div className='container'>
                <div className='section'>
                    <div className='col s6'>
                        <img src={img}></img>
                    </div>
                    <div className='col s6'>
                        <h1>Local Guitarist Needed!</h1>
                        <p>We're in need of a local 
                            guitarist for a reggea band!
                            You'll need to be avaible on 
                            Monday and Wednesday nights.
                            if you intrested please give us a 
                            call at 610-589-7510.
                        </p>
                        </div> 
                    
                </div>
            </div>
        )
    }
}
export { post}