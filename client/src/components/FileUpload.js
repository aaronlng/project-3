import React, { Component } from "react";
import axios from "axios";

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
        data.append("file", this.state.selectedFile)
        axios.post("http://localhost:3000/upload", data)
            .then(res => console.log(res.statusText))
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