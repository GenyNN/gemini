import React, {PropTypes, Component} from "react";
import TopNavBar from "../../components/TopNavBar"
import {StyleSheet, View, Image} from "react-native";
import {BACKGROUND, SUNSET, SUNNY_ROUND} from '../../../images'
import ZodiacCircle from './components/ZodiacCircle'
import GenderSelect from './components/GenderSelect'
import TextArea from '../../components/TextArea'
import ZodiacSign from './components/ZodiacSign'
import EStyleSheet from 'react-native-extended-stylesheet';
import Fonts from '../../utils/fonts'
import PartnerSelector from './components/PartnerSelector'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import PartnerTabBar from './components/PartnerTabBar'
import DailyUpdateView from '../update/DailyUpdateView'
import PartnerCompatibility from './components/PartnerCompatibility'

export default class ZodiacView extends Component {
  render() {
    return (
        <View>
        <ScrollableTabView
          renderTabBar={() => <PartnerTabBar backgroundColor='rgba(0, 0, 0, 0)' />}
          tabBarPosition='overlayTop'
        >
          <DailyUpdateView tabLabel="My Sign"/>
          <PartnerCompatibility tabLabel="Partner Compatibility" />
        </ScrollableTabView>
        </View>
    )
  }
}

const styles = EStyleSheet.create({
    container: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
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