import React, {PropTypes} from "react";
import { StyleSheet,
         View,
         TouchableWithoutFeedback } from "react-native";
import TextArea from '../../../components/TextArea'
import BDayTextArea from './BDayTextArea'
import EStyleSheet from 'react-native-extended-stylesheet';

export default class BdayRow extends React.Component {
  render() {
    return (
      <View
        style={styles.container} 
        onStartShouldSetResponder={evt => true}
        onResponderRelease={this.props.onPress}
      >
        <BDayTextArea bDay={this.props.bDay} />
      </View>
    )
  }
}

const styles = EStyleSheet.create({
  container: {
    height: '5%'
  }
})