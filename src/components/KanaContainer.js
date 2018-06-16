import Hiragana from '../components/Hiragana.js';
import Katakana from '../components/Katakana.js';
import React, {Component} from 'react';

class KanaContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            renderKatakana: true,
            renderHiragana: false
        };
    }
    
    render(){
        if (this.state.renderHiragana){
            return (
                <Hiragana />
            );
        } else {
            return (
                <Katakana />
            );
        }
    }
}

export default KanaContainer;