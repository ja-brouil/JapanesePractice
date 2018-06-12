import React, {Component} from 'react';
import BackgroundImage from './BackgroundImage.js';
import LeftArrow from './LeftArrow.js';
import RightArrow from './RightArrow.js';

class BackgroundContainer extends Component {
    constructor(props) {
        super(props);

        // Max number is 5
        this.state = {
            previousSlideNumber: 0,
            slideNumber : 0,
        }
    }

    // Delegate function for next image
    nextImage = () => {
        if (this.state.slideNumber + 1 > 5) {
            this.setState({
                slideNumber: 0,
            });
        } else {
            this.setState({
                slideNumber: this.state.slideNumber + 1,
            });
        }
}

    // Delegate function for previous image
    previousImage = () => {
        if (this.state.slideNumber - 1 < 0){
            this.setState({
                slideNumber: 5,
            });
        } else {
            this.setState({
                slideNumber: this.state.slideNumber - 1,
            });
        }
    }
    
    render () {
        return (
             <div className="slider">
                {/* Slides */}
                <BackgroundImage slideNumber={this.state.slideNumber} previousSlideNumber={this.state.previousSlideNumber} />

                {/*Arrows and Dots */}
                <RightArrow nextImage={this.nextImage} />
                <LeftArrow previousImage={this.previousImage} />
            </div>
        );
    }
}

export default BackgroundContainer;