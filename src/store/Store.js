import { combineReducers } from "redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer, NeedyReducer,toastReducer } from "./reducers";


export const Store = createStore(
    combineReducers({
        auth:authReducer,
        needy:NeedyReducer,
    }),
    {},
    applyMiddleware(thunk)
);