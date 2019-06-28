import React, { Component } from "react";
import { EventEmitter } from "events";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    isBand: false,
    fullName: "",
    bio: "",
    genres: "",
    experience: "",
    email: "",
    password: ""
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
      console.log("createMemberChat of id:" + response.data.id)
      API.createMemberChat(response.data.id)
      this.props.history.push("/profile/" + response.data.id);
    });
  };

  handleBandSubmit = event => {
    event.preventDefault();
    const Band = {
      bandName: this.state.fullName,
      bio: this.state.bio,
      genres: this.state.genres,
      experience: this.state.experience,
      email: this.state.email,
      password: this.state.password
    };
    API.createBand(Band).then(message => {
      console.log("Band message" + message.data);
      console.log(message)
      console.log("createBandChat of id:" + message.data.id)
      API.createBandChat(message.data.id)
    });
  };

  isSolo = () => {
    return (
      <div className="container">
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
        <button className="btn" onClick={e => this.handleSubmit(e)} />
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

  isBands = () => {
    return (
      <div className="container">
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
                  placeholder="how long has the band been around?"
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
        <button className="btn" onClick={e => this.handleBandSubmit(e)} />
      </div>
    );
  };

  render() {
    return (
      <div className="row">
        <button className="btn" onClick={e => this.isMember(e)}>
          Signup yourself!
        </button>
        <button className="btn" onClick={e => API.tryslash()} />
        <button className="btn" onClick={e => this.isBand(e)}>
          Signup A Band!
        </button>

        {this.state.isBand ? this.isBands() : this.isSolo()}
      </div>
    );
  }
}

export default Signup;
