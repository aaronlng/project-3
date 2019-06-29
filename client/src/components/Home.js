// Landing Page
import React, { Component } from "react";
import { SearchInput, SearchBtn, SearchSelect } from "./Search";
import API from "../utils/API";
import { Modal, Card, Row, Col, Container, CardTitle } from 'react-materialize';




class Home extends Component {
  state = {
    searchQuery: "",
    queryType: "Band by Name",
    searchedBand: false,
    searchedMember: false,
    bandResult: [],
    memberResult: []
  };

  componentDidMount() {
    API.getBandById("1").then(res => {
      console.log(res.data);
      this.setState({ featuredBand: res.data });
    });
    API.getMemberById("1").then(res => {
      // console.log(res.data)
      this.setState({ featuredMember: res.data });
      console.log(this.state.featuredMember);
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadMembers = () => {
    API.getMembers().then(res => {
      console.log(res);
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // this.loadMembe rs();
    switch (this.state.queryType) {
      case "Band by Name":
        // changing search rendering state
        console.log()
        this.setState({
          searchedBand: true,
          searchedMember: false
        })
        if (this.state.searchQuery) {
          API.getBandsByName(this.state.searchQuery)
            .then(res => {
              console.log(res.data);
              this.setState({ bandResult: res.data, memberResult: [] });
            })
            .catch(err => console.log(err));
          this.setState({ searchQuery: "" });
        } else {
          console.log("get all bands")
          API.getBands()
            .then(res => {
              console.log(res.data);
              this.setState({ bandResult: res.data, memberResult: [] })
            })
        }
        break;
      case "Band by Genre":
        this.setState({
          searchedBand: true,
          searchedMember: false
        })
        if (this.state.searchQuery) {
          API.getBandsByGenre(this.state.searchQuery)
            .then(res => {
              console.log(res);
              this.setState({ bandResult: res.data, memberResult: [] });
            })
            .catch(err => console.log(err));

          this.setState({ searchQuery: "" });
        } else {
          API.getBands()
            .then(res => {
              console.log(res.data);
              this.setState({ bandResult: res.data, memberResult: [] })
            })
        }
        break;
      case "Member by Name":
        this.setState({
          searchedBand: false,
          searchedMember: true
        })
        if (this.state.searchQuery) {
          API.getMembersByName(this.state.searchQuery)
            .then(res => {
              console.log(res);
              this.setState({ bandResult: [], memberResult: res.data });
            })
            .catch(err => console.log(err));

          this.setState({ searchQuery: "" });
        } else {
          API.getMembers()
            .then(res => {
              this.setState({ memberResult: res.data, bandResult: [] })
            })
        }
        break;
      case "Member by Genre":
        this.setState({
          searchedBand: false,
          searchedMember: true
        })
        if (this.state.searchQuery) {
          API.getMembersByGenre(this.state.searchQuery)
            .then(res => {
              console.log(res);
              this.setState({ bandResult: [], memberResult: res.data });
            })
            .catch(err => console.log(err));

          this.setState({ searchQuery: "" });
        } else {
          API.getMembers()
            .then(res => {
              this.setState({ memberResult: res.data, bandResult: [] })
            })
        }
        break;
      default:
    }
  };

  render() {
    return (
      <Container className="page-container">
        <h1>Bandly</h1>
        <Row>
          {this.state.featuredMember ? (
            <Col s={12} m={6}>
              <h3>Featured Member</h3>
              <p>{this.state.featuredMember.fullName}</p>
              <a href={`/member/${this.state.featuredMember.id}`}>Link</a>
            </Col>
          ) : (

              <Col s={12} m={6}>
                <h3>No Featured Member yet become one today </h3>
              </Col>
            )}
          {this.state.featuredBand ? (
            <Col s={12} m={6}>
              <h3>Featured Band</h3>
              <p>{this.state.featuredBand.bandName}</p>
              <a href={`/band/${this.state.featuredBand.id}`}>Link</a>
            </Col>
          ) : (
              <Col s={12} m={6}>
                <h3>No Featured Band yet become one today </h3>
              </Col>
            )}
        </Row>

        <div>
          <h2>Find More Bands and Members</h2>

          <div className="row">
            <div className="col s2">
              <SearchSelect onChange={this.handleInputChange} name="queryType">
                <option>Band by Name</option>
                <option>Band by Genre</option>
                <option>Member by Name</option>
                <option>Member by Genre</option>
              </SearchSelect>
            </div>
            <div className="col s8">
              <SearchInput
                onChange={this.handleInputChange}
                value={this.state.searchQuery}
                name="searchQuery"
                className="search-input"
                placeholder="Search for a Band or Band Member"
              />
            </div>
            <div className="col s2">
              <SearchBtn className="btn" onClick={this.handleFormSubmit}>
                Find
              </SearchBtn>
            </div>
          </div>

          <Container className="searchResult">

            {this.state.searchedBand && (
              this.state.bandResult[0] ? (
                this.state.bandResult.map(result => {
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
                              <p className="card-content">{result.bio}</p>
                              <a href={link}>link</a>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  );
                })
              ) : (
                  <h3>No Results Found</h3>
                )
            )}


            {
              this.state.searchedMember && (
                this.state.memberResult[0] ? (
                  this.state.memberResult.map(result => {
                    const link = "/member/" + result.id;
                    return (
                      <Row key="result">
                        <Col s={12}>
                          <Card horizontal className="post">
                            <Row>
                              <Col className="card-image" s={3}>
                                {/* <img src={img} className="post-image"></img> */}
                              </Col>
                              <Col s={9}>
                                <h1 className="card-title">{result.fullName}</h1>
                                <p className="card-content">{result.bio}</p>
                                <a href={link}>link</a>
                              </Col>
                            </Row>
                          </Card>
                        </Col>
                      </Row>
                    );
                  })
                ) : (
                    <h1>No Results Found</h1>
                  )
              )


            }

          </Container>
        </div>
      </Container>
    );
  }
}

export default Home;
