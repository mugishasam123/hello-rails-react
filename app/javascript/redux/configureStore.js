import {legacy_createStore as combineReducers,createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import greetingsReducer from './greetingsReducer'


const combinedReducers=combineReducers({
    greetingsReducer,
}
    
)

const store= createStore(
    combinedReducers,applyMiddleware(logger,thunk)
)

export default store;