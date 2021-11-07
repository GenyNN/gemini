import React, {PropTypes} from "react";
import {View, TextInput} from "react-native";

export default class Input extends React.Component {
  render() {
    return (
      <View style={this.props.viewStyle}>
        <TextInput
          style={this.props.inputStyle}
          placeholder={this.props.placeholder}
          placeholderTextColor={'#ffffff'}
          onChangeText={this.props.onChange}
          onFocus={this.props.onFocus}
          defaultValue={this.props.value}
        />
      </View>
    )
  }
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  viewStyle: PropTypes.any,
  inputStyle: PropTypes.any
}