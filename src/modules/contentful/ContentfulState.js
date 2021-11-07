const ADD_RUNES = 'Contentful/ADD_RUNES';

export function actionAddRunes(runes) {
    return {
        type: ADD_RUNES,
        runes
    }
}


const initialState = {
    runes: undefined
};

export default function ContentfulReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_RUNES: {
            return {...state, runes: action.runes}
        }

        default:
            return state;
    }
}
