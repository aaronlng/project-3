// Landing Page
import React, { Component } from "react";
import { SearchInput, SearchBtn, SearchSelect } from "./Search";
import API from "../utils/API";
import { Modal, Card, Row, Col, Container } from 'react-materialize';
import FileUpload from "./FileUpload";





class Home extends Component {
    state = {
        searchQuery: "",
        queryType: "Band by Name",
        bandResult: [],
        memberResult: [],
    }

    componentDidMount() {
        API.getBandById("1").then(res => {
            console.log(res.data)
            this.setState({ featuredBand: res.data })
        });
        API.getMemberById("1").then(res => {
            // console.log(res.data)
            this.setState({ featuredMember: res.data })
            console.log(this.state.featuredMember)
        });
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
                        .then(res => {
                            console.log(res.data)
                            this.setState({ bandResult: res.data, memberResult: [] })
                        })
                        .catch(err => console.log(err));
                    this.setState({ searchQuery: "" })
                }
                break;
            case "Band by Genre":
                if (this.state.searchQuery) {
                    API.getBandsByGenre(this.state.searchQuery)
                        .then(res => {
                            console.log(res)
                            this.setState({ bandResult: res.data, memberResult: [] })
                        })
                        .catch(err => console.log(err));

                    this.setState({ searchQuery: "" })
                }
                break;
            case "Member by Name":
                if (this.state.searchQuery) {
                    API.getMembersByName(this.state.searchQuery)
                        .then(res => {
                            console.log(res)
                            this.setState({ bandResult: [], memberResult: res.data })
                        })
                        .catch(err => console.log(err));

                    this.setState({ searchQuery: "" })
                }
                break;
            case "Member by Genre":
                if (this.state.searchQuery) {
                    API.getMembersByGenre(this.state.searchQuery)
                        .then(res => {
                            console.log(res)
                            this.setState({ bandResult: [], memberResult: res.data })
                        })
                        .catch(err => console.log(err));

                    this.setState({ searchQuery: "" })
                }
                break;
            default:
        }
    };




    render() {
        return (
            <div className="container">
                <h1>Bandly</h1>
                <Row>
                    {this.state.featuredMember ?
                        (
                            <Col s={12} m={6}>
                                <h3>Featured Member</h3>
                                <p>{this.state.featuredMember.fullName}</p>
                                <a href={`/member/${this.state.featuredMember.id}`}>Link</a>
                            </Col>
                        ) : (
                            <Col s={12} m={6}>
                                <h3>No Featured Member yet become one today </h3>
                            </Col>
                        )
                    }
                    {this.state.featuredBand ?
                        (
                            <Col s={12} m={6}>
                                <h3>Featured Band</h3>
                                <p>{this.state.featuredBand.bandName}</p>
                                <a href={`/band/${this.state.featuredBand.id}`}>Link</a>
                            </Col>
                        ) : (
                            <Col s={12} m={6}>
                                <h3>No Featured Band yet become one today </h3>
                            </Col>
                        )
                    }
                </Row>

                <div>
                    <h2>Find more bands and members</h2>

                    <div className="row">
                        <div className="col s3">
                            <SearchSelect
                                onChange={this.handleInputChange}
                                name="queryType"
                            >
                                <option>Band by Name</option>
                                <option>Band by Genre</option>
                                <option>Member by Name</option>
                                <option>Member by Genre</option>
                            </SearchSelect>
                        </div>
                        <div className="col s7">
                            <SearchInput
                                onChange={this.handleInputChange}
                                name="searchQuery"
                                className="search-input"
                                placeholder="Search for a Band or Band Member"
                            />
                        </div>
                        <div className="col s2">
                            <SearchBtn className="btn" onClick={this.handleFormSubmit}>Find</SearchBtn>
                        </div>
                    </div>
                    <Container className="searchResult">

                        {this.state.bandResult.map(result => {
                            const link = "/band/" + result.id;
                            return (
                                <Row key="result">
                                    <Col s={12}>
                                        <Card horizontal className="post">
                                            <Row>
                                                <Col className="card-image" s={3}>
                                                    {/* <img src={img} className="post-image"></img> */}
                                                </Col>
                                                <Col s={9}>
                                                    <h1 className="card-title">{result.bandName}</h1>
                                                    <p className="card-content">
                                                        {result.bio}
                                                    </p>
                                                    <a href={link} >link</a>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                </Row>
                            )
                        })}
                    </Container>
                </div>

            </div>
        )
    }
}

export default Home