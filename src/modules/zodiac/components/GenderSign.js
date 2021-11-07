import React, {PropTypes, Component} from "react";
import { connect } from 'react-redux'
import {StyleSheet, View, Image, TouchableOpacity} from "react-native";
import {GENDER_SEPARATOR, MALE, FEMALE} from '../../../../images'
import TextArea from '../../../components/TextArea'
import { changeGender } from '../ZodiacState'
import EStyleSheet from 'react-native-extended-stylesheet';
import Fonts from '../../../utils/fonts'

class GenderSelect extends Component {
  render() {
    const genderImage = this.props.gender === 'male' ? MALE : FEMALE
    const opacity = {
      opacity: this.props.opacity
    }
    return (
      <TouchableOpacity
        onPress={() => this.props.changeGender(this.props.gender)}
        disabled={this.props.disabled}
      >
        <Image source={genderImage} style={[styles.gender, opacity]} />
        <TextArea
          text={this.props.gender}
          mainStyle={[styles.viewArea]}
          textStyle={[styles.textStyle, opacity, Fonts[900]]}
        />
      </TouchableOpacity>
    )
  }
}

const styles = EStyleSheet.create({
  gender: {
    marginTop: '1%',
    width: '2.3rem',
    height: '2.3rem',
  },
  textStyle: {
    color: '#ffffff',
    fontSize: '0.5rem'
  },
  viewArea: {
    marginTop: '1%',
    backgroundColor: `rgba(0, 0, 0, 0)`
  },
});

export default connect(
  state => ({}),
  dispatch => ({
    changeGender(index) {
      dispatch(changeGender(index));
    }
  })
)(GenderSelect);