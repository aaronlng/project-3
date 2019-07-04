import React, { Component } from "react";

class MusicPlayer extends Component {
    
    render() {
        return (
            <div>
                <audio controls>
                    <source src="../audio/track.mp3" type="audio/mp3" />
                    Your browser does not support the audio element.    
                </audio>
            </div>
        );
    }
}

export default MusicPlayer;