// Page that renders Members information
import React, { Component } from "react";
import API from "../../utils/API"
import "./Chat.css"
import io from "socket.io-client"
import { Button, Row, Col, Card, Container } from "react-materialize"
import "./profile.css"
import MusiclPlayer from "../MusicPlayer"


class Member extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageBody: "",
            messages: [],
            user: "Anonymous",           // Modify user to become username of person logged in
            userid: "",
            room: this.props.match.params.id,
            chatMinimized: true,
            memberData: {},
        }
    }

    componentDidMount() {
        this.socket = io("/")

        this.loadMember(this.props.match.params.id)
        this.joinRoom("m" + this.props.match.params.id);
        this.loadMessages(this.props.match.params.id);

        this.socket.on("message", message => {
            console.log(message)
            this.setState({ messages: [...this.state.messages, message.message] })
        })

        this.socket.on("user join", user => {
            console.log(user + " has joined")
        })
    }

    loadMember = (id) => {
        API.getMemberById(id)
            .then(res => {
                if (res.data) {
                    this.setState({ memberData: res.data })
                }
            });
    }

    loadMessages = (id) => {
        console.log("loading message")
        API.getMemberMessage(id).then(res => {
            console.log(res.data)
            res.data.forEach(dbmessage => {
                const message = {
                    body: dbmessage.body,
                    from: dbmessage.from
                }
                console.log("message set state")
                this.setState({ messages: [...this.state.messages, message] })
            });
        });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleSubmit = event => {
        // emit to all
        // const body = event.target.value
        // if (event.keyCode === 13 && body) {
        //     const message = {
        //         body,
        //         from: this.state.user
        //     }
        //     this.setState({ messages: [...this.state.messages, message] })
        //     this.socket.emit('message', message)
        //     event.target.value = ""
        // }

        const body = this.state.messageBody
        if (event.keyCode === 13 && body) {
            const message = {
                body,
                from: this.state.user
            }
            this.setState({ messages: [...this.state.messages, message] })
            this.socket.emit("message", {
                message: message,
                room: this.state.room
            });

            API.postMemberMessage({
                body: body,
                from: this.state.user,
                MemberChatroomId: this.props.match.params.id
            })

            this.state.messageBody = ""
        }
    }

    handleClickSubmit = event => {
        const body = this.state.messageBody
        if (body) {
            const message = {
                body,
                from: this.state.user
            }
            this.setState({ messages: [...this.state.messages, message] })
            this.socket.emit("message", {
                message: message,
                room: this.state.room
            });

            API.postMemberMessage({
                body: body,
                from: this.state.user,
                MemberChatroomId: this.props.match.params.id
            })

            this.state.messageBody = ""
        }

    }

    testUser1 = () => {
        this.setState({ user: "1" })
    }

    testUser2 = () => {
        this.setState({ user: "2" })
    }

    joinRoom = (roomNum) => {
        console.log(roomNum)
        // this.socket = io("/")
        this.socket.emit("join", {
            room: roomNum,
            user: this.state.user
        });
        this.setState({ room: roomNum });
    }

    toggleChat = () => {
        this.setState(prevState => ({
            chatMinimized: !prevState.chatMinimized
        }))
    }

    apiTest = () => {
        console.log("API test")
        API.testChat()
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }


    renderChat = () => {
        const messages = this.state.messages.map((message, index) => {
            return <p key={index} className="chat-message"><b>{message.from} :</b> {message.body}</p>
        })

        if (!this.state.chatMinimized) {
            return (
                <div className="chat">
                    <div className="chat-bar">
                        <Row>
                            <Col s={3}>
                            </Col>
                            <Col s={6}>
                                <h6 className="bar-title">Message Board</h6>
                            </Col>
                            <Col s={3}>
                                <Button waves="purple" className="chat-toggle-btn red lighten-5" onClick={this.toggleChat}>Close</Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="chat-box">
                        <input
                            id="chat-input"
                            type="text"
                            placeholder="enter a message"
                            onKeyUp={this.handleSubmit}
                            onChange={this.handleInputChange}
                            name="messageBody"
                            value={this.state.messageBody}
                        />
                        <button id="chat-send-btn" onClick={this.handleClickSubmit}>Send</button>
                        {messages}
                    </div>
                </div>
            )
        } else if (this.state.chatMinimized) {
            return (
                <div className="chat">
                    <div className="chat-bar">
                        <Row>
                            <Col s={3}>
                            </Col>
                            <Col s={6}>
                                <h6 className="bar-title">Message Board</h6>
                            </Col>
                            <Col s={3}>
                                <Button waves="purple" className="chat-toggle-btn red lighten-5" onClick={this.toggleChat}>Open</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
        }
    }


    render() {
        return (
            <Container className="page-container">
                <div>
                    {this.state.memberData.fullName ? (
                        <div>
                            <Row>
                                <Col s={5}>
                                    <img
                                        id="picture"
                                        src="https://via.placeholder.com/150"
                                    />
                                </Col>
                                <Col s={7}>
                                    <h1 id="name">{this.state.memberData.fullName}</h1>
                                    <Card
                                        className="blue-grey darken-1 card-7"
                                        textClassName="white-text"
                                        title="Bio"
                                    >
                                        {this.state.memberData.bio}
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col s={12}>
                                    <Card
                                        className="blue-grey darken-1 card-12"
                                        textClassName="white-text"
                                    >
                                        <h4><b>Genre We Play: </b> {this.state.memberData.genres}</h4>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col s={12}>
                                    <Card
                                        className="blue-grey darken-1 card-12"
                                        textClassName="white-text"
                                    >
                                        <h4><b>Who We are Looking to Add: </b>{this.state.memberData.experience}</h4>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col s={12}>
                                    <Card
                                        className="blue-grey darken-1 card-12"
                                        textClassName="white-text"
                                    >
                                        <h4><b>ContactEmail: </b>{this.state.memberData.email}</h4>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col s={12}>
                                    <Card
                                        className="blue-grey darken-1 card-12"
                                        textClassName="white-text"
                                    >
                                        <h4><b>Sample Music:</b> <MusiclPlayer/>  </h4>
                                    </Card>
                                </Col>
                            </Row>
                        </div>




                        // <div>
                        //   <h1>{this.state.bandData.bandName}</h1>
                        //   <p>{this.state.bandData.genres}</p>
                        //   <p>{this.state.bandData.bio}</p>
                        //   <p>Currently Looking For: {this.state.bandData.lookingFor}</p>
                        //   <p>Contact us: {this.state.bandData.email}</p>
                        // </div>
                    ) : (
                            <h1>Error! Band Missing</h1>
                        )}

                    {this.renderChat()}
                </div>
            </Container>
        )
    }
}

export default Member