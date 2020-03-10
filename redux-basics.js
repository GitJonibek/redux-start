const redux = require('redux');
const createStore = redux.createStore;

const initialState ={
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'AD