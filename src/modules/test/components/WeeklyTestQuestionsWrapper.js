import React, {PropTypes, Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import WeeklyTestQuestion from './WeeklyTestQuestion'
import {answerSelected} from './WeeklyTestQuestionsWrapperState';
import tests from "./WeeklyTestQuestionsData";
import EStyleSheet from 'react-native-extended-stylesheet';

import {connect} from "react-redux";

class WeeklyTestQuestionsWrapper extends Component {

    constructor() {
        super();
        this.state = {
            questions: null,
        };
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View>
                    {(() => {

                        let questions = tests[0].questions;//this.props.questions;
                        console.debug("----"+questions);
                        //const { people } = this.props.questions;
                        let firstNotAnswered  =  questions.find(x => x.selectedAnswer == null);
                        //firstNotAnswered != null
                        console.debug("----!" + this.props.questions)
                        console.debug("----!" + firstNotAnswered.question.title)
                        if (firstNotAnswered) {
                            return <WeeklyTestQuestion question = {firstNotAnswered.question} />;
                        }
                    })()}
                </View>
            </TouchableOpacity>
        );
    }
}
var questionsInit = [
    {
        question : {
            id: 1,
            title: "Where whould you like get married",
            answers: [
                {
                    answerId: 1,
                    answerImage: "https://trello-attachments.s3.amazonaws.com/57d67207a684b40900690efd/580dd2b454e060795058c7f8/cddce3bb33a6a69e34cad750c35c53d0/6bcd5348438a5677e346ffdea0cfe86a.jpg"
                },
                {
                    answerId: 2,
                    answerImage: "https://trello-attachments.s3.amazonaws.com/57d67207a684b40900690efd/580dd2b454e060795058c7f8/b014f760eff4ce2f99e08476d4ed09ae/luxfon.com-10987.jpg"
                },
                {
                    answerId: 3,
                    answerImage: "https://trello-attachments.s3.amazonaws.com/57d67207a684b40900690efd/580dd2b454e060795058c7f8/2669fec2397f5b40ac9f93bc94c70a59/running-watch.jpg"
                },
                {
                    answerId: 4,
                    answerImage: "https://trello-attachments.s3.amazonaws.com/57d67207a684b40900690efd/580dd2b454e060795058c7f8/cef06ca50311d320949cf0dc6df64bc2/zdorovyj-son-2-variant.jpg"
                }
            ],
            selectedAnswer: null
        },
        question : {
            id: 2,
            title: "What are you want?",
            answers: [
                {
                    answerId: 5,
                    answerImage: "https://trello-attachments.s3.amazonaws.com/57d67207a684b40900690efd/580dd2b454e060795058c7f8/cddce3bb33a6a69e34cad750c35c53d0/6bcd5348438a5677e346ffdea0cfe86a.jpg"
                },
                {
                    answerId: 6,
                    answerImage: "https://trello-attachments.s3.amazonaws.com/57d67207a684b40900690efd/580dd2b454e060795058c7f8/b014f760eff4ce2f99e08476d4ed09ae/luxfon.com-10987.jpg"
                },
                {
                    answerId: 7,
                    answerImage: "https://trello-attachments.s3.amazonaws.com/57d67207a684b40900690efd/580dd2b454e060795058c7f8/2669fec2397f5b40ac9f93bc94c70a59/running-watch.jpg"
                },
                {
                    answerId: 8,
                    answerImage: "https://trello-attachments.s3.amazonaws.com/57d67207a684b40900690efd/580dd2b454e060795058c7f8/cef06ca50311d320949cf0dc6df64bc2/zdorovyj-son-2-variant.jpg"
                }
            ],
            selectedAnswer: null
        }
    }
];


const styles = EStyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});

export default connect(
    state => ({
        id: state.weekly.testInProgress
    }),
    dispatch => ({
        onAnswerSelected() {
            dispatch(answerSelected());
        }
    })
)(WeeklyTestQuestionsWrapper);
