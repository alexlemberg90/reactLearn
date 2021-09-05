import { GET_GENRES} from "../actions";

const genresReducer = (state = {genres:[]}, action) => {
    switch (action.type) {
        case GET_GENRES:
            return {...state, genres: [...action.payload.genres]};
        default:
            return state;
    }
}

export {genresReducer}