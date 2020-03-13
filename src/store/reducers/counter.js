import * as Actions from '../actions/actionTypes'
import {updateObject} from '../Util'

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case Actions.INCREMENT:
      return updateObject(state, {counter: state.counter + 1});
    case Actions.DECREMENT:
      return updateObject(state, {counter: state.counter - 1});
    case Actions.ADD:
      return updateObject(state, {counter: state.counter + action.value});
    case Actions.SUBTRACT:
      return updateObject(state, {counter: state.counter - action.value});
  }

  return state;
}

export default reducer;
