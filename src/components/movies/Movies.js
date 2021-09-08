import {MainStars} from "../additionalСomponent";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";


export default function Movies({value: movies, onFilmClick}) {

  const {original_title, overview, release_date, vote_average, vote_count, poster_path, movieGenresList, id} = movies;

  return (
      <div className={'movies'}>
              <Card>
                  <CardImg src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${original_title} poster`}/>
                  <CardBody>
                      <CardTitle tag="h5">{original_title}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">Genres: {movieGenresList.map(({name, id}) => <Button outline color="success" key={id}>{name}</Button>)}</CardSubtitle>
                      <CardText>{overview}</CardText>
                      <b>Release date:{release_date}</b>
                      <div>Rating:{vote_average} <MainStars key={id} vote={vote_average}/> (total vote: {vote_count})</div>
                      <Button onClick={() => onFilmClick(movies)}>Movie Details</Button>
                  </CardBody>
              </Card>
       </div>
  );
}