import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import modalReducer from './reducers/modalReducer';
import globaleReducer from './reducers/globaleReducer';
import contactReducer from './reducers/contactReducer';

const reduser = combineReducers({
    modalReducer,
    globaleReducer,
    contactReducer
})

  

export const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)))



