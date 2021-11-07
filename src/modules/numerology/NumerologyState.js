import {Map} from "immutable";

// Initial state
const initialState = Map({
    name: '',
    birthDate: {}
});

// Reducer
export default function NumerologyStateReducer(state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}
