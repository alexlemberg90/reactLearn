import {combineReducers} from "redux";
import {movieReducer} from "./MovieReducer";
import {genresReducer} from "./GenresReducer";

const rootReducer = combineReducers({movieReducer, genresReducer})

export {rootReducer};