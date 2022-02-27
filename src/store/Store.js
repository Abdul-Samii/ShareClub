import { combineReducers } from "redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers";


export const Store = createStore(
    combineReducers({
        auth:authReducer
    }),
    {},
    applyMiddleware(thunk)
);