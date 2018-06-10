import React, { Component } from 'react';
import '../css/app.css';
import image1 from "../images/background/background1.jpg";
import image2 from "../images/background/background2.jpg";
import image3 from "../images/background/background3.jpg";
import image4 from "../images/background/background4.jpg";
import image5 from "../images/background/background5.jpg";
import image6 from "../images/background/background6.jpg";

// Array of Images
const images = [image1, image2, image3, image4, image5, image6];

// This controls the background 
class Background extends Component {
    constructor(props){
        super(props);

        this.state = {
            backgroundNumber : 0,
            className : "bg"
        }
        this.changeBackground = this.changeBackground.bind(this); 
    }

    // Rotate Image Background
    changeBackground = () => {
        // Restart animation
        if (this.state.className === "bg"){
                this.setState({
                        backgroundNumber : this.state.backgroundNumber + 1,
                        className : "bg2"
                    }
                );
        } else {
            this.setState({
                    backgroundNumber : this.state.backgroundNumber + 1,
                    className : "bg"
                }
            );
        }

        // Prevent Overflow
        if (this.state.backgroundNumber > 5){
            this.setState({
                backgroundNumber : 0
            });
        }
    };

    // Set Interval
    componentDidMount(){
        setInterval(this.changeBackground, 20000);
    }

    render (){
        console.log(this.state.className);
        return(
            <div>
                <img src={images[this.state.backgroundNumber]} className={this.state.className} alt="bgImage" />
            </div>
        );
    }

}

export default Background; 