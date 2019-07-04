import React, { Component } from "react";
import proimg from "../imgs/profile.png";
import ImageUpload from "../ImageUpload";
import API from "../../utils/API";
import { Card, Container, Row, Col } from "react-materialize";
import "./profile.css"
import MusicPlayer from "../MusicPlayer";
import AudioUpload from "../AudioUpload";

export default class Profile extends Component {
  state = {
    bandName: "test",
    bio: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    genres: "guitar",
    looking: "test",
    experience: "none",
    email: "asdf@asdf.com"
  };

  componentDidMount() {
    this.loadMember();
  }

  loadMember = () => {
    API.getBandProfile(this.props.match.params.id) // set the parameter to user id of login
      .then(res => {
        console.log(res);
        this.setState({
          bandName: res.data.bandName,
          bio: res.data.bio,
          looking: res.data.lookingFor,
          experience: res.data.experience,
          email: res.data.email
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container className="page-container">
        <Row>
          <Col s={5}>
            <img
              id="picture"
              src="https://images.unsplash.com/photo-1493936228893-0510232b1cf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
          </Col>
          <Col s={7}>
            <h1 id="name">{this.state.bandName}</h1>
            <Card
              className="blue-grey darken-1 card-7"
              textClassName="white-text"
              title="Bio"
            >
              {this.state.bio}
            </Card>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Card
              className="blue-grey darken-1 card-12"
              textClassName="white-text"
            >
              <h4><b>Genre We Play: </b> {this.state.genres}</h4>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Card
              className="blue-grey darken-1 card-12"
              textClassName="white-text"
            >
              <h4><b>Who We are Looking to Add: </b>{this.state.looking}</h4>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Card
              className="blue-grey darken-1 card-12"
              textClassName="white-text"
            >
              <h4><b>Email: </b>{this.state.email}</h4>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Card
              className="blue-grey darken-1 card-12"
              textClassName="white-text"
            >
              <h4><b>Sample Music:</b> <AudioUpload/> </h4>
            </Card>
          </Col>
        </Row>

      </Container>
    );
  }
}
