import { LOAD, SAVE } from 'redux-storage';
const CHANGE_VAL = 'Main/CHANGE_VAL';
const CHANGE_BDAY = 'Main/CHANGE_BDAY';
const CHANGE_MODE = 'Main/CHANGE_MODE';

// Initial state
const initialState = {
    name: '',
    datePickerMode: 'hidden',
    bDay: new Date(),
    storeFetched: false
}

export function changeName(value) {
  return {
    type: CHANGE_VAL,
    value
  };
}

export function changeBDay(value) {
  return {
    type: CHANGE_BDAY,
    value
  };
}

export function toggleDatePicker(value) {
  return {
    type: CHANGE_MODE,
    value
  }
}

// Reducer
export default function MainStateReducer(state = initialState, action = {}) {
    switch (action.type) {
      case LOAD: {
        return { ...state, storeFetched: true }
      }
      case CHANGE_VAL: {
        const stateName = state.name
        const actionName = action.value
        if (stateName !== actionName) {
          return {...state, name: actionName}
        }
        return state;
      }
      case CHANGE_BDAY: {
        const statebDay = state.bDay
        const actionbDay = action.value
        if (statebDay !== actionbDay) {
          return {...state, bDay: actionbDay}
        }
        return state;
      }
      case CHANGE_MODE: {
        return {...state, datePickerMode: action.value}
      }

      default:
        return state;
    }
}
