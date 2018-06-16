import React, { Component } from 'react';
import QuizAreaKatakana from './QuizAreaKatakana.js';

class Katakana extends Component {
    constructor(props) {
        super(props);

        // Katakana
        this.KatakanaList = ["a", "o", "e", "i", "u"];

        const randomInt = Math.floor(Math.random() * this.KatakanaList.length);
        this.state = {
            currentKatakanaPath: require('../images/katakana/' + this.KatakanaList[randomInt] + '.png'),
            currentKatakanaAnswer: this.KatakanaList[randomInt],
        };

        // Binds
        this.setNewKatakana = this.setNewKatakana.bind(this);
    }
    
    componentDidMount(){
        this.setNewKatakana();
    }

    // Set New Hiragana
    setNewKatakana = () => {
        const randomInt = Math.floor(Math.random() * this.KatakanaList.length);
        this.setState({
                currentKatakanaPath: require('../images/katakana/' + this.KatakanaList[randomInt] + '.png'),
                currentKatakanaAnswer: this.KatakanaList[randomInt]
            }
        );
    }

    // Render out DOM
    render(){
        return (
            <div>
                <div className="answerArea">
                    <QuizAreaKatakana setNewKatakana={this.setNewKatakana} CurrentKatakana={this.state}/>  
                </div>
            </div>
        );
    }
}

export default Katakana;