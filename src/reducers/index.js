import listReducer from "./list";
import {combineReducers} from 'redux'

// The key of this object will be the name of the store
const rootReducers = combineReducers({ list: listReducer });

export default rootReducers;