import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {moviesService} from "../../services";
import {Button} from "reactstrap";

export default function Movie() {

  const [filmDetails, setFilmDetails] = useState(null);
  const {id} = useParams();
  const history = useHistory();

  useEffect(() => {
    moviesService.getMovieDetails(id).then(value => setFilmDetails(value) )
  },[filmDetails, id]);
    const onGenreFilmClick = (id) => {
        history.push(`/genresMovie/${id}`)
    };

  return (
      ( filmDetails != null && <div className={'movie'}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${filmDetails.poster_path}`} alt={`${filmDetails.original_title} poster`}/>
        </div>
        <div className={"textMovie"}>
          <h2>{filmDetails.original_title}</h2>
          <h3>Genres: {filmDetails.genres.map(({name, id}) => <Button outline color="success" key={id} onClick={() => onGenreFilmClick(id)}>{name}</Button>)} </h3>
          <span>Rating:  <b>{filmDetails.vote_average}</b>(total vote: {filmDetails.vote_count})</span>
          <p>{filmDetails.overview}</p>
          <span>Release date:{filmDetails.release_date}</span>
        </div>
      </div>)

  )
}