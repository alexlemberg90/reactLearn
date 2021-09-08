import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genresService, moviesService} from "../../services";
import {getGenres, getMovie} from "../../redux/actions";
import Movies from "../movies/Movies";

export default function Main() {
  const history = useHistory();
  const {movies} = useSelector(state => {
    const {movieReducer} = state;
    return movieReducer
  });
  const {genres} = useSelector(state => {
    const { genresReducer} = state;
    return genresReducer
  });

  const dispatch = useDispatch();

  const mergedGenresMovies = movies.map((movie) => {
    const {genre_ids} = movie;
    const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId))

    return {
      ...movie,
      movieGenresList
    }
  });

  useEffect(() => {
    genresService.getGenres().then(value => dispatch(getGenres(value)));
    moviesService.getMovies().then(value => dispatch(getMovie(value)));
  },[dispatch]);

  const onFilmClick = (film) => {
    history.push(`/movie/${film.id}`)
  }

  return (
      <div className={'mainMovies'}>
        {
          mergedGenresMovies.map((value) => <Movies onFilmClick={onFilmClick} key={value.id} value={value}/>)
        }
      </div>
  );
}