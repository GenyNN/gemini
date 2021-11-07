const START_TEST = 'Test/START_TEST'
const PASS_TEST = 'Test/PASS_TEST'
const UPDATE_QUEST = 'Test/UPDATE_QUEST'

// Initial state
const initialState = {
    testInProgress: null,
    passedTests: [],
    currentQuestion: 0
};

export function startTest(value) {
  return {
    type: START_TEST,
    value
  };
}

export function passTest(value) {
  return {
    type: PASS_TEST,
    value
  };
}

export function updateQuestion(value) {
  return {
    type: UPDATE_QUEST,
    value
  };
}

// Reducer
export default function WeeklyTestStateReducer(state = initialState, action = {}) {
    switch (action.type) {
        case START_TEST: {
          const stateTestInProgress = state.testInProgress
          const actionTestToStart = action.value
          if (stateTestInProgress !== actionTestToStart) {
            return {...state, testInProgress: actionTestToStart}
          }
          return state;
        }
        case PASS_TEST: {
          const passedTests = state.passedTests
          const testToPass = action.value
          if (passedTests.indexOf(testToPass) === 0) {
            return {...state, passedTests: [...passedTests, testToPass]}
          }
          return state;
        }
        case UPDATE_QUEST: {
          const currentQuestion = state.currentQuestion
          const nextQuestion = action.value
          if (currentQuestion !== nextQuestion) {
            return {...state, currentQuestion: nextQuestion}
          }
          return state;
        }
        default:
            return state;
    }
}
