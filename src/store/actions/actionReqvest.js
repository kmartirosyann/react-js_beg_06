import * as actionTypes from './actionReqvestTypes';

export const updateSinglPach = (title, description, id) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_TODOITEM_REQUEST });
    return fetch(`http://localhost:3001/task/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    })
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: actionTypes.UPDATE_TODOITEM_SUCCESS,
          payload: res,
          payloadId: id
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.UPDATE_TODOITEM_FAILURE,
          error: error.toString(),
        });
      });
  };
}



export const deleteSinglePach = (id) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.DELETE_SINGLPACH_REQUEST });

    fetch(`http://localhost:3001/task/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if (data.err)
          throw data.err
        dispatch({
          type: actionTypes.DELETE_SINGLPACH_SUCCESS,
          payloadId: id,
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.DELETE_SINGLPACH_FAILURE,
          error: error.toString(),
        });
      })
  }
}

export const deleteAllTodo = (arr) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.DELETE_ALL_TODO_REQUEST });
    fetch(`http://localhost:3001/task`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tasks: arr })
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: actionTypes.DELETE_ALL_TODO_SUCCESS,
          payload:arr
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.DELETE_ALL_TODO_FAILURE,
          error: error.toString(),
        });
      })
  }
}



export const getSinglPach = (id) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_SINGLPACH_DATA });
    return fetch(`http://localhost:3001/task/${id}`, {
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


export const getTodoItems = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_TODO_ITEMS_REQUEST });
    return fetch('http://localhost:3001/task', {
      method: "GET"
    })
      .then(res => res.json())
      .then(data =>
        dispatch({ type: actionTypes.GET_TODO_ITEMS_SUCCESS, payload: data })
      )
      .catch(error => {
        dispatch({ type: actionTypes.GET_TODO_ITEMS_FAILURE, error: error.toString() })
      })
  }
}


export const addTodoItem = (title, description) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.ADD_TODOITEM_REQUEST });
    return fetch('http://localhost:3001/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    })
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: actionTypes.ADD_TODOITEM_SUCCESS,
          payload: res,
        });
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.ADD_TODOITEM_FAILURE,
          error: error.toString(),
        });
      });
  };
}