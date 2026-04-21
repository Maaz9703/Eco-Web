import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
// import another reducer
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
    cart: cartReducer,
    // other reducer
});

export const store = createStore(reducers, {}, applyMiddleware(thunk));
