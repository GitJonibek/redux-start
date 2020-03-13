import * as Actions from './actionTypes'

const saveResult = res => {
  
  return {
    type: Actions.STORE_RESULT,
    result: res,
  };
}

export const store_result = (result) => {
  return (dispatch, getState) => {
    setTimeout( () => {
      console.log(getState().ctr.counter);
      dispatch(saveResult(result));
    }, 2000);
  }
}

export const delete_result = (resultID, result) => {
  return {
    type: Actions.DELETE_RESULT,
    resultID: resultID,
    result: result,
  };
}
