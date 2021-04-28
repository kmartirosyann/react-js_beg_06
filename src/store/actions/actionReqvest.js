import * as actionTypes from './actionReqvestTypes';

const API_HOST = process.env.REACT_APP_API_HOST;

export const updateSinglPach = (title, description, date, id ,) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_TODOITEM_REQUEST });
    return fetch(`${API_HOST}/task/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description,date })
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

export const reqvestChangeStatus = ( id,status ) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_TODOITEM_REQUEST });
    return fetch(`${API_HOST}/task/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
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

    fetch(`${API_HOST}/task/${id}`, {
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
    fetch(`${API_HOST}/task`, {
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
    return fetch(`${API_HOST}/task/${id}`, {
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
    return fetch(`${API_HOST}/task`, {
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


export const addTodoItem = (title, description,date) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.ADD_TODOITEM_REQUEST });
    return fetch(`${API_HOST}/task`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description ,date})
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


export const sortSubmit = (sortData) => {
  let query="?";
    for(let key in sortData){
      query +=`${key}=${sortData[key]}&` 
    }
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_TODO_SORT_REQUEST });
    return fetch(`${API_HOST}/task${query}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res =>
        dispatch({ type: actionTypes.GET_TODO_SORT_SUCCESS, payload: res })
      )
      .catch(error => {
        dispatch({ type: actionTypes.GET_TODO_SORT_FAILURE, error: error.toString() })
      })
  }
}

export const changeSortData=(data)=>{
  return (dispatch)=>{
      dispatch({
          type:actionTypes.CHANGE_SORT_DATA,
           payload:data
      })
  }
}

export const resetData=()=>{
  return (dispatch)=>{
      dispatch({
          type:actionTypes.REMUVE_STATE,
      })
      getTodoItems()
  }
}
