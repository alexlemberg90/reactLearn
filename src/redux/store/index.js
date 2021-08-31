import {createStore} from "redux";
import {rootRouter} from "../reducers/rootReducer";

export const store = createStore(rootRouter);