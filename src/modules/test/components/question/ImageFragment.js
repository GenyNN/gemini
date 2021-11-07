import React, {PropTypes, Component} from "react";
import { connect } from 'react-redux'
import {View, Text, TouchableOpacity, StyleSheet, Image, ListView} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import tests from '../WeeklyTestQuestionsData'
import { updateQuestion } from '../../WeeklyTestState'

class ImageFragment extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.updateQuestion}>
        <Image style={styles.testImagePicture} source={{uri: this.props.answer.answerImage}} />
      </TouchableOpacity>
    );
  }

  updateQuestion = () => {
    this.props.updateQuestion(this.props.question + 1)
  }
}

const styles = EStyleSheet.create({
  testImagePicture: {
      width: '8rem',
      height: '8rem'
  },
});

 export default connect(
    state => ({
      question: state.weekly.currentQuestion
    }),
    dispatch => ({
      updateQuestion(value) {
        dispatch(updateQuestion(value))
      }
    })
)(ImageFragment);