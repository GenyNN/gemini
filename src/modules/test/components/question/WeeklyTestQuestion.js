import React, {PropTypes, Component} from "react";
import { connect } from 'react-redux'
import {View, Text, TouchableOpacity, StyleSheet, Image, ListView} from "react-native";
import TopNavBar from "../../../../components/TopNavBar";
import EStyleSheet from 'react-native-extended-stylesheet';
import { BACKGROUND } from '../../../../../images'
import tests from '../WeeklyTestQuestionsData'
import QuestionTitle from './QuestionTitle'
import QuestionBody from './QuestionBody'
import Fonts from '../../../../utils/fonts'
import { updateQuestion } from '../../WeeklyTestState'
import { pushRoute } from '../../../navigation/NavigationState'
import _ from 'lodash'
import ProgressBar from "../../../../components/ProgressBar"
import PageWrapper from '../../../../components/PageWrapper';

class WeeklyTestQuestion extends Component {
  render() {
    const test = _.find(tests, {id: 1}).questions[this.props.question]
    if (!test) {
      return <View />
    }
    return (
        <PageWrapper>
        <View style={styles.container}>
            <QuestionTitle title={test.title} />
            <QuestionBody test={test} />
            <Text style={[styles.currentQuestion, Fonts[900]]}>
                {this.props.question + 1} out of 10
            </Text>
        </View>

        <ProgressBar passed={this.props.question + 1} total="10"/>
        </PageWrapper>
    );
  }

  componentWillMount() {
    this.props.updateQuestion(0)
  }
}

const styles = EStyleSheet.create({
    container: {
      flex: 1,
      width: null,
      height: null,
      paddingLeft: '12%'
    },
    currentQuestion: {
      fontSize: '0.55rem',
      marginTop: '12%',
      marginLeft: '31%',
      backgroundColor: 'rgba(0,0,0,0)',
      color: 'white'
    },
    backgroundStyle: {
        position: 'absolute',
        left: 0,
        top: 0
    }
});

 export default connect(
    state => ({
      question: state.weekly.currentQuestion,
      id: state.weekly.testInProgress
    }),
    dispatch => ({
      updateQuestion(value) {
        dispatch(updateQuestion(value))
      },
      pushRoute(route) {
        dispathc(pushRoute(route))
      }
    })
)(WeeklyTestQuestion);