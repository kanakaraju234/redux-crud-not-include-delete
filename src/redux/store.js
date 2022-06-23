import RootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;