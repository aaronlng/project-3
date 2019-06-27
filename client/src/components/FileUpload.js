import React, { Component } from "react";
// import axios from "axios";
// import API from "../utils/API"

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // onChangeHandler = event => {
    //     console.log(event.target.files[0]);
    //     this.setState({
    //         selectedFile: event.target.files[0]
    //     })
    // }

    // onClickHandler = () => {
    //     const data = new FormData()
    //     data.append("file", this.state.selectedFile);
    //     API.fileUpload(data)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }

    render() {
        return (
            <div>
                <form action="../api/upload" method="post">
                    <input type="file" name="file" />
                    <input type="submit" value="upload" />
                </form>
            </div>
        );
    }
}

export default FileUpload;