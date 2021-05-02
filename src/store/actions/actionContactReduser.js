import * as actionTypes from './actionContactTypes';
const API_HOST = process.env.REACT_APP_API_HOST;

export const changeContactForm = (data) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CHANGE_CONTACT_FORM,
            peyload: data.target,

        });
    }
}

export const contactSubmit = (name, email, message) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.CONTACT_FORM_REQVEST,
        })
        return fetch(`${API_HOST}/form`, {
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
            .catch(error => dispatch({
                type: actionTypes.CONTACT_FORM_FAILURE,
                error: error.toString(),
            }))


    }
}
