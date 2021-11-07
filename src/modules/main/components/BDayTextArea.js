import React, {PropTypes} from "react";
import { StyleSheet,
         View } from "react-native";
import TextArea from '../../../components/TextArea'
import EStyleSheet from 'react-native-extended-stylesheet';
import Fonts from '../../../utils/fonts';

const styles = EStyleSheet.create({
  textStyle: {
    color: '#ffffff',
    fontSize: '1.2rem'
  },
  viewYear: {
    width: '22%',
    height: '5%',
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff'
  },
  viewMonth: {
    width: '39%',
    height: '5%',
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff'
  },
  viewDay: {
    width: '18%',
    height: '5%',
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff'
  },
  mainView: {
    flex: 1,
    marginTop: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  }
})

export default class BDayTextArea extends React.Component {
  render() {
    const year = this.props.bDay.getDate()
    const month = this.props.bDay.toLocaleString('en-us', { month: "long" })
    const day = this.props.bDay.getFullYear()
    return (
      <View style={styles.mainView}>
        <TextArea
          mainStyle={styles.viewYear}
          textStyle={[styles.textStyle, Fonts[100]]}
          text={day}
        />
        <TextArea
          mainStyle={styles.viewMonth}
          textStyle={[styles.textStyle, Fonts[100]]}
          text={month}
        />
        <TextArea
          mainStyle={styles.viewDay}
          textStyle={[styles.textStyle, Fonts[100]]}
          text={year}
        />
      </View>
    )
  }
}
