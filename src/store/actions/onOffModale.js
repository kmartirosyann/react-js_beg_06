import * as actionTypes from './actionModalTypes';


export const isOpenMoalEdit = (id) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.OPEN_MODA_CLOSSL_EDIT,
            payload: id
        })
    }
}


export const MoalComponent = (id) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.OPEN_SHOW_MODAL,
            payloadId: id
        })
    }
}

export const MoalComponentClose = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CLOSS_SHOW_MODAL,
        })
    }
}

export const select = (id) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.ADD_ALL_ITEMS,
            payloadId: id
        })
    }
}

export const censelDelete = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CENSEL_DELETE,
        })
    }
}

export const AllSelectId = (arr) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SELEKT_ALL_ID,
            payload: arr
        })
    }
}

export const clearItemId =()=>{
    return (dispatch) => {
        dispatch({
            type: actionTypes.CLEAR_ID,
        })
    }
}

export const openShowSotrModal=()=>{
    return (dispatch)=>{
        dispatch({
            type:actionTypes.OPEN_SORT_MODAL
        })
    }
}
export const closeShowSotrModal=()=>{
    return (dispatch)=>{
        dispatch({
            type:actionTypes.CLOSE_SORT_MODAL
        })
    }
}
