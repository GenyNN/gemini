import React, {PropTypes, Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, ListView} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import tests from '../WeeklyTestQuestionsData'
import ImageFragment from './ImageFragment'

export default class ImagesRow extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        {this.props.answers.map((row, index) => {
          return <ImageFragment answer={row} key={row.answerId} />
        })}
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  testImagePicture: {
      width: '8rem',
      height: '8rem'
  },
});