import {connect} from 'react-redux';
import {pushRoute} from '../navigation/NavigationState';
import {changeName, toggleDatePicker} from '../main/MainState';
import MainView from "./MainView";

export default connect(
  state => ({
    name: state.main.name,
    bDay: state.main.bDay,
    datePickerMode: state.main.datePickerMode,
    storeFetched: state.main.storeFetched
  }),
  dispatch => ({
    pushRoute(index) {
      dispatch(pushRoute(index));
    },
    changeName(value) {
      dispatch(changeName(value));
    },
    toggleDatePicker(value) {
      dispatch(toggleDatePicker(value));
    },
  })
)(MainView);
