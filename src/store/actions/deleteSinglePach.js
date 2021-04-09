import * as actionTypes from './actionTypes';


export default function deleteSinglePach(id) {
    return (dispatch)=>{ 
        dispatch({ type: actionTypes.DELETE_SINGLPACH_REQUEST });
        
        fetch(`http://localhost:3001/task/${id}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(data => {
            if (data.err)
                throw data.err
            dispatch({
                type:actionTypes.DELETE_SINGLPACH_SUCCESS,
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

