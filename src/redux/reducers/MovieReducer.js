import {GET_MOVIE} from "../actions";

const movieReducer = (state = {movies:[]}, action) => {
    switch (action.type) {
        case GET_MOVIE:
            return {...state, movies: [...action.payload.results]};
        default:
            return state;
    }
}

export {movieReducer}