import casesReducer from "../reducers/cases";
import { combineReducers, createStore } from "redux";

export default function caseLaw() {
  const store = createStore(
    combineReducers({
      cases: casesReducer,
    })
  );

  return store;
}
