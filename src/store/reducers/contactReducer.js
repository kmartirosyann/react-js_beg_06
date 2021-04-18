
import * as actionTypes from '../actions/actionContactTypes';

const inishelstate = {
         name: '',
        email: '',
        message: '',
        loading: false,
        isValit:false,
        isLoader:false,
        validet:{},
        successContact:false,
        error:false,
        errors:{
            name:'',
            email:'',
            comment:'',
        }
}

const contactReducer = (state = inishelstate, action) => {
    const actionReducer = {
        [actionTypes.CHANGE_CONTACT_FORM]:()=>{
            let e = action.peyload
           let {name,value} = e;
            return { 
                ...state,
                [name]: value ,   
        }

        },
        [actionTypes.ONBLUR_ERRORS]:()=>{
            let e = action.peyload
            let {name} = e 
            return { 
                ...state,
                errors: {[name]:state.validet.name},
                validet:action.valid(state),
                errors:state.validet.errors,
             isValit:state.validet.isValid, 
        } 
        },
        [actionTypes.FORM_VALID_DATA]:()=>{
            let e = action.peyload
            let {name} = e 
             return{ 
                 ...state,
               errors: {[name]:state.validet.name},
              validet:action.valid(state),
           isValit:state.validet.isValid,}
        },
        [actionTypes.CONTACT_FORM_REQVEST]:()=>({
                   ...state,
                   isLoader:true,
        }),
        [actionTypes.CONTACT_FORM_SUCCESS]:()=>({
                  ...state,
                  isLoader:false,
                  state: inishelstate,
                  successContact:"your request was successful"
        }),
        [actionTypes.CONTACT_FORM_FAILURE]:()=>({
            ...state,
            isLoader:false,
            error:action.error
        })   
    }
    if (action.type === actionTypes[action.type]) {
        return actionReducer[action.type]()
    } else {
        return state
    }
}

export default contactReducer