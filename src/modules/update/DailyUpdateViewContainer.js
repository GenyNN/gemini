import {connect} from "react-redux";
import _ from 'lodash'
import DailyUpdateView from "./DailyUpdateView";
import {popRoute, navigationCompleted} from "../navigation/NavigationState";

export default connect(
    state => ({runes: _.map(state.contentful.runes.items, i=>i.fields)}),
    dispatch => ({
        popRoute() {
            dispatch(popRoute())
        },
        pushRoute(index) {
            dispatch(pushRoute(index));
        }
    })
)
(DailyUpdateView);
