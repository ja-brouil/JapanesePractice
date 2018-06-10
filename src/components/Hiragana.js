import React, { Component } from 'react';
import QuizArea from './QuizArea';

class Hiragana extends Component {
    constructor(props) {
        super(props);

        // Hiragana
        this.hiraganaList = ["a", "chi", "e", "i", "ka", "ke", "ki", 
        "ko", "ku", "o", "sa", "se", "shi", "so", 
        "su", "ta", "te", "to", "tsu", "u", "na", "ni","nu", "ne", "no", "ha" ,"hi", "fu", "he", "ho",
        "ma", "mi","mu","me", "mo", "ya","yu","yo", "ra","ri", "re", "ro", "ru", "wa", "wi", "we", "wo", "n"];

        const randomInt = Math.floor(Math.random() * this.hiraganaList.length);
        this.state = {
            currentHiraganaPath : require('../images/hiragana/' + this.hiraganaList[randomInt] + '.png'),
            currentHiraganaAnswer : this.hiraganaList[randomInt],
        };

        // Binds
        this.setNewHiragana = this.setNewHiragana.bind(this);
    }
    
    componentDidMount(){
        this.setNewHiragana();
    }

    // Set New Hiragana
    setNewHiragana = () => {
        const randomInt = Math.floor(Math.random() * this.hiraganaList.length);
        this.setState({
                currentHiraganaPath : require('../images/hiragana/' + this.hiraganaList[randomInt] + '.png'),
                currentHiraganaAnswer : this.hiraganaList[randomInt]
            }
        );
    }

    // Render out DOM
    render(){
        return (
            <div>
                <div className="answerArea">
                    <QuizArea setNewHiragana={this.setNewHiragana} CurrentHiragana={this.state}/>  
                </div>
            </div>
        );
    }
}

export default Hiragana;