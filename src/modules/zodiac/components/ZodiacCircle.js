import React, { PropTypes } from "react";
import {connect} from "react-redux";
import {StyleSheet, View, Animated, Image, Easing} from "react-native";
import {SUNNY} from '../../../../images'
import { changeZodiac } from '../ZodiacState'
import _ from 'lodash'
import EStyleSheet from 'react-native-extended-stylesheet';

const alphZodiacSigns = ['A', 'B', 'Y', 'W', 'L', 'K', 'J', 'H', 'G', 'F', 'V', 'D']

class ZodiacCircle extends React.Component {
  state = {
    spinValue: new Animated.Value(0),
    position: 0,
    degree: '30deg',
  };

  onAnimateComplete = (position) => {
    if (position === -1) {
      position = 11
    } else if (position === 12) {
      position = 0
    }
    this.setState({ position })
    this.props.changeZodiac(alphZodiacSigns[position])
  };

  spinForword = (direction) => {
    let nextValue = this.state.position + 1
    if (direction === 'forward') {
      nextValue = this.state.position - 1
    }
    this.state.spinValue.setValue(this.state.position)
    Animated.timing(
      this.state.spinValue, {
        toValue: nextValue,
        duration: 100,
        easing: Easing.linear
      }
    ).start(() => this.onAnimateComplete(nextValue))
  };

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', this.state.degree]
    })

    return (
      <Animated.View>
        <View
          style={styles.leftSign}
          onStartShouldSetResponder={evt => true}
          onResponderGrant={_.throttle(this.spinForword.bind(this, 'backward'), 350)}
        />
        <View
          style={styles.rightSpin}
          onStartShouldSetResponder={evt => true}
          onResponderGrant={_.throttle(this.spinForword.bind(this, 'forward'), 350)}
        />
        <Animated.Image
          style={[styles.animated, {transform: [{rotate: spin}]}]}
          source={SUNNY}
        />
      </Animated.View>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    changeZodiac(value) {
      dispatch(changeZodiac(value))
    },
  })
)(ZodiacCircle)

const styles = EStyleSheet.create({
    rightSpin: {
      position: 'absolute',
      top: '-3rem',
      marginLeft: '55%',
      width: '9rem',
      height: '13rem',
      zIndex: 1,
    },
    leftSign: {
      position: 'absolute',
      marginTop: '20%',
      width: '11.3rem',
      height: '7.5rem',
      zIndex: 1,
    },
    animated: {
      position: 'absolute',
      top: '-2.5rem',
      width: '38rem',
      height: '38rem'
    },
    container: {
      borderWidth: 2, borderColor: 'white',
    },
});