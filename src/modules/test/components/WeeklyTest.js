import React, {PropTypes, Component} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import WeeklyTestLink from './WeeklyTestLink'
import styles from '../Styles';

export default class WeeklyTest extends Component {
  static propTypes = {
    test: PropTypes.object.isRequired
  };

  render() {
    return (
      <TouchableOpacity onPress={this.props.action} style={[styles.weeklyTestItemWt]}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 1, height: 320, flexDirection: 'column', padding: 20}}>
            <Text style={styles.textStyleWt}>
              {this.props.test.title}
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <WeeklyTestLink test={this.props.test} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
