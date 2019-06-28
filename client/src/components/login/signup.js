import React, { Component } from "react";
import { EventEmitter } from "events";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import { Card } from "react-materialize";

class Signup extends Component {
  state = {
    isBand: false,
    fullName: "",
    lookingFor: "",
    bio: "",
    genres: "",
    experience: "",
    email: "",
    password: "",
    emailS: "",
    passwordS: ""
  };

  handleInputChange = event => {
    const { value } = event.target;
    let name = event.target.id;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const User = {
      fullName: this.state.fullName,
      bio: this.state.bio,
      genres: this.state.genres,
      experience: this.state.experience,
      email: this.state.email,
      password: this.state.password
    };
    API.createMember(User).then(response => {
      // console.log(response);
      this.props.history.push("/profile/" + response.data.id);
    });
  };
  handleBandSubmit = event => {
    event.preventDefault();
    const Band = {
      bandName: this.state.fullName,
      bio: this.state.bio,
      genres: this.state.genres,
      lookingFor: this.state.lookingFor,
      email: this.state.email,
      password: this.state.password
    };
    console.log(Band.lookingFor);
    API.createBand(Band).then(response => {
      console.log(response.data);
      this.props.history.push("/bandProfile/" + response.data.id);
    });
  };
  handleBandSignin = event => {
    event.preventDefault();
    const Band = {
      email: this.state.emailS,
      password: this.state.passwordS
    };
    API.validate(Band).then(response => {
      console.log(response.data);
      this.props.history.push("/bandProfile/" + response.data.id);
    });
  };
  handleSoloSignin = event => {
    event.preventDefault();
    const User = {
      email: this.state.emailS,
      password: this.state.passwordS
    };
    API.validateSolo(User).then(response => {
      console.log(response.data);
      this.props.history.push("/profile/" + response.data.id);
    });
  };
  isSolo = () => {
    return (
      <div style={{ padding: 10 }}>
        <div className="row" />
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="John Doe"
                  id="fullName"
                  type="text"
                  className="validate"
                  onChange={this.handleInputChange}
                />
                <label for="fullName">full Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Tell us about you!"
                  id="bio"
                  type="text"
                  className="validate"
                  onChange={this.handleInputChange}
                />
                <label for="bio">Bio</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="how long have you been playing?"
                  id="experience"
                  type="text"
                  className="validate"
                  onChange={this.handleInputChange}
                />
                <label for="experience">experience</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Metal, Ska, Jazz"
                  id="genres"
                  type="text"
                  className="validate"
                  onChange={this.handleInputChange}
                />
                <label for="genres">Genres</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this.handleInputChange}
                />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  onChange={this.handleInputChange}
                />
                <label for="email">Email</label>
              </div>
            </div>
          </form>
        </div>
        <button
          className="btn waves-effect waves-light"
          style={{ backgroundColor: "grey" }}
          onClick={e => this.handleSubmit(e)}
        >
          Submit
        </button>
      </div>
    );
  };

  isMember = e => {
    e.preventDefault();
    this.setState({
      isBand: false
    });
  };
  isBand = e => {
    e.preventDefault();
    this.setState({
      isBand: true
    });
  };
  bandSignin = () => {
    return (
      <div style={{ padding: 10 }}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="passwordS"
              type="password"
              className="validate"
              onChange={this.handleInputChange}
            />
            <label for="passwordS">password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="emailS"
              type="email"
              className="validate"
              onChange={this.handleInputChange}
            />
            <label for="emailS">Email</label>
          </div>
        </div>
        <btn
          className="btn"
          style={{ backgroundColor: "grey" }}
          onClick={e => this.handleBandSignin(e)}
        >
          SignIn Band!
        </btn>
      </div>
    );
  };
  soloSignin = () => {
    return (
      <div style={{ padding: 10 }}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="passwordS"
              type="password"
              className="validate"
              onChange={this.handleInputChange}
            />
            <label for="passwordS">password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="emailS"
              type="email"
              className="validate"
              onChange={this.handleInputChange}
            />
            <label for="emailS">Email</label>
          </div>
        </div>
        <btn
          className="btn"
          style={{ backgroundColor: "grey" }}
          onClick={e => this.handleSoloSignin(e)}
        >
          Sign In!
        </btn>
      </div>
    );
  };
  isBands = () => {
    return (
      <div style={{ padding: 10 }}>
        <div className="row" />
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="The Pixies"
                  id="fullName"
                  type="text"
                  className="validate"
                  onChange={this.handleInputChange}
                />
                <label for="fullName">Bands Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Tell us about the band!"
                  id="bio"
                  type="text"
                  className="validate"
                  onChange={this.handleInputChange}
                />
                <label for="bio">Bio</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="what kind of new member are you looking to add?"
                  id="lookingFor"
                  type="text"
                  className="validate"
                  onChange={this.handleInputChange}
                />
                <label for="lookingFor">Searching For</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Metal, Ska, Jazz"
                  id="genres"
                  type="text"
                  className="validate"
                  onChange={this.handleInputChange}
                />
                <label for="genres">Genres</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this.handleInputChange}
                />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  onChange={this.handleInputChange}
                />
                <label for="email">Email</label>
              </div>
            </div>
          </form>
        </div>
        <button
          style={{ backgroundColor: "grey" }}
          className="btn waves-effect waves-light"
          onClick={e => this.handleBandSubmit(e)}
        >
          Submit Band
        </button>
      </div>
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col s6">
          <Card>
            <h3
              style={{ marginLeft: "37%", fontFamily: "'Arimo', sans-serif" }}
            >
              Sign Up here!
            </h3>
            <button
              style={{ marginLeft: "35%", backgroundColor: "grey" }}
              className="btn waves-effect waves-light"
              onClick={e => this.isMember(e)}
            >
              Signup yourself!
            </button>
            <button
              style={{ backgroundColor: "grey" }}
              className="btn waves-effect waves-light"
              onClick={e => this.isBand(e)}
            >
              Signup A Band!
            </button>
            {this.state.isBand ? this.isBands() : this.isSolo()}
          </Card>
        </div>
        <div className="col s6">
          <Card>
            <h3 style={{ marginLeft: "37%" }}>Sign In here!</h3>
            <button
              style={{ marginLeft: "35%", backgroundColor: "grey" }}
              className="btn waves-effect waves-light"
              onClick={e => this.isMember(e)}
            >
              Signin yourself!
            </button>
            <button
              style={{ backgroundColor: "grey" }}
              className="btn waves-effect waves-light"
              onClick={e => this.isBand(e)}
            >
              SignIn Band!
            </button>

            {this.state.isBand ? this.bandSignin() : this.soloSignin()}
          </Card>
        </div>
      </div>
    );
  }
}

export default Signup;
