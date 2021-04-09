
import * as actionTypes from '../actions/actionTypes';

const inishelstate = {
    singlData: {_id:'',title:'',description:''},
    isLoader: false,
    show: false,
    modal: false,
    errMesage:''
}

export const singleRducer =(state = inishelstate, action)=> {
 const  actionReducer = {  
        [actionTypes.GET_SINGLPACH_DATA]:()=>({
            ...state,
            ...state.singlData,
            isLoader:true
        }),
        [actionTypes.GET_SINGLPACH_SUCCESS]:()=>({
            ...state,
            ...state.singlData,
            singlData:action.payload,
            isLoader:false,
        }),
        [actionTypes.GET_SINGLPACH_FAILURE]:()=>({
            ...state,
            ...state.singlData,
            isLoader:false,
            errMesage:action.error
        }),
        [actionTypes.UPDATE_SINGLPACH_REQUEST]:()=>({
            ...state,
            ...state.singlData,
            isLoader:true
        }),
        [actionTypes.UPDATE_SINGLPACH_SUCCESS]:()=>({
            ...state,
            ...state.singlData,
            singlData:action.payload,
            isLoader:false,
            show:false
        }),
        [actionTypes.UPDATE_SINGLPACH_FAILURE]:()=>({
            ...state,
            ...state.singlData,
            isLoader:false,
            show:false,
            errMesage:action.error
        }),
        [actionTypes.OPEN_MODAL_EDIT]:()=>({
            ...state,
            ...state.singlData,
            show:action.payload
        }),
        [actionTypes.OPEN_MODAL_COMPONENT]:()=>({
            ...state,
            ...state.singlData,
            modal:action.payload
        }),
        [actionTypes.CLOSS_MODAL_COMPONENT]:()=>({
            ...state,
            ...state.singlData,
            show:false,
            modal:false
        }),
        [actionTypes.DELETE_SINGLPACH_REQUEST]:()=>({
            ...state,
            ...state.singlData,
            isLoader:true,
        }),
        [actionTypes.DELETE_SINGLPACH_SUCCESS]:()=>({
            ...state,
            ...state.singlData,
            singlData: state.singlData.filter(item=>item._id !==action.payloadId),
            show:false,
            isLoader:false,
        }),
        [actionTypes.DELETE_SINGLPACH_FAILURE]:()=>({
            ...state,
            ...state.singlData,
            show:false,
            errMesage:action.error
        })

    }
    if(action.type===actionTypes[action.type]){
        return actionReducer[action.type]()
    }else{
        return  state
    }
}

