import React, {useEffect} from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {genresService, moviesService} from "../../../services";
import {getGenres, getMovie} from "../../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import GenresMovies from "../../genresMovies/GenresMovies";

export default function DropMenu () {

    const {genres} = useSelector(state => {
        const { genresReducer} = state;
        return genresReducer
    });
        const {movies} = useSelector(state => {
        const {movieReducer} = state;
        return movieReducer
    });

    const dispatch = useDispatch();

    useEffect(() => {
        genresService.getGenres().then(value => dispatch(getGenres(value)));
        moviesService.getMovies().then(value => dispatch(getMovie(value)));
    },[])

//     const genresMovie = (id) => {
//             const {genre_ids} = movies;
//                if (genre_ids === id) {
//                    console.log(movies)
//                 }
//                return movies
// };

    return (
        <UncontrolledDropdown className={'dropMenu'}>
            <DropdownToggle caret color="danger">
                Genres
            </DropdownToggle>
            <DropdownMenu>
                {genres.map((value) => <DropdownItem key={value.id} onClick={() => {
                   function genresMovie() {
                       movies.map((movie) => {
                               const {genre_ids} = movie;
                               genre_ids.map((genre) => {
                                   if (value.id === genre) {
                                       return <GenresMovies key={movie.id} value={movie}/>
                                   }
                               })
                           }
                       )
                   }
                   genresMovie()

                }}>{value.name}</DropdownItem>)}
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}