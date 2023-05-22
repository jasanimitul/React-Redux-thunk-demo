import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { usersReducer } from './reducers/usersReducer'

const rootReducer = combineReducers({
  userList: usersReducer,
});

const initialSate = {}

const middleware = [thunk]

const store = createStore(rootReducer, initialSate, composeWithDevTools(applyMiddleware(...middleware)))

export default store;
