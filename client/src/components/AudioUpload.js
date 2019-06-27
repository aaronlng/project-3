import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class AudioUpload extends Component {
    state = {
        file: "",
        fileURL: "",
        isUploading: false,
        progress: 0,
    };

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

    handleProgress = progress => this.setState({ progress });

    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };

    handleUploadSuccess = filename => {
        this.setState({ file: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("audio")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ fileURL: url }));
    };

    render() {
        return (
            <div>
                <h5>Upload a song</h5>
                <FileUploader
                name="audio"
                storageRef={firebase.storage().ref("audio")}
                onUploadStart={this.handleUploadStart}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
                />
            </div>
        );
    }
}

export default AudioUpload;