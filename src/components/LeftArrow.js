import React from 'react';
import leftArrowImage from '../images/arrows/leftArrow.svg';

const LeftArrow = (props) => {
        return (
            <div className="previousArrow" onClick={props.previousImage}>
                <img src={leftArrowImage} className="previousArrowImg" alt="leftarrowimagetext"/>
            </div>
        );
}

export default LeftArrow;