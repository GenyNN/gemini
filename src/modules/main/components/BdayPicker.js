import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {toggleDatePicker} from "../MainState";
import { StyleSheet,
         View,
         TouchableWithoutFeedback } from "react-native";
import TextArea from '../../../components/TextArea'
import BdayRow from './BdayRow'
import DatePicker from '../../../components/DatePicker'
import EStyleSheet from 'react-native-extended-stylesheet';

class BdayPicker extends React.Component {
  render() {
    let bDay = new Date(this.props.bDay)
    return (
      <View style={styles.container}>
        <BdayRow
          bDay={bDay}
          onPress={this.toggleDatePicker}
        />
      </View>
    )
  }

  toggleDatePicker = () => {
    const datePickerMode = this.props.datePickerMode == 'hidden' ? 'visible' : 'hidden';
    this.props.toggleDatePicker(datePickerMode)
  }
}

const styles = EStyleSheet.create({
  container: {
    height: '10%'
  }
})

export default connect(
    state => ({
      datePickerMode: state.main.datePickerMode
    }),
    dispatch => ({
        toggleDatePicker(value) {
            dispatch(toggleDatePicker(value))
        }
    })
)(BdayPicker);