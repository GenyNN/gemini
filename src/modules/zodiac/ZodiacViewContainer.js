import {connect} from "react-redux";
import ZodiacView from "./ZodiacView";
import {popRoute, navigationCompleted} from "../navigation/NavigationState";

export default connect(
  state => ({
    zodiac: state.zodiac.zodiac,
    gender: state.zodiac.gender
  }),
  dispatch => ({
    popRoute() {
      dispatch(popRoute())
    },
    pushRoute(index) {
      dispatch(pushRoute(index));
    }
  })
)(ZodiacView);
