import React from 'react';
import rightArrowImg from '../images/arrows/rightArrow.svg';

const RightArrow = (props) => {
    return (
        <div className="nextArrow" onClick={props.nextImage}>
            <img src={rightArrowImg} className="nextArrowImage" alt="rightarrowimageslider"/>
        </div>
    );
}

export default RightArrow;