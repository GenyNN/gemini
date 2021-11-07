import React, {PropTypes} from "react";
import {View, StyleSheet, Image, Text} from "react-native";
import TabBarButton from '../../../components/TabBarButton';
import Input from '../../../components/Input'
import BdayPicker from './BdayPicker'
import MainNavigationBar from './MainNavigationBar'
import {HELLO} from '../../../../images'
import EStyleSheet from 'react-native-extended-stylesheet';
import Fonts from '../../../utils/fonts';

export default class ScrollableView extends React.Component {
  render() {
    return (
      <View
        onStartShouldSetResponder={evt => true}
        onResponderGrant={this.toggleDatePicker}
        style={styles.container}
      >
        <Image source={HELLO} style={styles.hiImg} />
        <Text style={[styles.yourNameStyle, Fonts[900]]}>
          your name
        </Text>
        <Input
          value={this.props.name}
          placeholder="Name"
          viewStyle={styles.NameInput}
          inputStyle={[styles.InputStyle, Fonts[100]]}
          onChange={this.props.changeName}
          onFocus={this.toggleDatePicker}
        />
        <Text style={[styles.birthDate, Fonts[900]]}>
          birth date
        </Text>
        <BdayPicker
          bDay={this.props.bDay}
        />
      </View>
    )
  }

  toggleDatePicker = () => {
    this.props.toggleDatePicker('hidden')
  }
}

const styles = EStyleSheet.create({
  InputStyle: {
    color: '#ffffff',
    height: '5%',
    fontSize: '1.1rem'
  },
  NameInput: {
    marginTop: '4%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff',
  },
  yourNameStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontSize: '1.3rem',
    color: '#ffffff',
    marginTop: '11%'
  },
  birthDate: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontSize: '1.3rem',
    color: '#ffffff',
    marginTop: '11%'
  },
  
  hiImg: {
    marginTop: '12%',
    height: '3.6rem',
    width: '5.3rem'
  },
  container: {
    marginLeft: '4%',
    marginRight: '4%',
  }
})

/*
  hiImg: {
    marginTop: 100,
    marginLeft: 15,
    width: 110,
    height: 80
  },*/