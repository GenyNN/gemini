import {connect} from "react-redux";
import NumerologyView from "./NumerologyView";
import {popRoute, navigationCompleted} from "../navigation/NavigationState";

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
)(NumerologyView);
