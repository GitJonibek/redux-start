import * as Actions from '../actions.js'


const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case Actions.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result}),
      }
    case Actions.DELETE_RESULT:
      const updatedArr = state.results.filter((item) => {return item.id !== action.resultID});
      return {
        ...state,
        results: updatedArr,
      }
  }

  return state;
}

export default reducer;
