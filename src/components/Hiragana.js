import React, { Component } from 'react';
import QuizArea from './QuizArea';
import hiraganaList from '../system/kanalist.json';
import katakanaList from '../system/katakanaList.json';

class Hiragana extends Component {
    constructor(props) {
        super(props);

        // Array for All Kanas
        this.allKana = [];
        this.allHiragana = [];
        this.allKatakana = [];

        // Initiate the Arrays
        Object.keys(hiraganaList).forEach((object) => {
            this.allKana.push(hiraganaList[object]);
        });

        Object.keys(katakanaList).forEach((object) => {
           this.allKana.push(katakanaList[object]);
        });

        // Binds
        this.setNewHiragana = this.setNewHiragana.bind(this);
        this.setNewKatakana = this.setNewKatakana.bind(this);
        this.setAllKana = this.setAllKana.bind(this);

        const randomInt = Math.floor(Math.random() * this.allKana.length);
        this.state = {
            currentHiraganaPath: require('../images/' + this.allKana[randomInt].fileLocation + '.png'),
            currentHiraganaAnswer: this.allKana[randomInt].answer
        }
    }
    
    componentDidMount(){
        this.setNewHiragana();
    }

    // Set New Hiragana
    setNewHiragana = () => {
       const randomInt = Math.floor(Math.random() * this.allKana.length);

       // Set State
       this.setState({
            currentHiraganaPath: require('../images/' + this.allKana[randomInt].fileLocation + '.png'),
            currentHiraganaAnswer: this.allKana[randomInt].answer
       });
    }

    // Set New Katakana
    setNewKatakana = () => {
        // to do
    }

    // Set Both
    setAllKana = () => {
        // to do
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