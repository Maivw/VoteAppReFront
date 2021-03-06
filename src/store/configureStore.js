import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authentication from "../reducers/authentication";
import formManagement from "../reducers/formManagement";
import address from "../reducers/address";
import payment from "../reducers/payment";

const persistConfig = {
	key: "root",
	storage,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	authentication,
	formManagement,
	address,
	payment,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = (initialState) => {
	return createStore(
		persistedReducer,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	);
};

export default configureStore;
