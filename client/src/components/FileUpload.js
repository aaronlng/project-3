import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API"

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    onChangeHandler = event => {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append("file", this.state.selectedFile);
        API.fileUpload(data)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <form>
                    <input type="file" onChange={this.onChangeHandler} />
                    <button type="button" onClick={this.onClickHandler}>Upload</button>
                </form>
            </div>
        );
    }
}

export default FileUpload;