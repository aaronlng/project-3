// Page that renders Members information
import React, { Component } from "react";
import API from "../../utils/API"

class Member extends Component {
    state = {
        memberData: {},
    }

    componentDidMount() {
        this.loadMember("1")
    }

    loadMember = (id) => {
        API.getMemberById(id)
            .then(res => this.setState({ memberData: res.data }));
    }

    render() {
        return (
            <div>
                <h1>Member: {this.state.memberData.fullName}</h1>
                
                <button onClick={() => this.loadMember("1")} > api test</button>
            </div>
        )
    }
}

export default Member