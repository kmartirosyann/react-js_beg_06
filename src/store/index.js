import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {singleRducer} from './reducers/singleReducer';



  


export const store = createStore(singleRducer, composeWithDevTools(applyMiddleware(thunk)));



