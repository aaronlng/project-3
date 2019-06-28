import React, { Component } from 'react'
import img from '../images/download.png'
import API from "../utils/API"
import "./Post.css"
import { Modal, Button, Card, Row, Col, Container, TextInput, Textarea } from 'react-materialize';
import ImageUpload from "./ImageUpload";
import AudioUpload from "./AudioUpload";
import MusicPlayer from './MusicPlayer';


export default class Post extends Component {

    constructor(props) {
        super(props);


        this.state = {
            posts: [],
            title: "",
            titleValidation: true,
            description: "",
            descriptionValidation: true,
            submitSuccess: false,
        }
    }

    componentDidMount() {
        this.loadPosts()
    }




    loadPosts = () => {
        console.log("1")
        API.getPost()
            .then(post => { this.setState({ posts: post.data }) });
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {

        this.setState({
            titleValidation: false,
            descriptionValidation: false,
            submitSuccess: false,
        })
        if (this.state.title) {
            this.setState({ titleValidation: true })
        }
        if (this.state.description) {
            this.setState({ descriptionValidation: true })
        }

        if (this.state.description && this.state.title) {
            this.setState({ title: "", description: "", submitSuccess: true });

            const post = {
                title: this.state.title,
                description: this.state.description
            }
            API.createPost(post)
                .then(dbPost => {
                    this.loadPosts();
                })

        }
    }


    Validation = (valid, text) => {
        if (!valid) {
            return (
                <label className="validation">{text}</label>
            )
        }
    }





    render() {
        const trigger = <Button>Create a Post</Button>;

        return (


            <Container>
                <Row>
                    <Col s={12}>
                        <Card horizontal className="post">
                            <Row>
                                <Col className="card-image" s={3}>
                                    <img src={img} className="post-image"></img>
                                </Col>
                                <Col s={9}>
                                    <h1 className="card-title">Local Guitarist Needed!</h1>
                                    <p className="card-content">We're in need of a local
                                            guitarist for a reggea band!
                                            You'll need to be avaible on
                                            Monday and Wednesday nights.
                                            if you intrested please give us a
                                            call at 610-589-7510.
                                    </p>

                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                {this.state.posts.map(post => (
                    <Row>
                        <Col s={12}>
                            <Card horizontal className="post">
                                <Row>
                                    <Col className="card-image" s={3}>
                                        <img src={img} className="post-image"></img>
                                    </Col>
                                    <Col s={9}>
                                        <h1 className="card-title">{post.title}</h1>
                                        <p className="card-content">
                                            {post.description}
                                        </p>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                ))}

                <Modal header="Create a Post" trigger={trigger}>
                    <form className="post-form">
                        <TextInput
                            id="title-input" placeholder="Guitarist Wanted" label="Post Title"
                            name="title" value={this.state.title} onChange={this.handleInputChange}
                        />
                        {this.Validation(this.state.titleValidation, "Please Enter a Title")}
                        <Textarea
                            id="" type="text" label="Description" placeholder="Description of event and contact information"
                            name="description" onChange={this.handleInputChange} value={this.state.description}
                        />
                        {this.Validation(this.state.descriptionValidation, "Please Enter a Description")}
                    </form>
                    <Button onClick={this.handleSubmit}>Create</Button>
                    {this.state.submitSuccess && <p className="submit-success">Post Successfully Created</p>}
                </Modal>
            </Container>
        )
    }
}

export { Post };

