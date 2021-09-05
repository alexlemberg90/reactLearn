import {GET_GENRES, GET_MOVIE} from "./actionTypes";


const getMovie = (value) => {
  return {type: GET_MOVIE, payload: value}
};
const getGenres = (value) => {
  return {type:GET_GENRES, payload: value}
}

export {getMovie, getGenres}