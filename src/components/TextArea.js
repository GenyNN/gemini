import React, {PropTypes} from "react";
import { View, Text } from "react-native";

export default class TextArea extends React.Component {
  render() {
    return (
      <View style={this.props.mainStyle}>
        <Text style={this.props.textStyle}>{this.props.text}</Text>
      </View>
    )
  }
}

TextArea.propTypes = {
  mainStyle: PropTypes.any,
  textStyle: PropTypes.any
}