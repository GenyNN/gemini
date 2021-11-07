import React, {PropTypes, Component} from "react";
import {StyleSheet, View, Image, TouchableOpacity} from "react-native";
import {GENDER_SEPARATOR, MALE, FEMALE} from '../../../../images'
import TextArea from '../../../components/TextArea'
import EStyleSheet from 'react-native-extended-stylesheet';
import Fonts from '../../../utils/fonts'

export default class ZodiacSign extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextArea
          text={'sign'}
          mainStyle={styles.viewStyle}
          textStyle={[styles.signTextStyle, Fonts[900]]}
        />
        <TextArea
          text={this.props.sign}
          mainStyle={styles.astroViewStyle}
          textStyle={styles.astro}
        />
        <TextArea
          text={'aries'}
          mainStyle={styles.astroSignViewStyle}
          textStyle={[styles.textStyle, Fonts[300]]}
        />
      </View>
    )
  }
}

const styles = EStyleSheet.create({
    container: {
      paddingTop: '5%'
    },
    signTextStyle: {
      color: '#ffffff',
      fontSize: '1.4rem'
    },
    textStyle: {
      color: '#ffffff',
      fontSize: '1.05rem',
    },
    viewStyle: {
      backgroundColor: 'rgba(0,0,0,0)'
    },
    astroSignViewStyle: {
      backgroundColor: 'rgba(0,0,0,0)',
    },
    astroViewStyle: {
      backgroundColor: 'rgba(0,0,0,0)',
      paddingTop: '2%',
      height: '8%'
    },
    astro: {
      fontFamily: 'Astro',
      fontSize: '2.4rem',
      color: '#ffffff',
    }
});