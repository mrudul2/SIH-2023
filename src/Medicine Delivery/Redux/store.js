import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { authReducer } from "./Auth/reducer";
import {prodReducer} from "./productsReducer/prodReducer"
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  auth: authReducer,
  prodReducer
  // cart:cartReducer
});
export const store = createStore(rootReducer,applyMiddleware(thunk));
