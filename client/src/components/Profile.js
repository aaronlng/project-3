// Page that allows people to add information
import React, { Component } from "react";
import API from "../utils/API";


class Profile extends Component {
    state = {
        firstName: "Kevin2",
        lastName: "Wang",
        bio: "asdf",
        genres: "guitar",
        experience: "none",
        email: "asdf@asdf.com",
    }

    componentDidMount() {
        this.loadMember()
    }

    loadMember = () => {
        API.getProfile("2")  // set the parameter to user id of login
            .then(
                res => {
                    this.setState(
                        {
                            firstName: res.data.FirstName,
                            lastName: res.data.LastName,
                            bio: res.data.bio,
                            genres: res.data.genres,
                            experience: res.data.experience,
                            email: res.data.email
                        }
                    )
                }
            )
            .catch(err => console.log(err));

    }

    createMember = () => {
        const memberData = {
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            bio: this.state.bio,
            genres: this.state.genres,
            experience: this.state.experience,
            email: this.state.email
        }

        API.createMember(memberData)
    }

    render() {
        return (
            <div>
                <h1>Profile</h1>
                <button onClick={this.createMember}>Submit</button>
                <h1>name: {this.state.firstName}</h1>

                <button onClick={() => API.getProfile("2")}>get request</button>

            </div>
        )
    }


}

export default Profile