import { combineReducers } from "redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer, DonorReducer, NeedyReducer, UpdatesReducer } from "./reducers";


export const Store = createStore(
    combineReducers({
        auth:authReducer,
        needy:NeedyReducer,
        donor:DonorReducer,
        update:UpdatesReducer
    }),
    {},
    applyMiddleware(thunk)
);