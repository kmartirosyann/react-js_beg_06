import * as actionTypes from './actionTypes';


export const isOpenMoalEdit =()=> {
    return (dispatch)=>{ dispatch({
       type: actionTypes.OPEN_MODAL_EDIT,
        payload: true
    })
}
}

export const remuveMoalComponent =()=> {
    return (dispatch)=>{ dispatch({
       type: actionTypes.OPEN_MODAL_COMPONENT,
        payload: true
    })
}
}

export const clossMoalComponent =()=> {
    return (dispatch)=>{ dispatch({
       type: actionTypes.CLOSS_MODAL_COMPONENT,
    })
}
}