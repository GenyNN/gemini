import React, {PropTypes, Component} from "react";
import {StyleSheet, View, Image} from "react-native";
import WeeklyTest from './WeeklyTest'
import styles from '../Styles';
export default class TestRow extends Component {
  render() {
    const route = {
      key: this.props.rowData.key,
      title: this.props.rowData.title
    }
    return (
      <View>
        <WeeklyTest
          key={this.props.rowData.title}
          test={this.props.rowData}
          action={this.props.pushRoute.bind(this, route)}
        />
        <View style={styles.borderStyleTr}/>
      </View>
    )
  }
}


