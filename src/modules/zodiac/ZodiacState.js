const CHOOSE_ZODIAC = 'Zodiac/CHOOSE_ZODIAC';
const CHOOSE_GENDER = 'Zodiac/CHOOSE_GENDER';

const initialState = {
  gender: '',
  zodiac: 'A',
}

export function changeZodiac(value) {
  return {
    type: CHOOSE_ZODIAC,
    value
  };
}

export function changeGender(value) {
  return {
    type: CHOOSE_GENDER,
    value
  };
}

export default function ZodiacStateReducer(state = initialState, action = {}) {
    switch (action.type) {
      case CHOOSE_ZODIAC: {
        const stateZodiac = state.zodiac
        const actionZodiac = action.value
        console.log('asdf', stateZodiac, actionZodiac)
        if (stateZodiac !== actionZodiac) {
          return {...state, zodiac: actionZodiac}
        }
        return state;
      }
      case CHOOSE_GENDER: {
        const stateGender = state.gender
        const actionGender = action.value

        if (stateGender !== actionGender) {
          return {...state, gender: actionGender}
        }
        return state;
      }
      default:
        return state;
    }
}
