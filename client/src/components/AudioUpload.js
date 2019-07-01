import React, { Component } from "react";
import { storage } from "../firebase";
import {Modal, Container, Row} from 'react-materialize';
import MusicPlayer from "./MusicPlayer";


class AudioUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audio: null,
            url: "",
            uploaded: false
        }
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const audio = e.target.files[0];
            this.setState({ audio });
            console.log(e.target.files[0]);
        }
    }

    handleUpload = () => {
        const { audio } = this.state;
        this.setState({uploaded:true})
        const uploadTask = storage.ref("audio/" + audio.name).put(audio);
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
                storage.ref("audio").child(audio.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({
                        url: url,
                        name: audio.name
                    });
                });
            });
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <h4>Upload A Song</h4>
                        <input type="file" onChange={this.handleChange} />
                        <button onClick={this.handleUpload} href="#modal1" className="modal-trigger">Upload</button>
                        <Modal id="modal1" header="Success!">
                            Your file has been uploaded. 
                        </Modal>
                    </Row>

                    {this.state.uploaded && <MusicPlayer/>}
                    {/* <Row>
                        <audio controls>
                            <source src={this.state.url} type="audio/mp3"></source>
                        </audio>
                    </Row> */}
                </Container>
            </div>
        );
    }
}

export default AudioUpload;
