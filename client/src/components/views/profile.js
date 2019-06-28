import React, { Component } from "react";
import proimg from "../imgs/profile.png";
import FileUpload from "../FileUpload";
import API from "../../utils/API";

export default class Profile extends Component {
  state = {
    firstName: "Kevin2",
    lastName: "Wang",
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
        console.log(res.data);
        this.setState({
          firstName: res.data.FirstName,
          lastName: res.data.LastName,
          bio: res.data.bio,
          genres: res.data.genres,
          experience: res.data.experience,
          email: res.data.email
        });
      })
      .catch(err => console.log(err));
  };

  createMember = () => {
    const memberData = {
      fullName: this.state.fullName,
      bio: this.state.bio,
      genres: this.state.genres,
      experience: this.state.experience,
      email: this.state.email
    };

    API.createMember(memberData);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="section">
            <div className="col s4">{/* <img src={proimg}></img> */}</div>
            <div className="col s8">
              <h1 />
              <p />
            </div>
          </div>
        </div>
        <FileUpload />
      </div>
    );
  }
}
