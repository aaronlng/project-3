import React, { Component } from "react";
import { storage } from "../firebase";
import { Modal, Container } from 'react-materialize';


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: ""
    }
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({ image });
      console.log(e.target.files[0]);
    }
  }

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref("images/" + image.name).put(image);
    uploadTask.on("state_changed",
      (snapshot) => {
        //progress
      },
      (error) => {
        //error
        console.log(error);
      },
      () => {
        //complete
        storage.ref("images").child(image.name).getDownloadURL().then(url => {
          console.log(url);
          this.setState({
            url: url,
            name: image.name
          });

        });
      });
  }

  render() {
    return (
      <div>
        <Container>
          <h4>Upload An Image</h4>
          <input type="file" onChange={this.handleChange} />
          <button onClick={this.handleUpload} href="#modal2" className="modal-trigger">Upload</button>
          <Modal id="modal2" header="Success!">
            Your file has been uploaded.
          </Modal>
        </Container>
      </div>
    );
  }
}

export default ImageUpload;
