import React from "react"
import ReactDOM from "react-dom"
import io from "socket.io-client"

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] }
    }

    componentDidMount() {
        this.socket = io("/")
        this.socket.on("message", message => {
            this.setState({ messages: [message, ...this.state.messages] })
        })
    }

    handleSubmit = event => {
        const body = event.target.value
        if (event.keyCode === 13 && body) {
            const message = {
                body,
                from: "me"
            }
            this.setState({ messages: [message, ...this.state.messages] })
            this.socket.emit('message',body)
            event.target.value = ""
        }
    }

    render() {
        const messages = this.state.messages.map((message, index) => {
            return <li key={index}><b>{message.from} :</b> {message.body}</li>
        })

        return (
            <div>
                <h1>Chat room</h1>
                <input type="text" placeholder="enter a message" onKeyUp={this.handleSubmit} />
                {messages}
            </div>
        )
    }
}

export default Chat;
