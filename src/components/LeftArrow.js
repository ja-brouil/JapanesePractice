import React from 'react';
import leftArrowImage from '../images/arrows/leftArrow.svg';

const LeftArrow = (props) => {
        return (
            <div className="previousArrow" onClick={props.previousImage}>
                <img src={leftArrowImage} className="previousArrow" alt="leftarrowimagetext"/>
            </div>
        );
}

export default LeftArrow;