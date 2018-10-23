import Hiragana from '../components/Hiragana.js';
import React, {Component} from 'react';

class KanaContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            renderHiragana: true
        };
    }
    
    render(){
        return (
               <Hiragana />
        );
    }
}

export default KanaContainer;