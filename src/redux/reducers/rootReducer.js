import {CLEAR_STORE, GET_USERS, SAVE_USER} from "../actions";

export const rootRouter = (state = {users: []}, action) => {
    switch (action.type) {
        case GET_USERS:
            return{...state, users: [...action.payload]};
        case CLEAR_STORE:
            return {...state, users: []};
        case SAVE_USER:
            return {...state, users: [...state.users, action.payload]};
        default:
            return state;
    }
};