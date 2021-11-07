import React, {PropTypes} from "react";
import { connect } from "react-redux";
import { changeBDay } from "../modules/main/MainState";
import { StyleSheet,
         View,
         Text,
         TouchableWithoutFeedback,
         TouchableOpacity,
         DatePickerIOS } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

class DatePicker extends React.Component {
  render() {
    return (
      <View style={ styles.datePicker }>
        <DatePickerIOS
          date={this.props.bDay}
          mode="date"
          onDateChange={this.props.changeBDay}
        />
      </View>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    changeBDay(value) {
      dispatch(changeBDay(value))
    }
  })
)(DatePicker);

DatePicker.propTypes = {
  bDay: React.PropTypes.instanceOf(Date).isRequired
}

const styles = EStyleSheet.create({
  datePicker: {
    position: 'absolute',
    bottom: 0,
    height: '35%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)',    
  }
})