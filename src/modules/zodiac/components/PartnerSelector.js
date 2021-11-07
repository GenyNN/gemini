import React, {PropTypes, Component} from "react";
import TopNavBar from "../../../components/TopNavBar"
import {StyleSheet, View, Image} from "react-native";
import {BACKGROUND, SUNSET, SUNNY_ROUND} from '../../../../images'
import ZodiacCircle from './ZodiacCircle'
import GenderSelect from './GenderSelect'
import TextArea from '../../../components/TextArea'
import ZodiacSign from './ZodiacSign'
import EStyleSheet from 'react-native-extended-stylesheet';
import Fonts from '../../../utils/fonts'

export default class PartnerSelector extends Component {
  render() {
    return (
      <Image source={BACKGROUND} style={styles.container}>
        <TextArea
          text={'PARTNER'}
          mainStyle={styles.partnerViewStyle}
          textStyle={[styles.partnerTextStyle, Fonts[900]]}
        />
        <TextArea
          text={'gender'}
          mainStyle={styles.genderViewStyle}
          textStyle={[styles.genderTextStyle, Fonts[900]]}
        />
        <GenderSelect gender={this.props.gender}/>
        <ZodiacSign sign={this.props.zodiac} />
        <Image source={SUNNY_ROUND} style={styles.sunny_round} />
        <Image source={SUNSET} style={[styles.sunset]} />
        <ZodiacCircle />
      </Image>
    )
  }
}

const styles = EStyleSheet.create({
    container: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
      paddingLeft: '4%'
    },
    partnerTextStyle: {
      color: '#ffffff',
      fontSize: '2.2rem'
    },
    partnerViewStyle: {
      marginTop: '10%',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    genderTextStyle: {
      color: '#ffffff',
      fontSize: '1.3rem'
    },
    genderViewStyle: {
      marginTop: '2%',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    sunny_round: {
      position: 'absolute',
      marginTop: '2%',
      marginLeft: '17%',
      width: '4.6rem',
      height: '4.6rem'
    },
    sunset: {
      width: '13rem',
      height: '10.8rem',
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    backdropView: {
      backgroundColor: 'rgba(0,0,0,0)'
    },
});