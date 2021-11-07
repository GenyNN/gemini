import React, {PropTypes, Component} from "react";
import {StyleSheet, View, Image, TouchableOpacity} from "react-native";
import {GENDER_SEPARATOR, MALE, FEMALE} from '../../../../images'
import TextArea from '../../../components/TextArea'
import GenderSign from './GenderSign'
import EStyleSheet from 'react-native-extended-stylesheet';

export default class GenderSelect extends Component {
  render() {
    const isMale = this.props.gender === 'male'
    return (
      <View style={styles.container}>
        <GenderSign
          gender={'male'}
          opacity={!isMale ? 0.4 : 1}
          disabled={isMale}
        />
        <Image source={GENDER_SEPARATOR} style={styles.genderSeparator} />
        <GenderSign
          gender={'female'}
          opacity={isMale ? 0.4 : 1}
          disabled ={!isMale}
        />
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: '4%',
  },
  genderSeparator: {
    width: '2.5rem',
    height: '4.1rem',
    marginHorizontal: '3%',
  },
});