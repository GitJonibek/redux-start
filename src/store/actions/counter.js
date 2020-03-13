import * as Actions from './actionTypes'

export const increment = () => {
  return {
    type: Actions.INCREMENT
  };
}
export const decrement = () => {
  return {
    type: Actions.DECREMENT
  };
}
export const add = (value) => {
  return {
    type: Actions.ADD,
    value: value,
  };
}
export const subtract = (value) => {
  return {
    type: Actions.SUBTRACT,
    value: value,
  };
}
