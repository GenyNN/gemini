import React, {PropTypes} from "react";
import {View, StyleSheet} from "react-native";
import TabBarButton from '../../../components/TabBarButton';
import EStyleSheet from 'react-native-extended-stylesheet';
import Fonts from '../../../utils/fonts';

export default class MainNavigationBar extends React.Component {
  static propTypes = {
    pushRoute: PropTypes.func.isRequired
  };

  toFeatures = () => this.props.pushRoute({
    key: 'Features',
    title: 'Gemini Features'
  });

  render() {
    return (
      <View style={styles.navigationBar}>
        <TabBarButton
          text={"i'm ready"}
          action={this.toFeatures}
          isSelected
          style={[styles.fontSize, Fonts[900]]}
        />
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  navigationBar: {
    height: '13%',
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  fontSize: {
    fontSize: '1.3rem'
  }
})