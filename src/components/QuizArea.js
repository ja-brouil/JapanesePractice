import React, { Component } from 'react';
import '../css/app.css';

// Quiz Area where the Hiragana will be shown. Get the correct answer
class QuizArea extends Component {
    constructor(props){
        super(props)

        this.state = {
            currentHiraganaPath: this.props.CurrentHiragana.currentHiraganaPath,
            currentHiraganaAnswer: this.props.CurrentHiragana.currentHiraganaAnswer,
            correctAnswerCount : 0,
            streakAnswerCount : 0,
            lastRenderBool : false,
            incorrectAnswerRenderBool : false,
            inputValue : ''
        }
    }

    checkAnswer = (event) => {
        // Prevent page reload
        event.preventDefault();

        // Check if answer is correct
        if (event.target.answer.value === this.state.currentHiraganaAnswer){
            // Set Last correct Hiragana
            this.props.setNewHiragana();
            this.setState({
                currentHiraganaPath: this.props.CurrentHiragana.currentHiraganaPath,
                currentHiraganaAnswer: this.props.CurrentHiragana.currentHiraganaAnswer,
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
                    <p>Iie, sai shikō shite kudasai!</p>
                    <p>再試行してください</p>
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
                        <label className="underlineMe">What is this Hiragana Character?</label>
                    </div>
                    <div className="answerAreadOfHiragana">
                        <img src={this.state.currentHiraganaPath} alt="Hiragana Character"/>
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


export default QuizArea;