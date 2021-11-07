import React, {PropTypes, Component} from "react";
import { connect } from 'react-redux'
import {View, Image, TouchableOpacity} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import TopNavBar from "../../../components/TopNavBar"
import TextArea from '../../../components/TextArea'
import Fonts from '../../../utils/fonts'
import { pushRoute } from "../../navigation/NavigationState";
import { BACKGROUND,
         SUNSET,
         SUNNY_ROUND,
         ROUND_NOSELECT,
         ARROW_ZODIAC,
         CHEVRON_LINED } from '../../../../images'

class PartnerCompatibility extends Component {
  render() {
    return (
      <Image source={BACKGROUND} style={styles.container}>
        <TopNavBar />
        <TouchableOpacity
          onPress={this.props.pushRoute}
          style={{zIndex: 1}}
        >
        <Image source={ROUND_NOSELECT} style={styles.user_round} />
        <TextArea
          text={'my partner'}
          mainStyle={styles.partnerViewStyle}
          textStyle={[styles.zodiacRoundText, Fonts[900]]}
        />
        </TouchableOpacity>
        <Image source={SUNNY_ROUND} style={[styles.partner_round]}
        />
        
        <Image source={ARROW_ZODIAC} style={[styles.arrow_zodiac]} />
        <Image source={CHEVRON_LINED} style={styles.chevron_lined} />
        <TextArea
          text={'me'}
          mainStyle={styles.ownerViewStyle}
          textStyle={[styles.zodiacRoundText, Fonts[900]]}
        />
        <TextArea
          text={'B'}
          mainStyle={styles.astroViewStyle}
          textStyle={styles.astro}
        />
        <TextArea
          text={'CHOOSE'}
          mainStyle={styles.titleViewStyle}
          textStyle={[styles.choosePartnerText, Fonts[900]]}
        />
        <TextArea
          text={'PARTNER SIGN'}
          mainStyle={styles.partnerSignViewStyle}
          textStyle={[styles.choosePartnerText, Fonts[900]]}
        />
        <TextArea
          text={'Tap on the icon.'}
          mainStyle={styles.iconTapView}
          textStyle={[styles.iconTapText, Fonts[300]]}
        />
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
    },
    zodiacRoundText: {
      color: '#ffffff',
      fontSize: '1.3rem'
    },
    partnerViewStyle: {
      position: 'absolute',
      marginLeft: '62%',
      marginTop: '50%',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    ownerViewStyle: {
      position: 'absolute',
      marginLeft: '18%',
      marginTop: '50%',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    iconTapView: {
      position: 'absolute',
      marginLeft: '5%',
      marginTop: '51%',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    iconTapText: {
      color: '#ffffff',
      fontSize: '0.9rem'
    },
    partnerSignViewStyle: {
      position: 'absolute',
      marginLeft: '5%',
      marginTop: '41%',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    titleViewStyle: {
      position: 'absolute',
      marginLeft: '5%',
      marginTop: '35%',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    astroViewStyle: {
      backgroundColor: 'rgba(0,0,0,0)',
      paddingTop: '36%',
      paddingLeft: '18%',
      height: '10%'
    },
    choosePartnerText: {
      color: '#ffffff',
      fontSize: '2.3rem'
    },
    astro: {
      fontFamily: 'Astro',
      fontSize: '3.5rem',
      color: '#ffffff',
    },
    user_round: {
      position: 'absolute',
      marginTop: '32%',
      marginLeft: '64%',
      width: '6.5rem',
      height: '6.5rem'
    },
    partner_round: {
      position: 'absolute',
      marginLeft: '7%',
      width: '6.5rem',
      height: '6.5rem',
      marginTop: '32%'
    },
    arrow_zodiac: {
      position: 'absolute',
      marginLeft: '45%',
      width: '2.5rem',
      height: '1.35rem',
      marginTop: '39%'
    },
    chevron_lined: {
      position: 'absolute',
      marginLeft: '44%',
      width: '2.4rem',
      height: '0.22rem',
      marginTop: '95%'
    }
});

export default connect(
    state => ({}),
    dispatch => ({
        pushRoute() {
            dispatch(pushRoute({key: 'partnerZodiac'}))
        }
    })
)(PartnerCompatibility);