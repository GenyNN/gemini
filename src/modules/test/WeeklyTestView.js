import React, {PropTypes, Component} from "react";
import {TouchableOpacity, Image, Text, View, ListView} from "react-native";
import WeeklyTest from "./components/WeeklyTest";
import TopNavBar from "../../components/TopNavBar";
import tests from "./components/WeeklyTestQuestionsData";
import TestRow from './components/TestRow'
import { BACKGROUND } from '../../../images'
import styles from './Styles';

export default class WeeklyTestView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(tests)
    };
  }

  renderRow = (rowData) => {
    return (
      <TestRow
        {...this.props}
        rowData={rowData}
      />
    )
  };

  render() {
    return (
      <Image
        source={BACKGROUND}
        style={styles.backgroundImageWtv}
      >
        <View style={styles.backdropViewVtw}>
          <TopNavBar/>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </View>
      </Image>
    );
  }
}
