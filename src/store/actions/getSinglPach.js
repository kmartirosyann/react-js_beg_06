import * as actionTypes from './actionTypes';

export default  function getSinglPach (id) {
    return (dispatch) => {
      dispatch({ type: actionTypes.GET_SINGLPACH_DATA });
     return  fetch(`http://localhost:3001/task/${id}`, {
        method: "GET"
    })
        .then(res => res.json())
        .then((res) => {
         dispatch({ type: actionTypes.GET_SINGLPACH_SUCCESS, payload: res });
        })
        .catch((error) => {
          dispatch({ type: actionTypes.GET_SINGLPACH_FAILURE, error: error.toString() });
        });
    };
  }