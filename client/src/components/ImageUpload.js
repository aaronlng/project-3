import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
// import config from "../firebase-config";

// firebase.initializeApp(config);

class ImageUpload extends Component {
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
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ fileURL: url }));
    };

    render() {
        return (
            <div>
                <h5>Upload an Image</h5>
                <FileUploader
                name="images"
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
                />
            </div>
        );
    }
}

export default ImageUpload;