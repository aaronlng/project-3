import React, { Component } from "react";
import proimg from "../imgs/profile.png";
import ImageUpload from "../ImageUpload";
import API from "../../utils/API";
import "./profile.css";
import { Card } from "react-materialize";

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
      <div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col s5">
                <img
                  id="picture"
                  src="https://amp.businessinsider.com/images/5d003e606fc92048d552ab93-750-563.jpg"
                />
              </div>
              <div className="col s7">
                <h1 id="name">{this.state.fullName}</h1>
              </div>
              <div className="col s7">
                <Card
                  className="blue-grey darken-1"
                  textClassName="white-text"
                  title="Bio"
                >
                  {this.state.bio}
                </Card>
              </div>

              <div className="col s12">
                <Card
                  className="blue-grey darken-1"
                  textClassName="white-text"
                  title="Experience"
                >
                  {this.state.experience}
                </Card>
              </div>
              <div className="col s12">
                <Card
                  className="blue-grey darken-1 cards"
                  textClassName="white-text"
                  title="Genres I play"
                >
                  {this.state.genres}
                </Card>
              </div>
              <div className="col s12">
                <Card
                  className="blue-grey darken-1"
                  textClassName="white-text"
                  title="Email Contact"
                >
                  {this.state.email}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
