import * as Actions from '../actions.js'


const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case Actions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case Actions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case Actions.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      }
    case Actions.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value,
      }
  }

  return state;
}

export default reducer;
