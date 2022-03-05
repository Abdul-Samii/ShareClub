import { combineReducers } from "redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer, NeedyReducer, UpdatesReducer } from "./reducers";


export const Store = createStore(
    combineReducers({
        auth:authReducer,
        needy:NeedyReducer,
        update:UpdatesReducer
    }),
    {},
    applyMiddleware(thunk)
);