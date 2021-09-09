import './App.css';
import {Route, Switch, useHistory} from "react-router-dom";
import {Baselayout} from "./components";
import Main from "./components/main/Main";
import Movie from "./components/movies/Movie";
import GenresMovies from "./components/genresMovies/GenresMovies";


function App() {
  const history = useHistory()
  return (
      <Baselayout>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/movies/:id" exact>
            <Movie/>
          </Route>
            <Route path="/genresMovie/:id" exact>
                <GenresMovies/>
            </Route>
          <Route>
            <h1>PAGE NOT FOUND <button onClick={()=>{
              history.push('/')}
            }>home page</button></h1>
          </Route>


        </Switch>
      </Baselayout>
  );
}

export default App;
