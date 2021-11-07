import React, {PropTypes} from "react";
import {View, StyleSheet} from "react-native";
import TabBarButton from './TabBarButton';

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
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navigationBar: {
    marginTop: 252
  }
})