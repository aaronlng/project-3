import React, { Component } from 'react'
import proimg from '../imgs/profile.png'
import API from "../../utils/API"
import "./Chat.css"
import io from "socket.io-client"
export default class Bands extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messageBody: "",
      messages: [],
      user: "Anonymous",           // Modify user to become username of person logged in
      userid: "",
      room: this.props.match.params.id,
      chatMinimized: true,
      bandData: {},
    }
  }

  componentDidMount() {
    this.socket = io("/")

    this.loadBand(this.props.match.params.id)    // change this to props.match.params.id
    this.joinRoom(this.props.match.params.id);
    this.loadMessages(this.props.match.params.id);

    this.socket.on("message", message => {
      console.log(message)
      this.setState({ messages: [...this.state.messages, message.message] })
    })

    this.socket.on("user join", user => {
      console.log(user + " has joined")
    })
  }

  loadMessages = (id) => {
    console.log("loaded id: " + id)
    API.getBandMessage(id).then(res => {
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

      API.postMessage({
        body: body,
        from: this.state.user,
        ChatroomId: this.state.room
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

      API.postMessage({
        body: body,
        from: this.state.user,
        ChatroomId: this.state.room
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
      return <li key={index} className="chat-message"><b>{message.from} :</b> {message.body}</li>
    })

    if (!this.state.chatMinimized) {
      return (
        <div className="chat">
          <div className="chat-bar"><button className="chat-toggle-btn" onClick={this.toggleChat}>close</button></div>
          <div className="chat-box">
            <h1>Chat room</h1>
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
          <div className="chat-bar"><button className="chat-toggle-btn" onClick={this.toggleChat}>Open</button></div>
        </div>
      )
    }
  }
  // original Band code

  // state = {
  //   bandData: {
  //     bandName: "no data loaded"
  //   }
  // }

  // componentDidMount() {
  //   this.loadBand("1")
  // }

  loadBand = (id) => {
    API.getBandById(id)
      .then(res => {
        if (res.data) {
          this.setState({ bandData: res.data })
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const messages = this.state.messages.map((message, index) => {
      return <li key={index}><b>{message.from} :</b> {message.body}</li>
    })

    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg" />
              </div>
              <span className="card-title">We Jammin Bois</span>
              <div className="card-content">
                <h1>bandname: {this.state.bandData.bandName}</h1>
                <p>
                  The Most Down-to-Earth reggea you ever heard!
                </p>
              </div>
            </div>
          </div>
        </div>


        <div>

          {/*
          Debugging tools
           <button onClick={this.apiTest}>API test</button>

          <button onClick={this.testUser1}>user1</button>
          <button onClick={this.testUser2}>user2</button>
          <button onClick={() => this.joinRoom("1")}>Join Room 1</button>
          <button onClick={() => this.joinRoom("2")}>Join Room 2</button>
         */}
          {/* <h1>Chat room</h1>
            <input type="text" placeholder="enter a message" onKeyUp={this.handleSubmit} />
          {messages} */}

          {this.renderChat()}

        </div>

      </div>

    )
  }




}
