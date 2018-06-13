import React, { Component } from 'react';
import '../css/app.css';

class CircleButtons extends Component {

    // Set Image Function
    changeImage = (value) => {
        this.props.setCircleImage(value);
    }

    render() {
        return(
            <div className="allCircles">
                <div onClick={this.changeImage.bind(this, "0")} className="circleChange"/> 
                <div onClick={this.changeImage.bind(this, "1")} className="circleChange"/>
                <div onClick={this.changeImage.bind(this, "2")} className="circleChange"/>
                <div onClick={this.changeImage.bind(this, "3")} className="circleChange"/>
                <div onClick={this.changeImage.bind(this, "4")} className="circleChange"/>
                <div onClick={this.changeImage.bind(this, "5")} className="circleChange"/>
            </div>
        );
    }
}

export default CircleButtons;