// import { combineReducers } from 'redux'
// import common from '../sagaModule/common'

// export default combineReducers({
//   common
// })

// TYPES
export const actionTypes = {
  INCREMENT: 'INCREMENT'
}
// ACTIONS
export function increment() {
  return { type: actionTypes.INCREMENT }
}
// INITSTate
export const exampleInitialState = {
  count: 1
}
// REDUCERS
function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 }
      }

    default:
      return state
  }
}

export default reducer
