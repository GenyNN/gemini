import React, {PropTypes} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class TabBarButton extends React.Component {

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.action}
        style={[styles.button, styles.selected]}
      >
        <Text style={[styles.textStyle, this.props.style]}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
};

TabBarButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  selected: {
    backgroundColor: '#600a88'
  },
  textStyle: {
    color: 'white',
  }
});
