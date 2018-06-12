import React, { Component } from 'react';
import image1 from "../images/background/background1.jpg";
import image2 from "../images/background/background2.jpg";
import image3 from "../images/background/background3.jpg";
import image4 from "../images/background/background4.jpg";
import image5 from "../images/background/background5.jpg";
import image6 from "../images/background/background6.jpg";

class BackgroundImage extends Component {
    constructor(props) {
        super(props);

        // Array of images
        this.imageArray = [image1, image2, image3, image4, image5, image6];
        
        this.state = {
            previousImageNumber: this.props.previousSlideNumber,
            currentImageNumber : this.props.slideNumber,
            currentclassname : "initialbg",
            previousclassname : "initialbg",
        }        
    }

    // Do not forget to set a check or this will loop forever
    componentDidUpdate(prevProps){
        // Fade first image
        if (prevProps.slideNumber !== this.props.slideNumber){
            this.setState({
                previousImageNumber : this.props.previousSlideNumber,
                currentImageNumber : this.props.slideNumber,
            })
        }
    }

    render() {
        return (
            <div className="backgroundImage">
                <div>
                    <img className={this.state.currentclassname} src={this.imageArray[this.state.currentImageNumber]} alt="backgroundImageContent"/>
                </div>
            </div>
        );
    }
}

export default BackgroundImage;