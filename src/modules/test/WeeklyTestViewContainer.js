import {connect} from "react-redux";
import WeeklyTestView from "./WeeklyTestView";
import {popRoute, pushRoute} from "../navigation/NavigationState";

export default connect(
    state => ({}),
    dispatch => ({
        popRoute() {
            dispatch(popRoute())
        },
        pushRoute(index) {
            dispatch(pushRoute(index));
        }
    })
)(WeeklyTestView);
