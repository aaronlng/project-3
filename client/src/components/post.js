import React, { Component } from 'react'
import img from '../images/download.png'
import API from "../utils/API"
import {Modal, Button } from 'react-materialize';


export default class Post extends Component {

    constructor(props) {
        super(props);


        this.state = {
            posts: [],
        }
    }

    componentDidMount() {

    }


    loadPosts = () => {
        console.log("1")
    }



    render() {
        const trigger = <Button>Create a Post</Button>;

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

                <Button onClick={this.loadPosts}>test </Button>

                <Modal header="Modal Header" trigger={trigger}>

                </Modal>
            </div>
        )
    }
}
