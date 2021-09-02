import './App.css';
import {useEffect} from "react";
import {moviesService} from "./services";
import {useDispatch, useSelector} from "react-redux";


function App() {
  const  state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    moviesService.getMovies().then(value => dispatch({type: 'GET_MOVIE', payload: value}))
    console.log(state)
  },[dispatch,state])

  return (
    <div>
      {
        // state.map((value) => <div>{value.result}</div>)
      }
    </div>
  );
}

export default App;
