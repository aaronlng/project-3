import React, { Component } from "react";
import proimg from "../imgs/profile.png";
import ImageUpload from "../ImageUpload";
import API from "../../utils/API";
import "./profile.css";
import { Card, Container, Row, Col, Button } from "react-materialize";

export default class Profile extends Component {
  state = {
    fullName: "",
    bio: "asdf",
    genres: "guitar",
    experience: "none",
    email: "asdf@asdf.com"
  };

  componentDidMount() {
    this.loadMember();
  }

  loadMember = () => {
    API.getProfile(this.props.match.params.id) // set the parameter to user id of login
      .then(res => {
        this.setState({
          fullName: res.data.fullName,
          bio: res.data.bio,
          genres: res.data.genres,
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
            <div className="image-holder">
              <img
                id="picture"
                src="https://amp.businessinsider.com/images/5d003e606fc92048d552ab93-750-563.jpg"
              />
              <Button className="yellow black-text edit-button">Edit</Button>
            </div>
          </Col>
          <Col s={7}>
            <h1 id="name">{this.state.fullName}</h1>
            <Card
              className="blue-grey darken-1 card-7"
              textClassName="white-text"
              title="Bio"
            >
              {this.state.bio}
              <Button className="yellow black-text edit-button">Edit</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Card
              className="blue-grey darken-1 card-12"
              textClassName="white-text"
            >
              <h4><b>Experience </b>{this.state.experience} <Button className="yellow black-text edit-button">Edit</Button></h4>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Card
              className="blue-grey darken-1 card-12"
              textClassName="white-text"
            >
              <h4><b>Genre I Play: </b> {this.state.genres} <Button className="yellow black-text edit-button">Edit</Button></h4>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Card
              className="blue-grey darken-1 card-12"
              textClassName="white-text"
            >
              <h4><b>Email: </b>{this.state.email} <Button className="yellow black-text edit-button">Edit</Button></h4>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Card
              className="blue-grey darken-1 card-12"
              textClassName="white-text"
            >
              <h4><b>Sample Music:</b> <Button className="yellow black-text edit-button">Edit</Button></h4>
            </Card>
          </Col>
        </Row>


      </Container>
    );
  }
}
