import {connect} from "react-redux";
import FeaturesView from "./FeaturesView";
import {pushRoute, popRoute, navigationCompleted} from "../navigation/NavigationState";

export default connect(
    state => ({
        name: '',
        birthDate: {}
    }),
    dispatch => ({
        popRoute() {
            dispatch(popRoute())
        },
        pushRoute(index) {
            dispatch(pushRoute(index));
        }
    })
)(FeaturesView);
