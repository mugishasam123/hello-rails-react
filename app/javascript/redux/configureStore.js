import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import greetingsReducer from './greetingsReducer'


const rootReducer = combineReducers({
    greetingsReducer,
})

const store = createStore(
    rootReducer,applyMiddleware(logger,thunk),
)

export default store;