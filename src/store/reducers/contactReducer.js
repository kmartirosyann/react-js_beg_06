import * as actionTypes from '../actions/actionContactTypes';

const inishelstate = {
    name: '',
    email: '',
    message: '',
    loading: false,
    error:new Map()
}

const contactReducer = (state = inishelstate, action) => {
    const actionReducer = {
    }
    if (action.type === actionTypes[action.type]) {
        return actionReducer[action.type]()
    } else {
        return state
    }
}

export default contactReducer