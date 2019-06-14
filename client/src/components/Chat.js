import React from "react"
import io from "socket.io-client"

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            user: "1",           // Modify user to become username of person logged in
            room: "1"
        }
    }

    componentDidMount() {
        this.socket = io("/")
        this.socket.on("message", message => {
            console.log(message)
            this.setState({ messages: [ ...this.state.messages, message.body] })
        })
    }

    handleSubmit = event => {
        const body = event.target.value
        if (event.keyCode === 13 && body) {
            const message = {
                body,
                from: this.state.user
            }
            this.setState({ messages: [...this.state.messages, message] })
            this.socket.emit('message', message)
            event.target.value = ""
        }
    }

    testUser1 = () => {
        this.setState({ user: "1" })
    }

    testUser2 = () => {
        this.setState({ user: "2" })
    }


    render() {
        const messages = this.state.messages.map((message, index) => {
            return <li key={index}><b>{message.from} :</b> {message.body}</li>
        })

        return (
            <div>
                <button onClick={this.testUser1}>user1</button>
                <button onClick={this.testUser2}>user2</button>

                <h1>Chat room</h1>
                <input type="text" placeholder="enter a message" onKeyUp={this.handleSubmit} />
                {messages}


            </div>
        )
    }
}

export default Chat;
