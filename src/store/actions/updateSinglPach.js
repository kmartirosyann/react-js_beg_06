import * as actionTypes from './actionTypes';


export default function updateSinglPach(title, description, id) {
  return (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_SINGLPACH_REQUEST });
    return   fetch(`http://localhost:3001/task/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
    })
    .then(res => res.json())
    .then(res => {
        dispatch({
          type: actionTypes.UPDATE_SINGLPACH_SUCCESS,
          payload: res,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.UPDATE_SINGLPACH_FAILURE,
          error: error.toString(),
        });
      });
  };
}