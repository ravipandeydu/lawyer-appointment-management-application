import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import { authReducer } from "./auth/auth.reducer";
import thunk from "redux-thunk";
import { lawyersReducer } from "./lawyers/lawyers.reducer";
import { appointmentsReducer } from "./appointments/appointments.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  lawyers: lawyersReducer,
  appointments: appointmentsReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);

export { store };
