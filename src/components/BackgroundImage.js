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
            currentImageNumber : this.props.slideNumber,
            previousImageNumber: this.props.slideNumber,
            currentclassname : "initialbg",
            previousclassname: "initialbg"
        }
    }

    // Do not forget to set a check or this will loop forever
    componentDidUpdate(prevProps){
        // Fade first image
        if (prevProps.slideNumber !== this.props.slideNumber){
            if (this.state.previousclassname === "fadeoutbg") {
                this.setState({
                    previousImageNumber: this.state.currentImageNumber,
                    previousclassname: "fadeoutbg2",
                    currentImageNumber: this.props.slideNumber,
                    currentclassname: "fadeinbg2",
                });
            } else {
                this.setState({
                    previousImageNumber: this.state.currentImageNumber,
                    previousclassname: "fadeoutbg",
                    currentImageNumber: this.props.slideNumber,
                    currentclassname: "fadeinbg",
                });
            }            

        } 
    }

    // Two images to prevent white screen
    render() {
        return (
            <div className="backgroundImage">
                <div>
                    <img className={this.state.previousclassname} src={this.imageArray[this.state.previousImageNumber]} alt="backgroundImageContent"/>
                </div>
                <div>
                    <img className={this.state.currentclassname} src={this.imageArray[this.state.currentImageNumber]} alt="backgroundImageContent"/>
                </div>
            </div>
        );
    }
}

export default BackgroundImage;


 // Use this if you want to use setTimeout();
 /*
 setTimeout(function () {
     this.setState({
         currentImageNumber : this.props.slideNumber,
         currentclassname : "fadeinbg",
         previousclassname : "fadeoutbg"
     });
 }.bind(this), 400);
 */