import {connect} from "react-redux";
import FateLineView from "./FateLineView";
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
)(FateLineView);
