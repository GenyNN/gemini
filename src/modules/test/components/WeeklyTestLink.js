import React, {PropTypes, Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import {pushRoute} from "../../../modules/navigation/NavigationState";
import { startTest } from '../WeeklyTestState'
import {connect} from "react-redux";
import styles from '../Styles';

class WeeklyTestLink extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.chooseTest}
        style={styles.containerWtl}
      >
        <Image
          style={styles.imageWtl}
          source={{uri: this.props.test.testImage}}
        />
        <Text style={styles.textWtl}>
          {this.props.test.description}
        </Text>
      </TouchableOpacity>
    );
  }

  chooseTest = () => {
    this.props.startTest(this.props.test.id)
    this.props.pushRoute()
  }
}

export default connect(
  state => ({}),
  dispatch => ({
      pushRoute(nquestions) {
          dispatch(pushRoute({
              key: 'testQuestions',
              title: 'Test Questions'
          }))
      },
      startTest(index) {
        dispatch(startTest(index))
      }
  })
)(WeeklyTestLink);