import React, { Component } from "react";
import io from "socket.io-client"
import "./Chat.css"
import API from "../utils/API";


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            user: "1",           // Modify user to become username of person logged in
            userid: "",
            room: "",
            chatMinimized: false,
        }
    }


    componentDidMount() {
        this.socket = io("/")

        this.socket.on("message", message => {
            console.log(message)
            this.setState({ messages: [...this.state.messages, message.message] })
        })

        this.socket.on("user join", user => {
            console.log(user + " has joined")
        })
    }

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

        const body = event.target.value
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
            event.target.value = ""
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
        console.log("toggle")
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
            return <li key={index} className="chat-message"><b>{message.from} :</b> {message.body}</li>
        })

        if (!this.state.chatMinimized) {
            return (
                <div className="chat">
                    <div className="chat-bar"><button className="chat-toggle-btn" onClick={this.toggleChat}>close</button></div>
                    <div className="chat-box">
                        <h1>Chat room</h1>
                        <input id="chat-input" type="text" placeholder="enter a message" onKeyUp={this.handleSubmit} />
                        <button id="chat-send-btn" onClick={this.handleSubmit}>Send</button>
                        {messages}
                    </div>
                </div>
            )
        } else if (this.state.chatMinimized) {
            return (
                <div className="chat">
                    <div className="chat-bar"><button className="chat-toggle-btn" onClick={this.toggleChat}>Open</button></div>
                </div>
            )
        }
    }

    // chatMinimize = (chatMinimized) => {
    //     if (chatMinimized) {
    //         return (
    //             <div className="chat-bar"><button onClick={this.toggleChat}>close</button></div>
    //         )
    //     } else {
    //         return (
    //             <div>
    //                 <div className="chat-bar"><button onClick={this.toggleChat}>close</button></div>
    //                 <div className="chat-box">
    //                     <h1>Chat room</h1>
    //                     <input type="text" placeholder="enter a message" onKeyUp={this.handleSubmit} />
    //                     {messages}
    //                 </div>
    //             </div>

    //         )
    //     }
    // }

    render() {
        const messages = this.state.messages.map((message, index) => {
            return <li key={index}><b>{message.from} :</b> {message.body}</li>
        })

        return (
            <div>
                {/* <button onClick={this.toggleChat}>toggle chat</button>

                <button onClick={this.apiTest}>API test</button>

                <button onClick={this.testUser1}>user1</button>
                <button onClick={this.testUser2}>user2</button>
                <button onClick={() => this.joinRoom("1")}>Join Room 1</button>
                <button onClick={() => this.joinRoom("2")}>Join Room 2</button> */}

                {/* <h1>Chat room</h1>
                <input type="text" placeholder="enter a message" onKeyUp={this.handleSubmit} />
                {messages} */}

                {this.renderChat()}

            </div>
        )
    }
}

export default Chat;
