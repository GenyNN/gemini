import {combineReducers} from 'redux-loop';
import NavigationStateReducer from '../modules/navigation/NavigationState';
import MainStateReducer from '../modules/main/MainState';
import FeaturesStateReducer from '../modules/features/FeaturesState';
import ZodiacStateReducer from '../modules/zodiac/ZodiacState';
import WeeklyTestStateReducer from '../modules/test/WeeklyTestState';
import SessionStateReducer, {RESET_STATE} from '../modules/session/SessionState';
import ContentfulReducer from '../modules/contentful/ContentfulState';

import * as storage from 'redux-storage';

// initial state, accessor and mutator for supporting root-level
// immutable data with redux-loop reducer combinator

const namespacedReducer = storage.reducer(combineReducers({
    // Main config page
    main: MainStateReducer,

    // @NOTE: By convention, the navigation state must live in a subtree called
    //`navigationState`
    navigationState: NavigationStateReducer,
    features: FeaturesStateReducer,

    session: SessionStateReducer,
    zodiac: ZodiacStateReducer,
    weekly: WeeklyTestStateReducer,
    contentful:ContentfulReducer
  }
))

export default function mainReducer(state, action) {
  if (action.type === RESET_STATE) {
    return namespacedReducer(action.payload, action);
  }

  return namespacedReducer(state || void 0, action);
}
