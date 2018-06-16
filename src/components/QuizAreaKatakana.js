import React, { Component } from 'react';
import '../css/app.css';

// Quiz Area where the Hiragana will be shown. Get the correct answer
class QuizAreaKatakana extends Component {
    constructor(props){
        super(props)

        this.state = {
            currentKatakanaPath: this.props.CurrentKatakana.currentKatakanaPath,
            currentKatakanaAnswer: this.props.CurrentKatakana.currentKatakanaAnswer,
            correctAnswerCount : 0,
            streakAnswerCount : 0,
            // I'm aware that we should use enumerators for these instead of flags.
            lastRenderBool : false,
            incorrectAnswerRenderBool : false,
            inputValue : ''
        }
    }

    checkAnswer = (event) => {
        // Prevent page reload
        event.preventDefault();

        // Check if answer is correct
        if (event.target.answer.value === this.state.currentKatakanaAnswer) {
            // Set Last correct Hiragana
            this.props.setNewKatakana();
            this.setState({
                currentKatakanaPath: this.props.CurrentKatakana.currentKatakanaPath,
                currentKatakanaAnswer: this.props.CurrentKatakana.currentKatakanaAnswer,
                lastRenderBool : true,
                incorrectAnswerRenderBool : false,
                correctAnswerCount : this.state.correctAnswerCount + 1,
                streakAnswerCount : this.state.streakAnswerCount + 1,
                inputValue : ''
            })

        } else {
            // Incorrect
            this.setState({
                streakAnswerCount : 0,
                incorrectAnswerRenderBool : true,
                lastRenderBool : false,
                inputValue : ''
            });
        }    
    }

    lastAnswerRender = () => {
        if (this.state.lastRenderBool){
            return (
                    <div>
                        <p>Correct!</p>
                    </div>
                );
        }
    }

    incorrectAnswerRender = () => {
        if (this.state.incorrectAnswerRenderBool) {
            return(
                <div>
                    <p>Incorrect! Try again!</p>
                </div>
            );
        }
    }

    onChange = (event) => {
        event.preventDefault();
        this.setState(
            {
                inputValue: event.target.value
            }
        );
    }

    render(){
        return(
            <div className="allQuizArea">
                <div className="currentHiragana">
                    <div className="titleOfHiragana">
                        <label className="underlineMe">What is this Katakana Character?</label>
                    </div>
                    <div className="answerAreadOfHiragana">
                        <img src={this.state.currentKatakanaPath} alt="Hiragana Character"/>
                        <form onSubmit={this.checkAnswer} autoComplete="off" >
                            <input type="text" name="answer" placeholder="Answer..." value={this.state.inputValue} onChange={this.onChange} autoCapitalize="none"/>
                        </form>
                    </div>
                    <div>
                        <p>Correct Answers: {this.state.correctAnswerCount} </p>
                        <p>Current Streak: {this.state.streakAnswerCount} </p>
                        {this.incorrectAnswerRender()}
                        {this.lastAnswerRender()}
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizAreaKatakana;