import React from "react";


export const GET_DATA = "GET_DATA";
export const DATA_ID = "DATA_ID";
export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const EVENT_MODAL = "EVENT_MODAL";
export const CHANG_ITEM = "CHANG_ITEM"
export const PUT_DATA = "PUT_DATA";
export const PUT_DATA_ITEM = "PUT_DATA_ITEM";
export const DELETE_DATA_ITEM = "DELETE_DATA_ITEM";

const API_HOST = process.env.REACT_APP_API_HOST;

const initialState = {
  data: [],
  id:'',
  isLoader:false,
 show:false,
 modal:false
};

const reducer = (state, action) => {
  const actions = {
    [DATA_ID]: () => ({ ...state,
      isLoader:true,
      id:action.payload  }),
    [GET_DATA]: () => ({ 
      ...state,
      data:action.payload,
      isLoader:false,
    }),
    [CHANG_ITEM]:()=>({
      ...state,
      data:action.payload
    }),
    [SHOW_MODAL]:()=>({
      ...state,
      show:true
    }),
    [CLOSE_MODAL]:()=>({
      ...state,
      show:false
    }),
    [EVENT_MODAL]:()=>({
      ...state,
      modal:action.payload
    }),
    [PUT_DATA]:()=>({
      ...state,
      data:action.payload,
      show:false,
      modal:false
    }),
    [PUT_DATA_ITEM]:()=>({
      ...state,
      data:action.payload,
      show:false,
      modal:false
    }),
    [DELETE_DATA_ITEM]:()=>({
      ...state,
      data:action.payload,
      modal:false
    })
   }
  return actions[action.type]();
};

export const MovieContext = React.createContext();

export const MovieProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const {id } = state
  React.useEffect(()=>{
    fetch(`${API_HOST}/task/${id}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                dispatch({ type: GET_DATA,  payload: data })
            }
            )
            .catch(err => console.log("get reqvest is error", err))
  },[id])

 
 
  return (
    <MovieContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};