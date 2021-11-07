import React, {PropTypes, Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, ListView} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import tests from '../WeeklyTestQuestionsData'
import ImageFragment from './ImageFragment'
import ImagesRow from './ImagesRow'

export default class QuestionBody extends Component {
  render() {

    return (
      <View style={styles.textImagesContainer}>
        <ImagesRow
          answers={[this.props.test.answers[0], this.props.test.answers[1]]}
        />
        <ImagesRow
          answers={[this.props.test.answers[2], this.props.test.answers[3]]}
        />
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  textImagesContainer: {
      flexDirection: 'column',
      paddingTop: '8%'
  },
});