import React, { Component } from 'react'
import proimg from '../imgs/profile.png'
import API from "../../utils/API"
export default class Bands extends Component {

  state = {
    bandData: {
      bandName: "no data loaded"
    }
  }

  componentDidMount() {
    this.loadBand("1")
  }

  loadBand = (id) => {
    API.getBandById(id)
      .then(res => {
        if (res) { this.setState({ bandData: res.data }) }
      })
      .catch(err=>console.log(err));
  }


  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src="images/sample-1.jpg" />
              </div>
              <span className="card-title">We Jammin Bois</span>
              <div className="card-content">
                <h1>bandname: {this.state.bandData.bandName}</h1>
                <p>
                  The Most Down-to-Earth reggea you ever heard!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
