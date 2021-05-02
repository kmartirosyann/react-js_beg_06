import * as actionTypes from '../actions/actionReqvestTypes';

const inishelstate = {
    inputArray: [],
    editData: { title: '', description: '', _id: '', date: new Date() },
    isLoader: false,
    show: false,
    id: '',
    errMessage: '',
    singlArray: [],
    successMessage: '',
    sortData: {}
}

const globaleReducer = (state = inishelstate, action) => {
    const actionReducer = {
        [actionTypes.GET_SINGLPACH_DATA]: () => ({
            ...state,
            ...state.inputArray,
            successMessage: '',
            isLoader: true,
        }),
        [actionTypes.GET_SINGLPACH_SUCCESS]: () => ({
            ...state,
            singlArray: action.payload,
            isLoader: false,
            show: false
        }),
        [actionTypes.GET_SINGLPACH_FAILURE]: () => ({
            ...state,
            ...state.inputArray,
            isLoader: false,
            errMessage: action.error
        }),

        [actionTypes.GET_TODO_ITEMS_REQUEST]: () => ({
            ...state,
            ...state.inputArray,
            successMessage: '',
            isLoader: true,
        }),
        [actionTypes.GET_TODO_ITEMS_SUCCESS]: () => ({
            ...state,
            inputArray: action.payload,
            isLoader: false,
            show: false
        }),
        [actionTypes.GET_TODO_ITEMS_FAILURE]: () => ({
            ...state,
            ...state.inputArray,
            isLoader: false,
            errMessage: action.error
        }),
        [actionTypes.ADD_TODOITEM_REQUEST]: () => ({
            ...state,
            ...state.inputArray,
            successMessage: '',
            isLoader: true,

        }),
        [actionTypes.ADD_TODOITEM_SUCCESS]: () => {
            let arr = [...state.inputArray, action.payload]
            return {
                ...state,
                inputArray: arr,
                successMessage: "your request was successful",
                isLoader: false,
            }

        },
        [actionTypes.ADD_TODOITEM_FAILURE]: () => ({
            ...state,
            ...state.inputArray,
            isLoader: false,
            errMessage: action.error

        }),
        [actionTypes.UPDATE_TODOITEM_REQUEST]: () => ({
            ...state,
            ...state.inputArray,
            successMessage: '',
            isLoader: true,
        }),

        [actionTypes.UPDATE_TODOITEM_SUCCESS]: () => {
            let arr = state.inputArray.map(item => item._id === action.payloadId ? item = action.payload : item)
            return {
                ...state,
                inputArray: arr,
                singlArray: action.payload,
                successMessage: "your request was successful",
                isLoader: false,
            }
        },
        [actionTypes.UPDATE_TODOITEM_FAILURE]: () => ({
            ...state,
            ...state.inputArray,
            errMessage: action.error,
            isLoader: false,
        }),

        [actionTypes.DELETE_SINGLPACH_REQUEST]: () => ({
            ...state,
            isLoader: true,
            successMessage: '',
        }),
        [actionTypes.DELETE_SINGLPACH_SUCCESS]: () => {
            let arr = state.inputArray.filter(item => item._id !== action.payloadId);
            return {
                ...state,
                inputArray: arr,
                singlArray: [],
                successMessage: "your request was successful",
                _id: '',
                isLoader: false,
            }
        },
        [actionTypes.DELETE_SINGLPACH_FAILURE]: () => ({
            ...state,
            ...state.inputArray,
            errMessage: action.error,
            isLoader: false
        }),
        [actionTypes.DELETE_ALL_TODO_REQUEST]: () => ({
            ...state,
            ...state.inputArray,
            isLoader: true,
            successMessage: '',
        }),
        [actionTypes.DELETE_ALL_TODO_SUCCESS]: () => {
            let array = state.inputArray.filter(item => !action.payload.includes(item._id))
            return {
                ...state,
                inputArray: array,
                successMessage: "your request was successful",
                isLoader: false
            }
        },
        [actionTypes.DELETE_ALL_TODO_FAILURE]: () => ({
            ...state,
            ...state.inputArray,
            isLoader: false,
            errMessage: action.error
        }),
        [actionTypes.GET_TODO_SORT_REQUEST]: () => ({
            ...state,
            ...state.inputArray,
            successMessage: '',
            isLoader: true,
        }),
        [actionTypes.GET_TODO_SORT_SUCCESS]: () => ({
            ...state,
            inputArray: action.payload,
            isLoader: false,
            show: false
        }),
        [actionTypes.GET_TODO_SORT_FAILURE]: () => ({
            ...state,
            ...state.inputArray,
            isLoader: false,
            errMessage: action.error
        }),
        [actionTypes.CHANGE_SORT_DATA]: () => {
            const { name, value } = action.payload
            let arr = {...state.sortData,[name]: value}
            return {
                ...state,
                sortData:arr
            }
        },
        [actionTypes.REMUVE_STATE]:()=>({
            ...inishelstate
        })


    }
    if (action.type === actionTypes[action.type]) {
        return actionReducer[action.type]()
    } else {
        return state
    }
}

export default globaleReducer