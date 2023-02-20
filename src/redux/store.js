import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productsReducer from "./reducer/productsReducer";
import { rootReducer } from "./reducer/rootReducer";
//import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))

    )
