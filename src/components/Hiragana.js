import React, { Component } from 'react';
import QuizArea from './QuizArea';
import hiraganaList from '../system/kanalist.json';

class Hiragana extends Component {
    constructor(props) {
        super(props);

        // Array for All Kanas
        this.allKana = [];

        // Initiate the Array
        Object.keys(hiraganaList).forEach((object) => {
            this.allKana.push(hiraganaList[object]);
        });
        const randomInt = Math.floor(Math.random() * this.allKana.length);

        // Set State
        this.state = {
            currentHiraganaPath: require('../images/hiragana/' + this.allKana[randomInt].fileLocation + '.png'),
            currentHiraganaAnswer : this.allKana[randomInt].answer
        };

        // Binds
        this.setNewHiragana = this.setNewHiragana.bind(this);
    }
    
    componentDidMount(){
        this.setNewHiragana();
    }

    // Set New Hiragana
    setNewHiragana = () => {
       const randomInt = Math.floor(Math.random() * this.allKana.length);

       if (!this.allKana[randomInt].enabled){
           this.setNewHiragana();
           return;
       }

       // Set State
       this.setState({
            currentHiraganaPath: require('../images/hiragana/' + this.allKana[randomInt].fileLocation + '.png'),
            currentHiraganaAnswer: this.allKana[randomInt].answer
       });
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