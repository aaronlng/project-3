// Landing Page
import React, { Component } from "react";
import { SearchInput, SearchBtn, SearchSelect } from "./Search";
import API from "../utils/API";



class Home extends Component {
    state = {
        searchQuery: "",
        queryType: "Band by Name"
    }

    componentDidMount() {

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    loadMembers = () => {
        API.getMembers()
            .then(res => { console.log(res) })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        // this.loadMembe rs();
        switch (this.state.queryType) {
            case "Band by Name":
                if (this.state.searchQuery) {
                    API.getBandsByName(this.state.searchQuery)
                        .then(res => { console.log(res) })
                        .catch(err => console.log(err));
                    this.setState({ searchQuery: "" })
                }
                break;
            case "Band by Genre":
                if (this.state.searchQuery) {
                    API.getBandsByGenre(this.state.searchQuery)
                        .then(res => { console.log(res) })
                        .catch(err => console.log(err));

                    this.setState({ searchQuery: "" })
                }
                break;
            case "Member by Name":
                if (this.state.searchQuery) {
                    API.getMembersByName(this.state.searchQuery)
                        .then(res => { console.log(res) })
                        .catch(err => console.log(err));

                    this.setState({ searchQuery: "" })
                }
                break;
            case "Member by Genre":
                if (this.state.searchQuery) {
                    API.getMembersByGenre(this.state.searchQuery)
                        .then(res => { console.log(res) })
                        .catch(err => console.log(err));

                    this.setState({ searchQuery: "" })
                }
                break;

            default:
        }

    };


    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <SearchSelect
                    onChange={this.handleInputChange}
                    name="queryType"
                >
                    <option>Band by Name</option>
                    <option>Band by Genre</option>
                    <option>Member by Name</option>
                    <option>Member by Genre</option>
                </SearchSelect>
                <p>(Testing) Current Query Type: {this.state.queryType}</p>
                <SearchInput
                    onChange={this.handleInputChange}
                    name="searchQuery"
                />
                <SearchBtn onClick={this.handleFormSubmit}>Find</SearchBtn>
            </div>
        )
    }
}

export default Home