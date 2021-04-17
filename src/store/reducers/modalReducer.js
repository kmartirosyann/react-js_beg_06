
import * as actionTypes from '../actions/actionModalTypes';

const inishelstate = {
    isLoader: false,
    modal: false,
    show: false,
    active: false,
    errMesage: '',
    _id: '',
    selectId: [],
    
}

const modalRducer = (state = inishelstate, action) => {
    const actionReducer = {
        [actionTypes.OPEN_MODA_CLOSSL_EDIT]: () => ({
            ...state,
            _id: action.payload,
            show: !state.show,
            isLoader: false,
        }),
        [actionTypes.OPEN_SHOW_MODAL]: () => ({
            ...state,
            _id: action.payloadId,
            modal: true,
            active: false,
            isLoader: false,
        }),
        [actionTypes.CLOSS_SHOW_MODAL]: () => ({
            ...state,
            modal: false,
            selectId: [],
            _id:'',
            active: false
        }),
        [actionTypes.ADD_ALL_ITEMS]: () => {
            let arr1 = state.selectId.includes(action.payloadId)
            let arr = state.selectId
            let buttonActiv;
            if (!arr1) {
                arr = [...state.selectId, action.payloadId]
            } else arr = state.selectId.filter(item => item !== action.payloadId)
            if (!!arr.length) {
                buttonActiv = true
            } else buttonActiv = false
            return {
                ...state,
                selectId: arr,
                active: buttonActiv
            }

        },
        [actionTypes.CENSEL_DELETE]: () => ({
            ...state,
            selectId: [],
            active: false
        }),
        [actionTypes.SELEKT_ALL_ID]:()=>({
            ...state,
            selectId:action.payload,
            active:true
        })


    };
    if (action.type === actionTypes[action.type]) {
        return actionReducer[action.type]()
    } else {
        return state
    }
}

export default modalRducer