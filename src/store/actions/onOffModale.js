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
