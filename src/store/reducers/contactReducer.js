
import * as actionTypes from '../actions/actionContactTypes';

const inishelstate = {
    name: '',
    email: '',
    message: '',
    loading: false,
    isLoader: false,
    successContact: '',
    contactError: '',
}

const contactReducer = (state = inishelstate, action) => {
    const actionReducer = {
        [actionTypes.CHANGE_CONTACT_FORM]: () => {
            let e = action.peyload
            let { name, value } = e;
            return {
                ...state,
                [name]: value,
            }
        },     
        [actionTypes.CONTACT_FORM_REQVEST]: () => ({
            ...state,
            isLoader: true,
        }),
        [actionTypes.CONTACT_FORM_SUCCESS]: () => ({
            ...state,
            successContact: "your request was successful",
            isLoader: false,
            state: inishelstate,

        }),
        [actionTypes.CONTACT_FORM_FAILURE]: () => ({
            ...state,
            isLoader: false,
            contactError: action.error
        })
    }
    if (action.type === actionTypes[action.type]) {
        return actionReducer[action.type]()
    } else {
        return state
    }
}

export default contactReducer