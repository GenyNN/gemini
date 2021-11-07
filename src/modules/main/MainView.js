import React from "react";
import {StyleSheet,
        Image,
        View,
        ScrollView } from "react-native";
import ScrollableView from './components/ScrollableView'
import {BACKGROUND, BACKGROUND_VIDEO} from '../../../images/'
import MainNavigationBar from './components/MainNavigationBar'
import EStyleSheet from 'react-native-extended-stylesheet';
import DatePicker from '../../components/DatePicker.js'
import Video from 'react-native-video';

export default class MainView extends React.Component {
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'cover',
  };

  render() {
    if (!this.props.storeFetched) {
      return <View />
    }
    return (
        <View style={styles.container}>
        <Video
          source={BACKGROUND_VIDEO}
          style={styles.main}
          rate={this.state.rate}
          volume={this.state.volume}
          muted={this.state.muted}
          resizeMode={this.state.resizeMode}
          repeat={true}
        />
        <ScrollView
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
        >
          <ScrollableView {...this.props} />
        </ScrollView>
        <MainNavigationBar pushRoute={this.props.pushRoute} />
        { this.props.datePickerMode == 'visible' ?
          <DatePicker
            bDay={new Date(this.props.bDay)}
          /> :
          <View/>
        }
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  main: {
    flex: 1,
    width: null,
    height: null,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
});