import CounterReducer from "./counter";
import IsLoggedReducer  from "./isLogged";
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    counter : CounterReducer,
    isLogged: IsLoggedReducer
});