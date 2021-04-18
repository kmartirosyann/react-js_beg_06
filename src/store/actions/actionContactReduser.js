import * as actionTypes from './actionContactTypes';
import validate from '../../component/vaidation/validation'

export const changeContactForm = (data) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CHANGE_CONTACT_FORM,
            peyload: data.target,
            
        });
        dispatch({type:actionTypes.FORM_VALID_DATA,
            valid: validate,
            peyload: data.target,
        })
    }
}

export const contactOnBlur = (data) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.ONBLUR_ERRORS,
            peyload: data.target,
            valid: validate
        })
    }
}

export const contactSubmit = ( name, email, message) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CONTACT_FORM_REQVEST,
        })
        return fetch('http://localhost:3001/form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        })
            .then(res => res.json())
            .then(data => dispatch({
                type: actionTypes.CONTACT_FORM_SUCCESS,
                payload: data
            })
            )
            .catch(error =>dispatch({
                type: actionTypes.CONTACT_FORM_FAILURE,
                error: error.toString(),
            }) )


    }
}
