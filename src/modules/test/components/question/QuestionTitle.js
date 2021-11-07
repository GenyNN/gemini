import React, {PropTypes, Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, ListView} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import tests from '../WeeklyTestQuestionsData'
import Fonts from '../../../../utils/fonts'

export default class QuestionTitle extends Component {
  render() {
      return (
        <View style={styles.titleContainer}>
            <Text style={[styles.titleText, Fonts[900]]}>
              {this.props.title}
            </Text>
        </View>
      );
  }
}

const styles = EStyleSheet.create({
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 3,
        width: '15.9rem',
        height: '3.44rem'
    },
    titleText: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)'
    },
});