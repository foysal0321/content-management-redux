import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import productsReducer from "./productsReducer";

export const rootReducer= combineReducers({
    products: productsReducer,
    filter : filterReducer
})